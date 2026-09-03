/**
 * The app's recurring brand motif at hero scale: a point orbiting a ring,
 * the same motion that plays behind the product's organization setup flow.
 * Pure CSS animation (not canvas) - a single rotating dot needs neither the
 * complexity nor the paint cost of a generative canvas loop, and it already
 * respects `prefers-reduced-motion` in index.css.
 */
const OrbitMark = () => {
  return (
    <div className="orbit-wrap" aria-hidden="true">
      <div className="orbit-ring r1" />
      <div className="orbit-ring r2" />
      <div className="orbit-ring r3" />
      <div className="orbit-spin">
        <div className="orbit-dot" />
      </div>
      <div className="orbit-spin slow">
        <div className="orbit-dot" />
      </div>
      <div className="orbit-core" />
    </div>
  );
};

export default OrbitMark;
