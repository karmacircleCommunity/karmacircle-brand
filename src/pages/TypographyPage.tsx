import CodeBlock from "../components/CodeBlock";
import DetailTable from "../components/DetailTable";
import PageFooterNav from "../components/PageFooterNav";
import { TYPE_GROUPS } from "../data/tokens";

const ExternalLinkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6.5 4H4.5C3.94772 4 3.5 4.44772 3.5 5V11.5C3.5 12.0523 3.94772 12.5 4.5 12.5H11C11.5523 12.5 12 12.0523 12 11.5V9.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path d="M8.5 3.5H12.5V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 4L7 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const TypographyPage = () => {
  return (
    <div className="page">
      <div className="section-head">
        <p className="eyebrow">Foundations</p>
        <h2>Typography</h2>
        <p>
          Outfit carries structure - wordmark, headings, controls. Poppins
          carries voice - body copy, forms. Neither one substitutes for the
          other.
        </p>
      </div>

      <div className="usage-block">
        <p>
          Every class below is a real Tailwind utility, not a documentation-only
          name - there is no dedicated <code>text-heading-*</code> scale, so a
          size is always paired with a font-family utility (<code>font-outfit</code>{" "}
          or <code>font-poppins</code>) and a weight to fully match a row.
        </p>
        <p>Click a class name in any table below to copy it, or copy a full example here:</p>
        <CodeBlock code={'<h1 className="text-4xl font-outfit font-semibold">\n  Organizations near you\n</h1>'}>
          <span className="line">
            <span className="ln">1</span>
            <span className="tok-tag">&lt;h1</span> <span className="tok-attr">className</span>=
            <span className="tok-str">&quot;text-4xl font-outfit font-semibold&quot;</span>
            <span className="tok-tag">&gt;</span>
          </span>
          <span className="line">
            <span className="ln">2</span>  Organizations near you
          </span>
          <span className="line">
            <span className="ln">3</span>
            <span className="tok-tag">&lt;/h1&gt;</span>
          </span>
        </CodeBlock>
      </div>

      {TYPE_GROUPS.map((group) => (
        <div className="type-group" key={group.id}>
          <div className="type-group-head">
            <h3>{group.title}</h3>
            <a className="family-tag" href={group.familyUrl} target="_blank" rel="noreferrer">
              {group.family}
              <ExternalLinkIcon />
            </a>
          </div>
          <p>{group.description}</p>
          <DetailTable
            exampleLabel="Aa Example"
            rows={group.rows.map((row) => ({
              key: row.className,
              className: row.className,
              usage: row.usage,
              example: (
                <span
                  className="type-sample"
                  style={{
                    fontSize: row.fontSize,
                    fontFamily: row.fontWeight === 400 ? "Poppins, sans-serif" : "Outfit, sans-serif",
                    fontWeight: row.fontWeight ?? 600,
                    textTransform: row.uppercase ? "uppercase" : undefined,
                    letterSpacing: row.uppercase ? "0.14em" : undefined,
                  }}
                >
                  {row.sample}
                </span>
              ),
            }))}
          />
        </div>
      ))}

      <PageFooterNav currentId="typography" />
    </div>
  );
};

export default TypographyPage;
