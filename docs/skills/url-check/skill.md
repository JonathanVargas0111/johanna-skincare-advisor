---
name: url-check
description: URL Slug Optimization Checker - validates URLs against SEO best practices
allowed-tools: Read, Grep, Glob, Bash
user-invocable: true
---

# URL Check Skill

Validates all site URLs against SEO slug optimization best practices.

## Usage

```
/url-check              # Check all URLs
/url-check /blog        # Check specific section only
/url-check --verbose    # Show all rules checked per URL
```

## Instructions

When the user runs `/url-check`, perform the following:

### 1. Collect all URLs

Use Glob to find all page.js files:

```
src/app/**/page.js
```

Then extract URL paths by removing `src/app` prefix and `/page.js` suffix.

**For blog posts** (if using Velite or MDX):
- Check if `.velite/posts.json` exists → extract slugs
- Otherwise check `src/content/blog/*.mdx` → extract from filenames

### 2. Validation Rules

| # | Rule | Error/Warning | Check |
|---|------|---------------|-------|
| 1 | **Length** | ⚠ Warning | 1-5 words, max 60 chars |
| 2 | **Hyphens only** | ❌ Error | No underscores `_` |
| 3 | **Lowercase** | ❌ Error | No uppercase letters |
| 4 | **No years** | ❌ Error | No 2020-2030 in URL |
| 5 | **No special chars** | ❌ Error | No `?`, `&`, `%`, `=`, `#`, spaces |
| 6 | **No trailing slash** | ⚠ Warning | URL shouldn't end with `/` |
| 7 | **No double hyphens** | ⚠ Warning | No `--` in URL |
| 8 | **No start with number** | ⚠ Warning | Slug shouldn't start with digit |
| 9 | **Stop words** | ⚠ Warning | Flag 2+ stop words: the, a, an, and, or, of, to, in, for, on, with, how |
| 10 | **Keyword stuffing** | ⚠ Warning | Same word appears 2+ times |
| 11 | **Logical hierarchy** | ℹ Info | Parent path should exist (e.g., `/docs/x` needs `/docs`) |

### 3. Output Format

```
┌─────────────────────────────────────────────────────────────┐
│  URL Slug Optimization Check                                │
│  Based on: docs/strategy/url-optimization.md                │
└─────────────────────────────────────────────────────────────┘

Static Pages (14)
─────────────────
✓ /                           (homepage)
✓ /about                      (1 word, 5 chars)
✓ /modules                    (1 word, 7 chars)
✓ /modules/mcp-server         (2 words, 10 chars)
✗ /some-bad-url_here          UNDERSCORE
⚠ /very-long-url-with-too-many-words-here   TOO_LONG (7 words)

Blog Posts (5)
──────────────
✓ /blog/calculate-customer-ltv-whmcs    (4 words, 28 chars)
⚠ /blog/10-whmcs-tasks-automate-ai      STARTS_WITH_NUMBER

═══════════════════════════════════════════════════════════════
SUMMARY
═══════════════════════════════════════════════════════════════
Total URLs:    19
✓ Passed:      17
⚠ Warnings:    1
✗ Errors:      1

ISSUES FOUND
─────────────────
❌ /some-bad-url_here
   Rule: No underscores
   Fix:  Rename to /some-bad-url-here

⚠️ /blog/10-whmcs-tasks-automate-ai
   Rule: Avoid starting with numbers
   Fix:  Rename to /blog/top-whmcs-tasks-automate-ai

SCORE: 89/100 ⚠️ Minor improvements needed
```

### 4. Scoring System

```
Score = 100 - (errors × 10) - (warnings × 2)

90-100: ✅ Excellent
70-89:  ⚠️ Good (minor issues)
50-69:  🟡 Needs work
<50:    ❌ Critical issues
```

### 5. Error vs Warning Classification

**Errors (must fix before deploy):**
- Uses underscores `_` instead of hyphens
- Contains special characters (`?`, `&`, `%`, `=`, `#`)
- Mixed case (uppercase letters)
- Contains year in URL (2020-2030)
- Exceeds 60 characters

**Warnings (recommended fixes):**
- Starts with a number
- More than 5 words
- Contains 2+ stop words
- Double hyphens `--`
- Trailing slash
- Keyword repetition

**Info (optional):**
- Missing parent path
- Very short slug (1 char)

### 6. Section Filter

If user provides a path like `/url-check /blog`:
- Only check URLs starting with that path
- Still show summary for filtered results

### 7. After Check

If errors found, ask user:
> "Found X errors. Want me to suggest renames for these URLs?"

If all pass:
> "All URLs optimized! ✅"

## Reference

Full guidelines: `docs/strategy/url-optimization.md`

Sources:
- Google URL Structure Best Practices
- Yoast Slug Optimization Guide
- Neil Patel URL Slugs Guide
