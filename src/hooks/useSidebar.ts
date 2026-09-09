import { useCallback, useState } from "react";

const STORAGE_KEY = "kc-sidebar-open";

/**
 * Desktop sidebar open/collapsed state. Collapsed is the default the very
 * first time someone visits - a docs sidebar's job is to get out of the way
 * of the content until it's asked for - but once a reader opens or closes
 * it themselves that choice is remembered for next time.
 *
 * Below the 980px breakpoint the sidebar is a horizontal top bar, not this
 * collapsible column, so this state simply doesn't apply there - see the
 * `.sidebar-shell` rules in index.css, which only read `data-open` from
 * min-width: 980px up.
 */
const readStoredOpen = (): boolean => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") return true;
    if (stored === "false") return false;
  } catch {
    // localStorage can throw in a private window or with site data blocked -
    // fall through to the collapsed default below.
  }
  return false;
};

export const useSidebar = () => {
  const [open, setOpenState] = useState<boolean>(readStoredOpen);

  const setOpen = useCallback((next: boolean) => {
    setOpenState(next);
    try {
      localStorage.setItem(STORAGE_KEY, String(next));
    } catch {
      // Per-viewer convenience only - fine to silently drop.
    }
  }, []);

  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return { open, setOpen, toggle };
};
