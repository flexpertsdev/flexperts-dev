# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (port 8080)
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Project Architecture

This is a **Flexperts.dev** web application built with:
- **React 18** with TypeScript
- **Vite** as build tool (configured on port 8080)
- **React Router v6** for routing
- **Tailwind CSS** for styling with custom Quicksand font
- **shadcn/ui** components library
- **Tanstack Query** for data fetching
- **React Hook Form** with Zod validation

### Key Directories

- `/src/components/` - Reusable UI components
  - `/ui/` - shadcn/ui component library (40+ components)
  - `/layout/` - Layout components (Navigation, Footer, Layout wrapper)
- `/src/pages/` - Route page components
- `/src/hooks/` - Custom React hooks
- `/src/lib/` - Utility functions
- `/docs/` - Documentation including comprehensive design system

### Routing Structure

Routes are defined in `src/App.tsx`:
- `/` - Home page
- `/you-build` - You Build service page
- `/we-build` - We Build service page
- `/build-together` - Build Together service page
- `/about` - About page
- `/contact` - Contact page
- `*` - 404 Not Found (catch-all)

### Design System

The project follows a comprehensive design system documented in `docs/design.md` with:
- **Apple-inspired minimalism** with glassmorphism effects
- **Primary color**: Green (#22C55E)
- **Font**: Quicksand (all weights)
- **Spacing**: Generous whitespace, consistent padding/margins
- **Components**: Glass cards, gradient text effects, numbered process steps
- **Responsive**: Mobile-first approach with Tailwind breakpoints

### Path Aliases

- `@/` resolves to `./src/` directory

### Important Configuration Files

- `vite.config.ts` - Vite configuration with React SWC plugin
- `tailwind.config.ts` - Extended Tailwind config with custom colors and animations
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

### Testing

No test framework is currently configured in package.json. When implementing tests, check for testing setup or ask for the appropriate test command.

### Lovable Integration

This project was created with Lovable.dev (Project URL: https://lovable.dev/projects/e18ba683-94ca-4a26-aba9-70bc29adb022). Changes made via Lovable are automatically committed to the repository.