import { ROUTE_LOADERS } from '../routes.js';

function preloadFonts(timeoutMs = 1200) {
  if (typeof document === 'undefined' || !document.fonts?.ready) {
    return Promise.resolve();
  }
  return Promise.race([
    document.fonts.ready,
    new Promise((resolve) => setTimeout(resolve, timeoutMs)),
  ]);
}

function preloadActiveRoute(pathname) {
  const normalized = pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;
  const loader = ROUTE_LOADERS[normalized] || ROUTE_LOADERS['/'];
  return loader ? loader().catch(() => {}) : Promise.resolve();
}

function idlePrefetchSecondaryRoutes(currentPath) {
  Object.entries(ROUTE_LOADERS).forEach(([path, loader]) => {
    if (path !== currentPath && loader) {
      loader().catch(() => {});
    }
  });
}

export function coordinateResourceLoading(pathname, onProgress) {
  let isCancelled = false;

  const run = async () => {
    try {
      await preloadActiveRoute(pathname);
    } catch {}
    if (isCancelled) return;
    onProgress(50);

    try {
      await preloadFonts(1000);
    } catch {}
    if (isCancelled) return;
    onProgress(90);

    if (document.readyState !== 'complete') {
      await new Promise((resolve) => {
        window.addEventListener('load', resolve, { once: true });
        setTimeout(resolve, 300);
      });
    }

    if (isCancelled) return;
    onProgress(100);

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => idlePrefetchSecondaryRoutes(pathname));
    } else {
      setTimeout(() => idlePrefetchSecondaryRoutes(pathname), 1200);
    }
  };

  run();

  return () => {
    isCancelled = true;
  };
}

export { preloadFonts, preloadActiveRoute };
