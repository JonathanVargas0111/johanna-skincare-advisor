# AI Search Optimization Check

Validates that pages are optimized to appear cited in AI search results (Google AI Overviews, Perplexity, ChatGPT, Claude).

## Usage

```
/ai-seo-check                    # Check all pages
/ai-seo-check /modules/mcp-server # Check specific page
/ai-seo-check --quick            # Quick audit only
```

## Instructions

When the user runs `/ai-seo-check`, perform the following:

### 1. Read project context FIRST (ALWAYS)

```
src/lib/products.js              # SSOT - prices, names
public/llms.txt                  # LLM optimization file
public/llms-full.txt             # Extended LLM file
src/app/robots.js                # AI crawler rules
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

### 3. For each page, check these categories:

---

## Category 1: Content Structure (Inverted Pyramid)

AI systems extract the first 2-3 sentences as the direct answer.

**Check:**
- [ ] First paragraph answers the main question directly (40-60 words)
- [ ] No fluff or intro before the answer
- [ ] Detail and context comes AFTER the direct answer

**Example - BAD:**
```
Welcome to our guide about MRR tracking. In this article, we'll explore
the importance of metrics for hosting providers...
```

**Example - GOOD:**
```
MRR (Monthly Recurring Revenue) is the predictable income from your
active subscriptions, calculated by summing all monthly service fees.
For hosting providers, tracking MRR reveals business health at a glance.
```

---

## Category 2: Freshness Signals

Perplexity and AI Overviews heavily favor fresh content.

**Check:**
- [ ] "Last Updated" date visible on page (not just in metadata)
- [ ] Date is within last 3 months
- [ ] Year "2026" mentioned in content (for evergreen content)

**Where to add "Last Updated":**
- Docs pages: Below the H1 or in sidebar
- Blog posts: Below title (already have publish date)
- Product pages: In features or compatibility section

**Format:**
```jsx
<p className="text-sm text-gray-500">Last updated: January 2026</p>
```

---

## Category 3: Author/E-E-A-T Signals

Expert authorship = 3.2x more likely to be cited in AI Overviews.

**Check for blog posts:**
- [ ] Author name displayed
- [ ] Author has bio/credentials
- [ ] Author schema in JSON-LD

**Author schema example:**
```json
{
  "@type": "Article",
  "author": {
    "@type": "Organization",
    "name": "MX Modules Team",
    "url": "https://mxwhmcsmodules.com/about"
  }
}
```

**Check for product/docs:**
- [ ] Company/brand clearly identified
- [ ] Link to /about page
- [ ] Credentials mentioned (e.g., "10+ years WHMCS experience")

---

## Category 4: Content Chunks

LLMs extract content in chunks of ~75-225 words (100-300 tokens).

**Check:**
- [ ] Paragraphs are 75-225 words (not walls of text)
- [ ] Each section is self-contained (can be extracted alone)
- [ ] Headers describe the content below them

**Check for long paragraphs:**
```bash
# Flag paragraphs over 250 words
```

---

## Category 5: FAQ Structure

Pages with FAQ schema are cited up to 40% more.

**Check for product pages:**
- [ ] Has FAQ section
- [ ] FAQPage schema implemented
- [ ] At least 5 questions
- [ ] Questions match real search queries

**Check FAQ quality:**
- Questions start with How, What, Why, Can, Does
- Answers are direct (first sentence answers the question)
- Answers are 50-150 words

---

## Category 6: Outbound Links

Almost all pages cited in AI Overviews include outbound links to trusted sources.

**Check:**
- [ ] 1-2 authoritative outbound links per major section
- [ ] Links to official documentation, studies, or trusted sources
- [ ] No broken outbound links

**Good outbound link targets:**
- WHMCS official documentation
- Claude/Anthropic documentation
- Industry statistics sources

---

## Category 7: Technical (LLM Crawlability)

**Check:**
- [ ] llms.txt exists and is current
- [ ] llms-full.txt exists with technical details
- [ ] AI crawlers allowed in robots.txt:
  - GPTBot
  - ChatGPT-User
  - ClaudeBot
  - PerplexityBot
  - Google-Extended
- [ ] Page loads under 3 seconds
- [ ] Schema markup implemented

---

## Category 8: Headers as Questions

60%+ of H2/H3 should be phrased as questions for AI extraction.

**Check:**
- [ ] H2/H3 headers are questions (What, How, Why, etc.)
- [ ] Headers match how people search

**Example - BAD:**
```
## Features
## Installation
## Configuration
```

**Example - GOOD:**
```
## What features does MX Metrics include?
## How do I install MX Metrics?
## How do I configure cost tracking?
```

---

## Output Format

```
┌─────────────────────────────────────────────────────────────┐
│  AI Search Optimization Check                               │
│  Optimizing for Google AI Overviews, Perplexity, ChatGPT   │
└─────────────────────────────────────────────────────────────┘

Page: /modules/mx-metrics
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Content Structure (Inverted Pyramid)
────────────────────────────────────
✓ First paragraph answers main question
✓ Direct answer in first 60 words

Freshness Signals
─────────────────
✗ No "Last Updated" visible on page
✓ Year 2026 mentioned in content

Author/E-E-A-T
──────────────
⚠ No author byline (OK for product page)
✓ Links to /about page
✓ Company credentials mentioned

Content Chunks
──────────────
✓ Paragraph lengths OK (avg 120 words)
✓ Sections are self-contained

FAQ Structure
─────────────
✓ FAQ section present
✓ FAQPage schema implemented
✓ 6 questions included
⚠ 2 questions don't start with question words

Outbound Links
──────────────
✗ No outbound links to authoritative sources
  Recommendation: Add link to WHMCS docs or MCP spec

Technical
─────────
✓ llms.txt exists
✓ AI crawlers allowed
✓ Schema markup present

Headers as Questions
────────────────────
⚠ 40% of H2/H3 are questions (target: 60%+)
  Consider rephrasing: "Features" → "What features are included?"

═══════════════════════════════════════════════════════════════
SCORE: 78/100

Priority Fixes:
1. [HIGH] Add "Last Updated: January 2026" below H1
2. [MEDIUM] Add outbound link to WHMCS documentation
3. [LOW] Rephrase 2-3 headers as questions
```

---

## Scoring

| Category | Weight | Max Points |
|----------|--------|------------|
| Content Structure | 15% | 15 |
| Freshness Signals | 20% | 20 |
| Author/E-E-A-T | 10% | 10 |
| Content Chunks | 10% | 10 |
| FAQ Structure | 15% | 15 |
| Outbound Links | 10% | 10 |
| Technical | 10% | 10 |
| Headers as Questions | 10% | 10 |

```
Score = Sum of category scores

90-100: ✅ Excellent - Ready for AI search
70-89:  ⚠️ Good - Minor improvements needed
50-69:  🟡 Needs work - Several issues
<50:    ❌ Critical - Major optimization required
```

---

## Quick Fixes Reference

### Add "Last Updated" to docs:
```jsx
<p className="text-sm text-gray-500 mt-2">Last updated: January 2026</p>
```

### Add outbound link:
```jsx
<a href="https://developers.whmcs.com/" target="_blank" rel="noopener noreferrer">
  WHMCS Developer Documentation
</a>
```

### Rephrase header as question:
```jsx
// Before
<h2>Installation</h2>

// After
<h2>How do I install MCP Server?</h2>
```

### Add Author schema to blog:
```javascript
const articleSchema = {
  "@type": "Article",
  "headline": post.title,
  "author": {
    "@type": "Organization",
    "name": "MX Modules Team",
    "url": "https://mxwhmcsmodules.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MX Modules"
  }
}
```

---

## References

- [Google AI Overviews Optimization 2026](https://www.averi.ai/blog/google-ai-overviews-optimization-how-to-get-featured-in-2026)
- [Perplexity AI Optimization Guide](https://koanthic.com/en/perplexity-ai-optimization-complete-guide-for-2026/)
- [LLM SEO Best Practices](https://wellows.com/blog/llm-seo/)
- [12 Tactics to Rank on Perplexity](https://nicklafferty.com/blog/how-to-rank-higher-in-perplexity/)
