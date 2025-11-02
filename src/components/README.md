# Componentes - Atomic Design

Esta carpeta sigue la metodología **Atomic Design** para organizar los componentes de manera escalable y mantenible.

## Estructura

```
components/
├── atoms/          # Componentes básicos e indivisibles
│   └── Button.tsx  # Botón reutilizable con variantes
├── molecules/      # Combinaciones de atoms
│   └── BlogCard.tsx # Card individual de blog
├── organisms/      # Combinaciones complejas de molecules
│   └── BlogList.tsx # Lista completa de posts del blog
├── templates/      # Estructuras de página (próximamente)
├── pages/          # Instancias específicas (próximamente)
└── index.ts        # Exportaciones centralizadas
```

## Niveles de Atomic Design

### 🧱 Atoms
Componentes básicos que no se pueden dividir más:
- Button
- Input
- Typography
- Icon

### 🧬 Molecules
Combinaciones simples de atoms que funcionan juntas:
- BlogCard (combina texto, imagen, botón)
- Form fields
- Navigation items

### 🦠 Organisms
Componentes complejos que combinan molecules:
- BlogList (combina múltiples BlogCard)
- Header (navegación + logo + botones)
- Footer

### 📄 Templates
Estructuras de página que definen layouts:
- Page layouts
- Grid systems
- Content containers

### 📄 Pages
Instancias específicas de templates con contenido real:
- Home page
- Blog page
- About page

## Beneficios

- **Escalabilidad**: Fácil agregar nuevos componentes
- **Reutilización**: Componentes modulares
- **Mantenimiento**: Cambios localizados
- **Consistencia**: Diseño coherente
- **Colaboración**: Estructura clara para equipos

## Uso

```typescript
// Import desde el index centralizado
import { Button, BlogCard, BlogList } from '@/components';

// O import directo
import { Button } from '@/components/atoms/Button';
```