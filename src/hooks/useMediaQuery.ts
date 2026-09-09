import { useEffect, useState } from "react";

/**
 * Tracks a CSS media query in JS, kept in sync with the same breakpoints
 * index.css uses (see the "Breakpoints (mobile-first)" section there) so
 * layout decisions that need to happen in script - not just style - agree
 * with what the stylesheet is actually rendering.
 */
export const useMediaQuery = (query: string): boolean => {
  const getMatch = () => (typeof window !== "undefined" ? window.matchMedia(query).matches : false);
  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
};
