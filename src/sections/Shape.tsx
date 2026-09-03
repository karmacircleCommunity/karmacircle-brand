import { RADIUS_TOKENS } from "../data/tokens";

const Shape = () => {
  return (
    <section id="shape">
      <div className="section-head">
        <h2>Shape</h2>
        <p>
          Three radius tokens, none landing on Tailwind&apos;s own scale,
          plus the two defaults used everywhere alongside them.
        </p>
      </div>
      <div className="shape-row">
        {RADIUS_TOKENS.map((item) => (
          <div className="shape-item" key={item.label}>
            <div className="shape-box" style={{ borderRadius: item.radius }} />
            <div className="l">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shape;
