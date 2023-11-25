self.addEventListener('install', function(event) {
  // Précachage de ressources
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/stylesheet/styles.css',
        '/scripts/script.js',
        // Autres ressources nécessaires
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - retourne la réponse du cache
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
