// Minimal service worker - no caching to avoid path issues on GitHub Pages
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
