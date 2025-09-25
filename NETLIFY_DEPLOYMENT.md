# Netlify Deployment Guide - Fix for React Router

## Problem
Single-page applications (SPAs) using React Router work locally but fail on Netlify when users:
- Navigate directly to routes like `/about`, `/blog`, `/contact`
- Refresh the page on any route other than `/`
- Share direct links to specific routes

This happens because Netlify tries to find actual files/folders for these routes, but they don't exist on the server - React Router handles them client-side.

## Solution Files Created

### 1. `public/_redirects`
This file tells Netlify to serve `index.html` for all routes, allowing React Router to handle routing client-side.

```
/*    /index.html   200
```

### 2. `netlify.toml`
Alternative/additional configuration file that provides the same functionality with more options:

```toml
[build]
  publish = "apps/main-app/dist"
  command = "cd apps/main-app && pnpm install && pnpm build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## How It Works

1. **Local Development**: Vite dev server automatically handles SPA routing
2. **Production Build**: `vite build` creates static files in `/dist`
3. **Netlify Deployment**: 
   - Builds using `pnpm build` command
   - Publishes files from `/dist` directory
   - Uses `_redirects` or `netlify.toml` to redirect all routes to `index.html`
   - React Router takes over once `index.html` loads

## Deployment Steps

1. **Build the project locally (optional test)**:
   ```bash
   cd apps/main-app
   pnpm build
   ```

2. **Deploy to Netlify**:
   - Connect your GitHub repository to Netlify
   - Netlify will automatically use the root `netlify.toml` configuration
   - **Or manually set in Netlify Dashboard**:
     - Build command: `cd apps/main-app && pnpm install && pnpm build`
     - Publish directory: `apps/main-app/dist`
   - Deploy

3. **Verify**:
   - Test direct navigation to `/about`, `/blog`, `/contact`
   - Test page refresh on different routes
   - Test sharing direct links

## Files Structure After Fix

```
apps/main-app/
├── public/
│   └── _redirects          # ← New file for SPA routing
├── netlify.toml            # ← New file (alternative config)
├── dist/                   # ← Created after build
│   ├── index.html
│   ├── assets/
│   └── _redirects          # ← Copied from public/
├── src/
│   └── routes/
│       └── AppRoutes.tsx   # Your React Router setup
└── package.json
```

## Important Notes

- Both `_redirects` and `netlify.toml` serve the same purpose - you can use either or both
- The `_redirects` file gets copied to your build directory automatically
- Status code `200` is important - it serves the same content but keeps the URL intact
- This fix works for any SPA framework (React, Vue, Angular, etc.)

## Alternative Solutions

If the above doesn't work, you can also try:

1. **Hash Router**: Use `HashRouter` instead of `BrowserRouter` (not recommended for SEO)
2. **Manual redirect rules**: Add specific redirects for each route in Netlify dashboard
3. **Server-side rendering**: Use Next.js or similar framework for SSR

## Testing

After deployment, test these scenarios:
- ✅ Direct navigation to `yoursite.com/about`
- ✅ Refresh page on `yoursite.com/blog`
- ✅ Share link `yoursite.com/contact`
- ✅ Browser back/forward buttons
- ✅ 404 pages still work (if you have a catch-all route)