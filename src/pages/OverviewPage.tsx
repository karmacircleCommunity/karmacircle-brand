import { Link } from "react-router-dom";
import { useLenis } from "lenis/react";
import {
  BORDER_TOKENS,
  COLOR_GROUPS,
  NAV_PAGES,
  RADIUS_TOKENS,
  SHADOW_TOKENS,
} from "../data/tokens";
import LogoMark from "../components/LogoMark";
import PageFooterNav from "../components/PageFooterNav";

const EXPLORE_PAGES = NAV_PAGES.filter((page) => page.id !== "overview");

/** Counted off the data rather than typed as prose - the hero hardcoded "14"
 * while tokens.ts had already grown past it, and nothing caught the drift.
 * Add a token to tokens.ts and this number follows on its own. */
const TOKEN_COUNT =
  COLOR_GROUPS.reduce((sum, group) => sum + group.tokens.length, 0) +
  RADIUS_TOKENS.length +
  BORDER_TOKENS.length +
  SHADOW_TOKENS.length;

const OverviewPage = () => {
  const lenis = useLenis();

  // "Explore the system" stays on the page and scrolls to the grid below
  // rather than jumping straight into one arbitrary sub-page - the grid is
  // already the real navigation surface, this button just gets you to it.
  const handleExploreClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById("explore-heading");
    if (lenis && target) {
      lenis.scrollTo(target, { offset: -90 });
    } else {
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="page hero">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Visual identity</p>
          <h1>
            Every NGO,
            <br />
            sheltered as <em>one</em>.
          </h1>
          <p className="lede">
            The mark behind KarmaCircle is three figures standing together
            under a shared roofline - the charities, the volunteers, and the
            people who show up for each other, drawn as a single shape. This
            system is built around that idea: one clay accent, a warm dark
            ground, and enough room for the palette to actually breathe.
          </p>

          <div className="hero-cta-row">
            <a className="btn solid" href="#explore-heading" onClick={handleExploreClick}>
              Explore the system
            </a>
            <Link className="btn outline" to="/components">
              View components
            </Link>
          </div>

          <div className="hero-facts">
            <div className="hero-fact">
              <div className="n">{TOKEN_COUNT}</div>
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
          <LogoMark size={200} />
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
