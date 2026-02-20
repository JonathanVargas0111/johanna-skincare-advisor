---
name: cluster-check
description: Topic cluster health audit - validates internal linking between pillar pages, docs, and blog posts
allowed-tools: Read, Grep, Glob, Bash
user-invocable: true
---

# Cluster Check Skill

Audits topic cluster health by verifying internal links between pillar pages (products), documentation, and blog posts.

## Usage

```
/cluster-check                     # Audit all clusters
/cluster-check proposals           # Audit specific cluster
/cluster-check --summary           # Quick summary only
```

## Instructions

When the user runs `/cluster-check`, perform the following:

### 1. Read project context FIRST (ALWAYS)

```
src/lib/products.js              # SSOT - product keys and URLs
```

### 2. Define the clusters

Each product forms a topic cluster with this structure:

```
Pillar Page (product)
  ├── Documentation (docs)
  ├── Blog Posts (spokes, matched by tags)
  └── Related Products (cross-cluster links)
```

**Cluster definitions:**

| Cluster | Pillar | Docs | Blog Tags |
|---------|--------|------|-----------|
| MCP Server | `/modules/mcp-server` | `/docs/mcp-server`, `/docs/mcp-server/tools` | `mcp`, `ai`, `automation`, `api` |
| MX Metrics | `/modules/mx-metrics` | `/docs/mx-metrics` | `analytics`, `metrics`, `mrr`, `ltv`, `revenue` |
| Proposals | `/modules/proposals` | `/docs/proposals`, `/docs/proposals-mcp` | `proposals`, `mx-proposals`, `digital-signatures`, `payment-plans` |

### 3. Collect all blog posts and their tags

Use Glob to find all blog posts:

```
content/blog/*.md
```

Read the frontmatter of each post to extract `tags`. Assign each post to a cluster based on tag matches.

**Assignment rules:**
- A post belongs to a cluster if it has ANY of the cluster's tags
- A post can belong to multiple clusters (cross-cluster)
- Posts with no matching tags are "unassigned"

### 4. Collect all internal links

For each blog post, search for markdown links:

```
[text](/path)
```

Extract:
- Links to pillar pages (`/modules/*`)
- Links to docs (`/docs/*`)
- Links to other blog posts (`/blog/*`)

Also check pillar pages and docs for links back to blog posts.

### 5. Validate cluster health

For each cluster, check these rules:

#### Rule 1: Spoke → Pillar (CRITICAL)
Every blog post in the cluster MUST link to its pillar page at least once.

```
✗ FAIL: /blog/digital-signatures-whmcs has tag "proposals" but no link to /modules/proposals
✓ PASS: /blog/integrate-ai-whmcs-mcp links to /modules/mcp-server (3 times)
```

#### Rule 2: Spoke → Docs (IMPORTANT)
Every blog post in the cluster SHOULD link to its documentation at least once.

```
✗ FAIL: /blog/digital-signatures-whmcs has no link to /docs/proposals
✓ PASS: /blog/integrate-ai-whmcs-mcp links to /docs/mcp-server
```

#### Rule 3: Spoke ↔ Spoke (RECOMMENDED)
Each blog post SHOULD link to at least 1 other post in the same cluster.

```
⚠ WARN: /blog/payment-plans-hosting has no cross-links to other proposals posts
✓ PASS: /blog/integrate-ai-whmcs-mcp links to /blog/top-whmcs-automation-tasks
```

#### Rule 4: Pillar → Spokes (IMPORTANT)
The pillar page (product page) should reference or link to blog content. Check for:
- Related blog posts section
- `getPostsByTags()` usage matching the cluster's tags

```
✓ PASS: /modules/mcp-server uses getPostsByTags with ['ai', 'mcp', 'automation']
⚠ WARN: /modules/proposals has no related blog posts section
```

#### Rule 5: Docs → Pillar (RECOMMENDED)
Each doc page should link back to its product page.

```
✓ PASS: /docs/mcp-server links to /modules/mcp-server
✗ FAIL: /docs/proposals has no link to /modules/proposals
```

#### Rule 6: Cross-Cluster Links (BONUS)
Product pages should link to related products (already handled by "Related Products" sections).

### 6. Check link quality

For all internal links found, verify:

| Check | Level | Description |
|-------|-------|-------------|
| Descriptive anchor text | Warning | Not "click here", "Learn more", "read more" |
| Link exists | Error | Target page/post must exist |
| Contextual placement | Info | Links should be in relevant context, not random |

### 7. Output format

```
┌─────────────────────────────────────────────────────────────┐
│  Topic Cluster Health Check                                  │
│  Validating internal linking across product clusters         │
└─────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════
CLUSTER: MCP Server
Pillar: /modules/mcp-server
Docs: /docs/mcp-server, /docs/mcp-server/tools
Spokes: 9 blog posts
═══════════════════════════════════════════════════════════════

Spoke → Pillar (9/9 linked)
─────────────────────────────
✓ integrate-ai-whmcs-mcp          → 4 links to /modules/mcp-server
✓ claude-vs-chatgpt-hosting       → 8 links to /modules/mcp-server
✓ mcp-server-vs-whmcs-api         → 7 links to /modules/mcp-server
...

Spoke → Docs (7/9 linked)
─────────────────────────
✓ integrate-ai-whmcs-mcp          → 2 links to /docs/mcp-server
✗ automate-whmcs-without-code     → NO link to docs
✗ generate-client-reports-ai      → NO link to docs
  Fix: Add [MCP Server documentation](/docs/mcp-server) link

Spoke ↔ Spoke (8/9 cross-linked)
─────────────────────────────────
✓ integrate-ai-whmcs-mcp          → links to 3 other cluster posts
✗ whmcs-admin-settings            → links to 0 cluster posts
  Fix: Add cross-reference to a related post

Pillar → Spokes
───────────────
✓ Uses getPostsByTags(['ai', 'mcp', 'automation', 'api'])

Docs → Pillar
─────────────
✓ /docs/mcp-server → links to /modules/mcp-server

CLUSTER SCORE: 92/100 ✅ Excellent

═══════════════════════════════════════════════════════════════
CLUSTER: Proposals
Pillar: /modules/proposals
...

═══════════════════════════════════════════════════════════════
OVERALL SUMMARY
═══════════════════════════════════════════════════════════════

| Cluster | Spokes | →Pillar | →Docs | ↔Spoke | Score |
|---------|--------|---------|-------|--------|-------|
| MCP Server | 9 | 9/9 | 7/9 | 8/9 | 92 |
| MX Metrics | 8 | 8/8 | 5/8 | 7/8 | 85 |
| Proposals | 6 | 4/6 | 2/6 | 3/6 | 58 |

Unassigned Posts: 2
- /blog/whmcs-admin-settings-most-providers-miss (no cluster tags)

TOTAL SCORE: 78/100 ⚠️ Good (Proposals cluster needs work)
```

### 8. Scoring

Per cluster:

```
spoke_to_pillar = (linked / total) * 35     # 35 points max
spoke_to_docs   = (linked / total) * 25     # 25 points max
spoke_to_spoke  = (linked / total) * 20     # 20 points max
pillar_to_spoke = 10 if has related posts    # 10 points max
docs_to_pillar  = 10 if linked              # 10 points max

Cluster Score = sum of above

90-100: Excellent
70-89:  Good (minor gaps)
50-69:  Needs work
<50:    Critical (cluster barely connected)
```

Overall score = average of all cluster scores.

### 9. Priority fixes

After auditing, output a prioritized fix list:

```
Priority Fixes
══════════════

1. [CRITICAL] blog/digital-signatures-whmcs → Add link to /modules/proposals
   Line ~102: "How MX Proposals Handles Signatures" → make "MX Proposals" a link

2. [IMPORTANT] blog/payment-plans-hosting → Add link to /docs/proposals
   Suggestion: Add at end of "How MX Proposals Handles Payment Plans" section

3. [RECOMMENDED] blog/hosting-providers-lose-deals → Add cross-link
   Suggestion: Reference /blog/send-client-proposals-whmcs in the templates section
```

### 10. Special checks

#### Blog post "Related" sections
Check if blog posts have a "Related:" section at the end with links. This is a common pattern for spoke-to-spoke linking.

#### getPostsByTags coverage
Verify that pillar pages use `getPostsByTags()` with tags that actually match blog posts in the cluster.

#### Orphan detection
Flag blog posts that:
- Have no links TO any other page (isolated content)
- Have no links FROM any other page (unreachable except via blog index)

---

## MX Modules Specific

### Current Clusters (February 2026)

| Cluster | Status | Notes |
|---------|--------|-------|
| MCP Server | Mature | Well-interlinked, 9 posts |
| MX Metrics | Mature | Well-interlinked, 8 posts |
| Proposals | New | Added in feature/proposals branch, 6 posts |

### Tag-to-Cluster Mapping

This is the definitive mapping for assigning posts to clusters:

```javascript
const CLUSTERS = {
  mcpServer: {
    pillar: '/modules/mcp-server',
    docs: ['/docs/mcp-server', '/docs/mcp-server/tools'],
    tags: ['mcp', 'ai', 'automation', 'api'],
  },
  mxMetrics: {
    pillar: '/modules/mx-metrics',
    docs: ['/docs/mx-metrics'],
    tags: ['analytics', 'metrics', 'mrr', 'ltv', 'revenue'],
  },
  proposals: {
    pillar: '/modules/proposals',
    docs: ['/docs/proposals', '/docs/proposals-mcp'],
    tags: ['proposals', 'mx-proposals', 'digital-signatures', 'payment-plans'],
  },
};
```

### Cross-cluster posts

Some posts belong to multiple clusters:
- Posts tagged `whmcs` + `automation` may appear in both MCP Server and general
- Posts about onboarding may reference proposals but primarily belong to a different topic

When a post belongs to multiple clusters, it should link to ALL relevant pillar pages.
