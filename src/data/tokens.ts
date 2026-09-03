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
  tokens: ColorToken[];
}

export const COLOR_GROUPS: ColorGroup[] = [
  {
    id: "brand",
    title: "Brand",
    description:
      "The one place to edit to retheme the app. Reserved for CTAs, links, active state, not decoration.",
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
  label: string;
  radius: string;
}

export const RADIUS_TOKENS: RadiusToken[] = [
  { label: "5px", radius: "5px" },
  { label: "10px", radius: "10px" },
  { label: "15px", radius: "15px" },
  { label: "xl / 12px", radius: "12px" },
  { label: "full", radius: "38px" },
];

export interface TypeScaleRow {
  token: string;
  sample: string;
  fontSize: string;
  fontWeight?: number;
  uppercase?: boolean;
}

export const TYPE_SCALE: TypeScaleRow[] = [
  {
    token: "text-4xl / 2rem",
    sample: "Organizations near you",
    fontSize: "2.1rem",
  },
  { token: "text-2xl", sample: "Color Palette", fontSize: "1.5rem" },
  {
    token: "text-body-lg / 17px",
    sample: "A short lead sentence that opens a section.",
    fontSize: "1.0625rem",
    fontWeight: 400,
  },
  {
    token: "text-body / 15px",
    sample: "Standard paragraph and form copy.",
    fontSize: "0.9375rem",
    fontWeight: 400,
  },
  {
    token: "text-caption / 10px",
    sample: "Eyebrow label",
    fontSize: "0.72rem",
    uppercase: true,
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

export const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "colors", label: "Color" },
  { id: "type", label: "Typography" },
  { id: "shape", label: "Shape" },
  { id: "components", label: "Components" },
  { id: "voice", label: "Voice" },
] as const;
