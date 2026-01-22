# Codebase Architecture

## Industry-Standard File Organization

This codebase follows enterprise-level architecture patterns similar to those used at top tech companies.

## Directory Structure

```
src/
├── components/
│   ├── layout/              # Layout-level components
│   │   ├── Header.js        # Site header/navigation
│   │   ├── Header.css       # Header styles
│   │   ├── Footer.js        # Site footer
│   │   ├── Footer.css       # Footer styles
│   │   └── index.js         # Layout exports
│   │
│   ├── features/            # Feature-specific components (by domain)
│   │   ├── hero/
│   │   │   ├── HeroSection.js
│   │   │   ├── HeroSection.css
│   │   │   └── index.js (optional)
│   │   ├── experience/
│   │   │   ├── ExperienceSection.js
│   │   │   ├── ExperienceSection.css
│   │   │   └── index.js (optional)
│   │   └── projects/
│   │       ├── ProjectsSection.js
│   │       ├── ProjectsSection.css
│   │       └── index.js (optional)
│   │
│   ├── shared/              # Reusable UI components
│   │   └── ErrorBoundary.js
│   │
│   └── index.js             # Feature components exports
│
├── styles/
│   ├── base/                # Base styles, variables, resets
│   │   └── variables.css    # CSS variables
│   └── layout/              # Layout-specific styles
│       └── App.css          # App-level styles
│
├── constants/               # Constants and configuration
│   └── navigation.js        # Navigation links, social links
│
├── hooks/                   # Custom React hooks (future)
│
├── utils/                   # Utility functions
│   └── global-three.js      # Three.js setup
│
└── App.js                   # Root component
```

## Architecture Principles

### 1. **Feature-Based Organization**
- Components are organized by feature/domain (hero, experience, projects)
- Each feature is self-contained with its own styles
- Easy to locate and modify feature-specific code

### 2. **Separation of Concerns**
- **Layout components**: Site-wide structure (Header, Footer)
- **Feature components**: Domain-specific functionality
- **Shared components**: Reusable UI elements
- **Styles**: Organized by purpose (base, layout, components)

### 3. **Scalability**
- Easy to add new features (create new folder in `features/`)
- Clear boundaries between different parts of the app
- Consistent naming conventions

### 4. **Maintainability**
- Related files are co-located
- Clear import paths
- Index files for cleaner imports

## Import Patterns

### Layout Components
```javascript
import { Header, Footer } from './components/layout';
```

### Feature Components
```javascript
import { HeroSection, ExperienceSection, ProjectsSection } from './components/features';
```

### Constants
```javascript
import { NAV_LINKS, SOCIAL_LINKS } from './constants/navigation';
```

## Benefits

1. **Easy Navigation**: Find files quickly by feature
2. **Team Collaboration**: Multiple developers can work on different features
3. **Code Reusability**: Shared components are clearly separated
4. **Testing**: Easy to test features in isolation
5. **Performance**: Can lazy-load features as needed
6. **Maintenance**: Clear structure makes updates easier

## Future Enhancements

- Add `hooks/` for custom React hooks
- Add `services/` for API calls
- Add `types/` for TypeScript (if migrating)
- Add `tests/` for component tests
- Consider CSS Modules or styled-components for better style isolation
