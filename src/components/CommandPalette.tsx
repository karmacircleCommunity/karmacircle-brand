import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAV_PAGES } from "../data/tokens";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

/** Same grouping/order as NAV_PAGES, just bucketed under their group label. */
const GROUP_ORDER = ["Foundations", "More"] as const;

const CommandPalette = ({ open, onClose }: CommandPaletteProps) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = NAV_PAGES.filter(
      (page) =>
        q.length === 0 ||
        page.label.toLowerCase().includes(q) ||
        page.description.toLowerCase().includes(q),
    );
    return GROUP_ORDER.map((group) => ({
      group,
      pages: matches.filter((page) => page.group === group),
    })).filter((entry) => entry.pages.length > 0);
  }, [query]);

  const flatResults = useMemo(() => results.flatMap((entry) => entry.pages), [results]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(0);
      // Autofocus needs to wait one tick for the overlay to mount.
      window.requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelected((i) => Math.min(i + 1, flatResults.length - 1));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelected((i) => Math.max(i - 1, 0));
      } else if (event.key === "Enter") {
        event.preventDefault();
        const target = flatResults[selected];
        if (target) {
          navigate(target.path);
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, flatResults, selected, navigate, onClose]);

  if (!open) return null;

  let rowIndex = -1;

  return (
    <div className="cmdk-overlay" onMouseDown={onClose}>
      <div
        className="cmdk-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="cmdk-input-row">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" />
            <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
            aria-label="Search pages"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="cmdk-esc">Esc</kbd>
        </div>

        <div className="cmdk-list" role="listbox">
          {flatResults.length === 0 && <p className="cmdk-empty">No pages match &ldquo;{query}&rdquo;.</p>}
          {results.map((entry) => (
            <div key={entry.group} className="cmdk-group">
              <div className="cmdk-group-label">{entry.group}</div>
              {entry.pages.map((page) => {
                rowIndex += 1;
                const isSelected = rowIndex === selected;
                return (
                  <button
                    key={page.id}
                    type="button"
                    className={`cmdk-item${isSelected ? " selected" : ""}`}
                    onMouseEnter={() => setSelected(rowIndex)}
                    onClick={() => {
                      navigate(page.path);
                      onClose();
                    }}
                  >
                    <span className="cmdk-item-arrow" aria-hidden="true">
                      &rarr;
                    </span>
                    <span className="cmdk-item-text">
                      <span className="cmdk-item-label">{page.label}</span>
                      <span className="cmdk-item-desc">{page.description}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
