---
name: gsc-insights
description: Strategic GSC data interpretation. Striking distance keywords, cannibalization, CTR benchmarks, content gaps, intent classification, and ROI-prioritized action plans.
allowed-tools: Read, Grep, Glob, Bash, mcp__gsc__list_properties, mcp__gsc__get_search_analytics, mcp__gsc__get_advanced_search_analytics, mcp__gsc__get_performance_overview, mcp__gsc__compare_search_periods, mcp__gsc__get_search_by_page_query, mcp__gsc__inspect_url_enhanced, mcp__gsc__batch_url_inspection, mcp__gsc__check_indexing_issues, mcp__gsc__get_sitemaps, mcp__gsc__list_sitemaps_enhanced, mcp__gsc__get_sitemap_details, mcp__gsc__manage_sitemaps, mcp__gsc__get_site_details
user-invocable: true
---

# GSC Insights Skill

Strategic interpretation of Google Search Console data. Goes beyond raw metrics to find actionable opportunities: striking distance keywords, cannibalization, CTR underperformance, content gaps, and search intent mapping.

**Difference from `/gsc-check`:** gsc-check pulls raw data. gsc-insights interprets it.

## Usage

```
/gsc-insights                        # Full strategic analysis (all modules below)
/gsc-insights striking-distance      # Keywords at position 4-20 with high impressions
/gsc-insights cannibalization        # Queries where 2+ pages compete
/gsc-insights ctr-audit              # CTR vs position benchmarks
/gsc-insights content-gaps           # High impressions without dedicated pages
/gsc-insights intent                 # Classify top queries by search intent
/gsc-insights trends                 # Rising and declining queries (28d vs 28d)
/gsc-insights page /modules/mcp-server  # Deep analysis of one page
```

## Instructions

**Property URL:** `https://mxwhmcsmodules.com/`

IMPORTANT: Always use `https://mxwhmcsmodules.com/` as the `site_url` parameter. Do NOT use `sc-domain:mxwhmcsmodules.com` (returns 403).

### 0. Read project context FIRST (ALWAYS)

```
src/lib/products.js              # SSOT - prices, product slugs
```

Know the products, their URLs, and their target keywords before analyzing.

### 1. Determine the analysis type

| Argument | Action |
|----------|--------|
| (none) | Run full analysis (all 6 modules) |
| `striking-distance` | Module A only |
| `cannibalization` | Module B only |
| `ctr-audit` | Module C only |
| `content-gaps` | Module D only |
| `intent` | Module E only |
| `trends` | Module F only |
| `page /path` | Deep page analysis (modules A+C+E combined for one page) |

### 2. Data Collection Phase

For full analysis, collect all data upfront before interpreting. Run these queries:

#### 2a. Top queries with page dimension (needed for cannibalization)
```
Tool: mcp__gsc__get_advanced_search_analytics
Args:
  site_url: "https://mxwhmcsmodules.com/"
  dimensions: "query,page"
  sort_by: "impressions"
  sort_direction: "descending"
  row_limit: 200
```

#### 2b. Top queries by impressions (needed for striking distance + CTR)
```
Tool: mcp__gsc__get_advanced_search_analytics
Args:
  site_url: "https://mxwhmcsmodules.com/"
  dimensions: "query"
  sort_by: "impressions"
  sort_direction: "descending"
  row_limit: 100
```

#### 2c. Top pages by impressions (needed for content gaps)
```
Tool: mcp__gsc__get_advanced_search_analytics
Args:
  site_url: "https://mxwhmcsmodules.com/"
  dimensions: "page"
  sort_by: "impressions"
  sort_direction: "descending"
  row_limit: 50
```

#### 2d. Period comparison (needed for trends)
```
Tool: mcp__gsc__compare_search_periods
Args:
  site_url: "https://mxwhmcsmodules.com/"
  period1_start: (today - 28 days, YYYY-MM-DD)
  period1_end: (today - 3 days, YYYY-MM-DD)
  period2_start: (today - 56 days, YYYY-MM-DD)
  period2_end: (today - 31 days, YYYY-MM-DD)
  dimensions: "query"
  limit: 50
```

#### 2e. Device breakdown (supplemental context)
```
Tool: mcp__gsc__get_advanced_search_analytics
Args:
  site_url: "https://mxwhmcsmodules.com/"
  dimensions: "device"
  sort_by: "clicks"
  sort_direction: "descending"
  row_limit: 10
```

---

## Module A: Striking Distance Keywords

**Goal:** Find keywords close to page 1 (or top 3) that can be pushed up with minimal effort.

### Thresholds

| Tier | Position Range | Label | Action |
|------|---------------|-------|--------|
| Quick Win | 4-10 | Top of page 1 but not top 3 | Optimize title, add internal links |
| Striking Distance | 11-20 | Page 2 (almost page 1) | Add content, improve relevance, get links |
| Growth Potential | 21-30 | Page 3 (needs work) | Major content update or new dedicated page |

### Filtering Rules

From the query data (2b), filter:
1. Position between 4 and 30
2. Impressions above the median of all queries (adapt to site size)
3. Sort by impressions descending (highest opportunity first)

### Output Table

```
## Striking Distance Keywords
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Quick Wins (Position 4-10)
| Query | Position | Impressions | Clicks | CTR | Action |
|-------|----------|-------------|--------|-----|--------|
| "whmcs mcp" | 6.2 | 340 | 12 | 3.5% | Optimize title tag, add FAQ |

### Striking Distance (Position 11-20)
| Query | Position | Impressions | Clicks | CTR | Action |
|-------|----------|-------------|--------|-----|--------|

### Growth Potential (Position 21-30)
| Query | Position | Impressions | Clicks | CTR | Action |
|-------|----------|-------------|--------|-----|--------|
```

For each keyword, suggest a specific action based on:
- If CTR is low for its position: "Rewrite title/meta description"
- If position is close to 10: "Add 1-2 internal links from blog posts"
- If no dedicated page exists: "Create dedicated content"

---

## Module B: Keyword Cannibalization Detection

**Goal:** Find queries where 2+ pages from our site compete against each other.

### Detection Method

From the query+page data (2a):

1. Group rows by query
2. For each query, count unique pages
3. Flag queries with 2+ pages that BOTH have significant impressions

### Severity Levels

| Level | Condition | Action |
|-------|-----------|--------|
| CRITICAL | 2+ pages, each with >30% of total impressions for that query | Consolidate or canonicalize |
| WARNING | 2+ pages, secondary has 10-30% of impressions | Monitor, consider 301 redirect |
| INFO | 2+ pages, secondary has <10% of impressions | Low risk, no action needed |

### Output Table

```
## Keyword Cannibalization
━━━━━━━━━━━━━━━━━━━━━━━━━━

| Severity | Query | Page 1 | Impr 1 | Page 2 | Impr 2 | Split % | Action |
|----------|-------|--------|--------|--------|--------|---------|--------|
| CRITICAL | "whmcs metrics" | /modules/mx-metrics | 200 | /blog/calculate-mrr | 150 | 57/43 | Canonical to product page |
| WARNING | "mcp whmcs" | /modules/mcp-server | 300 | /docs/mcp-server | 60 | 83/17 | Add canonical, monitor |
```

### Cannibalization Resolution Suggestions

| Scenario | Suggestion |
|----------|------------|
| Product page vs blog post | Add canonical to product page. Link blog prominently to product |
| Product page vs docs page | Normal. Docs should link back to product. No action unless positions hurt |
| Blog post vs blog post | Merge posts or differentiate intent clearly |
| Same intent, different pages | 301 redirect weaker page to stronger. Merge unique content first |

---

## Module C: CTR vs Position Benchmarks

**Goal:** Find pages/queries where CTR is below expected for their ranking position.

### CTR Benchmark Table (2026, organic results)

Source: First Page Sage 2026, adjusted conservatively for niche B2B SaaS.

| Position | Expected CTR | Alert Threshold (below this = problem) |
|----------|-------------|----------------------------------------|
| 1 | 39.8% | 20% |
| 2 | 18.7% | 10% |
| 3 | 10.2% | 5% |
| 4 | 7.2% | 3.5% |
| 5 | 5.1% | 2.5% |
| 6 | 4.4% | 2% |
| 7 | 3.0% | 1.5% |
| 8 | 2.1% | 1% |
| 9 | 1.9% | 0.8% |
| 10 | 1.6% | 0.6% |

**Note for niche B2B:** CTR can vary widely because SERPs have fewer commercial results. Use the alert thresholds (roughly 50% of expected) to flag real problems, not noise.

### Analysis Method

From query data (2b):
1. For each query, compare actual CTR vs expected CTR for its average position
2. Calculate `CTR gap = expected CTR - actual CTR`
3. Flag queries where actual CTR < alert threshold
4. Sort by impressions (fix high-impression problems first)

### Output Table

```
## CTR Audit
━━━━━━━━━━━

| Query | Position | Actual CTR | Expected CTR | Gap | Impressions | Diagnosis |
|-------|----------|------------|--------------|-----|-------------|-----------|
| "whmcs analytics" | 3.1 | 2.8% | 10.2% | -7.4% | 450 | Title not compelling |
| "mcp server" | 1.2 | 15% | 39.8% | -24.8% | 120 | SERP features stealing clicks |
```

### Diagnosis Guide

| Pattern | Likely Cause | Fix |
|---------|-------------|-----|
| Position 1-3, CTR very low | AI Overview or Featured Snippet stealing clicks | Add structured data, optimize for snippet |
| Position 1-3, CTR moderately low | Title/description not compelling enough | Rewrite with benefit-driven copy |
| Position 4-10, CTR low | Title blends in with competitors | Add differentiator: numbers, brackets, year |
| Position 11-20, CTR low | Normal for page 2. Focus on moving to page 1 | Content optimization, internal links |

### Title Rewrite Suggestions

For each flagged query, suggest a better title format:
```
Current:  "MX Metrics - WHMCS Analytics Module"
Better:   "MX Metrics: Track MRR, Profit & LTV in WHMCS (2026)"
Why:      Adds specifics (MRR, Profit, LTV), year for freshness, action-oriented
```

---

## Module D: Content Gap Detection

**Goal:** Find search queries with high impressions where we rank but have no dedicated, optimized page.

### Detection Method

From query+page data (2a):
1. Find queries with significant impressions (above site median)
2. Check which page ranks for each query
3. Flag when:
   - A generic page (homepage, /modules listing) ranks for a specific query
   - A blog post ranks for a commercial query (should be a product page)
   - No page is well-optimized for that query topic

### Gap Types

| Type | Signal | Example | Action |
|------|--------|---------|--------|
| Missing Content | High-impression query, only generic page ranks | "whmcs automation" ranks on homepage | Create dedicated blog post or page |
| Wrong Page | Commercial query ranks on informational page | "buy whmcs metrics module" ranks on blog post | Optimize product page for this query |
| Thin Coverage | Query matches product but page lacks relevant content | "whmcs mrr calculation" ranks on MX Metrics but page barely mentions MRR calculation | Add section to existing page |
| Blog Opportunity | Informational query with no blog post | "how to track hosting revenue" | Write a blog post targeting this query |

### Product URL Mapping

Use this to determine if a query has a "natural home":

| Query Contains | Natural Page |
|----------------|-------------|
| mcp, claude, ai, automation, api | /modules/mcp-server |
| metrics, mrr, arr, ltv, revenue, profit, analytics | /modules/mx-metrics |
| proposals, quotes, signatures, deposits | /modules/proposals |
| whmcs modules, hosting modules | /modules (listing) |

### Output Table

```
## Content Gaps
━━━━━━━━━━━━━━

| Priority | Query | Impressions | Currently Ranks | Gap Type | Suggested Action |
|----------|-------|-------------|-----------------|----------|-----------------|
| HIGH | "whmcs revenue tracking" | 280 | /blog/old-post | Wrong Page | Optimize /modules/mx-metrics for this |
| MEDIUM | "automate whmcs tasks" | 150 | / (homepage) | Missing Content | Write blog: "How to Automate WHMCS Tasks" |
```

---

## Module E: Search Intent Classification

**Goal:** Classify top queries by intent to ensure our content matches what users expect.

### Intent Categories

| Intent | Modifiers | User Wants | Our Response |
|--------|-----------|------------|-------------|
| **Informational** | how, what, why, guide, tutorial, can, does, is, explain, difference | Learn something | Blog post, docs, guide |
| **Commercial** | best, top, review, comparison, vs, alternative, features, pros and cons | Evaluate options | Product page, comparison page |
| **Transactional** | buy, purchase, price, pricing, download, install, subscribe, free trial, demo | Take action | Product page with CTA, checkout |
| **Navigational** | [brand], login, dashboard, docs, support, mx modules, mxwhmcs | Find a specific page | Ensure correct page ranks |

### Classification Rules (applied in order)

1. If query contains our brand name ("mx modules", "mx metrics", "mcp server"): **Navigational**
2. If query contains transactional modifiers (buy, price, download, install): **Transactional**
3. If query contains commercial modifiers (best, vs, review, alternative, comparison): **Commercial**
4. If query contains informational modifiers (how, what, why, guide, tutorial): **Informational**
5. Default: **Informational**

### Intent-Content Alignment Check

After classifying, verify the ranking page matches the intent:

| Intent | Expected Page Type | Mismatch = Problem |
|--------|-------------------|-------------------|
| Informational | Blog post, docs | Product page ranking for informational query |
| Commercial | Product page, comparison | Blog post ranking for commercial query |
| Transactional | Product page with price + CTA | Any page without clear purchase path |
| Navigational | Exact page user seeks | Wrong page ranking for brand query |

### Output Table

```
## Search Intent Map
━━━━━━━━━━━━━━━━━━━

### Intent Distribution
| Intent | Count | % of Top Queries |
|--------|-------|-----------------|
| Informational | 25 | 50% |
| Commercial | 12 | 24% |
| Transactional | 8 | 16% |
| Navigational | 5 | 10% |

### Intent Mismatches (fix these)
| Query | Intent | Ranking Page | Expected Page Type | Fix |
|-------|--------|-------------|-------------------|-----|
| "best whmcs analytics module" | Commercial | /blog/mrr-guide | Product page | Optimize /modules/mx-metrics for this query |

### Intent Coverage
| Intent | Queries Covered | Queries Underserved | Gap |
|--------|----------------|--------------------|----- |
| Informational | 20/25 (blog posts) | 5 (no content) | Write 5 blog posts |
| Commercial | 8/12 (product pages) | 4 (no comparison content) | Add comparison sections |
```

---

## Module F: Trend Analysis (Rising and Declining)

**Goal:** Identify queries gaining or losing traction to guide content priorities.

### Analysis Method

From the period comparison data (2d):

1. Compare clicks and impressions between the two periods
2. Calculate percentage change for each query
3. Classify into Rising, Stable, or Declining

### Classification

| Category | Criteria | Action |
|----------|----------|--------|
| Rising | Impressions up >20% OR clicks up >30% | Double down. Expand content, add internal links |
| Stable | Changes within +/-20% | Maintain. Monitor next period |
| Declining | Impressions down >20% OR clicks down >30% | Investigate. Content freshness? Lost position? |
| New | Appears in period 1 but not period 2 | Evaluate. New opportunity or seasonal? |
| Lost | Appears in period 2 but not period 1 | Check if page is still indexed. Content issue? |

### Output Table

```
## Trend Analysis (Last 28 days vs Previous 28 days)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Rising Queries
| Query | Clicks (now) | Clicks (prev) | Change | Impressions Change |
|-------|-------------|---------------|--------|--------------------|
| "whmcs ai" | 45 | 20 | +125% | +80% |

### Declining Queries
| Query | Clicks (now) | Clicks (prev) | Change | Impressions Change |
|-------|-------------|---------------|--------|--------------------|
| "whmcs mrr" | 5 | 15 | -67% | -40% |

### Seasonal/New Queries
| Query | Status | Clicks | Impressions | Suggested Action |
|-------|--------|--------|-------------|-----------------|
```

---

## Page-Specific Deep Analysis

When user runs `/gsc-insights page /path`:

1. Use `mcp__gsc__get_search_by_page_query` to get all queries for that page
2. Run Modules A, C, and E on that page's queries only
3. Add a "Page Health Summary"

### Page Health Summary

```
## Page Analysis: /modules/mx-metrics
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Overview
| Metric | Value |
|--------|-------|
| Total Queries | 45 |
| Total Clicks (28d) | 120 |
| Total Impressions (28d) | 3,400 |
| Average CTR | 3.5% |
| Average Position | 12.3 |

### Query Intent Breakdown
| Intent | Count | Top Query |
|--------|-------|-----------|
| Commercial | 15 | "best whmcs analytics" |
| Informational | 20 | "how to track mrr whmcs" |
| Transactional | 8 | "whmcs metrics module price" |
| Navigational | 2 | "mx metrics" |

### Striking Distance (this page)
[table of queries at position 4-20]

### CTR Problems (this page)
[table of queries below CTR benchmark]

### Recommendations for This Page
1. [HIGH] Rewrite title to include "MRR" (top query term)
2. [MEDIUM] Add FAQ answering "how to track mrr whmcs"
3. [LOW] Add comparison table for "best whmcs analytics" intent
```

---

## Full Analysis Output Format

When running the full analysis (no arguments), present all modules in order with an executive summary at the top:

```
GSC Strategic Insights: mxwhmcsmodules.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Analysis period: [date range]
Data delay: GSC data is 2-3 days behind

## Executive Summary

| Category | Findings | Priority Actions |
|----------|----------|-----------------|
| Striking Distance | X keywords in positions 4-20 | Optimize titles for top 3 |
| Cannibalization | X queries with page conflicts | Consolidate 2 pages |
| CTR Problems | X queries below benchmark | Rewrite 5 titles |
| Content Gaps | X queries without dedicated content | Write 3 blog posts |
| Intent Mismatches | X pages don't match query intent | Reassign 2 queries |
| Trends | X rising, Y declining queries | Capitalize on rising topics |

## Top 5 Actions (ROI Prioritized)

1. **[QUICK WIN]** Rewrite title for "query X" (pos 5, 400 impressions, CTR 1.2% vs expected 5.1%)
   Expected impact: +15 clicks/month
2. **[QUICK WIN]** Add internal link from blog post Y to product page Z for "query W"
   Expected impact: Move from position 12 to page 1
3. **[CONTENT]** Write blog post: "Topic from content gap"
   Expected impact: Capture X impressions/month for informational queries
4. **[FIX]** Resolve cannibalization between /page-a and /page-b for "query Q"
   Expected impact: Consolidate authority, improve position from 8 to 4-5
5. **[OPTIMIZE]** Update declining page to add 2026 freshness signals
   Expected impact: Recover X clicks lost in last 28 days

[Then show each module's detailed output below]
```

## ROI Prioritization Framework

When presenting action items across all modules, prioritize by this matrix:

| Priority | Effort | Impact | Examples |
|----------|--------|--------|----------|
| 1. Quick Wins | Low (title rewrite, meta change) | High (position 4-10, many impressions) | CTR fixes, title rewrites |
| 2. Striking Distance | Medium (content update, internal links) | High (position 11-15, many impressions) | Content additions, link building |
| 3. Content Creation | High (write new content) | Medium-High (fills gap for high-impression queries) | New blog posts, comparison pages |
| 4. Cannibalization Fixes | Medium (redirects, canonicals) | Medium (prevents self-competition) | Page merges, canonical tags |
| 5. Long-term Growth | High (new pages, link outreach) | Variable | Position 20-30 keywords, new topics |

### Expected Click Impact Formula

For each action, estimate impact:
```
Estimated new clicks = impressions x (new_expected_CTR - current_CTR)
```

Example: Query at position 6 with 200 impressions and 1% CTR
- Expected CTR at position 6: 4.4%
- If we optimize and maintain position: 200 x (4.4% - 1%) = +6.8 clicks/month
- If we move to position 3: 200 x (10.2% - 1%) = +18.4 clicks/month

---

## Limitations

- GSC API data has a 2-3 day delay. Most recent data is from 2-3 days ago.
- The API cannot request indexing. Tell the user to do it in GSC web UI.
- CTR benchmarks are averages. Niche B2B SaaS may differ due to fewer SERP features.
- Cannibalization detection uses impression data, not SERP position history. Some false positives for queries where Google legitimately shows 2 pages.
- Small sites may not have enough data for statistical significance. Note when sample sizes are small.
- Intent classification is heuristic (keyword-based). It cannot detect mixed intent from query text alone.
