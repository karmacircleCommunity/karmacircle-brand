import { useEffect, useState } from "react";

interface CountUpProps {
  /** Final value. Rendered verbatim once the tick finishes. */
  to: number;
  durationMs?: number;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Ticks a stat up from zero on mount. It is decoration on top of a number
 * that has to be correct either way, so anyone who asked for less motion
 * gets the final value on the first frame rather than a shortened tick.
 */
const CountUp = ({ to, durationMs = 900 }: CountUpProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      setValue(Math.round(to * easeOutCubic(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, durationMs]);

  return <>{value}</>;
};

export default CountUp;
