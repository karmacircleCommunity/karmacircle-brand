import { useState } from "react";
import type { ColorToken } from "../data/tokens";

interface ColorSwatchProps {
  token: ColorToken;
}

const ColorSwatch = ({ token }: ColorSwatchProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(token.hex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1100);
    } catch {
      // Clipboard access can be denied - fail quietly, this is a convenience.
    }
  };

  return (
    <button className="swatch" type="button" onClick={handleCopy} aria-label={`Copy ${token.hex}`}>
      <div
        className={`swatch-fill${token.onLight ? " on-light" : ""}`}
        style={{ background: token.hex }}
      >
        <span>{copied ? "Copied" : token.hex}</span>
      </div>
      <div className="swatch-meta">
        <div className="name">{token.name}</div>
        <div className="hex">{token.token}</div>
      </div>
    </button>
  );
};

export default ColorSwatch;
