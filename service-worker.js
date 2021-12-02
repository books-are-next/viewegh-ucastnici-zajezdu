/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-118f515';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./colophon.html","./favicon.png","./index.html","./manifest.json","./ucastnici_zajezdu_002.html","./ucastnici_zajezdu_005.html","./ucastnici_zajezdu_003.html","./ucastnici_zajezdu_006.html","./ucastnici_zajezdu_007.html","./ucastnici_zajezdu_008.html","./ucastnici_zajezdu_009.html","./ucastnici_zajezdu_010.html","./ucastnici_zajezdu_011.html","./ucastnici_zajezdu_012.html","./ucastnici_zajezdu_013.html","./ucastnici_zajezdu_014.html","./ucastnici_zajezdu_015.html","./ucastnici_zajezdu_016.html","./ucastnici_zajezdu_017.html","./ucastnici_zajezdu_018.html","./ucastnici_zajezdu_019.html","./ucastnici_zajezdu_020.html","./ucastnici_zajezdu_021.html","./ucastnici_zajezdu_022.html","./ucastnici_zajezdu_023.html","./ucastnici_zajezdu_024.html","./ucastnici_zajezdu_025.html","./ucastnici_zajezdu_026.html","./ucastnici_zajezdu_027.html","./ucastnici_zajezdu_028.html","./ucastnici_zajezdu_029.html","./ucastnici_zajezdu_030.html","./ucastnici_zajezdu_031.html","./ucastnici_zajezdu_032.html","./ucastnici_zajezdu_033.html","./ucastnici_zajezdu_034.html","./ucastnici_zajezdu_035.html","./ucastnici_zajezdu_037.html","./ucastnici_zajezdu_036.html","./ucastnici_zajezdu_039.html","./ucastnici_zajezdu_038.html","./ucastnici_zajezdu_040.html","./ucastnici_zajezdu_041.html","./ucastnici_zajezdu_042.html","./ucastnici_zajezdu_043.html","./ucastnici_zajezdu_044.html","./ucastnici_zajezdu_046.html","./ucastnici_zajezdu_045.html","./ucastnici_zajezdu_047.html","./ucastnici_zajezdu_048.html","./ucastnici_zajezdu_049.html","./ucastnici_zajezdu_050.html","./ucastnici_zajezdu_051.html","./ucastnici_zajezdu_052.html","./ucastnici_zajezdu_054.html","./ucastnici_zajezdu_053.html","./ucastnici_zajezdu_055.html","./ucastnici_zajezdu_056.html","./ucastnici_zajezdu_057.html","./ucastnici_zajezdu_059.html","./ucastnici_zajezdu_058.html","./ucastnici_zajezdu_061.html","./ucastnici_zajezdu_062.html","./ucastnici_zajezdu_060.html","./ucastnici_zajezdu_063.html","./ucastnici_zajezdu_064.html","./ucastnici_zajezdu_066.html","./ucastnici_zajezdu_065.html","./ucastnici_zajezdu_067.html","./ucastnici_zajezdu_068.html","./ucastnici_zajezdu_069.html","./ucastnici_zajezdu_070.html","./ucastnici_zajezdu_071.html","./ucastnici_zajezdu_072.html","./ucastnici_zajezdu_073.html","./ucastnici_zajezdu_074.html","./ucastnici_zajezdu_076.html","./ucastnici_zajezdu_075.html","./ucastnici_zajezdu_077.html","./ucastnici_zajezdu_078.html","./ucastnici_zajezdu_079.html","./ucastnici_zajezdu_080.html","./ucastnici_zajezdu_081.html","./ucastnici_zajezdu_083.html","./ucastnici_zajezdu_082.html","./ucastnici_zajezdu_084.html","./ucastnici_zajezdu_085.html","./ucastnici_zajezdu_086.html","./ucastnici_zajezdu_088.html","./ucastnici_zajezdu_087.html","./ucastnici_zajezdu_090.html","./ucastnici_zajezdu_089.html","./ucastnici_zajezdu_091.html","./ucastnici_zajezdu_092.html","./ucastnici_zajezdu_093.html","./ucastnici_zajezdu_095.html","./ucastnici_zajezdu_094.html","./ucastnici_zajezdu_096.html","./ucastnici_zajezdu_097.html","./ucastnici_zajezdu_098.html","./ucastnici_zajezdu_099.html","./ucastnici_zajezdu_100.html","./ucastnici_zajezdu_101.html","./ucastnici_zajezdu_102.html","./ucastnici_zajezdu_103.html","./ucastnici_zajezdu_104.html","./ucastnici_zajezdu_105.html","./ucastnici_zajezdu_106.html","./ucastnici_zajezdu_107.html","./ucastnici_zajezdu_108.html","./ucastnici_zajezdu_109.html","./ucastnici_zajezdu_110.html","./ucastnici_zajezdu_111.html","./ucastnici_zajezdu_112.html","./ucastnici_zajezdu_113.html","./ucastnici_zajezdu_114.html","./ucastnici_zajezdu_115.html","./ucastnici_zajezdu_116.html","./ucastnici_zajezdu_117.html","./ucastnici_zajezdu_118.html","./ucastnici_zajezdu_119.html","./ucastnici_zajezdu_120.html","./ucastnici_zajezdu_121.html","./ucastnici_zajezdu_122.html","./ucastnici_zajezdu_123.html","./ucastnici_zajezdu_124.html","./ucastnici_zajezdu_125.html","./ucastnici_zajezdu_126.html","./ucastnici_zajezdu_127.html","./ucastnici_zajezdu_128.html","./ucastnici_zajezdu_129.html","./ucastnici_zajezdu_130.html","./ucastnici_zajezdu_131.html","./ucastnici_zajezdu_132.html","./ucastnici_zajezdu_133.html","./ucastnici_zajezdu_134.html","./ucastnici_zajezdu_135.html","./ucastnici_zajezdu_136.html","./ucastnici_zajezdu_137.html","./ucastnici_zajezdu_138.html","./ucastnici_zajezdu_139.html","./ucastnici_zajezdu_140.html","./ucastnici_zajezdu_141.html","./ucastnici_zajezdu_142.html","./ucastnici_zajezdu_143.html","./ucastnici_zajezdu_144.html","./ucastnici_zajezdu_145.html","./ucastnici_zajezdu_146.html","./ucastnici_zajezdu_147.html","./ucastnici_zajezdu_148.html","./ucastnici_zajezdu_149.html","./ucastnici_zajezdu_150.html","./ucastnici_zajezdu_151.html","./ucastnici_zajezdu_152.html","./ucastnici_zajezdu_153.html","./ucastnici_zajezdu_154.html","./ucastnici_zajezdu_155.html","./ucastnici_zajezdu_156.html","./ucastnici_zajezdu_157.html","./ucastnici_zajezdu_158.html","./ucastnici_zajezdu_159.html","./ucastnici_zajezdu_160.html","./ucastnici_zajezdu_161.html","./ucastnici_zajezdu_162.html","./ucastnici_zajezdu_163.html","./ucastnici_zajezdu_164.html","./ucastnici_zajezdu_165.html","./ucastnici_zajezdu_166.html","./ucastnici_zajezdu_167.html","./ucastnici_zajezdu_168.html","./ucastnici_zajezdu_169.html","./ucastnici_zajezdu_170.html","./ucastnici_zajezdu_171.html","./ucastnici_zajezdu_172.html","./ucastnici_zajezdu_173.html","./ucastnici_zajezdu_174.html","./ucastnici_zajezdu_175.html","./ucastnici_zajezdu_176.html","./ucastnici_zajezdu_177.html","./ucastnici_zajezdu_178.html","./ucastnici_zajezdu_179.html","./ucastnici_zajezdu_180.html","./ucastnici_zajezdu_181.html","./ucastnici_zajezdu_182.html","./ucastnici_zajezdu_183.html","./ucastnici_zajezdu_184.html","./ucastnici_zajezdu_185.html","./ucastnici_zajezdu_186.html","./ucastnici_zajezdu_187.html","./ucastnici_zajezdu_188.html","./ucastnici_zajezdu_189.html","./ucastnici_zajezdu_190.html","./ucastnici_zajezdu_191.html","./ucastnici_zajezdu_192.html","./ucastnici_zajezdu_193.html","./ucastnici_zajezdu_194.html","./ucastnici_zajezdu_195.html","./ucastnici_zajezdu_196.html","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/image001_fmt.png","./resources/image002_fmt.png","./resources/obalka_ucastnici_zajezd_fmt.png","./resources/upoutavka_eknihy_fmt.png","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
