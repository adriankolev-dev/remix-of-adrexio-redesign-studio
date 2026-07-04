import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "@/lib/lenis";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jump instantly to the top on every route change. An instant jump (instead
    // of a smooth scroll) keeps the Lenis engine in sync and prevents scrolling
    // through every section on the way up, which would otherwise trigger and
    // "use up" the `whileInView` entrance animations before the user sees them.
    scrollToTop(true);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
