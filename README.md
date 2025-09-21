# Employee Management System - Monorepo

A comprehensive Employee Management System built with React, TypeScript, and Vite in a monorepo structure using pnpm workspaces.

## 📁 Project Structure

```
monorepo-typescript-project/
├── apps/                          # Frontend applications
│   ├── main-app/                 # Main navigation and dashboard app
│   ├── mood-app/                 # Employee mood tracking app  
│   └── registration-app/         # Employee registration app
├── packages/                      # Shared packages
│   ├── ui/                       # Shared UI components and utilities
│   ├── types/                    # TypeScript type definitions
│   └── api/                      # API utilities and types
├── package.json                   # Root configuration with build scripts
├── pnpm-workspace.yaml           # pnpm workspace configuration
├── tsconfig.json                 # Root TypeScript configuration
└── eslint.config.js              # ESLint configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18.0.0
- pnpm ≥ 8.0.0

### Installation
```bash
# Install dependencies for all packages
pnpm install

# Start all apps in development mode
pnpm dev

# Start specific app
pnpm start                    # Main app (default)
pnpm start:mood              # Mood tracking app
pnpm start:registration      # Registration app
```

## 🏗️ Build & Deployment

### Build Commands
```bash
# Build all apps for production
pnpm build

# Build specific apps
pnpm build:main              # Main navigation app
pnpm build:mood              # Mood tracking app  
pnpm build:registration      # Registration app
```

### Individual App URLs (Development)
- **Main App**: http://localhost:5173
- **Mood App**: http://localhost:5174  
- **Registration App**: http://localhost:5178

## 🛠️ Development Workflow

### Code Quality
```bash
# Linting
pnpm lint                    # Check for issues
pnpm lint:fix               # Auto-fix issues

# Formatting  
pnpm format                 # Format all files
pnpm format:check           # Check formatting

# Type Checking
pnpm type-check             # TypeScript validation
```

## 📦 Package Management

This project uses **pnpm workspaces** for efficient dependency management:

- **Root dependencies**: Build tools, linting, formatting shared across all packages
- **App dependencies**: React, Vite, app-specific libraries
- **Package dependencies**: Shared utilities, components, types

### Workspace Filtering
```bash
# Install dependency to specific app
pnpm --filter @ems/main-app add <package>

# Run command in all apps
pnpm --filter "./apps/**" <command>

# Run command in all packages  
pnpm --filter "./packages/**" <command>
```

## 🏛️ Architecture

### Applications
- **main-app**: Central navigation hub with links to other apps
- **mood-app**: Employee mood tracking and wellness features
- **registration-app**: Employee onboarding and registration

### Shared Packages
- **@ems/ui**: Reusable React components, SCSS utilities, notification system
- **@ems/types**: TypeScript interfaces and type definitions
- **@ems/api**: API client utilities and data fetching logic

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: SCSS with modern syntax (@use imports)
- **Build**: Vite 7.x with optimized production builds
- **Package Manager**: pnpm with workspace filtering
- **Code Quality**: ESLint 9 + Prettier + TypeScript strict mode

## 🌐 Deployment

Each app builds to its own `dist/` folder and can be deployed independently:

### Netlify Deployment
1. Build the desired app: `pnpm build:main`
2. Deploy the `apps/main-app/dist/` folder to Netlify
3. Repeat for other apps as needed

### Build Output
- Optimized bundles with code splitting
- Gzipped assets for faster loading
- Source maps for debugging
- Modern ES modules with legacy fallbacks

## 📝 Scripts Reference

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all apps for production |
| `pnpm start` | Start main app only |
| `pnpm lint` | Check code quality |
| `pnpm lint:fix` | Auto-fix linting issues |
| `pnpm format` | Format all files with Prettier |
| `pnpm type-check` | Run TypeScript validation |

---

*Built with ❤️ using modern web technologies*
### repo setup

-
