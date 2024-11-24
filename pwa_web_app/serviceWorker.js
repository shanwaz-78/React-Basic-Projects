const CACHE_NAME = `version-1`;
const urlsToCache = ["./index.html", "./offline.html"];

const self = this;

// install sw
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((chache) => {
      console.log(`Chach Opened:`, chache);
      return chache.addAll(urlsToCache);
    })
  );
});

// fetch sw
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("./offline.html"));
    })
  );
});

// activate sw
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheNames.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
