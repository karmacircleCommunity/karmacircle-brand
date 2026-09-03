import type { ThemeMode } from "../hooks/useTheme";
import { NAV_SECTIONS } from "../data/tokens";
import ThemeToggle from "./ThemeToggle";

interface SidebarProps {
  activeId: string;
  themeMode: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
}

const Sidebar = ({ activeId, themeMode, onThemeChange }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <a className="mark" href="#overview">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <circle cx="15" cy="15" r="13.5" stroke="var(--border)" strokeWidth="1" />
          <circle cx="15" cy="3.5" r="2.6" fill="var(--brand)" />
        </svg>
        <span>
          <span className="mark-word">KarmaCircle</span>
          <span className="mark-sub">Brand system</span>
        </span>
      </a>

      <nav className="sections" aria-label="Sections">
        {NAV_SECTIONS.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeId === section.id ? "active" : ""}
            aria-current={activeId === section.id ? "true" : undefined}
          >
            <span className="num">{String(index + 1).padStart(2, "0")}</span>
            {section.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-foot">
        <ThemeToggle mode={themeMode} onChange={onThemeChange} />
        <p className="sidebar-note">
          The KarmaCircle brand and design system. Tokens mirror{" "}
          <code>apps/web/src/styles/index.css</code> in the product repo.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
