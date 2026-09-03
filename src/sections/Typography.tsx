import { TYPE_SCALE } from "../data/tokens";

const Typography = () => {
  return (
    <section id="type">
      <div className="section-head">
        <h2>Typography</h2>
        <p>
          Outfit carries structure - wordmark, headings, controls. Poppins
          carries voice - body copy, forms. Neither one substitutes for the
          other.
        </p>
      </div>

      <div className="type-pair">
        <div className="type-card display">
          <div className="sample">Everyone can start something good.</div>
          <div className="meta">
            <span className="fam">Outfit &middot; 600</span>
            <span className="use">
              Headings, the wordmark, buttons - 40+ files
            </span>
          </div>
        </div>
        <div className="type-card body">
          <div className="sample">
            A platform that connects NGOs, charities, and the people who
            show up for them.
          </div>
          <div className="meta">
            <span className="fam">Poppins &middot; 400</span>
            <span className="use">
              Paragraphs, forms, and MUI&apos;s own internals
            </span>
          </div>
        </div>
      </div>

      {TYPE_SCALE.map((row) => (
        <div className="scale-row" key={row.token}>
          <div className="tok mono">{row.token}</div>
          <div
            className="samp"
            style={{
              fontSize: row.fontSize,
              fontFamily: row.fontWeight === 400 ? "Poppins, sans-serif" : undefined,
              fontWeight: row.fontWeight,
              textTransform: row.uppercase ? "uppercase" : undefined,
              letterSpacing: row.uppercase ? "0.14em" : undefined,
            }}
          >
            {row.sample}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Typography;
