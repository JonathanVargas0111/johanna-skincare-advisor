# 🚀 Checklist SEO Técnico - Template Base

**Versión:** 2.0 - Template para Nuevos Proyectos
**Framework:** Next.js 16+ con App Router
**Última actualización:** Noviembre 2025

---

## 🎯 Filosofía SEO - Calidad Primero

> "El SEO moderno no es sobre manipular algoritmos, sino sobre crear experiencias excepcionales que los algoritmos recompensan naturalmente."

### Principios Fundamentales:
1. **E-A-T Supreme**: Expertise, Authoritativeness, Trustworthiness
2. **User Experience First**: UX > Keywords > Technical SEO
3. **Content Authority**: Sé la respuesta más confiable para tu nicho
4. **Technical Excellence**: Performance y accesibilidad como base
5. **Data-Driven**: Mide, analiza, mejora continuamente

---

## 📊 Checklist SEO Técnico Completo

### 🔴 **CRÍTICO** - Debe estar 100% implementado antes del lanzamiento

#### **1. Arquitectura Técnica Next.js**
- [ ] **App Router** configurado correctamente
- [ ] **Static Site Generation (SSG)** para páginas públicas
- [ ] **Server-Side Rendering (SSR)** solo donde sea necesario
- [ ] **Incremental Static Regeneration (ISR)** para contenido dinámico
- [ ] **API Routes** optimizadas (no blocking)
- [ ] **Middleware** implementado para redirects y headers
- [ ] **Error boundaries** configurados
- [ ] **Loading states** implementados

#### **2. Core Web Vitals (CWV)**
- [ ] **Largest Contentful Paint (LCP)** <2.5s
- [ ] **First Input Delay (FID)** <100ms
- [ ] **Cumulative Layout Shift (CLS)** <0.1

#### **3. HTTPS y Seguridad**
- [ ] **Certificado SSL válido**
- [ ] **HTTP/2 o HTTP/3** habilitado
- [ ] **Security headers** configurados
- [ ] **No mixed content**

#### **4. URLs y Arquitectura**
- [ ] **URLs limpias y descriptivas**
- [ ] **Canonical URLs** en todas las páginas
- [ ] **Redirects 301** para URLs cambiadas
- [ ] **No trailing slashes** inconsistentes

#### **5. Datos Estructurados (JSON-LD)**
- [ ] **Schema Organization** en homepage
- [ ] **Schema Article** en blog posts
- [ ] **Schema Service** en páginas de servicios
- [ ] **Schema ContactPage** en contacto
- [ ] **Schema AboutPage** en about
- [ ] **Schema Blog** en página de blog
- [ ] **Validación** en Schema.org testing tool

### 🟡 **ALTO** - Implementar en primera iteración

#### **6. Meta Tags y Headers**
- [ ] **Title tags** únicos (50-60 caracteres)
- [ ] **Meta descriptions** únicas (140-160 caracteres)
- [ ] **Open Graph** completo
- [ ] **Twitter Cards** configurado
- [ ] **Meta robots** avanzado
- [ ] **Viewport meta tag** correcto

#### **7. Contenido y Estructura HTML**
- [ ] **Un H1 único** por página
- [ ] **Jerarquía lógica** H1→H2→H3→H4
- [ ] **Contenido semántico**
- [ ] **Alt text descriptivo** en imágenes
- [ ] **Heading hierarchy** sin saltos

#### **8. Enlaces y Navegación**
- [ ] **Enlaces internos** contextuales
- [ ] **Anchor text** descriptivo
- [ ] **No broken links**
- [ ] **Breadcrumbs** implementados

#### **9. Mobile-First y Responsive**
- [ ] **Mobile-first CSS** approach
- [ ] **Viewport configurado** correctamente
- [ ] **Touch targets** mínimos 44px
- [ ] **Horizontal scrolling** eliminado

#### **10. Performance Técnica**
- [ ] **Imágenes optimizadas**
- [ ] **CSS minificado** y crítico inline
- [ ] **JavaScript deferido**
- [ ] **Font loading** optimizado

### 🟢 **MEDIO** - Implementar en segunda iteración

#### **11. Accesibilidad (WCAG 2.1 AA)**
- [ ] **Color contrast** ratio >4.5:1
- [ ] **Keyboard navigation** completa
- [ ] **Screen reader** compatible
- [ ] **Focus indicators** visibles

#### **12. Internacionalización (i18n)**
- [ ] **Hreflang tags** si aplica multi-idioma
- [ ] **Language meta tags** correctos

#### **13. Analytics y Medición**
- [ ] **Google Analytics 4** configurado
- [ ] **Google Search Console** verificado
- [ ] **Core Web Vitals** tracking

#### **14. Contenido Dinámico**
- [ ] **CMS headless** integrado
- [ ] **Content preview** funcional
- [ ] **SEO preview tools** integrados

### 🔵 **BAJO** - Mejoras continuas post-lanzamiento

#### **15. SEO Avanzado**
- [ ] **Internal linking** strategy
- [ ] **Content clusters** implementados
- [ ] **User intent** mapping

#### **16. Social Media y Sharing**
- [ ] **Social meta tags** completos
- [ ] **Open Graph images** optimizadas

#### **17. Monitoreo y Alertas**
- [ ] **Uptime monitoring** configurado
- [ ] **SEO rank tracking** implementado

#### **18. Legal y Compliance**
- [ ] **Privacy Policy** actualizada
- [ ] **GDPR compliance** verificada

---

## 📈 KPIs de Éxito

- **Organic Traffic Growth**: +30% MoM
- **Keyword Rankings**: Top 10 para palabras clave principales
- **Core Web Vitals**: Score >90
- **Conversion Rate**: >2% desde organic

---

## 🔧 Herramientas Recomendadas

- **Google Search Console** - Indexación y errores
- **Google PageSpeed Insights** - Performance
- **Screaming Frog** - Análisis técnico completo
- **Ahrefs/Semrush** - Análisis de competencia

---

*Template base para proyectos Next.js - Actualizar según necesidades específicas*

## 📊 Checklist SEO Técnico Completo

### 🔴 **CRÍTICO** - Debe estar 100% implementado antes del lanzamiento

#### **1. Arquitectura Técnica Next.js**
- [x] **App Router** configurado correctamente
- [x] **Static Site Generation (SSG)** para páginas públicas
- [x] **Server-Side Rendering (SSR)** solo donde sea necesario
- [x] **Incremental Static Regeneration (ISR)** para contenido dinámico
- [x] **API Routes** optimizadas (no blocking)
- [x] **Middleware** implementado para redirects y headers
- [x] **Error boundaries** configurados
- [x] **Loading states** implementados

#### **2. Core Web Vitals (CWV) - Puntaje >90**
- [x] **Largest Contentful Paint (LCP)** <2.5s
  - Imágenes optimizadas con `next/image`
  - Server-side rendering para contenido crítico
  - CSS crítico inline
- [x] **First Input Delay (FID)** <100ms
  - JavaScript no bloqueante
  - Code splitting implementado
  - Third-party scripts deferred
- [x] **Cumulative Layout Shift (CLS)** <0.1
  - Dimensiones de imagen fijas
  - Fuentes con `font-display: swap`
  - No inserción de contenido dinámico sin espacio reservado

#### **3. HTTPS y Seguridad**
- [x] **Certificado SSL válido** (Let's Encrypt o similar)
- [x] **HTTP/2 o HTTP/3** habilitado
- [x] **Security headers** configurados (CSP, HSTS, X-Frame-Options)
- [x] **Subresource Integrity** para CDN resources
- [x] **No mixed content** (todo HTTPS)

#### **4. URLs y Arquitectura**
- [x] **URLs limpias y descriptivas** (kebab-case)
- [x] **Canonical URLs** en todas las páginas
- [x] **Redirects 301** para URLs cambiadas
- [x] **No trailing slashes** inconsistentes
- [x] **URL parameters** minimizados
- [x] **Pagination** con rel="next/prev"

#### **5. Datos Estructurados (JSON-LD)**
- [x] **Organization Schema** en homepage
- [x] **Article Schema** en blog posts
- [x] **Service Schema** en páginas de servicios
- [x] **ContactPage Schema** en contacto
- [x] **AboutPage Schema** en about
- [x] **Blog Schema** en página de blog
- [x] **Validación** en Schema.org testing tool
- [x] **Marcado correcto** sin errores

### 🟡 **ALTO** - Implementar en primera iteración

#### **6. Meta Tags y Headers**
- [x] **Title tags** únicos (50-60 caracteres)
- [x] **Meta descriptions** únicas (140-160 caracteres)
- [x] **Open Graph** completo (title, description, image, url, type)
- [x] **Twitter Cards** configurado
- [x] **Meta robots** avanzado (index, follow, max-snippet, max-image-preview)
- [x] **Viewport meta tag** correcto
- [x] **Charset UTF-8** especificado
- [x] **Language meta tag** correcto

#### **7. Contenido y Estructura HTML**
- [x] **Un H1 único** por página
- [x] **Jerarquía lógica** H1→H2→H3→H4
- [x] **Contenido semántico** (header, nav, main, article, aside, footer)
- [x] **Alt text descriptivo** en todas las imágenes
- [x] **Heading hierarchy** sin saltos
- [x] **No texto oculto** para SEO
- [x] **Contenido accesible** sin JavaScript

#### **8. Enlaces y Navegación**
- [x] **Enlaces internos** contextuales y variados
- [x] **Anchor text** descriptivo y natural
- [x] **No broken links** (404s)
- [x] **Enlaces externos** con rel="noopener noreferrer"
- [x] **Breadcrumbs** implementados
- [x] **Navigation menu** accesible
- [x] **Sitemap HTML** para usuarios

#### **9. Mobile-First y Responsive**
- [x] **Mobile-first CSS** approach
- [x] **Viewport configurado** correctamente
- [x] **Touch targets** mínimos 44px
- [x] **Horizontal scrolling** eliminado
- [x] **Font sizes** legibles en mobile
- [x] **Images responsive** con srcset
- [x] **Mobile navigation** funcional

#### **10. Performance Técnica**
- [x] **Imágenes optimizadas** (WebP/AVIF, lazy loading)
- [x] **CSS minificado** y crítico inline
- [x] **JavaScript deferido** y code-split
- [x] **Font loading** optimizado (font-display: swap)
- [x] **Critical CSS** extraído
- [x] **Bundle analyzer** usado para optimización
- [x] **CDN configurado** para assets estáticos

### 🟢 **MEDIO** - Implementar en segunda iteración

#### **11. Accesibilidad (WCAG 2.1 AA)**
- [x] **Color contrast** ratio >4.5:1
- [x] **Keyboard navigation** completa
- [x] **Screen reader** compatible
- [x] **Focus indicators** visibles
- [x] **Alt text** en todas las imágenes
- [x] **Form labels** asociados correctamente
- [x] **Heading hierarchy** lógica
- [x] **Language** especificado correctamente

#### **12. Internacionalización (i18n)**
- [ ] **Hreflang tags** si aplica multi-idioma
- [ ] **Language meta tags** correctos
- [ ] **URL structure** para diferentes idiomas
- [ ] **Content localization** completa
- [ ] **Currency/date** formats locales

#### **13. Analytics y Medición**
- [x] **Google Analytics 4** configurado
- [x] **Google Search Console** verificado
- [x] **Core Web Vitals** tracking
- [x] **Conversion tracking** implementado
- [x] **Custom events** para engagement
- [x] **Heatmaps** y session recordings
- [x] **A/B testing** preparado

#### **14. Contenido Dinámico**
- [x] **CMS headless** integrado (si aplica)
- [x] **Content preview** funcional
- [x] **SEO preview tools** integrados
- [x] **Content scheduling** implementado
- [x] **Version control** para contenido
- [x] **Content audit** automatizado

### 🔵 **BAJO** - Mejoras continuas post-lanzamiento

#### **15. SEO Avanzado**
- [ ] **Internal linking** strategy documentada
- [ ] **Content clusters** implementados
- [ ] **Silo architecture** aplicada
- [ ] **User intent** mapping completo
- [ ] **Search intent** optimization
- [ ] **Featured snippets** optimization
- [ ] **Local SEO** si aplica

#### **16. Social Media y Sharing**
- [x] **Social meta tags** completos
- [x] **Open Graph images** optimizadas
- [x] **Twitter Cards** validadas
- [x] **LinkedIn sharing** optimizado
- [x] **WhatsApp sharing** funcional
- [x] **Pinterest optimization** si aplica

#### **17. Monitoreo y Alertas**
- [x] **Uptime monitoring** configurado
- [x] **Core Web Vitals** alerts
- [x] **Broken links** monitoring
- [x] **SEO rank tracking** implementado
- [x] **Backlink monitoring** activo
- [x] **Content freshness** alerts

#### **18. Legal y Compliance**
- [x] **Privacy Policy** actualizada
- [x] **Terms of Service** claras
- [x] **Cookie consent** implementado
- [x] **GDPR compliance** verificada
- [x] **Accessibility statement** disponible
- [x] **Contact information** clara

---

## 🛠️ Guías de Implementación Next.js Específicas

### **Configuración App Router**
```typescript
// app/layout.tsx - Metadata base
export const metadata: Metadata = {
  metadataBase: new URL('https://tu-dominio.com'),
  title: { default: 'Título Base', template: '%s | Tu Sitio' },
  description: 'Descripción base del sitio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-verification',
  },
};
```

### **Optimización de Imágenes**
```tsx
// Componente optimizado
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Descripción detallada de la imagen"
  width={1200}
  height={600}
  priority // Para above-the-fold
  placeholder="blur"
  blurDataURL="data:image/..." // Placeholder personalizado
/>
```

### **JSON-LD Dinámico**
```tsx
// En page.tsx
export default function Page({ params }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    // ... más propiedades
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Contenido de la página */}
    </>
  );
}
```

---

## 📈 Métricas de Éxito y KPIs

### **SEO KPIs Principales**
- **Organic Traffic Growth**: +30% MoM
- **Keyword Rankings**: Top 10 para palabras clave principales
- **Core Web Vitals**: Score >90
- **Click-Through Rate**: >3% desde SERP
- **Conversion Rate**: >2% desde organic

### **Content KPIs**
- **Time on Page**: >2 minutos promedio
- **Bounce Rate**: <40%
- **Pages per Session**: >2.5
- **Social Shares**: >10 por post
- **Backlinks**: +5 mensuales

### **Technical KPIs**
- **Page Speed**: <2s load time
- **Mobile Usability**: 100% pages passing
- **Indexability**: 100% pages indexed
- **Crawl Errors**: 0 errores críticos

---

## 🔧 Herramientas Recomendadas

### **SEO Auditing**
- **Google Search Console** - Indexación y errores
- **Google PageSpeed Insights** - Performance
- **Screaming Frog** - Análisis técnico completo
- **Ahrefs/Semrush** - Análisis de competencia
- **Schema.org Validator** - Validación structured data

### **Monitoring Continuo**
- **Google Analytics 4** - Comportamiento usuarios
- **Hotjar** - Heatmaps y recordings
- **Sentry** - Error tracking
- **UptimeRobot** - Monitoring disponibilidad

### **Content Optimization**
- **SurferSEO** - Content optimization
- **Clearscope** - Topic research
- **AnswerThePublic** - Search intent
- **Google Trends** - Tendencias de búsqueda

---

## 📋 Checklist de Pre-Lanzamiento

### **Día -7: QA Técnica**
- [ ] Lighthouse score >90 en todas las métricas
- [ ] No errores de consola en producción
- [ ] Todas las páginas cargan correctamente
- [ ] Formularios funcionales
- [ ] Navegación completa probada

### **Día -3: QA SEO**
- [ ] Todas las páginas indexables
- [ ] Meta tags correctos
- [ ] Structured data válido
- [ ] Sitemap.xml generado
- [ ] Robots.txt configurado

### **Día -1: QA de Contenido**
- [ ] Contenido original y de calidad
- [ ] Imágenes con alt text
- [ ] Enlaces internos funcionales
- [ ] CTAs claros y atractivos
- [ ] Proofreading completo

### **Post-Lanzamiento (Semana 1)**
- [ ] Google Search Console configurado
- [ ] Google Analytics verificado
- [ ] Sitemap enviado a motores de búsqueda
- [ ] Indexación inicial verificada
- [ ] Primer reporte de rankings

---

## 🎯 Conclusión

Este checklist representa el **estándar de calidad Nandark** para SEO técnico. Cada proyecto debe cumplir con al menos el 80% de los items marcados como CRÍTICO antes del lanzamiento, y trabajar continuamente en las mejoras restantes.

**Recuerda:** El SEO es un proceso continuo. Monitorea, mide, analiza y mejora constantemente.

---

*Documento creado por Nandark - Última actualización: Noviembre 2025*
- [ ] **Twitter Card - Descripción (`twitter:description`):** ¿Está definida?
- [ ] **Twitter Card - Imagen (`twitter:image`):** ¿Está especificada?

### Datos Estructurados (Schema.org)

- [ ] **JSON-LD:** ¿La página incluye un script de JSON-LD que describe el contenido?
    -   Para posts de blog: Usar el schema `BlogPosting`.
    -   Para páginas de servicios: Usar el schema `Service`.
    -   Para la página de contacto: Usar el schema `ContactPage`.
    -   Para la página "Sobre Mí": Usar el schema `AboutPage`.

### Aspectos Técnicos

- [ ] **URL Amigable:** ¿La URL es corta, descriptiva e incluye la palabra clave principal (ej. `/blog/rutina-piel-seca`)?
- [ ] **Imágenes Optimizadas:**
    -   ¿Las imágenes están comprimidas para una carga rápida?
    -   ¿Los nombres de archivo son descriptivos (ej. `rutina-skincare-piel-seca.jpg`)?
    -   ¿Todas las imágenes tienen texto alternativo (`alt text`) descriptivo?
- [ ] **Diseño Responsivo:** ¿La página se ve y funciona bien en dispositivos móviles?
- [ ] **Velocidad de Carga:** ¿La página carga en menos de 3 segundos? (Puedes usar herramientas como Google PageSpeed Insights para medirlo).
- [ ] **URL Canónica (`<link rel="canonical">`):** ¿La página tiene una URL canónica para evitar contenido duplicado?
