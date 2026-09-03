import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import type { ThemeMode } from "../hooks/useTheme";

interface DocsLayoutProps {
  themeMode: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
  onOpenSearch: () => void;
}

const DocsLayout = ({ themeMode, onThemeChange, onOpenSearch }: DocsLayoutProps) => {
  return (
    <div className="shell">
      <Sidebar themeMode={themeMode} onThemeChange={onThemeChange} onOpenSearch={onOpenSearch} />
      <main>
        <Outlet />
        <footer className="credit">
          <div className="credit-inner">
            <span>KarmaCircle brand &amp; design system</span>
            <a href="https://karmacircle.org" target="_blank" rel="noreferrer">
              karmacircle.org
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DocsLayout;
