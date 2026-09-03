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
          onClick={() => onChange(option.mode)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
