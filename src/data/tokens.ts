export interface ColorToken {
  name: string;
  token: string;
  hex: string;
  /** Render the copy pill with a dark background - for tokens light enough
   * that the default light-on-dark pill would be unreadable against them. */
  onLight?: boolean;
}

export interface ColorGroup {
  id: string;
  title: string;
  description: string;
  usage: string;
  tokens: ColorToken[];
}

export const COLOR_GROUPS: ColorGroup[] = [
  {
    id: "brand",
    title: "Brand",
    description:
      "The one place to edit to retheme the app. Reserved for CTAs, links, active state, not decoration.",
    usage:
      "Primary buttons, active nav/tab state, links, focus rings. Never a background fill for large areas - it stays rare so it still means something when it shows up.",
    tokens: [
      { name: "Brand", token: "--color-brand", hex: "#a8623e" },
      { name: "Brand hover", token: "--color-brand-hover", hex: "#8f5236" },
      {
        name: "Brand secondary",
        token: "--color-brand-secondary",
        hex: "#382c24",
      },
    ],
  },
  {
    id: "semantic",
    title: "Semantic",
    description:
      "Toasts, badges, validation. Muted on purpose, none of them fight the brand accent for attention.",
    usage:
      "Toast copy/icons, status pills, form validation. Each pairs with a 14%-mix background of itself rather than a flat fill, so status color reads as a tint, not a block.",
    tokens: [
      { name: "Success", token: "--color-success", hex: "#2e6b4a" },
      { name: "Error", token: "--color-error", hex: "#a8402f" },
      { name: "Warning", token: "--color-warning", hex: "#8a5a12" },
      { name: "Info", token: "--color-info", hex: "#3a6a8a" },
    ],
  },
  {
    id: "neutrals",
    title: "Neutrals & surface",
    description:
      "Two page grounds, a warm cream for light, a near-black for full-bleed dark panels, plus the grays between them.",
    usage:
      "Ink and Heading carry body text and titles. Surface/Surface dark are the page background in each theme. Surface muted and Border muted separate cards and inputs from that background without a hard black border.",
    tokens: [
      { name: "Ink", token: "--color-ink", hex: "#212529" },
      { name: "Heading", token: "--color-heading", hex: "#28183b" },
      {
        name: "Surface",
        token: "--color-surface",
        hex: "#fffcf7",
        onLight: true,
      },
      { name: "Surface dark", token: "--color-surface-dark", hex: "#0e0906" },
      {
        name: "Surface muted",
        token: "--color-surface-muted",
        hex: "#f5f7f7",
        onLight: true,
      },
      {
        name: "Border muted",
        token: "--color-border-muted",
        hex: "#e0e0e0",
        onLight: true,
      },
    ],
  },
];

export interface RadiusToken {
  className: string;
  radius: string;
  usage: string;
}

export const RADIUS_TOKENS: RadiusToken[] = [
  {
    className: "rounded-5px",
    radius: "5px",
    usage: "Compact controls - nav pills, dashboard chips, small badges.",
  },
  {
    className: "rounded-10px",
    radius: "10px",
    usage: "Inputs, floating action buttons, mid-size panels.",
  },
  {
    className: "rounded-15px",
    radius: "15px",
    usage: "Cards and larger content surfaces - the largest step on the scale.",
  },
];

export interface BorderToken {
  name: string;
  token: string;
  swatch: string;
  usage: string;
}

export const BORDER_TOKENS: BorderToken[] = [
  {
    name: "Border",
    token: "--border",
    swatch: "var(--border)",
    usage: "Default hairline around cards, swatches, and dividers between sections.",
  },
  {
    name: "Border soft",
    token: "--border-soft",
    swatch: "var(--border-soft)",
    usage: "Quieter separator - inside a card, between rows in a table, never the outer edge.",
  },
];

export interface ShadowToken {
  name: string;
  token: string;
  value: string;
  usage: string;
}

export const SHADOW_TOKENS: ShadowToken[] = [
  {
    name: "Shadow",
    token: "--shadow",
    value: "0 24px 48px -28px rgba(56, 44, 36, 0.28)",
    usage:
      "One elevation, used sparingly - a swatch on hover, a toast, the search palette. Not a scale: if something needs more lift than this, it's a sign the layout needs rethinking, not a bigger shadow.",
  },
];

export interface TypeGroupRow {
  className: string;
  sample: string;
  fontSize: string;
  fontWeight?: number;
  uppercase?: boolean;
  usage: string;
}

export interface TypeGroup {
  id: string;
  title: string;
  family: string;
  /** Where to actually get the typeface - Google Fonts' own specimen page. */
  familyUrl: string;
  description: string;
  rows: TypeGroupRow[];
}

export const TYPE_GROUPS: TypeGroup[] = [
  {
    id: "headings",
    title: "Headings",
    family: "Outfit",
    familyUrl: "https://fonts.google.com/specimen/Outfit",
    description: "Structure - the wordmark, section titles, anything that introduces content.",
    rows: [
      {
        className: "text-4xl",
        sample: "Organizations near you",
        fontSize: "2.1rem",
        fontWeight: 600,
        usage: "Page-level titles - one per page.",
      },
      {
        className: "text-2xl",
        sample: "Organizations near you",
        fontSize: "1.5rem",
        fontWeight: 600,
        usage: "Section headings within a page.",
      },
    ],
  },
  {
    id: "body",
    title: "Body",
    family: "Poppins",
    familyUrl: "https://fonts.google.com/specimen/Poppins",
    description: "Voice - paragraphs, forms, anything meant to be read at length.",
    rows: [
      {
        className: "text-body-lg",
        sample: "Organizations near you",
        fontSize: "1.0625rem",
        fontWeight: 400,
        usage: "Lede paragraphs directly under a heading.",
      },
      {
        className: "text-body",
        sample: "Organizations near you",
        fontSize: "0.9375rem",
        fontWeight: 400,
        usage: "Default paragraph, label, and input text.",
      },
    ],
  },
  {
    id: "label",
    title: "Label",
    family: "Outfit",
    familyUrl: "https://fonts.google.com/specimen/Outfit",
    description: "Small, uppercase, and load-bearing rather than decorative.",
    rows: [
      {
        className: "text-caption",
        sample: "Organizations near you",
        fontSize: "0.72rem",
        uppercase: true,
        usage: "Eyebrow tags, timestamps, tertiary metadata.",
      },
    ],
  },
];

export interface DoDontItem {
  text: string;
}

export const DO_ITEMS: DoDontItem[] = [
  { text: "Reach for an existing token before writing a new one-off hex." },
  {
    text: "Give a button its own shape at the call site - the shared component ships color only.",
  },
  {
    text: "Let the accent stay rare. One clay dot on a page says more than five.",
  },
];

export const DONT_ITEMS: DoDontItem[] = [
  {
    text: "Don't respell the brand color. Three drifted hexes existed before consolidation once already.",
  },
  {
    text: "Don't write global CSS outside a layer, it silently beats every utility on the page.",
  },
  { text: "Don't loop an animation on a surface someone is reading." },
];

export interface NavPage {
  id: string;
  path: string;
  label: string;
  group: "Foundations" | "More";
  description: string;
}

export const NAV_PAGES: NavPage[] = [
  {
    id: "overview",
    path: "/",
    label: "Overview",
    group: "Foundations",
    description: "The idea behind the mark, and what this system covers.",
  },
  {
    id: "logo",
    path: "/logo",
    label: "Logo",
    group: "Foundations",
    description: "The mark and wordmark as real, exportable assets.",
  },
  {
    id: "colors",
    path: "/colors",
    label: "Colors",
    group: "Foundations",
    description: "Brand, semantic, and neutral tokens, with their usage.",
  },
  {
    id: "typography",
    path: "/typography",
    label: "Typography",
    group: "Foundations",
    description: "Outfit for structure, Poppins for voice.",
  },
  {
    id: "materials",
    path: "/materials",
    label: "Materials",
    group: "Foundations",
    description: "Radius, border, and shadow tokens.",
  },
  {
    id: "components",
    path: "/components",
    label: "Components",
    group: "More",
    description: "The tokens above, doing actual work.",
  },
  {
    id: "voice",
    path: "/voice",
    label: "Voice",
    group: "More",
    description: "Writing guidelines, grounded in real incidents.",
  },
];
