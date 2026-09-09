import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import LogoMark from "../components/LogoMark";
import type { ThemeMode } from "../hooks/useTheme";

interface DocsLayoutProps {
  themeMode: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
  onOpenSearch: () => void;
}

const YEAR = new Date().getFullYear();

/**
 * The footer deliberately does NOT repeat the page nav. The sidebar carries
 * every page and is on screen at all times (fixed column on desktop, sticky
 * bar on mobile), and PageFooterNav already offers previous/next directly
 * above this - a third copy of the same links was pure noise. What's left is
 * identity, the two off-site destinations, and the copyright.
 */
const DocsLayout = ({ themeMode, onThemeChange, onOpenSearch }: DocsLayoutProps) => {
  return (
    <div className="shell">
      <Sidebar themeMode={themeMode} onThemeChange={onThemeChange} onOpenSearch={onOpenSearch} />
      <main>
        <Outlet />
        <footer className="site-footer">
          <div className="footer-inner">
            <Link className="footer-mark" to="/">
              <LogoMark size={24} />
              <span className="footer-mark-text">
                <span className="footer-mark-word">KarmaCircle</span>
                <span className="footer-mark-sub">Brand &amp; design system</span>
              </span>
            </Link>

            <nav className="footer-links" aria-label="Elsewhere">
              <a href="https://karmacircle.org" target="_blank" rel="noreferrer">
                karmacircle.org
              </a>
              <a href="https://github.com/karmacircleCommunity/KarmaCircle" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </nav>
          </div>

          <div className="footer-bottom">
            <span>&copy; {YEAR} KarmaCircle</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DocsLayout;
