
const CACHE_NAME = 'flhq-v14-1754753077';
const ASSETS = [
  "./acts.json",
  "./auth.html",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./index.html",
  "./manifest.json"
];

self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=> c.addAll(ASSETS)));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(caches.keys().then(keys=> Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=> caches.delete(k)))));
});
self.addEventListener('fetch', (e)=>{
  const url = new URL(e.request.url);
  if(url.origin === location.origin){
    e.respondWith(
      caches.match(e.request).then(r=> r || fetch(e.request).then(resp=>{ 
        const copy = resp.clone(); caches.open(CACHE_NAME).then(c=> c.put(e.request, copy)); return resp; 
      }))
    );
  }
});
