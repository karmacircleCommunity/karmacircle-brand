import { useState } from "react";
import type { ReactNode } from "react";

export interface DetailRow {
  key: string;
  example: ReactNode;
  className: string;
  usage: string;
}

interface DetailTableProps {
  rows: DetailRow[];
  exampleLabel?: string;
}

/**
 * A responsive Aa-Example / Class-name / Usage table, the pattern Geist's
 * docs use throughout. A CSS grid on wide viewports (`display: contents` on
 * each row lets its three cells sit directly in the parent's column
 * tracks); each row folds into a stacked, labelled card below the mobile
 * breakpoint instead of forcing horizontal scroll - see .detail-table in
 * index.css.
 *
 * There is deliberately only one dividing line in the whole table, under
 * the header - `.detail-rule` spans every column (`grid-column: 1 / -1`)
 * so it reads as one continuous rule rather than three separate
 * per-cell borders sitting side by side with gaps between them. Rows below
 * it are separated by padding alone, matching Geist's own tables, which
 * don't rule off every row either.
 *
 * The class name cell doubles as a copy button, matching ColorSwatch's
 * click-to-copy pattern on the Colors page - there was previously no way
 * to get a token's name onto the clipboard short of selecting the text.
 */
const DetailTable = ({ rows, exampleLabel = "Example" }: DetailTableProps) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (row: DetailRow) => {
    try {
      await navigator.clipboard.writeText(row.className);
      setCopiedKey(row.key);
      window.setTimeout(() => {
        setCopiedKey((current) => (current === row.key ? null : current));
      }, 1100);
    } catch {
      // Clipboard access can be denied - fail quietly, this is a convenience.
    }
  };

  return (
    <div className="detail-table">
      <div className="detail-head" aria-hidden="true">
        <div className="detail-cell">{exampleLabel}</div>
        <div className="detail-cell">
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
            <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M3 10.5V3.5C3 2.94772 3.44772 2.5 4 2.5H10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          Class name
        </div>
        <div className="detail-cell">
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
            <path d="M8 7.25V11.25" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="8" cy="5" r="0.9" fill="currentColor" />
          </svg>
          Usage
        </div>
      </div>
      <div className="detail-rule" aria-hidden="true" />
      {rows.map((row) => {
        const copied = copiedKey === row.key;
        return (
          <div className="detail-row" key={row.key}>
            <div className="detail-cell" data-label={exampleLabel}>
              {row.example}
            </div>
            <div className="detail-cell" data-label="Class name">
              <button
                type="button"
                className={`copy-chip${copied ? " copied" : ""}`}
                onClick={() => handleCopy(row)}
                aria-label={`Copy ${row.className}`}
              >
                <span className="mono">{row.className}</span>
                {copied ? (
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3.5 8.5L6.5 11.5L12.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                    <path
                      d="M3 10.5V3.5C3 2.94772 3.44772 2.5 4 2.5H10.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
              {copied && <span className="copy-flag">Copied</span>}
            </div>
            <div className="detail-cell" data-label="Usage">
              {row.usage}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailTable;
