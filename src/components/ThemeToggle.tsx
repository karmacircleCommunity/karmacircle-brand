import type { ReactNode } from "react";
import type { ThemeMode } from "../hooks/useTheme";

interface ThemeToggleProps {
  mode: ThemeMode;
  onChange: (mode: ThemeMode) => void;
}

/** Sun / moon / monitor - the same iconography every OS theme picker uses,
 * so the control reads as "pick a theme" on sight instead of needing a
 * text label to explain itself. Each is a plain stroke icon (1.4 weight,
 * currentColor) to match the search icon in the sidebar above it. */
const ICONS: Record<ThemeMode, ReactNode> = {
  light: (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 1.25V2.75M8 13.25V14.75M14.75 8H13.25M2.75 8H1.25M12.7 3.3L11.64 4.36M4.36 11.64L3.3 12.7M12.7 12.7L11.64 11.64M4.36 4.36L3.3 3.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  dark: (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M13.9 9.85A5.6 5.6 0 1 1 6.15 2.1a6.1 6.1 0 0 0 7.75 7.75Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  system: (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.75" width="13" height="8.5" rx="1.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 14.25h5M8 11.25v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

const OPTIONS: { mode: ThemeMode; label: string }[] = [
  { mode: "light", label: "Light" },
  { mode: "dark", label: "Dark" },
  { mode: "system", label: "Auto" },
];

const ThemeToggle = ({ mode, onChange }: ThemeToggleProps) => {
  return (
    <div className="theme-toggle" role="radiogroup" aria-label="Theme">
      {OPTIONS.map((option) => (
        <button
          key={option.mode}
          type="button"
          role="radio"
          aria-checked={mode === option.mode}
          title={`${option.label} theme`}
          className={mode === option.mode ? "active" : ""}
          // A mouse/touch click focuses the button by default, and if the
          // sidebar's nav content is taller than the viewport (short window,
          // long nav list) that button can sit partially below the fold -
          // the browser then auto-scrolls it into view, which Lenis (mid an
          // unrelated wheel/scroll animation) can miss and then silently
          // undo, leaving the page rendered at a stale scroll position.
          // Keyboard (Tab) focus should still scroll normally for
          // accessibility, so only suppress the default on pointer clicks.
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => onChange(option.mode)}
        >
          {ICONS[option.mode]}
          <span className="sr-only">{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
