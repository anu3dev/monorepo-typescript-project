# Deployment Guide

This monorepo contains three separate React applications that can be deployed independently to Netlify.

## Applications

1. **Main App** (`@ems/main-app`) - The main employee management system
2. **Mood App** (`@ems/mood-app`) - Employee mood tracking
3. **Registration App** (`@ems/registration-app`) - Employee registration

## Build Commands

### All Apps
```bash
npm run build
```

### Individual Apps
```bash
npm run build:main          # Build main app
npm run build:mood          # Build mood app  
npm run build:registration  # Build registration app
```

## Netlify Deployment

### For each app, use these settings:

**Main App:**
- Build command: `npm run build:main`
- Publish directory: `apps/main-app/dist`

**Mood App:**
- Build command: `npm run build:mood`  
- Publish directory: `apps/mood-app/dist`

**Registration App:**
- Build command: `npm run build:registration`
- Publish directory: `apps/registration-app/dist`

### Environment Variables
If you need API endpoints, add these to your Netlify site settings:
- `VITE_API_BASE` - Your API base URL

### Build Settings in netlify.toml (optional)

You can create separate `netlify.toml` files in each app directory:

```toml
[build]
  command = "cd ../.. && npm run build:main"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

## Development

```bash
npm start                    # Start main app
npm run start:mood          # Start mood app
npm run start:registration  # Start registration app
```

## Pre-deployment Checks

```bash
npm run lint        # Check code quality
npm run format      # Format code
npm run type-check  # Type checking
```