---
name: copy-review
description: Review and optimize product page copywriting for conversion. Use when reviewing landing pages, product pages, or any conversion-focused content. Analyzes headlines, CTAs, value propositions, and applies PAS/AIDA frameworks.
allowed-tools: Read, Grep, Glob, WebSearch, WebFetch
user-invocable: true
---

# Copy Review Skill

Review product page copywriting to maximize conversion rates. Specialized for B2B SaaS landing pages.

## Usage

```
/copy-review /modules/mcp-server     # Review specific product page
/copy-review /modules/mx-metrics     # Review another product page
/copy-review --rewrite               # Include rewrite suggestions
```

## Instructions

When the user runs `/copy-review`, perform the following:

### 1. Read project context FIRST (ALWAYS)

```
src/lib/products.js              # SSOT - prices, product names
```

### 2. Read the page file

```
src/app/{route}/page.js
```

### 3. Analyze using PASTOR Framework

Evaluate the page structure against the PASTOR framework (more complete than PAS):

**P - Problem (10%)**
- Is there a clear problem statement in the hero?
- Does it resonate with the target audience pain point?

**A - Agitate (15%)**
- Does the copy amplify the problem's consequences?
- Are there emotional triggers that create urgency?
- What happens if they DON'T act?

**S - Solution (25%)**
- Is the product presented as THE solution?
- Are benefits outcome-driven (not feature-driven)?

**T - Testimony (15%)**
- Is there social proof? (testimonials, logos, metrics)
- Are testimonials specific with names and results?

**O - Offer (20%)**
- Is the offer clear? (what exactly do they get)
- Is pricing transparent?
- Are bonuses/inclusions listed?

**R - Response (15%)**
- Is the CTA clear and compelling?
- Is there a risk reversal (guarantee)?
- Is urgency present (without being fake)?

### 3b. Product Visibility Check (Critical)

**"Most SaaS pages fail because they hide the product"**

- [ ] Product screenshot/demo visible in hero (above fold)
- [ ] User can see what they're getting before scrolling
- [ ] Demo/video/interactive element present
- [ ] Outcome shown, not just described

### 3c. 5-Second Test

**Can a visitor understand the value prop in 5 seconds?**

- [ ] Headline communicates WHO it's for + WHAT outcome
- [ ] No jargon that requires context
- [ ] Primary CTA visible without scrolling
- [ ] Value is obvious, not clever

### 3d. Two Paths Principle

**"Give both the curious and the committed a clear next step"**

- [ ] Primary CTA for ready-to-buy visitors (e.g., "Start Free Trial")
- [ ] Secondary CTA for researchers (e.g., "See How It Works", "View Docs")
- [ ] Both paths visible in hero section

### 4. Evaluate each section

See `checklist.md` for detailed criteria:

- **Hero Section**: Headline, subheadline, CTA
- **Value Proposition**: Benefits vs features
- **Social Proof**: Testimonials, metrics, logos
- **CTAs**: Action verbs, clarity, anxiety reducers
- **Microcopy**: Trust signals, friction reducers

### 5. Output format

```
Copy Review: /page-route
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## PAS Framework Score

Problem:   ████████░░ 8/10 - Clear pain point
Agitate:   ██████░░░░ 6/10 - Needs more urgency
Solution:  █████████░ 9/10 - Strong benefits

## Section Analysis

### Hero
✓ Headline communicates outcome
✓ Subheadline adds specificity
✗ CTA could be more action-oriented

### Value Proposition
✓ Benefits over features
✗ Missing specific numbers/data
⚠ "Easy" is vague - quantify instead

### CTAs
✓ Uses action verb "Get"
✓ Price visible in CTA
✗ Missing anxiety reducer near CTA

## Priority Improvements

1. [HIGH] Add specific metric in hero ("Save 5 hours/week")
2. [MED] Change CTA from "Buy Now" to "Start Automating"
3. [LOW] Add "No credit card required" microcopy

## Rewrite Suggestions (if --rewrite)

**Current headline:**
"Let AI handle your WHMCS operations"

**Suggested headline:**
"Cut WHMCS Admin Time in Half with AI"
- More specific outcome
- Quantified benefit
- Same message, higher impact
```

### 6. Reference files

- `frameworks.md` - PAS and AIDA framework details
- `checklist.md` - Complete evaluation criteria
- `examples.md` - Good/bad copy examples from SaaS

## Target Audience Context

This project sells WHMCS modules to:
- **Who**: Web hosting providers, resellers, sysadmins
- **Pain**: Manual WHMCS operations, lack of visibility into metrics
- **Goal**: Automate operations, understand their business better
- **Objections**: Security concerns, "will it work with my setup?"

## Tone Guidelines

- Professional but not corporate
- Technical credibility without jargon
- Confident but not salesy
- International English (not LATAM-specific)

---

## MX Modules Pricing Rules (CRITICAL)

**All products are MONTHLY subscription. Never use incorrect language.**

### Forbidden Terms (flag as ERROR)
- "one-time payment"
- "lifetime license"
- "annual plan" / "yearly"
- "pay once"
- "forever"

### Correct Terms (use these)
- "$29/month" or "$29/mo"
- "$19/month" or "$19/mo"
- "billed monthly"
- "monthly subscription"
- "cancel anytime"

### Pricing Checklist

```
[ ] Price shown with "/month" or "/mo" suffix
[ ] No forbidden terms anywhere on page
[ ] "30-day money-back guarantee" (first month only)
[ ] "Cancel anytime" messaging present
[ ] Price imports from PRODUCTS SSOT (not hardcoded)
```

### Example CTAs

**Good:**
- "Subscribe - $29/mo"
- "Start for $19/month"
- "Get MX Metrics - $19/mo"

**Bad:**
- "Buy Now - $29" (missing /month)
- "One-time purchase"
- "Lifetime access"

---

## GEO/AI Compatibility (For Blog Posts)

When reviewing blog posts (not product pages), also check these GEO criteria:

### Answer-First Structure
- [ ] First paragraph directly answers the main question (40-60 words)
- [ ] No lengthy preamble before addressing the topic
- [ ] Self-contained opening that an LLM can extract as a direct answer

### Headers as Questions
- [ ] 60%+ of H2/H3 headings are phrased as questions
- [ ] Questions match how a real user would ask ChatGPT or Google
- [ ] Each section is independently citable (self-contained chunks)

### FAQ Section
- [ ] FAQ section exists with 4+ conversational Q&As
- [ ] Questions use natural language (not keyword-stuffed)
- [ ] Answers are direct and specific (not vague)

### Tables and Comparisons
- [ ] At least 1 comparison or data table per post
- [ ] Tables make content "impossible to summarize" (forces page visit)
- [ ] Data is specific, not generic

### No Informational Filler
- [ ] Content is practical/actionable, not just "what is X"
- [ ] Avoids topics AI can already answer directly from training data
- [ ] Provides unique data, benchmarks, or original analysis

### Priority Rule
When GEO criteria and conversion criteria conflict:
- **Blog posts:** Answer-first and chunking win (optimize for AI citation)
- **Product pages:** Conversion and PASTOR win (optimize for sales)
- **Both:** No marketing fluff, no em-dashes, useful language always
