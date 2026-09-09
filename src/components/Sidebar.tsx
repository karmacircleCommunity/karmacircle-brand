import { NavLink } from "react-router-dom";
import type { ThemeMode } from "../hooks/useTheme";
import { useSidebar } from "../hooks/useSidebar";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { NAV_PAGES } from "../data/tokens";
import LogoMark from "./LogoMark";
import ThemeToggle from "./ThemeToggle";

interface SidebarProps {
  themeMode: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
  onOpenSearch: () => void;
}

const GROUPS = ["Foundations", "More"] as const;

const SIDEBAR_PANEL_ID = "sidebar-panel";

/** Matches the "Desktop: sidebar becomes a fixed left column" breakpoint in
 * index.css. Collapse only exists at this width - below it the sidebar is a
 * horizontal top bar with nothing to collapse, so its content must never be
 * hidden or made inert there regardless of the desktop `open` preference. */
const DESKTOP_QUERY = "(min-width: 980px)";

/** A rectangle split by a vertical bar - the same "toggle a side panel" glyph
 * most editors and docs sites use, so the control reads as "collapse the
 * sidebar" without needing to be read to understand on sight. */
const SidebarToggleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="1.5" y="2.5" width="13" height="11" rx="1.75" stroke="currentColor" strokeWidth="1.4" />
    <path d="M6 2.5V13.5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const Sidebar = ({ themeMode, onThemeChange, onOpenSearch }: SidebarProps) => {
  const isMac = typeof navigator !== "undefined" && /mac/i.test(navigator.platform);
  const { open, toggle } = useSidebar();
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  // Collapse is a desktop-only concept - on the mobile top bar the panel is
  // always usable no matter what the remembered desktop preference is.
  const collapsed = isDesktop && !open;

  return (
    // `display: contents` below the desktop breakpoint, so this wrapper is
    // invisible to layout there and .sidebar keeps acting exactly like the
    // single sticky top bar it always was. From 980px up it becomes the real
    // box: a fixed-width column that animates down to a narrow rail when
    // collapsed, with the toggle button living outside the collapsible panel
    // so it's always reachable regardless of `open` - see index.css.
    <div className="sidebar-shell" data-open={!collapsed}>
      <button
        type="button"
        className="sidebar-toggle"
        onClick={toggle}
        aria-expanded={!collapsed}
        aria-controls={SIDEBAR_PANEL_ID}
      >
        <SidebarToggleIcon />
        <span className="sr-only">{collapsed ? "Expand sidebar" : "Collapse sidebar"}</span>
      </button>

      <aside className="sidebar" id={SIDEBAR_PANEL_ID} aria-hidden={collapsed} inert={collapsed}>
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
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
