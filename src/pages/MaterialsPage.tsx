import DetailTable from "../components/DetailTable";
import PageFooterNav from "../components/PageFooterNav";
import { BORDER_TOKENS, RADIUS_TOKENS, SHADOW_TOKENS } from "../data/tokens";

const MaterialsPage = () => {
  return (
    <div className="page">
      <div className="section-head">
        <p className="eyebrow">Foundations</p>
        <h2>Materials</h2>
        <p>
          Radius, border, and shadow - the three tokens that give a flat
          surface its edges. There's no elevation scale here: one shadow,
          used sparingly, is the whole system.
        </p>
      </div>

      <div className="material-group">
        <h3>Radius</h3>
        <p className="material-group-desc">
          Three steps, none landing on Tailwind&apos;s default scale on
          purpose - the product already relies on its md/lg/xl meaning
          elsewhere, so these carry literal-px names instead.
        </p>
        <DetailTable
          rows={RADIUS_TOKENS.map((token) => ({
            key: token.className,
            className: token.className,
            usage: token.usage,
            example: (
              <span className="material-box" style={{ borderRadius: token.radius }} aria-hidden="true" />
            ),
          }))}
        />
      </div>

      <div className="material-group">
        <h3>Border</h3>
        <p className="material-group-desc">
          Two weights of the same idea: a hairline for the outer edge of a
          surface, a quieter one for whatever divides content inside it.
        </p>
        <DetailTable
          rows={BORDER_TOKENS.map((token) => ({
            key: token.token,
            className: token.token,
            usage: token.usage,
            example: <span className="material-box" style={{ background: token.swatch }} aria-hidden="true" />,
          }))}
        />
      </div>

      <div className="material-group">
        <h3>Shadow</h3>
        <p className="material-group-desc">
          A single elevation token, not a ramp - lift is the exception here,
          not a tool reached for by default.
        </p>
        <DetailTable
          rows={SHADOW_TOKENS.map((token) => ({
            key: token.token,
            className: token.token,
            usage: token.usage,
            example: (
              <span className="material-box shadow-demo" style={{ boxShadow: token.value }} aria-hidden="true" />
            ),
          }))}
        />
      </div>

      <div className="best-practices">
        <h3>Best practices</h3>
        <div className="bp-grid">
          <div className="bp-col">
            <h4>When to use</h4>
            <ul>
              <li>Reach for one of the three radius tokens before writing a one-off border-radius value.</li>
              <li>Use Border for a surface&apos;s outer edge, Border soft for anything that divides content inside it.</li>
              <li>Reserve Shadow for content that&apos;s meant to feel raised above the page - a hover state, a toast, a floating palette - not static cards.</li>
            </ul>
          </div>
          <div className="bp-col">
            <h4>Behavior</h4>
            <ul>
              <li>Don&apos;t stack Border and Shadow on the same static surface - pick the one that actually explains why the element is separated from the page.</li>
              <li>Favor the smallest radius that still reads as intentional; over-rounding is as much noise as no rounding at all.</li>
            </ul>
          </div>
          <div className="bp-col">
            <h4>Accessibility</h4>
            <ul>
              <li>Don&apos;t rely on Shadow alone to communicate elevation - pair it with spacing or a border so the separation still reads without it.</li>
              <li>Shadow contrast reads weaker on dark backgrounds than light ones - both themes redefine the token&apos;s color, not just its opacity.</li>
            </ul>
          </div>
        </div>
      </div>

      <PageFooterNav currentId="materials" />
    </div>
  );
};

export default MaterialsPage;
