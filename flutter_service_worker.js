'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "292a127f055eadadea91f7ea6dd265dd",
"index.html": "99ccdff9e9d9fdec24b186f4748a91ef",
"/": "99ccdff9e9d9fdec24b186f4748a91ef",
"main.dart.js": "c905ebf51a541dd2d78342562aad0624",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"script.js": "0db636ba8a1192470c0a07f094141607",
"favicon.png": "b225162389b416ef0e11cab9d1387acb",
"icons/Icon-192.png": "fc90cba1c1661ada668a979bf1cf8806",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "69e6b3ea5606f0894d880feb69a5abee",
"manifest.json": "bd5751cbb1b5cfc0e962daff40c7decc",
"manifest.webmanifest": "7b61803635dcd0b14a579f3de66b3dfd",
".git/config": "e507299084467fbc2962d094cd483b52",
".git/objects/57/5beb9b6921627665c14fb0e689f4bf9cb9e05b": "87e5a0cd43af1a92eb268679bc4c3caf",
".git/objects/03/825bc9dc6ce3323598e122a609b316fa4c9258": "23c01bc328666d62b552d522abb7316c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/08d97bbf3bdb3b3515776b85bec79a6938a1fd": "84b673426e4efb7347937596265ea6e9",
".git/objects/5f/1b18ed20874fea9c00663b0d64c6d855ba6207": "b8bff30c9deddf857961ef4da619ea89",
".git/objects/a4/72547de12a804e6a9a856d2e94932379f39ae5": "772d3c419a30d58a107834cee6c84713",
".git/objects/bb/fe8d10d2ae094d237b2a37d90be66730353259": "8aa837fd90b30288c9cdf6c92e9f8913",
".git/objects/da/67d6bb1a9cca7bd72a5cce04301d89324795e8": "18210ff1830ae9a44ce2cec34b5a011d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/27adb69459e81113a3833c460c5950c5be60ad": "243a39a5df18538fe149c7f02571ef83",
".git/objects/e4/4a95df769941cc6e1ff241f3b26b08bda80cfa": "ff621b5b26b2e7b4cbf04dfeef9eaf5d",
".git/objects/fe/7d3d10bf154c32218bddc79a91cc6ba72cd5ba": "0dad5364bcad246bfbaea8d9d9c962a5",
".git/objects/4e/948905f1e63dc0cb98c6d1d486b27b2c4ebfe7": "37dc1239f53fb03bbd3a4daa443c28e6",
".git/objects/7d/0333598f9e3402643090a7d218494a95435adb": "9ac26f34698821659e34037797033bcd",
".git/objects/29/0cd5c77cd0e80b2fe4cb7adeb1e747b6f84538": "0e347b7e8472f0ce246ebc5551020aa6",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/559f3c55e4938b94a61aa17ccf93925cbdbe79": "138f4cb5b248ab890cae49c64ae9aa9d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/17/a8902a5e9d67c289a40ecf65057be27d26d052": "8d4af51eb02e37cd0abea58c8f83dbcb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/77f305617271094f71c66b549248de504613d6": "ff52d43ecce51fa8aeaefe5ef4d56471",
".git/objects/44/db0d09fe14945b0e5877bb2d9fa5e56623d7b4": "d073fd47220870825fc606deeb59b47d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/037f8a8523c3e71743f9f17b3f62abe48a1f1f": "6f2e6ebb7158e08bb24a76040bd0bbfa",
".git/objects/9a/ec63ba84eb43147e3ede096098528a53701072": "b907d897a0690560009acae493f90f4a",
".git/objects/09/d92b6cd13d557eb907ca7648acadb64f092fa1": "28f0f72f616359b2be88bd5d36fa3497",
".git/objects/65/49da8a3bffbd2e75d8acf95304386033cff8de": "3012056fc1dcb1a54013bfeca2f72a7e",
".git/objects/98/e72bdd77d64ebaad1c83246b7a5b35dcc99f56": "dc83c63323cd0d0b26379af34ceedac8",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/55/0f025cab6cd33524b7bf8f68cbaf2e4e2f903e": "49f73149db1fbaa55571c17b95f0b987",
".git/objects/97/6eead0bb7c251d44d98588d211b73998d42870": "9d41c3558a6d2593a10b2a96a00270a2",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d4/1f1ac776068713c15ca118bd9610ea724d3988": "d113f8c7eb2f639d15d3681fbd763760",
".git/objects/a7/776367452326644fa8307378f6a4e536b6e5ba": "53830050e15595883cab93316aa1c1e4",
".git/objects/aa/642a65ef7201e59f2312a6fbf8ce26de2443d0": "b9aab352c0ebd7588e7b4cdfc8e6ed34",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/11173f8d95bd873681ebfa50f0533c5ce3902f": "ab0435e9f45614f9fc05945b7c206ff3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/23805a66094f515063fad3176d09872a64a103": "a42eb0ba1a75a604ad204215a89ab9d0",
".git/objects/e1/48d0cc8701eac758d019d226e16003d93aabe0": "7f4a4ce1d47913b635c8dd3ae662aa31",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/6dfabd4b7f328705ef65d4b33f7f36ff5fcdda": "32a61c5de502954ab892e2c7b34a44a3",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/98efbae3af48534b329c590cbfd1730ad00896": "46b502d5369b52029a416ea1de62a58d",
".git/objects/f0/1f35182e0c0daea4a1d485af957a9b4285fdd2": "f7878209612b0749ad00b6f647a5e7ef",
".git/objects/f0/c3cac87c7b67c62d0b37f082a06bc2146e908f": "2abe4a88d8b23b1410f9e5ee484393e8",
".git/objects/f0/f56c6f6d5b0114725b32e08410f41674c9f3f6": "bbbedcd43e9a300650c584d155e10df0",
".git/objects/c5/aa2e84a9db8d3d362194b8373f17eb4997c6e0": "62944bf1607ef2d4f2b0483f124f8716",
".git/objects/e0/5afe2246ee19b1fa553d53d41074a260a0b7e1": "6ec18f4ba8d49ed69793c1b96535ed29",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/a9fd65e3c88fb04479499489a9ce7bed5a08a2": "fecd98ea1b593cc85b98372c680a185d",
".git/objects/77/f72ffe7a005f77676ab0ade629128022384053": "1e074ba61caad12292d911239dd7703b",
".git/objects/4a/f82a9ca6b2417d77dcda3eb818c2fff716f9c5": "1c989ab98cef470cfd8bee4c4791216c",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/98b5794dc635f4af011acfedfae1460e4d6f3f": "5141fe8df4dba3b3762a65ffa996c883",
".git/objects/78/6d80e5f6bbc5fad2496c0bb80440671d53a9c3": "b9f6e53e39044396b527df554b50b499",
".git/objects/78/7067462e94cd72f684403d6a38e0ebddba3049": "9aed77d110b103d424ec64e84982e883",
".git/objects/7f/7363793bb67b6cf1b77153c17c767eb40b9247": "0a6a08384dc6bd75613a3f31c8d8e397",
".git/objects/7a/38a18c46d06d248969f9d6324700283ef066bc": "cb2b69ae273412b404f201852f0820fa",
".git/objects/8e/fcba0b969410ea2a8f48f284c153090966def1": "61b2737ad1203cca514c2652f94d2618",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8901b7b722d07bec28e04ac5aebe84f9",
".git/logs/refs/heads/main": "8901b7b722d07bec28e04ac5aebe84f9",
".git/logs/refs/remotes/origin/main": "c7ef62047fae21853bf51cc8d9a10acc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "374cbd5208582a7787f7c710039f56a3",
".git/refs/remotes/origin/main": "374cbd5208582a7787f7c710039f56a3",
".git/index": "be0e852b993730be505b8b14867057a1",
".git/COMMIT_EDITMSG": "56e7038309116fb09a23ca5619f1f460",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "a318ec327deabc791dc085b63fd16b94",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "de5777a49910adc2187f2578cbd86b1e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"sw.js": "0a6d66bd4dedda90bb42906ffe28932a",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
