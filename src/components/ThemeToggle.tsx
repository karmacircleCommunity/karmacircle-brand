import type { ThemeMode } from "../hooks/useTheme";

interface ThemeToggleProps {
  mode: ThemeMode;
  onChange: (mode: ThemeMode) => void;
}

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
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
