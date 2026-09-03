import { useState } from "react";
import type { ReactNode } from "react";

interface CodeBlockProps {
  /** Raw text placed on the clipboard - kept separate from `children` since
   * the displayed markup is broken into syntax-highlighting spans. */
  code: string;
  children: ReactNode;
}

/**
 * A line-numbered, copyable code sample - the box Geist's own typography
 * page opens with to show how its classes are actually consumed, rather
 * than leaving that to a class-name column alone.
 */
const CodeBlock = ({ code, children }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1100);
    } catch {
      // Clipboard access can be denied - fail quietly, this is a convenience.
    }
  };

  return (
    <div className="code-block">
      <button type="button" className={`code-copy${copied ? " copied" : ""}`} onClick={handleCopy}>
        {copied ? "Copied" : "Copy"}
      </button>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
