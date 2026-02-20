---
name: seo-check
description: SEO Check Skill - comprehensive SEO and AEO audit for pages
allowed-tools: Read, Grep, Glob, Bash
user-invocable: true
---

# SEO Check Skill

Comprehensive SEO and AEO (Answer Engine Optimization) audit for pages.

## Usage

```
/seo-check                      # Audit all pages
/seo-check /modules/mcp-server  # Audit specific page
/seo-check --quick              # Quick audit only (critical items)
```

## Instructions

When the user runs `/seo-check`, perform the following:

### 1. Read project context FIRST (ALWAYS)

```
src/lib/products.js              # SSOT - prices, names
```

### 2. Identify pages to audit

**If specific page provided:**
```
src/app/{route}/page.js
```

**If no page specified (audit all):**
Use Glob to find all page.js files:
```
src/app/**/page.js
```

### 3. Read reference documentation (if needed)

```
docs/checklists/page-review.md   # Master checklist
docs/seo-checklist.md            # SEO/AEO details
```

### 4. For each page, run Quick Audit

Check critical items that block deploy:

```
CRITICAL (bloquea deploy)
[ ] Build pasa sin errores
[ ] Exactamente 1 H1
[ ] Metadata title < 60 chars (sin "| MX Modules")
[ ] Canonical presente
[ ] Mobile responsive

IMPORTANTE (corregir antes de deploy)
[ ] Description 120-160 chars
[ ] OG image 1200x630
[ ] BreadcrumbList schema (excepto homepage)
[ ] Contraste WCAG AA (text-primary-700 en fondos claros)
[ ] Links internos funcionan
```

### 5. Run Full Audit (unless --quick)

#### 4a. Metadata Check

```javascript
// Required fields
- title: < 60 chars, NO "| MX Modules" suffix
- description: 120-160 chars, includes keyword
- keywords: array with 5+ keywords
- alternates.canonical: relative path
- openGraph.title: WITH "| MX Modules" suffix
- openGraph.description: 50-100 chars
- openGraph.images: 1200x630 with alt
- twitter.card: 'summary_large_image'
- twitter.title: WITH "| MX Modules" suffix
```

#### 4b. Content Structure (AEO)

| Item | Target |
|------|--------|
| H1 count | Exactly 1 |
| Heading hierarchy | H1 > H2 > H3 (no skipping) |
| H2/H3 as questions | 60%+ |
| Paragraph length | Max 120 words |
| Answer-first | First 40-60 words answer the question |
| Current year | "2026" mentioned for freshness |

**Minimum word counts:**
- Homepage: 400+
- Product: 800+
- Blog: 1,200+
- Docs: 500+

#### 4c. Structured Data (JSON-LD)

| Page Type | Required Schemas |
|-----------|-----------------|
| Homepage | Organization, WebSite |
| Product `/modules/*` | BreadcrumbList, SoftwareApplication, FAQPage |
| Blog `/blog/*` | BreadcrumbList, Article |
| Docs `/docs/*` | BreadcrumbList, Article, HowTo (if applicable) |
| Listing `/modules` | BreadcrumbList, CollectionPage |
| Contact `/contact` | BreadcrumbList, ContactPage |
| Legal `/legal/*` | BreadcrumbList |

#### 4d. Internal Linking

| From | To | Count |
|------|----|-------|
| Product page | Hub + 2-3 related | 3-4 links |
| Blog post | 2+ related posts + products | 3-5 links |
| Docs | Product + other docs | 2-4 links |

**Rules:**
- Descriptive anchor text (not "click here")
- No broken links
- No orphan pages

#### 4e. CSS/Accessibility

| Item | Value |
|------|-------|
| Normal text contrast | >= 4.5:1 (WCAG AA) |
| Headers on light bg | `text-primary-700` (NOT 600) |
| Touch targets | >= 44x44px |
| Focus states | Visible |

### 6. Run automated check

```bash
npm run seo
```

### 7. Output format

```
SEO Audit: /page-route
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Quick Audit Score: X/10

CRITICAL
✓ Single H1 found
✓ Title: "Page Title" (42 chars)
✗ Missing canonical
✓ Mobile responsive

IMPORTANT
✓ Description: 145 chars
✓ OG image configured
✗ Missing BreadcrumbList schema

## Full Audit

### Metadata
✓ Title format correct
✓ Description length OK (145 chars)
✗ Keywords array has only 3 items (need 5+)
✗ OpenGraph title missing "| MX Modules" suffix

### Content (AEO)
✓ H1 count: 1
✓ Heading hierarchy: correct
⚠ H2/H3 as questions: 40% (target 60%+)
✓ Word count: 1,250
✗ Year 2026 not mentioned (content freshness)

### Structured Data
✓ BreadcrumbList present
✓ SoftwareApplication present
✗ FAQPage missing (required for product pages)

### Internal Linking
✓ Links to hub: /modules
✓ Links to 2 related pages
✓ All links working

### CSS/Accessibility
✓ Contrast ratios OK
✓ Touch targets >= 44px
⚠ Found text-primary-600 (should be 700)

## Priority Fixes

1. [CRITICAL] Add canonical: alternates: { canonical: '/page' }
2. [HIGH] Add FAQPage schema with 5+ questions
3. [MEDIUM] Update H2/H3 to question format
4. [MEDIUM] Add "2026" for content freshness
5. [LOW] Change text-primary-600 to text-primary-700

## npm run seo Output
[Include output here]
```

### 8. Page-specific checks

**For Product pages (/modules/[slug]):**
```
[ ] Price visible and correct (from PRODUCTS SSOT)
[ ] Buy button with correct URL (getCheckoutUrl)
[ ] FAQPage schema with 5+ questions
[ ] Features section with clear benefits
[ ] Related products section
[ ] Documentation linked
[ ] 800+ words of content
```

**For Blog posts (/blog/[slug]):**
```
[ ] Article schema with author and dateModified
[ ] Publication date visible
[ ] 1,200+ words
[ ] Cross-links to 2+ related posts
[ ] Link to relevant product
[ ] Featured image with alt
```

**For Homepage (/):**
```
[ ] Organization schema
[ ] WebSite schema with SearchAction
[ ] Hero with clear value proposition
[ ] Featured modules section
[ ] Clear CTA above the fold
[ ] NO BreadcrumbList (is root)
```

## Reference Documents

When auditing, refer to these docs for detailed requirements:

| Document | Use |
|----------|-----|
| `docs/checklists/page-review.md` | Master checklist |
| `docs/seo-checklist.md` | SEO/AEO implementation details |
| `docs/css-best-practices.md` | CSS patterns, accessibility |
| `docs/strategy/llm-checklist.md` | LLM optimization (30+ sources) |

## MX Modules Specific Checks

### Pricing Language (CRITICAL)

**All products are MONTHLY subscription. Check for incorrect language:**

```bash
# Search for forbidden terms
grep -ri "one-time\|one time\|lifetime\|annual\|yearly\|pay once\|forever" src/
```

| Forbidden | Correct |
|-----------|---------|
| "one-time payment" | "$29/month" |
| "lifetime license" | "monthly subscription" |
| "annual plan" | "billed monthly" |
| "pay once" | "$19/mo" |

**If found, flag as CRITICAL error.**

### Price Consistency

Verify prices match `src/lib/products.js` SSOT:

| Product | Expected Price |
|---------|---------------|
| MCP Server | $29/month |
| MX Metrics | $19/month |

```bash
# Check hardcoded prices that don't use SSOT
grep -rn "\$29\|\$19" src/ | grep -v "products.js"
```

Pages that show prices MUST import from `@/lib/products`.

---

## Common Errors to Check

### Metadata
```javascript
// BAD - layout already adds suffix
title: 'Page Title | MX Modules'

// GOOD
title: 'Page Title'
```

```javascript
// BAD - missing canonical
export const metadata = { title: 'Page' }

// GOOD
export const metadata = {
  title: 'Page',
  alternates: { canonical: '/page' }
}
```

### CSS Contrast
```jsx
// BAD - insufficient contrast
className="text-primary-600"  // ~4.2:1 on white

// GOOD
className="text-primary-700"  // >4.5:1 on white
```

### Dynamic Classes
```jsx
// BAD - breaks Tailwind purge
className={`text-${color}-500`}

// GOOD - complete classes
const colors = { primary: 'text-primary-500' }
className={colors[color]}
```

## Validation Tools

After audit, recommend these tools:

| Tool | URL | Use |
|------|-----|-----|
| Rich Results Test | search.google.com/test/rich-results | Validate schemas |
| PageSpeed Insights | pagespeed.web.dev | Core Web Vitals |
| Facebook Debugger | developers.facebook.com/tools/debug | OG tags |
