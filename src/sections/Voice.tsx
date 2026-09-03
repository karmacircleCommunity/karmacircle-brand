import { DO_ITEMS, DONT_ITEMS } from "../data/tokens";

const Voice = () => {
  return (
    <section id="voice">
      <div className="section-head">
        <h2>Voice &amp; guidelines</h2>
        <p>Grounded in real incidents from this codebase, not generic rules.</p>
      </div>
      <div className="rule-grid">
        <div className="rule-col do">
          <h3>Do</h3>
          <ul>
            {DO_ITEMS.map((item) => (
              <li key={item.text}>{item.text}</li>
            ))}
          </ul>
        </div>
        <div className="rule-col dont">
          <h3>Don&apos;t</h3>
          <ul>
            {DONT_ITEMS.map((item) => (
              <li key={item.text}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Voice;
