# KarmaCircle Brand

The KarmaCircle brand and design system, deployed standalone at [brand.karmacircle.org](https://brand.karmacircle.org).

Colors, typography, shape, live component samples, and voice guidelines for [KarmaCircle](https://github.com/karmacircleCommunity/KarmaCircle), a platform that connects NGOs, charities, organizations, and the people who show up for them.

## Why a separate repository

This used to be a route (`/brand`) inside the main [KarmaCircle](https://github.com/karmacircleCommunity/KarmaCircle) repo.
Split out so the brand site's design and content can grow and ship independently of the product app, and so it can live on its own domain (`brand.karmacircle.org`) instead of a path inside the main site.

**The tokens here are a manual copy**, not an automated sync, of the `@theme` block in `apps/web/src/styles/index.css` in the main repo.
If a brand color, font, or radius changes in the product, update it here too - see the comment at the top of [`src/index.css`](./src/index.css).

## Stack

Vite + React 19 + TypeScript, plain CSS with the same token-driven light/dark theming pattern the product app uses (a `:root` block for light, a `prefers-color-scheme` block for dark, both overridable by an explicit `data-theme` toggle). Tailwind v4 is wired in for any future component that wants utility classes, though nothing here uses it yet.

## Development

```bash
npm install
npm run dev
```

## Deployment

Deployed to Vercel, on the `karmacircle-brand` project, with `brand.karmacircle.org` as its custom domain.
