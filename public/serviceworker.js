const cache_name = "version-1"
const url_to_cache = ['index.html', 'offline.html']
const self = this


//Installing the service worker.
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cache_name)
            .then(cache => {
                console.log('cache opened')
                return cache.addAll(url_to_cache)
            })
    )
})

// Listening for the requests
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'))
            })
    )
})

// Activating the service worker
self.addEventListener('activate', function (event) {
    const cacheWhiteList = []
    cacheWhiteList.push(cache_name)

    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            cacheNames.map(cacheName => {
                if (!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})
