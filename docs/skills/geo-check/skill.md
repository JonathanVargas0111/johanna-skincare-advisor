---
name: geo-check
description: GEO/LLM Optimization Checker - validates llms.txt files and AI discoverability
allowed-tools: Read, Grep, Glob, Bash
user-invocable: true
---

# GEO Check Skill

Validates Generative Engine Optimization (GEO) files for AI/LLM discoverability.

## Usage

```
/geo-check              # Full GEO validation
/geo-check --urls       # Only check URL validity
```

## Instructions

When the user runs `/geo-check`, perform the following:

### 1. Read project context FIRST (ALWAYS)

```
src/lib/products.js              # SSOT - prices to verify in llms.txt
```

### 2. Check required files exist

Use Glob to verify these files exist:
- `public/llms.txt` (required)
- `public/llms-full.txt` (optional but recommended)
- `src/app/robots.js` (for AI crawler rules)

### 3. Validate llms.txt structure

Read `public/llms.txt` and check:

| Rule | Check |
|------|-------|
| Header | Has `# Company Name` as first line |
| Description | Has `>` blockquote summary (1-2 sentences) |
| Last Updated | Has `**Last Updated**:` with recent date |
| Link to full | References llms-full.txt if it exists |
| Sections | Has ## Products, ## Documentation, ## Blog |
| URLs | All URLs use absolute paths with domain |
| Prices | Prices match products.js SSOT |

### 4. Validate llms-full.txt (if exists)

Read `public/llms-full.txt` and check:
- More detailed than llms.txt
- Has technical details (requirements, installation)
- Has code examples where relevant
- All URLs are valid

### 5. Cross-reference with PRODUCTS SSOT

Read `src/lib/products.js` and verify llms.txt prices match:

```javascript
// Expected values from SSOT
MCP Server: $29/month
MX Metrics: $19/month
```

**Check llms.txt and llms-full.txt for:**
- Prices match SSOT exactly
- No "one-time", "lifetime", "annual" language
- Billing described as "monthly" or "/month" or "/mo"

```bash
# Search for incorrect pricing language
grep -i "one-time\|lifetime\|annual\|yearly" public/llms*.txt
```

### 6. Cross-reference with sitemap

Compare URLs in llms.txt with sitemap:
- All major pages should be in llms.txt
- Product pages must be included
- Documentation pages should be included
- Blog posts should be listed

### 7. Cross-reference with blog posts

Count blog posts in `content/blog/` and verify llms.txt lists all:

```bash
ls content/blog/*.md | wc -l
```

Compare with blog entries in llms.txt. Flag missing posts.

### 8. Check robots.txt for AI crawlers

Read `src/app/robots.js` and verify these AI crawlers are allowed:
- GPTBot
- ChatGPT-User
- Google-Extended
- Anthropic-AI
- ClaudeBot
- Claude-Web
- PerplexityBot

### 9. Output format

```
┌─────────────────────────────────────────────────────────────┐
│  GEO/LLM Optimization Check                                 │
│  Validating AI discoverability                              │
└─────────────────────────────────────────────────────────────┘

Files
─────
✓ public/llms.txt (2.1 KB)
✓ public/llms-full.txt (8.4 KB)
✓ src/app/robots.js

llms.txt Structure
──────────────────
✓ Header present
✓ Description blockquote
✓ Last Updated: January 2026
✓ Products section (2 products)
✓ Documentation section (4 pages)
✓ Blog section (7 posts)

URL Coverage
────────────
✓ All product pages included
✓ All doc pages included
✓ All blog posts included
⚠ Missing: /changelog (optional)

AI Crawlers (robots.txt)
────────────────────────
✓ GPTBot allowed
✓ ChatGPT-User allowed
✓ ClaudeBot allowed
✓ PerplexityBot allowed

Price Consistency
─────────────────
✓ MCP Server: $29/month (matches SSOT)
✓ MX Metrics: $19/month (matches SSOT)

═══════════════════════════════════════════════════════════════
SUMMARY
═══════════════════════════════════════════════════════════════
✓ Passed: 14 checks
⚠ Warnings: 1
✗ Errors: 0

SCORE: 98/100 ✅ Excellent GEO optimization
```

### 10. Scoring

```
Score = 100 - (errors × 10) - (warnings × 2)

90-100: ✅ Excellent
70-89:  ⚠️ Good (minor issues)
50-69:  🟡 Needs work
<50:    ❌ Critical issues
```

### 11. Error vs Warning

**Errors (must fix):**
- llms.txt missing
- No AI crawlers allowed in robots.txt
- Prices don't match SSOT
- Product pages not in llms.txt

**Warnings (recommended):**
- llms-full.txt missing
- Last Updated older than 30 days
- Optional pages missing (changelog, about)
- Missing code examples in llms-full.txt

### 12. Blog Content GEO Quality Check

When running `/geo-check`, also audit blog posts in `content/blog/` for GEO compliance:

Read all `.md` files in `content/blog/` and check each post against:

| Rule | Check | Severity |
|------|-------|----------|
| Named author | Author is NOT "MX Modules Team" (use real name or "Sebastian Stark") | Error |
| FAQ section | Has `## Frequently Asked Questions` with 4+ Q&As | Error |
| Comparison table | Has at least 1 markdown table with data | Warning |
| Minimum length | Post is 200+ lines (not thin content) | Warning |
| Sourced stats | Statistics say "typical", "based on", or cite a source (no unsourced claims) | Warning |
| No em-dashes | Zero em-dashes (--) or (---) in content | Error |
| No marketing fluff | Zero instances of: revolutionary, game-changing, cutting-edge, seamless, effortless | Error |
| First paragraph | Opens with a direct answer to the main question (not a preamble) | Warning |

**Output blog audit as:**

```
Blog Content GEO Check
──────────────────────
Posts: 15 total

✓ 10 posts pass all checks
⚠ 3 posts have warnings
✗ 2 posts have errors

Issues:
- post-slug.md: Missing FAQ section (Error)
- post-slug.md: No comparison table (Warning)
- post-slug.md: Author is "MX Modules Team" (Error)
```

## Reference

GEO best practices:
- llms.txt specification: https://llmstxt.org/
- Google AI Overviews optimization
- Perplexity/ChatGPT search visibility
- Research: `research/geo-seo-analysis.md` (12-strategy GEO framework, local only)
