const loaders: Record<string, () => Promise<unknown>> = {
  "/services": () => import("@/pages/Services"),
  "/about": () => import("@/pages/About"),
  "/case-studies": () => import("@/pages/CaseStudies"),
  "/blog": () => import("@/pages/Blog"),
  "/pricing": () => import("@/pages/Pricing"),
  "/contact": () => import("@/pages/Contact"),
};

const queued = new Set<string>();

export function prefetchRoute(href: string) {
  const load = loaders[href];
  if (!load || queued.has(href)) return;
  queued.add(href);
  void load();
}

export function prefetchCaseStudy() {
  prefetchRoute("/case-studies");
  if (queued.has("case-study-detail")) return;
  queued.add("case-study-detail");
  void import("@/pages/CaseStudyDetail");
}
