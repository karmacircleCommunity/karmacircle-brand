import { NavLink } from "react-router-dom";
import type { ThemeMode } from "../hooks/useTheme";
import { NAV_PAGES } from "../data/tokens";
import LogoMark from "./LogoMark";
import ThemeToggle from "./ThemeToggle";

interface SidebarProps {
  themeMode: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
  onOpenSearch: () => void;
}

const GROUPS = ["Foundations", "More"] as const;

const Sidebar = ({ themeMode, onThemeChange, onOpenSearch }: SidebarProps) => {
  const isMac = typeof navigator !== "undefined" && /mac/i.test(navigator.platform);

  return (
    <aside className="sidebar">
      <NavLink className="mark" to="/">
        <LogoMark size={30} />
        <span>
          <span className="mark-word">KarmaCircle</span>
          <span className="mark-sub">Brand system</span>
        </span>
      </NavLink>

      <button type="button" className="search-trigger" onClick={onOpenSearch}>
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" />
          <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span>Search</span>
        <kbd>{isMac ? "⌘K" : "Ctrl K"}</kbd>
      </button>

      <nav className="sections" aria-label="Sections">
        {GROUPS.map((group) => (
          <div className="nav-group" key={group}>
            <div className="nav-group-label">{group}</div>
            {NAV_PAGES.filter((page) => page.group === group).map((page) => (
              <NavLink
                key={page.id}
                to={page.path}
                end={page.path === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {page.label}
              </NavLink>
            ))}
          </div>
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
