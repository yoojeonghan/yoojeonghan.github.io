'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5b11bc31e38aaff8f51ab46182887862",
"assets/assets/images/2.0x/arrow_down.png": "e379759ffc68229a2c5263cd19882b46",
"assets/assets/images/2.0x/arrow_up.png": "887d8d7a3b511cb43cfb3863b7e27ba5",
"assets/assets/images/2.0x/bbox.png": "4812d55f3c6dbd6ef9973c3bc21a4530",
"assets/assets/images/2.0x/button_circle_close.png": "f51a9c97140b96173179bee0c54c0096",
"assets/assets/images/2.0x/button_show_rank.png": "a511eff2cf5d855d74df9498df2ca275",
"assets/assets/images/2.0x/cat.png": "fcca3ee1ee29b40aa560395bf7c06dff",
"assets/assets/images/2.0x/cat2.png": "1c4948a448b781fa1cb31ab6035fa906",
"assets/assets/images/2.0x/cat_logo.png": "1ce2c66827c5745391a2325c0631522a",
"assets/assets/images/2.0x/cat_shadow.png": "2ea628aea285c8f328966e8efcdc3dff",
"assets/assets/images/2.0x/chain.png": "ab1ce21c47e60c90717e75263911f2b8",
"assets/assets/images/2.0x/change_owner_mbti.png": "9bbd0ca6e06d20cfe385eca3c455994d",
"assets/assets/images/2.0x/check_box_checked.png": "630e65fe57135f877af5b1d2b54d8b29",
"assets/assets/images/2.0x/check_box_unchecked.png": "40716c27e04c84481656973bccfaf5a7",
"assets/assets/images/2.0x/flower1.png": "1b91aa11f782c233fe19250ce847f946",
"assets/assets/images/2.0x/flower2.png": "17d554039196f2916810781e32abe184",
"assets/assets/images/2.0x/flower3.png": "4184e782bc2f73843207e0b3b4900c75",
"assets/assets/images/2.0x/flower4.png": "d810b9674ff09d70ed3dc80d57eb1d78",
"assets/assets/images/2.0x/flower5.png": "531fbc00c96617c9a07e4a267e61a1c9",
"assets/assets/images/2.0x/flower6.png": "0aaaa279b92c3d2e2b29ad8e489b4ce2",
"assets/assets/images/2.0x/kkangnyang.png": "7f6df9c0dd5c286e490371c418cd4ba9",
"assets/assets/images/2.0x/loading.png": "dc759555b690d7cbe28613398f3402ea",
"assets/assets/images/2.0x/loading2.png": "d1227c538a7856c6f336b8a4b34b35aa",
"assets/assets/images/2.0x/logo.png": "8403c041b489fa8561b6067cce3a0072",
"assets/assets/images/2.0x/tape.png": "78228372f184677b20845134342f2a91",
"assets/assets/images/2.0x/tape2.png": "e730595f9cf765110c24c3513bbe64ae",
"assets/assets/images/2.0x/title.png": "b6be39fa1a34ffe93c9603869e30d561",
"assets/assets/images/3.0x/arrow_down.png": "084b927405685eb1cdb5b6007182336c",
"assets/assets/images/3.0x/arrow_up.png": "19b06dc75a5c8fb86ed29d9b3808e5cb",
"assets/assets/images/3.0x/bbox.png": "27f9d0e7f77d0d7e5df8b6e2c7aab8e5",
"assets/assets/images/3.0x/button_circle_close.png": "f9e33860b6a6f9fd805c4e124296d419",
"assets/assets/images/3.0x/button_show_rank.png": "7209cf8d6ae1bc4e6e8f0b79c48e8b93",
"assets/assets/images/3.0x/cat.png": "e8f77ffebfb0d8c240cd82c2d0ab61bc",
"assets/assets/images/3.0x/cat2.png": "3cc0321afb28b5bbc1d28c9d40ace46c",
"assets/assets/images/3.0x/cat_logo.png": "37552d57162e504668088cc49862bbcc",
"assets/assets/images/3.0x/cat_shadow.png": "68fc914064c3c485315746e1e537bc39",
"assets/assets/images/3.0x/chain.png": "218752329da329886a7ed3c18ad6c417",
"assets/assets/images/3.0x/change_owner_mbti.png": "cc9d11f23f27b50fa8d69c10c59b6a5e",
"assets/assets/images/3.0x/check_box_checked.png": "614ccecb8da953ae3d0ca5e2d615f57f",
"assets/assets/images/3.0x/check_box_unchecked.png": "ac93e94bc213beaa1311a7bf61dcf6e0",
"assets/assets/images/3.0x/flower1.png": "4190804fbda41acc918149933c10f79c",
"assets/assets/images/3.0x/flower2.png": "ad332cf7616208ed83192c3a176fd6ff",
"assets/assets/images/3.0x/flower3.png": "e5e2406cfca73633cd6147e532bf91e5",
"assets/assets/images/3.0x/flower4.png": "bbadc62637904470e8bc5b66601b95c3",
"assets/assets/images/3.0x/flower5.png": "2fc76384ba72e271ee6aa4dc4104237f",
"assets/assets/images/3.0x/flower6.png": "f794c7e8eacbbf9ba11b13ab3c36bedf",
"assets/assets/images/3.0x/kkangnyang.png": "68d5f3f392005fb25e9b1419b0e808cb",
"assets/assets/images/3.0x/loading.png": "dc495d9319a6aa363c1b2a7a9b054734",
"assets/assets/images/3.0x/loading2.png": "c2834612dde78a66e6b14519b1974009",
"assets/assets/images/3.0x/logo.png": "cfc8817c631a3c8ad903bdf00bee26ab",
"assets/assets/images/3.0x/tape.png": "da9b5510aa07d4dd18c9fc15e7419f7d",
"assets/assets/images/3.0x/tape2.png": "cd9e00b53aed19bda27302877cac8c89",
"assets/assets/images/3.0x/title.png": "e9892e5a13e8912babbfd0d710c8051c",
"assets/assets/images/arrow_down.png": "382e8026778f23ab9ed78d389c74effb",
"assets/assets/images/arrow_up.png": "44400c139507cf6a193872d9a44172da",
"assets/assets/images/bbox.png": "135931fc1c8acb179635ee357fe3ec92",
"assets/assets/images/button_circle_close.png": "8ecf86d90338349307aa919e482a1105",
"assets/assets/images/button_show_rank.png": "17c2c752b876384ea08c4ac80a1c7ebd",
"assets/assets/images/cat.png": "60ea5a69cf03a78975a1a484917bfda3",
"assets/assets/images/cat2.png": "ae2d788eb2315a942295e077ae09440f",
"assets/assets/images/cat_logo.png": "505f497bb79502e50be6c109ea15ddc4",
"assets/assets/images/cat_shadow.png": "6f7e54e99e84472d87fa9fc956b80926",
"assets/assets/images/chain.png": "21cc5bcaf317a48fddf91d427d2c5482",
"assets/assets/images/change_owner_mbti.png": "9a179f11070c3dbc921ad5d8c57ea465",
"assets/assets/images/check_box_checked.png": "4410b5d7956a09a9b786da0c0769677c",
"assets/assets/images/check_box_unchecked.png": "20b050d7ebf6799a512ce98ac3f500e5",
"assets/assets/images/compatibility/10.png": "3440265aea430f53831ed371e95fa37d",
"assets/assets/images/compatibility/2.0x/10.png": "0f27d2fb5bca03ce480cf12a66ae3ec3",
"assets/assets/images/compatibility/2.0x/30.png": "20c23581e26abb0b1b48d505f8331192",
"assets/assets/images/compatibility/2.0x/60.png": "51a2cbf44161ea2e1a6c3a40eb5b39a9",
"assets/assets/images/compatibility/2.0x/99.9.png": "014ed6ef3c262330510402d96b8e8cc5",
"assets/assets/images/compatibility/3.0x/10.png": "f571b141247252bd8dd5a5f10a8707a4",
"assets/assets/images/compatibility/3.0x/30.png": "252ea362335a4e49218b29e28d5b55f6",
"assets/assets/images/compatibility/3.0x/60.png": "f0170184d7566bda8f4fe00b840dabd9",
"assets/assets/images/compatibility/3.0x/99.9.png": "ca9239dbda5b5c962920f01fffef4959",
"assets/assets/images/compatibility/30.png": "b236831e32a8761ddce4ecd7ff93bc12",
"assets/assets/images/compatibility/60.png": "fe6880f4a7d565eff9501d22c1676524",
"assets/assets/images/compatibility/99.9.png": "c612ce20495cff8b707480670db547fc",
"assets/assets/images/flower1.png": "9a675b3864a7d1eb2149876259e97bcc",
"assets/assets/images/flower2.png": "811c7f59aff0c6d193559374291853cd",
"assets/assets/images/flower3.png": "febb370f6641f5d43141c44151cfe677",
"assets/assets/images/flower4.png": "d3f645d2c9fab4f119251df040a69725",
"assets/assets/images/flower5.png": "bbd1edd5d377d4874e23dce3d7ee709a",
"assets/assets/images/flower6.png": "0a07c0b88f06493a959796117d7a2291",
"assets/assets/images/kkangnyang.png": "923c90d332e5dd7bc34fee245e13f3fb",
"assets/assets/images/loading.png": "e92b71a7747e051b03e4f2e33788aeb6",
"assets/assets/images/loading2.png": "38279d5a86c7c3c84cc3ae84216458aa",
"assets/assets/images/logo.png": "dbe15cc30b17c538a5ca24b2a5bbbe5e",
"assets/assets/images/mbti/2.0x/ENFJ.png": "7fbc9af131d67005ba9ab0702fc7c88a",
"assets/assets/images/mbti/2.0x/ENFP.png": "06541fe82211304d09dd959e627ade6f",
"assets/assets/images/mbti/2.0x/ENTJ.png": "4d409d819f70847b5d41c11e0303b543",
"assets/assets/images/mbti/2.0x/ENTP.png": "d87d6f048d0da6d6185be67bc46cf658",
"assets/assets/images/mbti/2.0x/ESFJ.png": "814bac2c59f0fee8d10bf4453cdc056a",
"assets/assets/images/mbti/2.0x/ESFP.png": "0ef7196517aa8fe6193eaab4fc03f1df",
"assets/assets/images/mbti/2.0x/ESTJ.png": "65375d2db7507f66a92ab8aed3097e91",
"assets/assets/images/mbti/2.0x/ESTP.png": "9c6d0bf2fc40cad3695b8b374f31753a",
"assets/assets/images/mbti/2.0x/INFJ.png": "97d8d718f60905a9ac4d4b6c49f040c0",
"assets/assets/images/mbti/2.0x/INFP.png": "c9a249d889d5aad18e4ad1706d777603",
"assets/assets/images/mbti/2.0x/INTJ.png": "c71ec342ea7ee85c4b514f760bc36811",
"assets/assets/images/mbti/2.0x/INTP.png": "a9f260ded882d3620cd5ecf8883e57a6",
"assets/assets/images/mbti/2.0x/ISFJ.png": "7d114f44a5967d5acae6fe5d3c0a04c2",
"assets/assets/images/mbti/2.0x/ISFP.png": "6fde69ae808a944d7ed9896aa132b09f",
"assets/assets/images/mbti/2.0x/ISTJ.png": "08ddabd0b7f66a85b273e9b577b6e868",
"assets/assets/images/mbti/2.0x/ISTP.png": "ca7c7acdf573e8012c8c9527512ae5cc",
"assets/assets/images/mbti/3.0x/ENFJ.png": "5220f6491dd7ff1659b172bb3d652cf8",
"assets/assets/images/mbti/3.0x/ENFP.png": "bfc5d889d494a5d4b62680bae878f04b",
"assets/assets/images/mbti/3.0x/ENTJ.png": "e3a2e03dae1c3765fe2be8e1e10e1ed1",
"assets/assets/images/mbti/3.0x/ENTP.png": "50e45c13ad964ca7d5c41271853fec31",
"assets/assets/images/mbti/3.0x/ESFJ.png": "b2813a095c251c8be8d19fb4f17fed4c",
"assets/assets/images/mbti/3.0x/ESFP.png": "36839257bcb8af5b3b7fab15b199d1c2",
"assets/assets/images/mbti/3.0x/ESTJ.png": "26b64a4654ec23ecc1b8403fcb84ceda",
"assets/assets/images/mbti/3.0x/ESTP.png": "aa56c334ff6b5b43f35b1df91ae5a47a",
"assets/assets/images/mbti/3.0x/INFJ.png": "08662d8fe9d8abbe8593d0a0a1be0df3",
"assets/assets/images/mbti/3.0x/INFP.png": "300bee46a39561213dc1340945e2f3a1",
"assets/assets/images/mbti/3.0x/INTJ.png": "17ad502e7e4599c408c89a2b561648d5",
"assets/assets/images/mbti/3.0x/INTP.png": "9a4af6caf57cf13ff2ad3eb8e1427d8f",
"assets/assets/images/mbti/3.0x/ISFJ.png": "32261c685bc43da8489b63dab7ce7b6a",
"assets/assets/images/mbti/3.0x/ISFP.png": "56412d3ed8dd61f79b0c08e866fb6df6",
"assets/assets/images/mbti/3.0x/ISTJ.png": "875bbae5a6524c70b05e3e4f1e677c32",
"assets/assets/images/mbti/3.0x/ISTP.png": "69a243712c545c596efda8e1fcb3ae4d",
"assets/assets/images/mbti/ENFJ.png": "3f305162be76819c0a05073fb9f8d4d7",
"assets/assets/images/mbti/ENFP.png": "2552c91ae0e0dd130927be78c26f4792",
"assets/assets/images/mbti/ENTJ.png": "aeabde202c9f492eab07047cc9105413",
"assets/assets/images/mbti/ENTP.png": "8e11a9d0b479ebe876cc51e51d0604dc",
"assets/assets/images/mbti/ESFJ.png": "cd5e87d4ff775f85aa5dd65608164f8b",
"assets/assets/images/mbti/ESFP.png": "cadd07c57dafc304cf5858edb03b1fcb",
"assets/assets/images/mbti/ESTJ.png": "aabd520e599f8ea2e3fc477bea4b44cf",
"assets/assets/images/mbti/ESTP.png": "294ef60e028cc0b55b812c7b3b0ef7ac",
"assets/assets/images/mbti/INFJ.png": "3c91d384b4c5faba20f6d4d268f08b70",
"assets/assets/images/mbti/INFP.png": "ee97db151dc5904f0389833e9c172f6e",
"assets/assets/images/mbti/INTJ.png": "5c781e7935701ea19030d9d494d048cc",
"assets/assets/images/mbti/INTP.png": "e5799a44f60bcb1eb2ab5ff112704107",
"assets/assets/images/mbti/ISFJ.png": "33d77cd607f37320df71e9769488c88c",
"assets/assets/images/mbti/ISFP.png": "17cdec7bfb6d93892a3355cb8df43629",
"assets/assets/images/mbti/ISTJ.png": "d645db51d726b7678116de9eeaf89ca7",
"assets/assets/images/mbti/ISTP.png": "2be573e22d3938c21b22f4fa5d90138c",
"assets/assets/images/tape.png": "5bb12151fbc0dcb0ba0fb059f699d4a6",
"assets/assets/images/tape2.png": "039a0708b3346acfb8aa8d4cdaeaaebb",
"assets/assets/images/title.png": "e7f8d1f47a31afa736826558f0ad86b8",
"assets/assets/mbti.json": "ab349e3123d18a777d72bc477f625b24",
"assets/FontManifest.json": "560216b2719082a6ffe26d5a3f8f7b96",
"assets/fonts/GmarketSansTTFBold.ttf": "7cf85dc71a5acc06eb84b647fcab6103",
"assets/fonts/GmarketSansTTFMedium.ttf": "96b4a5b8dfa689a32dd322793d660298",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9f863e1dbad9b132ccabc1e5f66b2aa7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "600db9bbf5f72f790bf4979c0dedaa73",
"/": "600db9bbf5f72f790bf4979c0dedaa73",
"main.dart.js": "45e264cc52346cd95158ca4d1972c5f4",
"manifest.json": "b9a6109c4acbe5715e65f28f2eda3128",
"version.json": "7b176ac423752bd79283cad04d4e7189"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
