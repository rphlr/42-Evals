self.addEventListener('install', (e) => {
	console.log('[Service Worker] Install');
	
  });
  
  self.addEventListener('fetch', (e) => {
	console.log('[Service Worker] Fetch', e.request.url);
  });
  