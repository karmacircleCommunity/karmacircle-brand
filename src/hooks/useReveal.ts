import { useEffect, useRef, useState } from "react";

export type RevealState = "pending" | "in";

/**
 * One-shot "this has scrolled into view" flag, exposed as a `data-reveal`
 * value so the animation itself stays in CSS. Starts at "pending" because
 * this site is client-rendered - nothing paints before React runs, so there
 * is no no-JS window where pending content would sit invisible. Reduced
 * motion resolves straight to "in" and never observes anything.
 */
export const useReveal = <T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") => {
  const ref = useRef<T>(null);
  const [state, setState] = useState<RevealState>("pending");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setState("in");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("in");
        observer.disconnect();
      },
      { rootMargin, threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, state] as const;
};
