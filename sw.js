const CACHE_NAME = 'mesai-takip-v3';
const ASSETS = [
  '/Mesai-program-v2/',
  '/Mesai-program-v2/index.html',
  '/Mesai-program-v2/manifest.json',
  '/Mesai-program-v2/icons/icon-192x192.png',
  '/Mesai-program-v2/icons/icon-512x512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS).catch(()=>{})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || e.request.method !== 'GET') return res;
        let clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match('/Mesai-program-v2/index.html'));
    })
  );
});
