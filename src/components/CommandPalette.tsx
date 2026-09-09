import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAV_PAGES } from "../data/tokens";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

/** Same grouping/order as NAV_PAGES, just bucketed under their group label. */
const GROUP_ORDER = ["Foundations", "More"] as const;

const LISTBOX_ID = "cmdk-listbox";
const optionId = (id: string) => `cmdk-option-${id}`;

const CommandPalette = ({ open, onClose }: CommandPaletteProps) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  // The element focused before the palette opened (almost always the
  // sidebar's Search button, but Cmd/Ctrl+K can fire from anywhere) - Escape
  // or a selection returns focus there instead of dropping it back to the
  // top of the document, which is what happens by default once the focused
  // element (this dialog's input) unmounts.
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
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
  const activeOptionId = flatResults[selected] ? optionId(flatResults[selected].id) : undefined;

  useEffect(() => {
    if (open) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
      setQuery("");
      setSelected(0);
      // Autofocus needs to wait one tick for the overlay to mount.
      window.requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      previouslyFocusedRef.current?.focus();
      previouslyFocusedRef.current = null;
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
      } else if (event.key === "Tab") {
        // The search field is the only focusable element in this dialog -
        // results are chosen with the arrow keys instead, roving via
        // aria-activedescendant - so Tab has nothing to move to. Without
        // this it would carry focus out to whatever sits next in the
        // document, visually hidden behind the overlay.
        event.preventDefault();
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
            role="combobox"
            aria-expanded="true"
            aria-controls={LISTBOX_ID}
            aria-activedescendant={activeOptionId}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="cmdk-esc">Esc</kbd>
        </div>

        <div className="cmdk-list" id={LISTBOX_ID} role="listbox" aria-label="Pages">
          {flatResults.length === 0 && (
            <p className="cmdk-empty" role="status">
              No pages match &ldquo;{query}&rdquo;.
            </p>
          )}
          {results.map((entry) => (
            <div key={entry.group} className="cmdk-group" role="group" aria-label={entry.group}>
              <div className="cmdk-group-label" aria-hidden="true">
                {entry.group}
              </div>
              {entry.pages.map((page) => {
                rowIndex += 1;
                const isSelected = rowIndex === selected;
                return (
                  <div
                    key={page.id}
                    id={optionId(page.id)}
                    role="option"
                    aria-selected={isSelected}
                    className={`cmdk-item${isSelected ? " selected" : ""}`}
                    onMouseEnter={() => setSelected(rowIndex)}
                    onMouseDown={(event) => {
                      // The input owns focus for the whole interaction -
                      // don't let a click steal it away first.
                      event.preventDefault();
                    }}
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
                  </div>
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
