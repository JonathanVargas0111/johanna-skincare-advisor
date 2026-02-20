---
name: seo-faq
description: SEO FAQ Research - identifies strategic questions for FAQ sections based on competitor analysis and product pages
allowed-tools: Read, Grep, Glob, Bash, WebSearch
user-invocable: true
---

# SEO FAQ Research Skill

Expert SEO researcher that identifies strategic FAQ questions based on competitor analysis, product pages, and real user search behavior.

## Usage

```
/seo-faq                    # Full analysis for all products
/seo-faq mcp-server         # Analysis for specific product
/seo-faq --output faq.md    # Save results to file
```

## Instructions

When the user runs `/seo-faq`, perform the following:

### 1. Read project context (ALWAYS do this first)

```
# Required files - read all of these
src/lib/products.js           # Product SSOT (prices, names, URLs)
docs/competitors.md           # Competitor analysis
src/app/page.js               # Homepage content
```

### 2. Discover all product pages dynamically

```bash
# Find all product pages
find src/app/modules -name "page.js" -type f
```

Read each product page found to understand:
- Features and benefits
- Current FAQ content (if any)
- Value propositions
- Use cases

### 3. Research phase (Web Search)

For each product, search for:

```
# Search patterns - adapt to product names
"WHMCS {product-feature} questions"
"WHMCS {product-category} FAQ"
"WHMCS {competitor} vs alternatives"
"{product-category} best practices"
"how to {product-use-case} WHMCS"
```

Example searches for MX Metrics:
- "WHMCS analytics questions"
- "WHMCS reporting FAQ"
- "WHMCS business intelligence"
- "how to track MRR WHMCS"

Example searches for MCP Server:
- "WHMCS AI automation questions"
- "WHMCS API integration FAQ"
- "MCP protocol WHMCS"
- "how to automate WHMCS with AI"

### 4. Identify question clusters

Group questions by intent:

| Intent | Description | Example |
|--------|-------------|---------|
| **Commercial** | Ready to buy, comparing options | "Is X worth the price?" |
| **Informational** | Learning, researching | "What is X?" "How does X work?" |
| **Comparison** | Evaluating alternatives | "X vs Y" "Best X for WHMCS" |
| **Problem-aware** | Has pain point, seeking solution | "Why is my X slow?" |
| **Objection** | Hesitant, needs reassurance | "Is X secure?" "What if X fails?" |

### 5. Prioritization criteria

Score each question (1-10) based on:

| Factor | Weight | Description |
|--------|--------|-------------|
| Search volume potential | 30% | Estimated search demand |
| Competitor gap | 25% | Not answered by competitors |
| Conversion potential | 25% | Leads to purchase decision |
| Ease of ranking | 20% | Long-tail, low competition |

**Priority levels:**
- **Alta**: Score 8-10 (implement immediately)
- **Media**: Score 5-7 (implement in next iteration)
- **Baja**: Score 1-4 (nice to have)

### 6. Output format

```markdown
# SEO FAQ Research Report

**Generated**: {date}
**Products analyzed**: {list}
**Questions identified**: {count}

---

## Executive Summary

[2-3 sentences summarizing key findings and opportunities]

---

## Questions by Product

### {Product Name}

#### Commercial Intent (High Priority)

| Pregunta SEO | Keyword Principal | Página Recomendada | Prioridad |
|--------------|-------------------|-------------------|-----------|
| How much does {product} cost for WHMCS? | {product} pricing | /modules/{slug} | Alta |
| ... | ... | ... | ... |

#### Informational Intent

| Pregunta SEO | Keyword Principal | Página Recomendada | Prioridad |
|--------------|-------------------|-------------------|-----------|
| What is {product} and how does it work? | what is {product} | /modules/{slug} | Alta |
| ... | ... | ... | ... |

#### Comparison Intent

| Pregunta SEO | Keyword Principal | Página Recomendada | Prioridad |
|--------------|-------------------|-------------------|-----------|
| {Product} vs {Competitor}: which is better? | {product} vs {competitor} | /modules/{slug} | Media |
| ... | ... | ... | ... |

#### Problem-Aware Intent

| Pregunta SEO | Keyword Principal | Página Recomendada | Prioridad |
|--------------|-------------------|-------------------|-----------|
| Why can't I track {metric} in WHMCS? | WHMCS {metric} tracking | /modules/{slug} | Alta |
| ... | ... | ... | ... |

#### Objection Handling

| Pregunta SEO | Keyword Principal | Página Recomendada | Prioridad |
|--------------|-------------------|-------------------|-----------|
| Is {product} secure for my WHMCS data? | {product} security | /modules/{slug} | Alta |
| ... | ... | ... | ... |

---

## Competitor Gaps Identified

| Opportunity | Why competitors miss it | Our advantage |
|-------------|------------------------|---------------|
| {keyword/topic} | {reason} | {our differentiator} |

---

## Implementation Recommendations

### Immediate (This week)
1. [Question] → Add to [page] FAQ section
2. ...

### Short-term (This month)
1. [Question] → Create blog post targeting this
2. ...

### Content gaps to fill
1. [Topic] → No existing content, high search potential
2. ...

---

## Notes

- Questions written in natural language for Featured Snippets
- Long-tail keywords prioritized for easier ranking
- Aligned with WHMCS 9.0 compatibility messaging
```

### 7. Question writing guidelines

**DO:**
- Use natural, conversational language
- Include the product/feature name
- Match actual search queries (long-tail)
- Start with: What, How, Why, Is, Can, Does
- Include year for freshness ("in 2026")

**DON'T:**
- Generic questions without specificity
- Questions already answered by competitors
- Technical jargon users wouldn't search
- Questions unrelated to purchase decision

### 8. Page placement recommendations

| Page Type | Question Types | Max Questions |
|-----------|---------------|---------------|
| Product page | Commercial, Objection | 5-8 |
| Homepage | General, Commercial | 3-5 |
| Blog post | Informational, Problem-aware | Topic-specific |
| Comparison page | Comparison | 5-7 |
| Docs | Technical, How-to | As needed |

### 9. Cross-reference with existing content

Before finalizing, check:
- `src/components/organisms/FAQ.js` - existing FAQ component
- Each product page's FAQ section
- Blog posts that might already answer questions

Avoid duplicating questions already well-covered.

## Reference Documents

| Document | Use |
|----------|-----|
| `docs/competitors.md` | Competitor weaknesses to exploit |
| `docs/seo-checklist.md` | SEO implementation standards |
| `docs/strategy/llm-checklist.md` | GEO/AEO optimization |
| `src/lib/products.js` | Product names, prices, URLs |

## Example Output (MX Metrics)

```markdown
### MX Metrics

#### Commercial Intent (High Priority)

| Pregunta SEO | Keyword Principal | Página Recomendada | Prioridad |
|--------------|-------------------|-------------------|-----------|
| How much does MX Metrics cost per month? | MX Metrics pricing | /modules/mx-metrics | Alta |
| Is there a free trial for MX Metrics? | MX Metrics free trial | /modules/mx-metrics | Alta |
| What's included in the $19/month subscription? | MX Metrics subscription | /modules/mx-metrics | Alta |

#### Problem-Aware Intent

| Pregunta SEO | Keyword Principal | Página Recomendada | Prioridad |
|--------------|-------------------|-------------------|-----------|
| Why can't I see MRR in my WHMCS dashboard? | WHMCS MRR tracking | /modules/mx-metrics | Alta |
| How do I track customer churn in WHMCS? | WHMCS churn rate | /modules/mx-metrics | Alta |

#### Comparison Intent

| Pregunta SEO | Keyword Principal | Página Recomendada | Prioridad |
|--------------|-------------------|-------------------|-----------|
| MX Metrics vs MetricsCube: which keeps data local? | MX Metrics vs MetricsCube | /modules/mx-metrics | Media |
| Best WHMCS analytics module in 2026? | best WHMCS analytics 2026 | /modules/mx-metrics | Media |

#### Objection Handling

| Pregunta SEO | Keyword Principal | Página Recomendada | Prioridad |
|--------------|-------------------|-------------------|-----------|
| Is MX Metrics data stored on my server or external? | MX Metrics data privacy | /modules/mx-metrics | Alta |
| Can I cancel MX Metrics subscription anytime? | MX Metrics cancel | /modules/mx-metrics | Media |
```
