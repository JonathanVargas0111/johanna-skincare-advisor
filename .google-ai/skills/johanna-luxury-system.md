# Johanna Luxury System - Reglas Globales (Fase 5)

Este documento define los estándares estéticos y de comportamiento para todos los componentes del sistema Johanna Skincare Advisor.

## 1. Paleta de Sombras y Bordes

- **Regla**: Todas las tarjetas, contenedores flotantes y elementos destacados deben usar la clase `shadow-xl`.
- **Anillo de Lujo**: Añadir siempre un anillo sutil para definición: `ring-1 ring-white/10` (en fondos oscuros) o `ring-1 ring-gray-100` (en fondos claros si es necesario).

## 2. Transiciones Globales

- **Regla**: Todo botón (`button`), enlace (`a`), y elemento con hover debe implementar:
  `transition-all duration-300 ease-in-out`
- **Comportamiento**: Los cambios de color, escala o sombra deben ser fluidos, nunca instantáneos.

## 3. Efecto de Vidrio (Glassmorphism)

- **Regla**: Para secciones con fondos degradados o imágenes detrás:
  `bg-white/5 backdrop-blur-md border border-white/10`
- **Adaptación**: En fondos extremadamente claros, ajustar a `bg-white/40` para legibilidad, manteniendo el blur.

## 4. Espaciado Maestro (Aire)

- **Regla**: El padding vertical estándar para secciones es `py-24`.
- **Excepción**: Secciones de alto impacto pueden usar `py-32` para maximizar el "aire" y la sensación de exclusividad.

## 5. Animaciones de Revelado Sincronizado

- **Regla**: Cada 'Organismo' debe entrar en escena usando la clase `.reveal-up` (definida en globals.css).
- **Delays escalonados**: Usar `[animation-delay:Xms]` para que el flujo de los elementos se sienta orgánico y no aparezca todo de golpe.

---
*Cualquier nuevo componente debe heredar estas reglas para mantener la integridad de la marca.*
