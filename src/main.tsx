import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* lerp-only (no `duration`): duration would override lerp and force every
          scroll tick through a fixed-length ease, which is what made scrolling
          feel like it was lagging behind the wheel/trackpad input. */}
      <ReactLenis root options={{ lerp: 0.12, smoothWheel: true }}>
        <App />
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>,
);
