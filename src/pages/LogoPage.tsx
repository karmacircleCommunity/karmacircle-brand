import CodeBlock from "../components/CodeBlock";
import LogoMark from "../components/LogoMark";
import PageFooterNav from "../components/PageFooterNav";

const LOCKUP_JSX = `<Link to="/" className="flex items-center gap-2">
  <LogoMark size={24} />
  <span className="font-outfit font-medium">KarmaCircle</span>
</Link>`;

const SIZES = [32, 48, 64, 96];

interface Download {
  name: string;
  meta: string;
  href: string;
}

const MARK_DOWNLOADS: Download[] = [
  { name: "Mark, light", meta: "SVG", href: "/brand/mark/karmacircle-mark-light.svg" },
  { name: "Mark, dark", meta: "SVG", href: "/brand/mark/karmacircle-mark-dark.svg" },
  { name: "Mark, light", meta: "PNG", href: "/brand/mark/karmacircle-mark-light.png" },
  { name: "Mark, dark", meta: "PNG", href: "/brand/mark/karmacircle-mark-dark.png" },
];

const LOCKUP_DOWNLOADS: Download[] = [
  { name: "Wordmark, light", meta: "SVG", href: "/brand/wordmark/karmacircle-wordmark-light.svg" },
  { name: "Wordmark, dark", meta: "SVG", href: "/brand/wordmark/karmacircle-wordmark-dark.svg" },
  { name: "Lockup, light", meta: "PNG", href: "/brand/lockup/karmacircle-lockup-light.png" },
  { name: "Lockup, dark", meta: "PNG", href: "/brand/lockup/karmacircle-lockup-dark.png" },
];

const LogoPage = () => {
  return (
    <div className="page">
      <div className="section-head">
        <p className="eyebrow">Foundations</p>
        <h2>Logo</h2>
        <p>
          The idea on the Overview page - a community sheltered together - as
          an actual asset: one mark, a wordmark lockup pattern, and the
          sizing and spacing rules that keep every copy of it the same one.
        </p>
      </div>

      <div className="logo-group">
        <h3>Mark</h3>
        <p className="logo-group-desc">
          Three abstracted figures standing together under a shared
          roofline, drawn as a single compound shape in one color. There is
          no ring to separate from a dot here - it's one illustration, not
          parts to mix and match.
        </p>
        <div className="logo-preview-row">
          <div className="logo-tile light">
            <LogoMark size={72} tone="light" />
            <span className="logo-tile-label">On light</span>
          </div>
          <div className="logo-tile dark">
            <LogoMark size={72} tone="dark" />
            <span className="logo-tile-label">On dark</span>
          </div>
        </div>
        <div className="logo-size-row">
          {SIZES.map((size) => (
            <div className="logo-size-item" key={size}>
              <LogoMark size={size} />
              <span>{size}px</span>
            </div>
          ))}
        </div>
        <p>
          This is a detailed illustration, not a two-shape glyph - it needs
          more room than the old mark did. Below 32px the gaps between the
          three figures start to close up and it reads as a solid blob, so
          treat 32px as the floor, not 16px.
        </p>
        <div className="download-grid">
          {MARK_DOWNLOADS.map((d) => (
            <a key={d.href} className="download-link" href={d.href} download>
              <span className="name">{d.name}</span>
              <span className="meta">{d.meta}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="logo-group">
        <h3>Wordmark lockup</h3>
        <p className="logo-group-desc">
          Not a flattened image - the wordmark is live Outfit text next to
          the mark, matching how the navbar and auth pages actually build
          it. That keeps it sharp at any size, themeable, and readable by a
          screen reader.
        </p>
        <div className="logo-preview-row">
          <div className="logo-tile light">
            <span className="logo-lockup">
              <LogoMark size={32} tone="light" />
              <span className="logo-lockup-word">KarmaCircle</span>
            </span>
          </div>
          <div className="logo-tile dark">
            <span className="logo-lockup">
              <LogoMark size={32} tone="dark" />
              <span className="logo-lockup-word">KarmaCircle</span>
            </span>
          </div>
        </div>
        <div className="logo-preview-row">
          <div className="logo-tile light">
            <span className="logo-lockup stacked">
              <LogoMark size={40} tone="light" />
              <span className="logo-lockup-word">KarmaCircle</span>
            </span>
          </div>
          <div className="logo-tile dark">
            <span className="logo-lockup stacked">
              <LogoMark size={40} tone="dark" />
              <span className="logo-lockup-word">KarmaCircle</span>
            </span>
          </div>
        </div>
        <CodeBlock code={LOCKUP_JSX}>
          <span className="line">
            <span className="ln">1</span>
            <span className="tok-tag">&lt;Link</span> <span className="tok-attr">to</span>=<span className="tok-str">&quot;/&quot;</span> <span className="tok-attr">className</span>=<span className="tok-str">&quot;flex items-center gap-2&quot;</span>
            <span className="tok-tag">&gt;</span>
          </span>
          <span className="line">
            <span className="ln">2</span>  <span className="tok-tag">&lt;LogoMark</span> <span className="tok-attr">size</span>=<span className="tok-str">{"{24}"}</span> <span className="tok-tag">/&gt;</span>
          </span>
          <span className="line">
            <span className="ln">3</span>  <span className="tok-tag">&lt;span</span> <span className="tok-attr">className</span>=<span className="tok-str">&quot;font-outfit font-medium&quot;</span><span className="tok-tag">&gt;</span>KarmaCircle<span className="tok-tag">&lt;/span&gt;</span>
          </span>
          <span className="line">
            <span className="ln">4</span>
            <span className="tok-tag">&lt;/Link&gt;</span>
          </span>
        </CodeBlock>
        <div className="download-grid">
          {LOCKUP_DOWNLOADS.map((d) => (
            <a key={d.href} className="download-link" href={d.href} download>
              <span className="name">{d.name}</span>
              <span className="meta">{d.meta}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="logo-group">
        <h3>Clear space &amp; minimum size</h3>
        <p className="logo-group-desc">
          The mark needs room for the three figures and the roofline above
          them to stay legible as separate shapes, not a smudge. Clear space
          is measured in the mark&apos;s own diameter, so it scales with it
          automatically.
        </p>
        <div className="logo-clearspace">
          <LogoMark size={72} />
        </div>
        <p className="logo-clearspace-caption">
          The dashed line is one mark-diameter away on every side - the minimum gap before anything else (text, an edge, another element) may start.
        </p>
        <div className="hero-facts">
          <div className="hero-fact">
            <div className="n">32px</div>
            <div className="l">
              Smallest the mark
              <br />
              alone should render
            </div>
          </div>
          <div className="hero-fact">
            <div className="n">1&times;</div>
            <div className="l">
              Clear space, in
              <br />
              mark diameters
            </div>
          </div>
          <div className="hero-fact">
            <div className="n">120px</div>
            <div className="l">
              Minimum width for
              <br />
              the full lockup
            </div>
          </div>
        </div>
      </div>

      <div className="best-practices">
        <h3>Best practices</h3>
        <div className="rule-grid">
          <div className="rule-col do">
            <h3>Do</h3>
            <ul>
              <li>Use the LogoMark component or the downloadable SVG instead of redrawing the figures by hand - it's one illustrated path, not a shape simple enough to reconstruct from memory.</li>
              <li>Give the mark clear space of at least its own diameter before any edge, text, or other element.</li>
              <li>Keep it to at least 32px - this is a detailed illustration, and the gaps that separate the three figures close up below that.</li>
              <li>Pair it with the wordmark as live text wherever the surface can render a real font.</li>
            </ul>
          </div>
          <div className="rule-col dont">
            <h3>Don&apos;t</h3>
            <ul>
              <li>Recolor parts of the mark independently - it's a single fill, not separate elements to mix and match.</li>
              <li>Flatten the wordmark lockup into an image when the surface can render text - a screenshot of a logo can&apos;t be resized without blurring or read by a screen reader.</li>
              <li>Add a drop shadow, gradient, or outline around the mark - the system&apos;s one shadow token is for elevation, not logo decoration.</li>
              <li>Stretch or skew the mark to fit a space - resize it proportionally, or choose a different layout instead.</li>
            </ul>
          </div>
        </div>
      </div>

      <PageFooterNav currentId="logo" />
    </div>
  );
};

export default LogoPage;
