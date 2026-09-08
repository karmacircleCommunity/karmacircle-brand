/** The brand hex baked into each theme's `--brand` token (index.css:20,44,68) -
 * duplicated here only for `tone="light"`/`"dark"`, where a fixed surface
 * (e.g. the Logo page's on-light/on-dark preview tiles) needs the color
 * pinned regardless of which theme the reader currently has toggled. */
const BRAND_HEX = { light: "#a8623e", dark: "#ce8863" } as const;

interface LogoMarkProps {
  /** Rendered width/height in px - the mark is a single square viewBox, so
   * one number covers both. */
  size?: number;
  /**
   * "auto" (default) follows the page's own light/dark toggle via
   * `var(--brand)` - correct for live UI use (sidebar, navbar). "light" /
   * "dark" pin one theme's brand hex regardless of the page's current
   * toggle, for a fixed-background preview (e.g. showing the mark "on
   * dark" without requiring the whole site to be in dark mode to see it).
   */
  tone?: "auto" | "light" | "dark";
  className?: string;
}

/**
 * The one canonical drawing of the KarmaCircle mark - a dot orbiting a
 * ring. Geometry and stroke/opacity match `public/favicon.svg` exactly
 * (ring r=14 of a 32-wide box, 1.6 stroke at 55% opacity; dot r=3 at the
 * ring's top). That file can't reach this app's CSS custom properties (a
 * favicon renders in its own document context), so it hardcodes the brand
 * hex directly - this component is the theme-aware version of the same
 * drawing for use anywhere inside the app itself (see the Logo page).
 *
 * Before this component existed, the sidebar redrew the mark inline with
 * a plain `var(--border)` ring instead of a brand-tinted one, drifting
 * from the favicon a few percent in stroke weight and dot size. Import
 * this instead of hand-rolling the SVG again.
 */
const LogoMark = ({ size = 24, tone = "auto", className }: LogoMarkProps) => {
  const color = tone === "auto" ? "var(--brand)" : BRAND_HEX[tone];
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <circle cx="16" cy="16" r="14" stroke={color} strokeWidth="1.6" strokeOpacity="0.55" />
      <circle cx="16" cy="4" r="3" fill={color} />
    </svg>
  );
};

export default LogoMark;
