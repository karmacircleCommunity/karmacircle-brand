import { Link } from "react-router-dom";
import { NAV_PAGES } from "../data/tokens";
import PageFooterNav from "../components/PageFooterNav";

const EXPLORE_PAGES = NAV_PAGES.filter((page) => page.id !== "overview");

const OverviewPage = () => {
  return (
    <div className="page hero">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Visual identity</p>
          <h1>
            One dot,
            <br />
            walking a <em>circle</em>,
            <br />
            never alone.
          </h1>
          <p className="lede">
            The mark behind KarmaCircle is a single point orbiting a ring, the
            same motion that plays behind every organization&apos;s setup flow.
            This system is built around that idea: one clay accent, a warm dark
            ground, and enough room for the palette to actually breathe.
          </p>

          <div className="hero-cta-row">
            <Link className="btn solid" to="/colors">
              Explore the system
            </Link>
            <Link className="btn outline" to="/components">
              View components
            </Link>
          </div>

          <div className="hero-facts">
            <div className="hero-fact">
              <div className="n">14</div>
              <div className="l">
                tokens
                <br />
                documented
              </div>
            </div>
            <div className="hero-fact">
              <div className="n">2</div>
              <div className="l">
                faces,
                <br />
                one purpose each
              </div>
            </div>
            <div className="hero-fact">
              <div className="n">A</div>
              <div className="l">
                min. contrast
                <br />
                grade, every pair
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-glow" />
          <svg viewBox="0 0 240 240" width="100%" height="100%">
            <circle cx="120" cy="120" r="94" className="orbit-ring-outer" />
            <circle cx="120" cy="120" r="66" className="orbit-ring-inner" />
            <g className="orbit-spin">
              <circle cx="120" cy="26" r="7" className="orbit-dot" />
              <circle cx="120" cy="26" r="14" className="orbit-dot-halo" />
            </g>
            <circle cx="120" cy="120" r="3" className="orbit-center" />
          </svg>
        </div>
      </div>

      <section className="explore" aria-labelledby="explore-heading">
        <div className="explore-head">
          <p className="eyebrow">In this system</p>
          <h2 id="explore-heading">Everything the mark set in motion</h2>
        </div>
        <div className="explore-grid">
          {EXPLORE_PAGES.map((page, i) => (
            <Link key={page.id} to={page.path} className="explore-card">
              <span className="explore-card-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="explore-card-label">{page.label}</span>
              <span className="explore-card-desc">{page.description}</span>
              <span className="explore-card-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <PageFooterNav currentId="overview" />
    </div>
  );
};

export default OverviewPage;
