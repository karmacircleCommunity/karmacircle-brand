import Sidebar from "./components/Sidebar";
import { NAV_SECTIONS } from "./data/tokens";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";
import Overview from "./sections/Overview";
import Colors from "./sections/Colors";
import Typography from "./sections/Typography";
import Shape from "./sections/Shape";
import Components from "./sections/Components";
import Voice from "./sections/Voice";

const SECTION_IDS = NAV_SECTIONS.map((section) => section.id);

const App = () => {
  const { mode, setMode } = useTheme();
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <div className="shell">
      <Sidebar activeId={activeId} themeMode={mode} onThemeChange={setMode} />
      <main>
        <Overview />
        <Colors />
        <Typography />
        <Shape />
        <Components />
        <Voice />
        <footer className="credit">
          <span>KarmaCircle brand &amp; design system</span>
          <a href="https://karmacircle.org" target="_blank" rel="noreferrer">
            karmacircle.org
          </a>
        </footer>
      </main>
    </div>
  );
};

export default App;
