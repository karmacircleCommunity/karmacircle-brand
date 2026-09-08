import CodeBlock from "../components/CodeBlock";
import LogoMark from "../components/LogoMark";
import PageFooterNav from "../components/PageFooterNav";

const MARK_SVG = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="14" stroke="#a8623e" stroke-width="1.6" stroke-opacity="0.55" />
  <circle cx="16" cy="4" r="3" fill="#a8623e" />
</svg>`;

const LOCKUP_JSX = `<Link to="/" className="flex items-center gap-2">
  <LogoMark size={24} />
  <span className="font-outfit font-medium">KarmaCircle</span>
</Link>`;

const SIZES = [16, 24, 32, 48];

const LogoPage = () => {
  return (
    <div className="page">
      <div className="section-head">
        <p className="eyebrow">Foundations</p>
        <h2>Logo</h2>
        <p>
          The idea on the Overview page - a dot orbiting a ring - as an
          actual asset: one SVG, a wordmark lockup pattern, and the sizing
          and spacing rules that keep every copy of it the same one.
        </p>
      </div>

      <div className="logo-group">
        <h3>Mark</h3>
        <p className="logo-group-desc">
          Two circles, nothing else. The ring sits at 55% opacity so the
          dot - the part that actually moves in the setup-flow animation -
          reads as the heavier of the two.
        </p>
        <div className="logo-preview-row">
          <div className="logo-tile light">
            <LogoMark size={40} tone="light" />
            <span className="logo-tile-label">On light</span>
          </div>
          <div className="logo-tile dark">
            <LogoMark size={40} tone="dark" />
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
        <p>Copy the source SVG directly - this is the exact drawing behind every mark on this site, including the favicon:</p>
        <CodeBlock code={MARK_SVG}>
          <span className="line">
            <span className="ln">1</span>
            <span className="tok-tag">&lt;svg</span> <span className="tok-attr">viewBox</span>=<span className="tok-str">&quot;0 0 32 32&quot;</span> <span className="tok-attr">fill</span>=<span className="tok-str">&quot;none&quot;</span> <span className="tok-attr">xmlns</span>=<span className="tok-str">&quot;http://www.w3.org/2000/svg&quot;</span>
            <span className="tok-tag">&gt;</span>
          </span>
          <span className="line">
            <span className="ln">2</span>  <span className="tok-tag">&lt;circle</span> <span className="tok-attr">cx</span>=<span className="tok-str">&quot;16&quot;</span> <span className="tok-attr">cy</span>=<span className="tok-str">&quot;16&quot;</span> <span className="tok-attr">r</span>=<span className="tok-str">&quot;14&quot;</span> <span className="tok-attr">stroke</span>=<span className="tok-str">&quot;#a8623e&quot;</span> <span className="tok-attr">stroke-width</span>=<span className="tok-str">&quot;1.6&quot;</span> <span className="tok-attr">stroke-opacity</span>=<span className="tok-str">&quot;0.55&quot;</span> <span className="tok-tag">/&gt;</span>
          </span>
          <span className="line">
            <span className="ln">3</span>  <span className="tok-tag">&lt;circle</span> <span className="tok-attr">cx</span>=<span className="tok-str">&quot;16&quot;</span> <span className="tok-attr">cy</span>=<span className="tok-str">&quot;4&quot;</span> <span className="tok-attr">r</span>=<span className="tok-str">&quot;3&quot;</span> <span className="tok-attr">fill</span>=<span className="tok-str">&quot;#a8623e&quot;</span> <span className="tok-tag">/&gt;</span>
          </span>
          <span className="line">
            <span className="ln">4</span>
            <span className="tok-tag">&lt;/svg&gt;</span>
          </span>
        </CodeBlock>
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
              <LogoMark size={22} tone="light" />
              <span className="logo-lockup-word">KarmaCircle</span>
            </span>
          </div>
          <div className="logo-tile dark">
            <span className="logo-lockup">
              <LogoMark size={22} tone="dark" />
              <span className="logo-lockup-word">KarmaCircle</span>
            </span>
          </div>
        </div>
        <div className="logo-preview-row">
          <div className="logo-tile light">
            <span className="logo-lockup stacked">
              <LogoMark size={26} tone="light" />
              <span className="logo-lockup-word">KarmaCircle</span>
            </span>
          </div>
          <div className="logo-tile dark">
            <span className="logo-lockup stacked">
              <LogoMark size={26} tone="dark" />
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
      </div>

      <div className="logo-group">
        <h3>Clear space &amp; minimum size</h3>
        <p className="logo-group-desc">
          The mark needs room to read as a ring, not a smudge. Clear space
          is measured in the mark&apos;s own diameter, so it scales with it
          automatically.
        </p>
        <div className="logo-clearspace">
          <LogoMark size={40} />
        </div>
        <p className="logo-clearspace-caption">
          The dashed line is one mark-diameter away on every side - the minimum gap before anything else (text, an edge, another element) may start.
        </p>
        <div className="hero-facts">
          <div className="hero-fact">
            <div className="n">16px</div>
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
            <div className="n">96px</div>
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
              <li>Use this SVG or the LogoMark component instead of redrawing the ring and dot by hand - the sidebar&apos;s own copy had drifted from the favicon&apos;s stroke opacity before this page existed to catch it.</li>
              <li>Keep the ring at reduced opacity and the dot solid - that weight difference is what reads as a dot orbiting a ring, not two identical circles.</li>
              <li>Give the mark clear space of at least its own diameter before any edge, text, or other element.</li>
              <li>Pair it with the wordmark as live text wherever the surface can render a real font.</li>
            </ul>
          </div>
          <div className="rule-col dont">
            <h3>Don&apos;t</h3>
            <ul>
              <li>Recolor the ring and dot independently - they&apos;re one mark, not two colors to mix and match.</li>
              <li>Flatten the wordmark lockup into an image when the surface can render text - a screenshot of a logo can&apos;t be resized without blurring or read by a screen reader.</li>
              <li>Add a drop shadow, gradient, or outline around the mark - the system&apos;s one shadow token is for elevation, not logo decoration.</li>
              <li>Shrink the mark below 16px - the ring and dot stop reading as two distinct weights below that.</li>
            </ul>
          </div>
        </div>
      </div>

      <PageFooterNav currentId="logo" />
    </div>
  );
};

export default LogoPage;
