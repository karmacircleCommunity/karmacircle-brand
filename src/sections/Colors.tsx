import ColorSwatch from "../components/ColorSwatch";
import { COLOR_GROUPS } from "../data/tokens";

const Colors = () => {
  return (
    <section id="colors">
      <div className="section-head">
        <h2>Color</h2>
        <p>
          Clay over warm near-black, not the saturated orange this app
          shipped with before its rebrand. Click any card to copy its hex.
        </p>
      </div>

      {COLOR_GROUPS.map((group) => (
        <div className="color-group" key={group.id}>
          <div className="color-group-head">
            <h3>{group.title}</h3>
            <p>{group.description}</p>
          </div>
          <div className="swatch-grid">
            {group.tokens.map((token) => (
              <ColorSwatch key={token.token} token={token} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Colors;
