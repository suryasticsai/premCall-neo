const CACHE_NAME = 'premcall-neo-v1';

// Install and activate immediately
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(clients.claim()));

// Intercept network requests (Network first, fallback to cache if offline)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});