# AI Search Optimization Audit Report

**Site:** johannaskincare.com
**Date:** 2026-02-20
**Overall Score: 37/100 - CRITICAL**

---

## Page Scores

| Page | Score | Rating |
|------|-------|--------|
| Homepage | 39/100 | CRITICAL |
| Services | 25/100 | CRITICAL |
| About | 26/100 | CRITICAL |
| Blog Posts (avg) | 33/100 | CRITICAL |
| Technical Layer | 82/100 | GOOD |

## Key Finding
Technical infrastructure is STRONG (llms.txt, robots.txt, schema, sitemap).
Content layer is severely underoptimized - built for human sales funnel, not AI citation.

---

## Critical Issues Across All Pages

1. **No FAQPage schema** despite having 8 FAQ items rendered (40% more citations with schema)
2. **Zero freshness signals** - No "Last Updated", no year 2026 on any main page
3. **Headers NOT as questions** - Average 10% vs target 60%+
4. **Zero outbound links** to authoritative sources on entire site
5. **Answer-first format missing** - All pages lead with branding, not answers
6. **Services page uses invalid schema type** "ServicePage"

## Blog Content Pattern (ALL 9 posts)
- 0/9 have FAQ sections
- 0/9 have comparison tables
- 0/9 have answer-first structure
- 0/9 have outbound links
- 9/9 have marketing fluff issues
- Average blog score: 30/90 (33%)

## Priority Fixes (by impact)

### HIGH
1. Add FAQPage schema to FAQ component (+15 pts sitewide, 20-min fix)
2. Restructure blog posts to answer-first format (+10 pts/post)
3. Add FAQ sections to every blog post (+10 pts/post)
4. Rewrite H2/H3 as questions across site (+7 pts/page)
5. Add "Actualizado: Febrero 2026" to every page (+15 pts/page)

### MEDIUM
6. Add comparison tables to blog posts (+5 pts/post)
7. Add 1-2 outbound links per page (+5 pts/page)
8. Add ClaudeBot to robots.txt
9. Fix ServicePage schema type

### LOW
10. Remove English quotes from 2 blog posts
11. Update "2025" to "2026" in productos-piel-naturales.md
12. Update tropical climate post date from 2025 to 2026
13. Remove marketing fluff vocabulary
14. Create specific comparison/product pages

## Estimated Impact
Implementing fixes 1-5 would move score from 37/100 to ~65-70/100.
