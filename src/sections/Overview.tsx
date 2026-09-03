import OrbitMark from "../components/OrbitMark";

const Overview = () => {
  return (
    <section id="overview">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Visual identity</p>
          <h1>
            One dot,
            <br />
            walking a <em>circle</em>,
            <br />
            never alone.
          </h1>
          <p className="lede">
            The mark behind KarmaCircle is a single point orbiting a ring,
            the same motion that plays behind every organization&apos;s
            setup flow. This system is built around that idea: one clay
            accent, a warm dark ground, and enough room for the palette to
            actually breathe.
          </p>
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
        <OrbitMark />
      </div>
    </section>
  );
};

export default Overview;
