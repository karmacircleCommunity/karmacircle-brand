import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import LogoMark from "../components/LogoMark";
import { NAV_PAGES } from "../data/tokens";
import type { ThemeMode } from "../hooks/useTheme";

interface DocsLayoutProps {
  themeMode: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
  onOpenSearch: () => void;
}

const YEAR = new Date().getFullYear();

const DocsLayout = ({ themeMode, onThemeChange, onOpenSearch }: DocsLayoutProps) => {
  return (
    <div className="shell">
      <Sidebar themeMode={themeMode} onThemeChange={onThemeChange} onOpenSearch={onOpenSearch} />
      <main>
        <Outlet />
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <Link className="footer-mark" to="/">
                <LogoMark size={26} />
                <span className="footer-mark-word">KarmaCircle</span>
              </Link>
              <p>
                Brand and design system for the platform that connects NGOs,
                charities, and the people who show up for them.
              </p>
            </div>

            <nav className="footer-col" aria-label="Foundations">
              <div className="footer-col-label">Foundations</div>
              {NAV_PAGES.filter((page) => page.group === "Foundations").map((page) => (
                <Link key={page.id} to={page.path}>
                  {page.label}
                </Link>
              ))}
            </nav>

            <nav className="footer-col" aria-label="More">
              <div className="footer-col-label">More</div>
              {NAV_PAGES.filter((page) => page.group === "More").map((page) => (
                <Link key={page.id} to={page.path}>
                  {page.label}
                </Link>
              ))}
            </nav>

            <nav className="footer-col" aria-label="Elsewhere">
              <div className="footer-col-label">Elsewhere</div>
              <a href="https://karmacircle.org" target="_blank" rel="noreferrer">
                karmacircle.org
              </a>
              <a href="https://github.com/karmacircleCommunity/KarmaCircle" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </nav>

            <div className="footer-social" aria-label="Social">
              <a
                className="footer-social-link"
                href="https://github.com/karmacircleCommunity/KarmaCircle"
                target="_blank"
                rel="noreferrer"
                aria-label="KarmaCircle on GitHub"
              >
                <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
              </a>
              <a
                className="footer-social-link"
                href="https://karmacircle.org"
                target="_blank"
                rel="noreferrer"
                aria-label="KarmaCircle website"
              >
                <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
                  <path
                    d="M1.5 8h13M8 1.5c1.8 1.9 2.8 4.1 2.8 6.5S9.8 12.6 8 14.5C6.2 12.6 5.2 10.4 5.2 8S6.2 3.4 8 1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; {YEAR} KarmaCircle</span>
            <span>Brand &amp; design system</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DocsLayout;
