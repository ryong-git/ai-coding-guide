# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI coding guide website built with Next.js 14+ using the App Router. The project structure includes:

- **Main application**: `ai-coding-guide/` - A guide covering AI coding tools and implementation examples
- **Documentation**: `docs/` - Contains PRD, implementation roadmaps, and analysis guides
- **Content focus**: AI coding methodology and practical implementations

## Common Development Commands

### Development Server
```bash
cd ai-coding-guide
npm run dev          # Start development server with Turbopack
```

### Build and Production
```bash
npm run build        # Build for production with Turbopack
npm start           # Start production server
```

### Code Quality
```bash
npm run lint        # Run ESLint for code quality checks
```

### Package Management
```bash
npm install         # Install dependencies
```

## Architecture and Structure

### Application Structure
- **App Router**: Uses Next.js 14+ App Router with file-based routing
- **Content Management**: MDX support for rich content with embedded React components
- **Styling**: Tailwind CSS with custom design system, shadcn/ui components
- **Theming**: Dark/light mode support with system preference detection
- **Typography**: Inter font for UI, JetBrains Mono for code blocks

### Key Directories
- `src/app/`: App Router pages with nested routing structure (part1/, part2/, etc.)
- `src/components/ui/`: Reusable UI components (Navigation, ThemeProvider, CodeBlock, etc.)
- `src/lib/utils.ts`: Utility functions using clsx and tailwind-merge
- `public/`: Static assets including favicons and manifest

### Content Organization
The guide is structured in 9 main parts covering AI coding concepts, tools, and implementation patterns.

### Component Patterns
- **Navigation**: Collapsible sidebar with hierarchical menu structure
- **Theme System**: CSS custom properties with class-based dark mode
- **Layout**: Responsive design with mobile-first approach
- **Code Highlighting**: Configured for AWS CLI, Terraform, YAML syntax support

## Key Configuration Files

### TypeScript Configuration
- Strict mode enabled with ES2017 target
- Path aliases: `@/*` maps to `./src/*`
- MDX support with `@types/mdx`

### Next.js Configuration
- Turbopack enabled for faster builds
- MDX integration for content pages
- Static site generation capabilities

### ESLint Configuration  
- Uses Next.js recommended rules
- TypeScript support enabled
- Ignores build directories and generated files

### Tailwind Configuration
- Custom font families (Inter, JetBrains Mono)
- Extended color palette for theming
- Typography plugin for content formatting
- Dark mode class-based strategy

## Development Guidelines

### File Conventions
- Pages use TypeScript with `.tsx` extension
- Components follow PascalCase naming
- Utility files use camelCase with `.ts` extension
- MDX content files for rich documentation

### Styling Approach
- Tailwind utility classes for styling
- Custom CSS properties for theming
- Mobile-first responsive design
- Consistent spacing using Tailwind's scale

### Content Management
- MDX files combine Markdown with React components  
- Code examples with syntax highlighting
- Interactive elements using shadcn/ui components
- Structured navigation with reading progress

### Build Process
- Turbopack for fast development and production builds
- Static site generation for optimal performance
- Automatic code splitting and optimization
- SEO-optimized with proper meta tags and Open Graph support

## Special Considerations

### Korean Content Support
- Proper lang="ko" attribute in layout
- Korean-optimized typography and spacing

### Content Focus
- AWS CLI and cloud infrastructure examples
- Multi-profile environment configurations  
- Infrastructure as Code patterns (Terraform, CDK)
- Security best practices and guidelines