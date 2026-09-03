import ColorSwatch from "../components/ColorSwatch";
import PageFooterNav from "../components/PageFooterNav";
import { COLOR_GROUPS } from "../data/tokens";

const ColorsPage = () => {
  return (
    <div className="page">
      <div className="section-head">
        <p className="eyebrow">Foundations</p>
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
          <p className="usage-note">
            <span>Usage</span>
            {group.usage}
          </p>
        </div>
      ))}

      <PageFooterNav currentId="colors" />
    </div>
  );
};

export default ColorsPage;
