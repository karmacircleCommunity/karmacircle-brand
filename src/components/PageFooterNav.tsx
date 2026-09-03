import { Link } from "react-router-dom";
import { NAV_PAGES } from "../data/tokens";

interface PageFooterNavProps {
  currentId: string;
}

const PageFooterNav = ({ currentId }: PageFooterNavProps) => {
  const index = NAV_PAGES.findIndex((page) => page.id === currentId);
  const prev = index > 0 ? NAV_PAGES[index - 1] : undefined;
  const next = index >= 0 && index < NAV_PAGES.length - 1 ? NAV_PAGES[index + 1] : undefined;

  if (!prev && !next) return null;

  return (
    <nav className="page-footer-nav" aria-label="Page navigation">
      {prev ? (
        <Link className="page-footer-link prev" to={prev.path}>
          <span className="l">Previous</span>
          <span className="t">&larr; {prev.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link className="page-footer-link next" to={next.path}>
          <span className="l">Next</span>
          <span className="t">{next.label} &rarr;</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
};

export default PageFooterNav;
