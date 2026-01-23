// ==========================================================================
// SERVICE WORKER - Offline Caching for PWA
// ==========================================================================

const CACHE_NAME = 'pk-portfolio-v1';
const OFFLINE_URL = '/my-portfolio/offline.html';

// Files to cache for offline use
const STATIC_CACHE_URLS = [
    '/my-portfolio/',
    '/my-portfolio/index.html',
    '/my-portfolio/style.css',
    '/my-portfolio/script.js',
    '/my-portfolio/adaptive-layout.css',
    '/my-portfolio/animations.css',
    '/my-portfolio/github-skills.css',
    '/my-portfolio/hire-me.css',
    '/my-portfolio/overlay-fix.css',
    '/my-portfolio/mobile-fixes.css',
    '/my-portfolio/scroll-top.css',
    '/my-portfolio/assets/images/logo.png.jpg',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching static assets');
                return cache.addAll(STATIC_CACHE_URLS);
            })
            .catch((error) => {
                console.log('[Service Worker] Cache failed:', error);
            })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached response if found
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Otherwise fetch from network
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Don't cache external resources
                        if (!event.request.url.startsWith(self.location.origin)) {
                            return networkResponse;
                        }

                        // Cache the new response
                        return caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, networkResponse.clone());
                                return networkResponse;
                            });
                    })
                    .catch(() => {
                        // If both cache and network fail, show offline page for navigation requests
                        if (event.request.mode === 'navigate') {
                            return caches.match(OFFLINE_URL);
                        }
                    });
            })
    );
});
