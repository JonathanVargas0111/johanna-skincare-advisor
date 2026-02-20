---
name: grammar-check
description: Systematic grammar and spelling audit for all site pages. Uses sitemap to check every page one by one. Finds typos, grammar errors, awkward phrasing, and inconsistencies.
allowed-tools: Read, Grep, Glob, WebSearch
user-invocable: true
---

# Grammar Check Skill

Systematic grammar and spelling audit using the sitemap to review all pages methodically.

## Usage

```
/grammar-check                    # Check all pages from sitemap
/grammar-check /modules/mcp-server  # Check specific page only
/grammar-check --quick            # Check only high-priority pages
```

## Instructions

When the user runs `/grammar-check`, perform the following:

### 1. Read the sitemap to get all pages

```
src/app/sitemap.js
```

Extract all page URLs. The pages to check are:
- `/` (homepage)
- `/modules`
- `/modules/mcp-server`
- `/modules/mx-metrics`
- `/blog`
- `/docs`
- `/docs/mcp-server`
- `/docs/mcp-server/tools`
- `/docs/mx-metrics`
- `/about`
- `/contact`
- `/changelog`
- `/legal/terms`
- `/legal/privacy`

### 2. For each page, read the source file

Map URL to file path:
- `/` → `src/app/page.js`
- `/modules` → `src/app/modules/page.js`
- `/modules/mcp-server` → `src/app/modules/mcp-server/page.js`
- `/about` → `src/app/about/page.js`
- etc.

### 3. Also check shared components

```
src/components/organisms/Navigation.js
src/components/organisms/Footer.js
src/components/organisms/FAQ.js
src/components/organisms/Hero.js
src/components/organisms/Features.js
src/components/organisms/FeaturedModules.js
src/components/organisms/Stats.js
src/components/organisms/Testimonials.js
```

### 4. Apply the Grammar Audit Prompt

For each file, analyze ALL user-facing text (strings in JSX, metadata, descriptions, FAQs, features, etc.) using this systematic approach:

---

## Grammar Audit Prompt

**Role**: You are a professional copyeditor and proofreader specializing in B2B SaaS content. Your job is to find errors, not rewrite content.

**Standards**:
- American English spelling
- Chicago Manual of Style for punctuation
- Technical accuracy for software terminology

**Check for these specific issues**:

### A. Spelling Errors
- [ ] Typos (teh → the, recieve → receive)
- [ ] British vs American spelling inconsistencies (colour vs color)
- [ ] Technical terms spelled correctly (WHMCS, MCP, API, JSON)

### B. Grammar Errors
- [ ] Subject-verb agreement ("the team are" → "the team is")
- [ ] Verb tense consistency within paragraphs
- [ ] Article usage (a/an/the) - especially common for non-native speakers
- [ ] Pronoun-antecedent agreement
- [ ] Run-on sentences and comma splices
- [ ] Dangling modifiers

### C. Punctuation Errors
- [ ] "Cannot" (one word) not "Can not" (two words)
- [ ] Consistent quote style (" vs ')
- [ ] **NO em-dashes (—)** - Replace with period or comma (see styling.md)
- [ ] **NO double hyphens (--)** - Replace with period or comma
- [ ] Serial comma consistency (Oxford comma)
- [ ] Apostrophes in contractions and possessives

### D. Word Choice Issues
- [ ] "it's" vs "its"
- [ ] "your" vs "you're"
- [ ] "their" vs "there" vs "they're"
- [ ] "effect" vs "affect"
- [ ] "then" vs "than"
- [ ] Redundant phrases ("free gift", "past history")

### E. Sentence Structure
- [ ] Incomplete sentences (fragments)
- [ ] Awkward phrasing that affects readability
- [ ] Unnecessarily complex sentences
- [ ] Passive voice overuse (flag but don't auto-fix)

### F. Consistency Issues
- [ ] Product names match SSOT (MCP Server, MX Metrics)
- [ ] Price format consistent ($XX/month, $XX/mo)
- [ ] Capitalization consistency (WHMCS not Whmcs)
- [ ] Terminology consistency throughout site

---

### 5. Output Format

For each page, create a report:

```
Grammar Check: /page-route
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Errors Found: X

### Critical (Must Fix)
| Line | Issue | Current | Suggested |
|------|-------|---------|-----------|
| 244 | Spelling | "Can not" | "Cannot" |
| 156 | Grammar | "the data are" | "the data is" |

### Moderate (Should Fix)
| Line | Issue | Current | Suggested |
|------|-------|---------|-----------|
| 89 | Awkward | "in order to" | "to" |

### Minor (Consider)
| Line | Issue | Current | Suggested |
|------|-------|---------|-----------|
| 201 | Style | passive voice | consider active |

## Summary
- Critical: X errors
- Moderate: X errors
- Minor: X suggestions

---
```

### 6. Final Summary Report

After checking all pages:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GRAMMAR AUDIT SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Pages Checked: XX
Total Errors: XX

## By Severity
- Critical: X (must fix before publish)
- Moderate: X (should fix)
- Minor: X (stylistic suggestions)

## By Page (sorted by error count)
1. /modules/mcp-server - X errors
2. /docs - X errors
3. /about - X errors
...

## Most Common Issues
1. "Can not" → "Cannot" (X occurrences)
2. Missing articles (X occurrences)
3. Inconsistent capitalization (X occurrences)

## Quick Fixes
[List of sed-style replacements that can be done safely]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Common Errors in This Codebase

Based on previous audits, watch for:

1. **"Can not" vs "Cannot"** - Should be one word
2. **"you are" in informal copy** - Consider "you're" for conversational tone
3. **Missing Oxford comma** - Be consistent throughout
4. **Em-dashes (—) are FORBIDDEN** - Replace with period (.) or comma (,)
   - ❌ `"data—no external APIs"`
   - ✅ `"data. No external APIs."`
5. **Double hyphens (--)** - Replace with period or comma

## Context Rules

### Do NOT flag as errors:
- Code examples (backticks content)
- Variable names and identifiers
- URLs and paths
- Intentional brand spellings
- Technical jargon that's correct (MRR, ARR, LTV, WHMCS)

### Pay special attention to:
- Headlines (H1, H2, H3)
- CTAs and button text
- FAQ questions and answers
- Feature descriptions
- Error messages
- Meta descriptions

---

## Workflow Recommendation

1. Run `/grammar-check` to get full report
2. Fix all Critical errors immediately
3. Review and fix Moderate errors
4. Consider Minor suggestions for polish
5. Re-run to verify fixes

---

## Sources

This skill's methodology is based on professional proofreading best practices:
- Chicago Manual of Style for punctuation standards
- [LLM Prompts for Proofreading](https://github.com/agkozak/llm-prompts)
- [ChatGPT Proofreading Prompts](https://www.godofprompt.ai/blog/chatgpt-prompts-to-proofread-your-content)
