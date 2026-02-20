# MX Modules Skills Index

Skills disponibles para auditar y optimizar el sitio web.

## Quick Reference

| Skill | Comando | Propósito |
|-------|---------|-----------|
| [SEO Check](#seo-check) | `/seo-check` | Auditoría SEO/AEO completa |
| [GSC Check](#gsc-check) | `/gsc-check` | Google Search Console analysis (via MCP) |
| [GSC Insights](#gsc-insights) | `/gsc-insights` | Interpretación estratégica de datos GSC (striking distance, canibalización, CTR, gaps) |
| [GA4 Analytics](#ga4-analytics) | (via MCP tools) | Google Analytics 4 reports (traffic, behavior, events) |
| [AI SEO Check](#ai-seo-check) | `/ai-seo-check` | Optimización para AI search (Google AI Overviews, Perplexity) |
| [ICP Check](#icp-check) | `/icp-check` | Validar targeting de cliente ideal |
| [Copy Review](#copy-review) | `/copy-review` | Revisar copy para conversión |
| [Grammar Check](#grammar-check) | `/grammar-check` | Auditoría gramática y ortografía |
| [GEO Check](#geo-check) | `/geo-check` | Validar llms.txt y AI crawlers |
| [SEO FAQ](#seo-faq) | `/seo-faq` | Investigar preguntas FAQ estratégicas |
| [Link Check](#link-check) | `/link-check` | Detectar links rotos |
| [URL Check](#url-check) | `/url-check` | Validar slugs SEO-friendly |
| [A11y Check](#a11y-check) | `/a11y-check` | Auditoría accesibilidad WCAG 2.2 |
| [Cluster Check](#cluster-check) | `/cluster-check` | Auditoría topic clusters e internal linking |

---

## Skills por Categoría

### Estrategia & Posicionamiento

#### ICP Check
```
/icp-check
/icp-check /modules/mx-metrics
```
**Propósito**: Analiza si las páginas atraen al cliente ideal (ICP) o red flags que harán churn.

**Evalúa**:
- Headlines y hero copy
- Calificadores de tamaño/fit
- FAQs que filtran malos clientes
- Lenguaje de features vs valor
- Social proof

**Output**: Score de alineación ICP (0-100) + lista de fixes prioritarios.

---

#### SEO FAQ
```
/seo-faq
/seo-faq mcp-server
```
**Propósito**: Investiga preguntas reales que los usuarios buscan para crear FAQs estratégicos.

**Hace**:
- Lee productos y competidores
- Web search de preguntas reales
- Clasifica por intención (comercial, informacional, comparación)
- Prioriza por valor SEO y conversión

**Output**: Reporte markdown con tabla de preguntas para insertar en páginas.

---

### Data & Analytics

#### GSC Check
```
/gsc-check                         # Full overview (performance + queries + indexing)
/gsc-check performance             # Performance overview (clicks, impressions, CTR)
/gsc-check queries                 # Top queries by clicks
/gsc-check pages                   # Top pages by clicks
/gsc-check indexing                # Check indexing status of key pages
/gsc-check compare                 # Compare last 28d vs previous 28d
/gsc-check page /modules/proposals # Queries for a specific page
```
**Propósito**: Análisis de Google Search Console usando el MCP conectado.

**Requiere**: MCP `gsc` conectado (Google Search Console API).

**Analiza**:
- Performance overview (clicks, impressions, CTR, average position)
- Top queries y pages por clicks
- Estado de indexación de páginas clave
- Comparación entre períodos
- Queries por página específica
- Detección de oportunidades (high impressions + low CTR, position 5-20)

**Output**: Reporte con tablas de métricas + oportunidades priorizadas + action items.

**Nota**: La API de GSC NO puede solicitar indexación. Si una página necesita indexación, el usuario debe hacerlo manualmente en la UI web de GSC.

---

#### GSC Insights
```
/gsc-insights                          # Full strategic analysis (6 módulos)
/gsc-insights striking-distance        # Keywords en posición 4-20 con muchas impresiones
/gsc-insights cannibalization          # Queries donde 2+ páginas compiten entre sí
/gsc-insights ctr-audit                # CTR real vs benchmarks por posición
/gsc-insights content-gaps             # Queries sin página dedicada optimizada
/gsc-insights intent                   # Clasificar queries por intención de búsqueda
/gsc-insights trends                   # Queries subiendo y bajando (28d vs 28d)
/gsc-insights page /modules/mcp-server # Análisis profundo de una página
```
**Propósito**: Interpretación estratégica de datos de Google Search Console. Va más allá de los datos crudos para encontrar oportunidades accionables.

**Requiere**: MCP `gsc` conectado (Google Search Console API).

**Diferencia con `/gsc-check`**: gsc-check extrae datos crudos (tablas). gsc-insights interpreta esos datos con frameworks de SEO profesional.

**6 Módulos de Análisis**:
- **Striking Distance**: Keywords en posiciones 4-20 que se pueden empujar a top 3
- **Cannibalization**: Queries donde múltiples páginas propias compiten
- **CTR Audit**: CTR real comparado contra benchmarks (First Page Sage 2026)
- **Content Gaps**: Queries con impresiones altas sin contenido dedicado
- **Intent Classification**: Clasificar queries (informacional, comercial, transaccional, navegacional)
- **Trends**: Queries subiendo o bajando entre períodos

**Output**: Executive summary + top 5 acciones priorizadas por ROI + análisis detallado por módulo.

**Nota**: Los benchmarks de CTR son promedios de la industria. B2B SaaS de nicho puede variar.

---

#### GA4 Analytics
```
(No slash command — use MCP tools directly or ask Claude to run GA4 reports)
```
**Propósito**: Google Analytics 4 data via the official `analytics-mcp` server.

**Requiere**: MCP `analytics` conectado (Google Analytics Data API).

**Property ID**: `520184479` (MX Modules)

**Herramientas disponibles**:
- `get_account_summaries` — List all GA4 accounts and properties
- `get_property_details` — Property configuration
- `run_report` — Standard reports (sessions, users, pages, events, bounce rate, etc.)
- `run_realtime_report` — Real-time active users and events
- `get_custom_dimensions_and_metrics` — Custom dimensions/metrics
- `list_google_ads_links` — Connected Ads accounts

**Tip**: Para datos limpios (sin trafico interno), filtrar excluyendo Colombia y Australia:
```
dimension_filter: {
  "and_group": {"expressions": [
    {"not_expression": {"filter": {"field_name": "country", "string_filter": {"match_type": 1, "value": "Colombia"}}}},
    {"not_expression": {"filter": {"field_name": "country", "string_filter": {"match_type": 1, "value": "Australia"}}}}
  ]}
}
```

**Setup**: See `docs/MCP_SETUP_GUIDE.md` for installation instructions.

---

### SEO & Contenido

#### AI SEO Check
```
/ai-seo-check
/ai-seo-check /modules/mcp-server
/ai-seo-check --quick
```
**Propósito**: Validar que las páginas estén optimizadas para aparecer citadas en resultados de AI search (Google AI Overviews, Perplexity, ChatGPT, Claude).

**Evalúa**:
- Estructura de contenido para extractos AI
- Datos estructurados que AI parsea
- Formato de respuestas directas
- Citabilidad del contenido

**Output**: Score + lista de optimizaciones por página.

---

#### SEO Check
```
/seo-check
/seo-check /modules/mcp-server
/seo-check --quick
```
**Propósito**: Auditoría SEO y AEO (Answer Engine Optimization) completa.

**Valida**:
- Metadata (title, description, canonical)
- Headings (H1 único, jerarquía)
- Schema.org (Product, FAQ, Breadcrumb)
- Imágenes (alt text, next/image)
- Links internos

**Output**: Checklist con passed/failed + score.

---

#### Copy Review
```
/copy-review /modules/mx-metrics
```
**Propósito**: Revisar copywriting para conversión usando frameworks PASTOR/PAS/AIDA.

**Evalúa**:
- 5-second test (¿qué hace? ¿para quién?)
- Headlines y CTAs
- Beneficios vs features
- Objeciones no respondidas
- Two paths principle

**Output**: Análisis por sección + sugerencias de mejora.

---

#### Grammar Check
```
/grammar-check
/grammar-check /modules/mcp-server
```
**Propósito**: Auditoría sistemática de gramática y ortografía usando el sitemap.

**Revisa**:
- Errores de ortografía y typos
- Gramática (subject-verb agreement, tenses)
- Puntuación ("Cannot" vs "Can not")
- Consistencia de estilo
- Frases awkward

**Output**: Reporte por página con errores categorizados (Critical/Moderate/Minor).

---

#### GEO Check
```
/geo-check
/geo-check --urls
```
**Propósito**: Validar optimización para LLMs (Generative Engine Optimization).

**Valida**:
- `public/llms.txt` estructura y contenido
- `public/llms-full.txt` detalles técnicos
- AI crawlers permitidos en robots.txt
- Precios match con SSOT
- Cobertura de URLs

**Output**: Score GEO (0-100) + checks passed/failed.

---

### Technical

#### Link Check
```
/link-check
/link-check --external
```
**Propósito**: Detectar links rotos internos, externos y anchors.

**Valida**:
- Links internos existen (page.js)
- Links externos responden (opcional)
- Anchors (#id) existen en página
- Uso de `<Link>` vs `<a>`

**Output**: Lista de links rotos por categoría.

---

#### URL Check
```
/url-check
```
**Propósito**: Validar que los slugs/URLs sigan best practices SEO.

**Valida**:
- Lowercase only
- Guiones (no underscores)
- Sin palabras vacías
- Longitud < 60 chars
- Descriptivos y legibles

**Output**: Lista de URLs que necesitan cambios.

---

#### A11y Check
```
/a11y-check
/a11y-check /modules/mx-metrics
```
**Propósito**: Auditoría de accesibilidad WCAG 2.2 AA.

**Valida**:
- Contraste de colores (4.5:1)
- Focus states en interactivos
- Touch targets (44x44px mínimo)
- Alt text en imágenes
- Aria labels donde aplica

**Output**: Issues por severidad (critical, serious, moderate).

---

#### Cluster Check
```
/cluster-check
/cluster-check proposals
/cluster-check --summary
```
**Propósito**: Auditar la salud de topic clusters (internal linking entre pillar pages, docs y blog posts).

**Valida**:
- Spoke → Pillar: cada blog post linkea a su producto
- Spoke → Docs: cada blog post linkea a documentación
- Spoke ↔ Spoke: cross-links entre posts del mismo cluster
- Pillar → Spokes: producto tiene sección de blog relacionado
- Docs → Pillar: docs linkean de vuelta al producto

**Output**: Score por cluster (0-100) + lista priorizada de links faltantes.

---

## Cuándo Usar Cada Skill

| Situación | Skill(s) recomendados |
|-----------|----------------------|
| Crear nueva página de producto | `/seo-check` → `/icp-check` → `/copy-review` |
| Antes de launch | `/grammar-check` → `/link-check` → `/cluster-check` → `/a11y-check` → `/geo-check` |
| Mejorar conversiones | `/icp-check` → `/copy-review` |
| Mejorar SEO | `/seo-check` → `/seo-faq` → `/cluster-check` → `/url-check` |
| Revisar performance en Google | `/gsc-check` → `/gsc-insights` |
| Encontrar quick wins SEO | `/gsc-insights striking-distance` → `/gsc-insights ctr-audit` |
| Detectar canibalización | `/gsc-insights cannibalization` |
| Revisar para LLMs/AI | `/geo-check` → `/ai-seo-check` |
| Revisar gramática/ortografía | `/grammar-check` |
| Auditoría completa | Todos en orden arriba |

---

## Archivos de Cada Skill

```
.claude/skills/
├── README.md              ← Este archivo
├── a11y-check/
│   └── skill.md
├── ai-seo-check/
│   └── instructions.md
├── cluster-check/
│   └── skill.md
├── copy-review/
│   ├── SKILL.md
│   ├── checklist.md
│   ├── examples.md
│   └── frameworks.md
├── geo-check/
│   └── skill.md
├── grammar-check/
│   └── skill.md
├── gsc-check/
│   └── SKILL.md
├── gsc-insights/
│   └── SKILL.md
├── icp-check/
│   └── skill.md
├── link-check/
│   └── skill.md
├── seo-check/
│   └── SKILL.md
├── seo-faq/
│   └── skill.md
└── url-check/
    └── skill.md
```

---

## Contexto que Leen los Skills

Todos los skills leen `src/lib/products.js` (SSOT) primero. Algunos leen archivos adicionales:

| Skill | Archivos adicionales |
|-------|---------------------|
| seo-faq | `docs/competitors.md`, todas las páginas de productos |
| geo-check | `public/llms.txt`, `public/llms-full.txt`, `src/app/robots.js` |
| gsc-check | Requiere MCP `gsc` conectado (Google Search Console API) |
| gsc-insights | Requiere MCP `gsc` conectado. Lee `src/lib/products.js` para mapeo de queries a productos |
| GA4 Analytics | Requiere MCP `analytics` conectado. Property ID: `520184479` |
| copy-review | `docs/checklists/page-review.md`, frameworks docs |
| icp-check | `docs/competitors.md` (si existe) |
