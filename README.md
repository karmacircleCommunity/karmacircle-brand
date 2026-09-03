# KarmaCircle Brand

The KarmaCircle brand and design system, deployed standalone at [brand.karmacircle.org](https://brand.karmacircle.org).

Colors, typography, materials, live component samples, and voice guidelines for [KarmaCircle](https://github.com/karmacircleCommunity/KarmaCircle), a platform that connects NGOs, charities, organizations, and the people who show up for them.

Each of those is its own routed page (`/colors`, `/typography`, `/materials`, `/components`, `/voice`), navigable from the sidebar, a `Cmd/Ctrl+K` search palette, or the Previous/Next links at the bottom of each page.

## Why a separate repository

This used to be a route (`/brand`) inside the main [KarmaCircle](https://github.com/karmacircleCommunity/KarmaCircle) repo.
Split out so the brand site's design and content can grow and ship independently of the product app, and so it can live on its own domain (`brand.karmacircle.org`) instead of a path inside the main site.

**The tokens here are a manual copy**, not an automated sync, of the `@theme` block in `apps/web/src/styles/index.css` in the main repo.
If a brand color, font, or radius changes in the product, update it here too - see the comment at the top of [`src/index.css`](./src/index.css).

## Stack

Vite + React 19 + TypeScript, plain CSS with the same token-driven light/dark theming pattern the product app uses (a `:root` block for light, a `prefers-color-scheme` block for dark, both overridable by an explicit `data-theme` toggle). Tailwind v4 is wired in for any future component that wants utility classes, though nothing here uses it yet.

Routing is `react-router-dom` (`BrowserRouter`, see [`src/App.tsx`](./src/App.tsx)) - `vercel.json` rewrites every path to `index.html` so a direct load of e.g. `/colors` doesn't 404. Scrolling runs through [`lenis`](https://github.com/darkroomengineering/lenis) (`ReactLenis root` in [`src/main.tsx`](./src/main.tsx)); route changes re-home the Lenis instance to the top of the page instead of calling `window.scrollTo` directly, since the two would otherwise fight each other.

## Development

```bash
npm install
npm run dev
```

## Deployment

Deployed to Vercel, on the `karmacircle-brand` project, with `brand.karmacircle.org` as its custom domain.
