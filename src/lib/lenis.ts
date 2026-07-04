import type Lenis from "@studio-freight/lenis";

let lenisInstance: Lenis | null = null;

export const setLenis = (instance: Lenis | null) => {
  lenisInstance = instance;
};

export const getLenis = () => lenisInstance;

/**
 * Scrolls to the top of the page. Uses the shared Lenis instance when available
 * (so it stays in sync with the smooth-scroll engine), otherwise falls back to
 * the native window scroll. Set `immediate` to jump instantly (e.g. on route
 * change, to avoid burning through `whileInView` animations on the way up).
 */
export const scrollToTop = (immediate = false) => {
  const lenis = lenisInstance;
  if (lenis) {
    lenis.scrollTo(0, { immediate, force: true });
    return;
  }
  window.scrollTo({ top: 0, left: 0, behavior: immediate ? "auto" : "smooth" });
};
