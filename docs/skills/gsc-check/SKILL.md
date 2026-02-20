---
name: gsc-check
description: Google Search Console analysis - performance, indexing, and search analytics
allowed-tools: Read, Grep, Glob, Bash, mcp__gsc__list_properties, mcp__gsc__get_search_analytics, mcp__gsc__get_advanced_search_analytics, mcp__gsc__get_performance_overview, mcp__gsc__compare_search_periods, mcp__gsc__get_search_by_page_query, mcp__gsc__inspect_url_enhanced, mcp__gsc__batch_url_inspection, mcp__gsc__check_indexing_issues, mcp__gsc__get_sitemaps, mcp__gsc__list_sitemaps_enhanced, mcp__gsc__get_sitemap_details, mcp__gsc__manage_sitemaps, mcp__gsc__get_site_details
user-invocable: true
---

# GSC Check Skill

Google Search Console analysis for mxwhmcsmodules.com using the connected MCP.

## Usage

```
/gsc-check                      # Full overview (performance + top queries + indexing)
/gsc-check performance          # Performance overview (clicks, impressions, CTR, position)
/gsc-check queries              # Top queries by clicks
/gsc-check pages                # Top pages by clicks
/gsc-check indexing              # Check indexing status of key pages
/gsc-check compare              # Compare last 28 days vs previous 28 days
/gsc-check page /modules/proposals  # Queries driving traffic to a specific page
```

## Instructions

**Property URL:** `https://mxwhmcsmodules.com/`

IMPORTANT: Always use `https://mxwhmcsmodules.com/` as the `site_url` parameter. Do NOT use `sc-domain:mxwhmcsmodules.com` (returns 403).

### 1. Determine the analysis type

Parse the user's argument to decide which analysis to run:

| Argument | Action |
|----------|--------|
| (none) | Run full overview |
| `performance` | Performance overview only |
| `queries` | Top queries sorted by clicks |
| `pages` | Top pages sorted by clicks |
| `indexing` | Batch URL inspection of key pages |
| `compare` | Period comparison (last 28d vs previous 28d) |
| `page /path` | Query breakdown for a specific page |

### 2. Full Overview (default)

When no argument is provided, run all of these:

#### 2a. Performance Overview
```
Tool: mcp__gsc__get_performance_overview
Args: site_url: "https://mxwhmcsmodules.com/", days: 28
```

#### 2b. Top Queries (by clicks)
```
Tool: mcp__gsc__get_advanced_search_analytics
Args:
  site_url: "https://mxwhmcsmodules.com/"
  dimensions: "query"
  sort_by: "clicks"
  sort_direction: "descending"
  row_limit: 20
```

#### 2c. Top Pages (by clicks)
```
Tool: mcp__gsc__get_advanced_search_analytics
Args:
  site_url: "https://mxwhmcsmodules.com/"
  dimensions: "page"
  sort_by: "clicks"
  sort_direction: "descending"
  row_limit: 20
```

#### 2d. Indexing Status of Key Pages

Get the sitemap to find all pages, then batch inspect the most important ones:

```
Tool: mcp__gsc__batch_url_inspection
Args:
  site_url: "https://mxwhmcsmodules.com/"
  urls: (key pages from sitemap - homepage, product pages, docs, top blog posts)
```

### 3. Period Comparison

```
Tool: mcp__gsc__compare_search_periods
Args:
  site_url: "https://mxwhmcsmodules.com/"
  period1_start: (28 days ago)
  period1_end: (today)
  period2_start: (56 days ago)
  period2_end: (29 days ago)
  dimensions: "query"
  limit: 20
```

### 4. Page-specific Analysis

```
Tool: mcp__gsc__get_search_by_page_query
Args:
  site_url: "https://mxwhmcsmodules.com/"
  page_url: "https://mxwhmcsmodules.com{user_provided_path}"
  days: 28
```

### 5. Output Format

```
GSC Analysis: mxwhmcsmodules.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Performance (Last 28 days)

| Metric | Value | Trend |
|--------|-------|-------|
| Total Clicks | X | +/-% vs prev period |
| Total Impressions | X | +/-% |
| Average CTR | X% | +/-% |
| Average Position | X | +/-% |

## Top Queries (by clicks)

| # | Query | Clicks | Impressions | CTR | Position |
|---|-------|--------|-------------|-----|----------|
| 1 | ... | ... | ... | ... | ... |

## Top Pages (by clicks)

| # | Page | Clicks | Impressions | CTR | Position |
|---|------|--------|-------------|-----|----------|
| 1 | ... | ... | ... | ... | ... |

## Indexing Status

| Page | Status | Last Crawl |
|------|--------|------------|
| / | Indexed | YYYY-MM-DD |
| /modules/mcp-server | ... | ... |

## Opportunities

1. [HIGH] Query "X" has Y impressions but Z% CTR - optimize title/description
2. [MEDIUM] Page /path has high position but low CTR - improve meta description
3. [LOW] Page /path not indexed yet - request indexing via GSC UI

## Action Items

- [ ] Specific action 1
- [ ] Specific action 2
```

### 6. Opportunity Detection

After gathering data, analyze for these patterns:

| Pattern | Signal | Action |
|---------|--------|--------|
| High impressions, low CTR | Title/description not compelling | Rewrite meta tags |
| Position 5-20 | Almost on page 1 | Add content, internal links |
| Position 1-3, low CTR | Featured snippet opportunity | Add structured data |
| 0 clicks, many impressions | Ranking but not clicking | Check if title matches intent |
| Not indexed | Page not in Google | Check robots, canonical, submit URL |
| Declining clicks | Traffic drop | Compare periods, check for issues |

### 7. Indexing-only Mode

When user runs `/gsc-check indexing`, inspect these key pages:

```
https://mxwhmcsmodules.com/
https://mxwhmcsmodules.com/modules
https://mxwhmcsmodules.com/modules/mcp-server
https://mxwhmcsmodules.com/modules/mx-metrics
https://mxwhmcsmodules.com/modules/proposals
https://mxwhmcsmodules.com/blog
https://mxwhmcsmodules.com/docs
https://mxwhmcsmodules.com/docs/mcp-server
https://mxwhmcsmodules.com/docs/mx-metrics
https://mxwhmcsmodules.com/docs/proposals
```

Also read the sitemap to find all blog post URLs and check the most recent ones.

### 8. Limitations

- The GSC API **cannot request indexing**. If a page needs indexing, tell the user to do it manually in the GSC web UI.
- Data has a 2-3 day delay. The most recent data is typically from 2-3 days ago.
- URL inspection results are cached. If a page was recently updated, the inspection may show stale data.
