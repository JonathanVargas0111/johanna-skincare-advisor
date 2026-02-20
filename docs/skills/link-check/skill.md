---
name: link-check
description: Broken link detector - validates internal links, external links, and anchor references
allowed-tools: Read, Grep, Glob, Bash, WebFetch
user-invocable: true
---

# Link Check Skill

Validates all links in the codebase to detect broken internal and external links.

## Usage

```
/link-check                     # Check all links
/link-check --internal          # Only internal links
/link-check --external          # Only external links
/link-check /modules            # Check specific section
```

## Instructions

When the user runs `/link-check`, perform the following:

### 1. Read project context FIRST (ALWAYS)

```
src/lib/products.js              # SSOT - checkout URLs
```

### 2. Collect all links

Use Grep to find all links in the codebase:

```bash
# Find href attributes
grep -roh 'href="[^"]*"' src/ | sort | uniq

# Find Link components
grep -roh '<Link[^>]*href="[^"]*"' src/ | sort | uniq
```

### 3. Categorize links

| Type | Pattern | Example |
|------|---------|---------|
| Internal | `/path` or relative | `/modules`, `../about` |
| External | `https://` or `http://` | `https://example.com` |
| Anchor | `#section` | `#features`, `#pricing` |
| Email | `mailto:` | `mailto:support@...` |
| Tel | `tel:` | `tel:+1234567890` |

### 4. Validate Internal Links

For each internal link, verify the route exists:

```bash
# Check if page exists
src/app/{path}/page.js
```

**Rules:**
- `/modules` → `src/app/modules/page.js` must exist
- `/modules/mcp-server` → `src/app/modules/mcp-server/page.js` must exist
- `/docs/[slug]` → Check if dynamic route handles it

**Common issues:**
| Issue | Example |
|-------|---------|
| Trailing slash mismatch | `/modules/` vs `/modules` |
| Case sensitivity | `/Modules` vs `/modules` |
| Missing page | Link to deleted route |
| Typo | `/mdoules` instead of `/modules` |

### 5. Validate External Links

For external links, optionally verify they respond:

```bash
# HEAD request to check if alive
curl -I --max-time 5 https://example.com
```

**Check for:**
- 200 OK → Valid
- 301/302 → Redirect (warning - update link)
- 404 → Broken (error)
- Timeout → May be broken (warning)

**Skip validation for:**
- `localhost` URLs
- Example domains (`example.com`)
- Known good domains (GitHub, Google, etc.)

### 6. Validate Anchor Links

For `#anchor` links:

1. Find the target element in the same file or linked page
2. Check for `id="anchor"` attribute

```jsx
// Link
<a href="#features">Features</a>

// Target must exist
<section id="features">
```

### 7. Check Link Quality

| Issue | Level | Description |
|-------|-------|-------------|
| Generic anchor text | Warning | "click here", "read more", "link" |
| Long anchor text | Warning | > 60 characters |
| Image link without alt | Error | `<a><img></a>` without alt |
| Empty href | Error | `href=""` or `href="#"` |
| JavaScript void | Warning | `href="javascript:void(0)"` |

### 8. Cross-reference with Sitemap

Compare internal links with sitemap:

```bash
# Read sitemap
src/app/sitemap.js
```

**Check:**
- All sitemap URLs are reachable via links (no orphan pages)
- All internal links exist in sitemap

### 9. Output Format

```
┌─────────────────────────────────────────────────────────────┐
│  Link Validation Check                                      │
│  Detecting broken and problematic links                     │
└─────────────────────────────────────────────────────────────┘

Internal Links (24)
───────────────────
✓ /                           → src/app/page.js
✓ /modules                    → src/app/modules/page.js
✓ /modules/mcp-server         → src/app/modules/mcp-server/page.js
✓ /modules/mx-metrics         → src/app/modules/mx-metrics/page.js
✓ /docs                       → src/app/docs/page.js
✓ /contact                    → src/app/contact/page.js
✗ /pricing                    → NOT FOUND
  Found in: src/components/organisms/Navigation.js:15

External Links (8)
──────────────────
✓ https://github.com/...
✓ https://whmcs.com/...
⚠ https://old-domain.com/page → 301 Redirect
  Found in: src/app/about/page.js:42
  Redirects to: https://new-domain.com/page
✗ https://expired-link.com/doc → 404 Not Found
  Found in: src/app/docs/page.js:78

Anchor Links (6)
────────────────
✓ #features                   → id="features" found
✓ #pricing                    → id="pricing" found
✗ #testimonials               → id NOT FOUND
  Found in: src/app/page.js:120

Link Quality (3 issues)
───────────────────────
⚠ src/app/docs/page.js:34 - Generic anchor: "click here"
  Fix: Use descriptive text like "view installation guide"
⚠ src/components/Footer.js:22 - Empty href="#"
  Fix: Use button for actions, or add real href

Orphan Pages (pages not linked)
───────────────────────────────
⚠ /legal/privacy - No internal links point here
  Fix: Add link from footer or relevant pages

═══════════════════════════════════════════════════════════════
SUMMARY
═══════════════════════════════════════════════════════════════
Total links:    38
✓ Valid:        34
⚠ Warnings:     2 (redirects, quality issues)
✗ Broken:       2 (must fix)

ORPHAN PAGES: 1 (not linked from anywhere)

SCORE: 89/100 ⚠️ Good (minor issues)
```

### 10. Scoring

```
Score = 100 - (broken × 15) - (warnings × 3) - (orphans × 5)

90-100: ✅ Excellent
70-89:  ⚠️ Good (minor issues)
50-69:  🟡 Needs work
<50:    ❌ Critical issues
```

### 11. Error vs Warning

**Errors (must fix):**
- Internal link to non-existent page
- External link returns 404/410
- Anchor link target missing
- Empty href attribute
- Image link without alt

**Warnings (recommended):**
- External link redirects (301/302)
- Generic anchor text
- Very long anchor text
- Orphan pages (not linked)
- JavaScript void links

## Quick Mode

With `--internal` flag, only check internal links (faster):
- Skip external link validation
- Skip HTTP requests
- Focus on route existence

---

## MX Modules Specific Checks

### WHMCS Checkout URLs

Verify checkout URLs use `getCheckoutUrl()` from PRODUCTS SSOT:

```javascript
// Expected pattern in src/lib/products.js
getCheckoutUrl('mcpServer')  // → https://accounts.webstark.com.au/store/modules/...
getCheckoutUrl('mxMetrics')  // → https://accounts.webstark.com.au/store/modules/...
```

**Check for hardcoded checkout URLs:**
```bash
# Should use getCheckoutUrl instead of hardcoding
grep -rn "accounts.webstark.com.au" src/ | grep -v "products.js"
```

If found, flag as WARNING - should use SSOT function.

### Product Link Consistency

Verify all "Buy" buttons link to correct checkout:

| Product | Expected URL Pattern |
|---------|---------------------|
| MCP Server | `getCheckoutUrl('mcpServer')` |
| MX Metrics | `getCheckoutUrl('mxMetrics')` |

### Currency Parameter

All checkout URLs must include `?currency=3` (USD):

```bash
# Verify getCheckoutUrl adds currency parameter
grep -A5 "getCheckoutUrl" src/lib/products.js
```

### Buy Button Check

Find all buy/purchase buttons and verify they use SSOT:

```bash
grep -rn "getCheckoutUrl\|Buy\|Subscribe\|Purchase" src/ --include="*.js"
```

## Reference

- SEO impact of broken links
- Internal linking best practices: `docs/seo-checklist.md`
- WHMCS checkout integration: `src/lib/products.js`
