import { useCallback, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";

const STORAGE_KEY = "kc-brand-theme";

const readStoredMode = (): ThemeMode => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    // localStorage can throw in a private window or with site data blocked -
    // fall through to the default below.
  }
  return "system";
};

/**
 * Three-state theme (light / dark / system), matching the token structure in
 * index.css: an explicit choice stamps `data-theme` on <html>, and "system"
 * removes the attribute so `prefers-color-scheme` alone decides.
 */
export const useTheme = () => {
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "system") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", mode);
    }
  }, [mode]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Per-viewer convenience only - fine to silently drop.
    }
  }, []);

  return { mode, setMode };
};
