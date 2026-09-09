# KarmaCircle Brand

The KarmaCircle brand and design system, deployed standalone at [brand.karmacircle.org](https://brand.karmacircle.org).

Colors, typography, materials, live component samples, and voice guidelines for [KarmaCircle](https://github.com/karmacircleCommunity/KarmaCircle), a platform that connects NGOs, charities, organizations, and the people who show up for them.

Each of those is its own routed page (`/colors`, `/typography`, `/materials`, `/components`, `/voice`), navigable from the sidebar, a `Cmd/Ctrl+K` search palette, or the Previous/Next links at the bottom of each page.

From 980px up, that sidebar is a collapsible column rather than a fixed one - collapsed by default, since a docs nav's job is to stay out of the way until it's asked for.
A toggle pinned to the top of the column opens and closes it (`useSidebar` in [`src/hooks/useSidebar.ts`](./src/hooks/useSidebar.ts)), and the choice is remembered in `localStorage` from then on.
Below that width the sidebar is the same horizontal top bar it always was - collapse is a desktop-only concept, gated by `useMediaQuery` in [`src/hooks/useMediaQuery.ts`](./src/hooks/useMediaQuery.ts) so the mobile nav is never hidden by a stale desktop preference.

## Why a separate repository

This used to be a route (`/brand`) inside the main [KarmaCircle](https://github.com/karmacircleCommunity/KarmaCircle) repo.
Split out so the brand site's design and content can grow and ship independently of the product app, and so it can live on its own domain (`brand.karmacircle.org`) instead of a path inside the main site.

**The tokens here are a manual copy**, not an automated sync, of the `@theme` block in `apps/web/src/styles/index.css` in the main repo.
If a brand color, font, or radius changes in the product, update it here too - see the comment at the top of [`src/index.css`](./src/index.css).

## Stack

Vite + React 19 + TypeScript, plain CSS with the same token-driven light/dark theming pattern the product app uses (a `:root` block for light, a `prefers-color-scheme` block for dark, both overridable by an explicit `data-theme` toggle). Tailwind v4 is wired in for any future component that wants utility classes, though nothing here uses it yet.

Motion is deliberately one idea: a single `rise` keyframe in [`src/index.css`](./src/index.css), reused with different delays.
Hero copy plays it on mount, the Overview cards play it when the grid scrolls into view (`useReveal` in [`src/hooks/useReveal.ts`](./src/hooks/useReveal.ts) flips a `data-reveal` attribute and CSS does the rest), and the hero stat counters tick up via [`CountUp`](./src/components/CountUp.tsx).
All of it is decoration over content that is already correct, so `prefers-reduced-motion: reduce` switches the whole set off rather than shortening it - in CSS at the bottom of `index.css`, and in JS inside both `useReveal` and `CountUp`.

Routing is `react-router-dom` (`BrowserRouter`, see [`src/App.tsx`](./src/App.tsx)) - `vercel.json` rewrites every path to `index.html` so a direct load of e.g. `/colors` doesn't 404. Scrolling runs through [`lenis`](https://github.com/darkroomengineering/lenis) (`ReactLenis root` in [`src/main.tsx`](./src/main.tsx)); route changes re-home the Lenis instance to the top of the page instead of calling `window.scrollTo` directly, since the two would otherwise fight each other.

## Accessibility

A skip link (`.skip-link` in [`src/index.css`](./src/index.css), rendered first in [`src/layouts/DocsLayout.tsx`](./src/layouts/DocsLayout.tsx)) lets keyboard and screen-reader users jump straight to `<main>` instead of tabbing through the whole sidebar nav first.

The collapsed sidebar panel is marked `inert` (see [`src/components/Sidebar.tsx`](./src/components/Sidebar.tsx)) so its links can't be focused or announced while they're not visible, and the toggle that reopens it lives outside that panel so it's never the thing being hidden.

The `Cmd/Ctrl+K` search palette (`src/components/CommandPalette.tsx`) follows the WAI-ARIA combobox-with-listbox pattern: the input carries `role="combobox"` and `aria-activedescendant`, results are `role="option"`, and Tab is trapped on the one focusable field in the dialog rather than escaping to whatever sits behind the overlay. Closing it returns focus to whatever opened it.

## Development

```bash
npm install
npm run dev
```

## Deployment

Deployed to Vercel, on the `karmacircle-brand` project, with `brand.karmacircle.org` as its custom domain.
