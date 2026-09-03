import { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import DocsLayout from "./layouts/DocsLayout";
import CommandPalette from "./components/CommandPalette";
import { useTheme } from "./hooks/useTheme";
import OverviewPage from "./pages/OverviewPage";
import ColorsPage from "./pages/ColorsPage";
import TypographyPage from "./pages/TypographyPage";
import MaterialsPage from "./pages/MaterialsPage";
import ComponentsPage from "./pages/ComponentsPage";
import VoicePage from "./pages/VoicePage";

const App = () => {
  const { mode, setMode } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const lenis = useLenis();

  // React Router doesn't scroll-restore on navigation by itself, and a
  // plain window.scrollTo would fight Lenis's own scroll loop - route the
  // reset through the same instance instead.
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [location.pathname, lenis]);

  // Focusing an element that isn't fully in view (e.g. a sidebar control
  // when the nav content is taller than a short viewport) makes the browser
  // natively scroll it into view. Lenis mirrors native scroll into its own
  // internal position on the same tick - except while it's mid an unrelated
  // smooth-scroll animation, when it ignores the native change and later
  // overwrites window.scrollY back to its stale target, leaving the page
  // rendered at the wrong offset until the next manual scroll. Re-syncing
  // Lenis's position to whatever the browser actually did closes that gap;
  // any in-flight animation is abandoned in favor of the newer scroll,
  // which matches what a user expects when a focus change jumps the page.
  useEffect(() => {
    if (!lenis) return;
    const resync = () => lenis.resize();
    window.addEventListener("focusin", resync);
    return () => window.removeEventListener("focusin", resync);
  }, [lenis]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isCombo = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isCombo) {
        event.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  return (
    <>
      <Routes>
        <Route element={<DocsLayout themeMode={mode} onThemeChange={setMode} onOpenSearch={openSearch} />}>
          <Route index element={<OverviewPage />} />
          <Route path="colors" element={<ColorsPage />} />
          <Route path="typography" element={<TypographyPage />} />
          <Route path="materials" element={<MaterialsPage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="voice" element={<VoicePage />} />
        </Route>
      </Routes>
      <CommandPalette open={searchOpen} onClose={closeSearch} />
    </>
  );
};

export default App;
