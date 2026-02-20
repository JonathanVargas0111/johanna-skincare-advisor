---
name: a11y-check
description: WCAG 2.2 AA accessibility audit - checks contrast, focus states, touch targets, alt texts
allowed-tools: Read, Grep, Glob, Bash
user-invocable: true
---

# Accessibility Check Skill

Validates WCAG 2.2 AA compliance across the site.

## Usage

```
/a11y-check                     # Full accessibility audit
/a11y-check /modules/mcp-server # Audit specific page
/a11y-check --contrast          # Only check color contrast
```

## Instructions

When the user runs `/a11y-check`, perform the following:

### 1. Identify files to audit

**If specific page provided:**
```
src/app/{route}/page.js
```

**If no page specified:**
Use Glob to find all pages and components:
```
src/app/**/page.js
src/components/**/*.js
```

### 2. Color Contrast Checks

Reference: `.claude/rules/styling.md`

| Pattern | Issue | Fix |
|---------|-------|-----|
| `text-primary-600` on light bg | 4.2:1 (fails AA) | Use `text-primary-700` |
| `text-gray-500` on light bg | 4.0:1 (fails AA) | Use `text-gray-600` |
| `text-gray-500` on dark bg | May fail | Use `text-gray-400` |

**Search patterns:**
```bash
# Find potentially problematic contrast
grep -r "text-primary-600" src/
grep -r "text-gray-500" src/
grep -r "text-gray-400.*bg-white" src/
```

### 3. Image Accessibility

Check all `<img>` and `next/image` components:

| Rule | Check |
|------|-------|
| Alt text present | Every image has `alt` attribute |
| Alt text quality | Not just "image" or filename |
| Decorative images | Use `alt=""` (empty, not missing) |
| Complex images | Have detailed description nearby |

**Search pattern:**
```bash
grep -rn "<img\|<Image" src/ | grep -v "alt="
```

### 4. Interactive Element Checks

#### Touch Targets (44x44px minimum)
```jsx
// BAD - too small
className="p-1"  // 8px padding = ~24px target

// GOOD
className="p-2.5"  // 10px padding = ~44px target
```

**Search for small buttons:**
```bash
grep -rn "p-1\|p-0.5\|py-1\|px-1" src/components/
```

#### Focus States
```jsx
// BAD - no visible focus
className="outline-none"

// GOOD - visible focus
className="focus:ring-2 focus:ring-primary-500"
```

**Search for hidden focus:**
```bash
grep -rn "outline-none" src/ | grep -v "focus:"
```

### 5. Semantic HTML Checks

| Issue | Search | Fix |
|-------|--------|-----|
| Click handlers on div | `onClick.*<div` | Use `<button>` |
| Missing button type | `<button` without `type=` | Add `type="button"` |
| Empty links | `<a.*>.*</a>` with no text | Add aria-label |
| Headings as styling | `<h2.*text-sm` | Use correct heading level |

### 6. Form Accessibility

| Rule | Check |
|------|-------|
| Labels | Every input has associated label |
| Error states | Errors announced to screen readers |
| Required fields | Marked with `aria-required` |
| Autocomplete | Forms use `autocomplete` attribute |

### 7. ARIA Checks

| Issue | Fix |
|-------|-----|
| `aria-label` on non-interactive | Remove or use `aria-labelledby` |
| Missing `aria-expanded` on toggles | Add to expandable elements |
| `role="button"` on div | Use actual `<button>` |

### 8. Output Format

```
┌─────────────────────────────────────────────────────────────┐
│  WCAG 2.2 AA Accessibility Audit                            │
│  Reference: docs/css-best-practices.md                      │
└─────────────────────────────────────────────────────────────┘

Color Contrast
──────────────
✓ No text-primary-600 found on light backgrounds
✗ src/components/atoms/Badge.js:12 - text-gray-500 on white
  Fix: Change to text-gray-600

Image Accessibility
───────────────────
✓ 14/14 images have alt text
⚠ src/app/about/page.js:45 - Alt text is "logo" (too generic)
  Fix: Use descriptive alt like "MX Modules company logo"

Touch Targets
─────────────
✓ All buttons meet 44x44px minimum
⚠ src/components/molecules/Pagination.js:8 - p-1 may be too small
  Fix: Increase to p-2 or min-h-11 min-w-11

Focus States
────────────
✗ src/components/atoms/IconButton.js:5 - outline-none without focus ring
  Fix: Add focus:ring-2 focus:ring-primary-500

Semantic HTML
─────────────
✓ No click handlers on non-interactive elements
✓ All buttons have type attribute
⚠ src/components/organisms/FAQ.js:22 - h4 used for styling
  Fix: Use appropriate heading level or <p> with font-semibold

═══════════════════════════════════════════════════════════════
SUMMARY
═══════════════════════════════════════════════════════════════
✓ Passed: 12 checks
⚠ Warnings: 3 (recommended fixes)
✗ Errors: 2 (must fix for WCAG AA)

SCORE: 82/100 ⚠️ Good (minor issues)
```

### 9. Scoring

```
Score = 100 - (errors × 10) - (warnings × 3)

90-100: ✅ Excellent (WCAG AA compliant)
70-89:  ⚠️ Good (minor issues)
50-69:  🟡 Needs work
<50:    ❌ Critical issues
```

### 10. Error vs Warning

**Errors (WCAG AA failures):**
- Color contrast below 4.5:1 for normal text
- Missing alt text on informative images
- No visible focus indicator
- Click handlers on non-interactive elements
- Missing form labels

**Warnings (best practices):**
- Alt text too generic
- Touch target below 44px
- Missing aria-expanded on toggles
- Heading level skipped

## Reference

- WCAG 2.2 Guidelines: https://www.w3.org/WAI/WCAG22/quickref/
- Project rules: `.claude/rules/styling.md`
- CSS best practices: `docs/css-best-practices.md`
