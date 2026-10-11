// BendMark — service worker minimal (permet l'installation de l'appli)
// Ne garde rien en cache : chaque ouverture charge toujours la dernière version.
self.addEventListener("install", function(e){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  e.respondWith(fetch(e.request));
});
