---
name: icp-check
description: ICP Analysis - validates if pages attract ideal customers or red flags
allowed-tools: Read, Grep, Glob
user-invocable: true
---

# ICP Check Skill

Validates if a page attracts the Ideal Customer Profile (ICP) or red flag customers.

## Usage

```
/icp-check /modules/mx-metrics      # Check product page
/icp-check /blog/calculate-customer-ltv-whmcs  # Check blog post
/icp-check                          # Check all product pages
```

## Instructions

When the user runs `/icp-check`, perform the following:

### 1. Read ICP definitions FIRST (ALWAYS)

```
docs/strategy/buyer-persona.md      # ICP definitions, red flags
docs/strategy/search-intent.md      # What ICP searches for
```

### 2. Identify pages to audit

**If specific page provided:**
- Product pages: `src/app/modules/{slug}/page.js`
- Blog posts: `content/blog/{slug}.md`
- Docs: `src/app/docs/{slug}/page.js`

**If no page specified:**
Audit all product pages:
```
src/app/modules/mx-metrics/page.js
src/app/modules/mcp-server/page.js
```

### 3. Detect product context

| URL Pattern | Product | ICP Size |
|-------------|---------|----------|
| `/modules/mx-metrics` | MX Metrics | 50+ services |
| `/modules/mcp-server` | MCP Server | 100+ clients, team 2+ |
| `/blog/*` | Detect from content | Per product mentioned |

### 4. Check for ICP Qualifiers

**These ATTRACT the right customers:**

| Qualifier | MX Metrics | MCP Server |
|-----------|------------|------------|
| Size qualifier | "50+ services", "50+ active" | "100+ clients", "team of 2+" |
| Billing model | "monthly", "subscription", "/mo" | Same |
| Disqualifying FAQ | "I only have 20 clients" | "It's just me" |
| ROI context | "pays for itself", "one client" | "saves hours", "time saved" |
| Business outcome language | "profit", "revenue", "decisions" | "faster", "automate", "no clicking" |

**Search for these patterns:**

```bash
# Size qualifiers
grep -i "50+" page.js
grep -i "100+ clients" page.js

# Billing model (positive)
grep -i "monthly\|subscription\|/mo\|per month" page.js

# ROI context
grep -i "pays for itself\|worth it\|saves\|retained client" page.js
```

### 5. Check for Red Flag Attractors

**These ATTRACT wrong customers (bad):**

| Red Flag | Why Bad | Search Pattern |
|----------|---------|----------------|
| "lifetime" | Attracts price shoppers | `lifetime\|one-time\|one time` |
| "source code included" | Attracts DIYers | `source code` |
| "free" prominent | Attracts tire-kickers | `free` (check context) |
| SQL queries | Attracts developers who DIY | `SELECT\|FROM\|WHERE` |
| PHP code blocks | Same | `<?php\|function\s+\w+\(` |
| No price visible | Attracts price shoppers who spam | Check if price is shown |
| "trial" prominent | Attracts non-buyers | `trial\|try free` |

**Search for these patterns:**

```bash
# Price shoppers attractors
grep -i "lifetime\|one-time\|pay once\|forever" page.js

# Developer/DIY attractors
grep -i "source code included\|full source" page.js

# SQL/code that enables DIY
grep -E "SELECT|INSERT|UPDATE|DELETE" page.js
grep -E "function\s+\w+\(" page.js
```

### 6. Analyze Language Ratio

**Count mentions of:**

| Category | Good Examples | Bad Examples |
|----------|---------------|--------------|
| Business outcomes | profit, revenue, grow, clients, save time, decisions | - |
| Technical features | widgets, dashboard, API, PHP, database, queries | - |

**Target ratio:** Business outcomes >= 2x Technical features

**Sample business outcome words:**
```
profit, revenue, MRR, ARR, growth, clients, customers,
money, income, valuable, decisions, priority, VIP,
save time, hours, faster, automate, efficient
```

**Sample technical feature words:**
```
widget, dashboard, API, PHP, MySQL, database, query,
module, addon, install, configure, server, code
```

### 7. Calculate ICP Score

| Category | Weight | Scoring |
|----------|--------|---------|
| Size qualifier present | 25 | Yes=25, No=0 |
| Billing model clear | 20 | "monthly" visible=20, Hidden=10, Wrong terms=0 |
| Disqualifying FAQ | 20 | Has honest FAQ=20, None=0 |
| ROI context | 15 | Near price=15, Elsewhere=10, None=0 |
| No red flags | 20 | 0 flags=20, 1 flag=10, 2+ flags=0 |

**Score interpretation:**
- 90-100: Excellent - Attracts ICP, filters red flags
- 70-89: Good - Minor improvements needed
- 50-69: Fair - Missing key qualifiers
- <50: Poor - Likely attracting wrong audience

### 8. Output Format

```
ICP Analysis: /modules/mx-metrics
Product: MX Metrics
Target ICP: Hosting businesses with 50+ active services

## ICP Qualifiers (X/4)

Found:
- Size qualifier: "50+ active services" (line 229)
- Billing model: "billed monthly" (line 236)
- Disqualifying FAQ: "I only have 20 clients" (line 108)

Missing:
- ROI context near price
  Suggestion: Add "One retained client pays for a year"

## Red Flag Attractors (X found)

Found:
- "Full source code included" (line 137)
  Why bad: Attracts developers who want to copy/DIY
  Suggestion: Remove or move to bottom of page

Good - Not found:
- No "lifetime" or "one-time" language
- No SQL queries or code snippets
- Price is visible (not hidden)

## Language Analysis

Word Analysis:
- Business outcomes: 12 mentions
- Technical features: 5 mentions
- Ratio: 2.4:1 (target: >2:1)

Top business words: profit (4), revenue (3), clients (3), decisions (2)
Top technical words: widgets (2), dashboard (2), module (1)

## ICP Score: 75/100

| Category | Score |
|----------|-------|
| Size qualifier | 25/25 |
| Billing model | 20/20 |
| Disqualifying FAQ | 20/20 |
| ROI context | 0/15 |
| No red flags | 10/20 |

## Priority Fixes

1. [HIGH] Add ROI context near price: "One retained client pays for a year"
2. [MEDIUM] Remove "Full source code included" from pricing features
3. [LOW] Add more business outcome language in features section

## Customers This Page Attracts

Will attract:
- Hosting owners with 50+ services looking for profit visibility
- Business-minded operators who value their time
- People who understand SaaS pricing

May still attract (fix the red flags):
- Developers curious about source code
- Price shoppers comparing options
```

## Blog Post Specific Checks

For blog posts, also check:

| Check | What to Look For |
|-------|------------------|
| Problem framing | Does it describe ICP's problem? |
| DIY instructions | Does it give enough to DIY without buying? |
| Product mention | Natural mention, not forced? |
| CTA | Clear but not pushy? |

**Warning signs in blog posts:**
- Complete code solutions (enables DIY)
- No product mention (missed opportunity)
- Generic advice (doesn't target ICP)

## Reference Documents

| Document | Use |
|----------|-----|
| `docs/strategy/buyer-persona.md` | ICP definitions, red flags |
| `docs/strategy/search-intent.md` | How ICP searches |
| `src/lib/products.js` | Product names, prices |

## Quick Reference: What ICP Searches For

**MX Metrics ICP searches:**
- "how to calculate MRR in WHMCS"
- "WHMCS profit per client"
- "track hosting costs"

**MCP Server ICP searches:**
- "automate WHMCS without coding"
- "WHMCS AI integration"
- "search clients faster WHMCS"

If page content doesn't match what ICP searches for, flag as concern.
