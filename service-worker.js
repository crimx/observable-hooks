/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b7f0d9cee9050da6abade1244af15989"
  },
  {
    "url": "api/helpers.html",
    "revision": "ea38e21ea57dfb8ea7ebe94e0cb3fec0"
  },
  {
    "url": "api/index.html",
    "revision": "89e8fcba53260b964072e9278dbc3640"
  },
  {
    "url": "api/suspense.html",
    "revision": "a9aa06b88e661540429f0d56d257d4a3"
  },
  {
    "url": "assets/css/0.styles.536db153.css",
    "revision": "b001af44b6fab483ca36024b540cb778"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8b5634d0.js",
    "revision": "c1c840d0cddec72d4180ce77335371bd"
  },
  {
    "url": "assets/js/11.c79f3147.js",
    "revision": "e99d06bb945cf89bf9cb5122fdac1459"
  },
  {
    "url": "assets/js/12.a2b39894.js",
    "revision": "ea9242cb3d994ed30d5780118f6ebb69"
  },
  {
    "url": "assets/js/13.e281f6d6.js",
    "revision": "f4208089ab0259266d7d79e07768e003"
  },
  {
    "url": "assets/js/14.b2010d5a.js",
    "revision": "3b934ab93c395c4ce97042e5f317caf6"
  },
  {
    "url": "assets/js/15.78bfca0b.js",
    "revision": "14693769b5f4f68733def4107bd27a72"
  },
  {
    "url": "assets/js/16.a5b52e96.js",
    "revision": "fee6ab145f3abc019dc6372ddf7e4685"
  },
  {
    "url": "assets/js/17.33968787.js",
    "revision": "d5c686d90c62cc97074c4a6868219038"
  },
  {
    "url": "assets/js/18.e37d2cf9.js",
    "revision": "4b78d5218e9336c6b7f1b79b524bce53"
  },
  {
    "url": "assets/js/19.ab09f9d9.js",
    "revision": "9dc3f57638dcb4bc05b1e1afa82def54"
  },
  {
    "url": "assets/js/20.123b6bbb.js",
    "revision": "b5c14b8d3298d4f6e99273a764078969"
  },
  {
    "url": "assets/js/21.4020bd33.js",
    "revision": "10a52ad8b187e427674f29f423f9e959"
  },
  {
    "url": "assets/js/22.4f6b81c7.js",
    "revision": "92b34274acf6db9d623198960825e0a7"
  },
  {
    "url": "assets/js/23.ff677e68.js",
    "revision": "77a2b1d3ab30a5965d726dd5adcf2205"
  },
  {
    "url": "assets/js/24.25170687.js",
    "revision": "1d4cad39e5ea3d42a62c8017796aa2c5"
  },
  {
    "url": "assets/js/25.fd8623eb.js",
    "revision": "112f1371582208d732f0ac924b67d378"
  },
  {
    "url": "assets/js/26.c9a8dccb.js",
    "revision": "4ac83f8ecf26efd5594484dec3ed30f8"
  },
  {
    "url": "assets/js/27.bbaf3f65.js",
    "revision": "c4bb6adcaf915d83f87f95f183e81aaf"
  },
  {
    "url": "assets/js/28.0e9f42fe.js",
    "revision": "2fe0c8e5b2c151e6bc16d884e3895f07"
  },
  {
    "url": "assets/js/29.606271da.js",
    "revision": "97e9bd62cdefbca5e5fe9de107094042"
  },
  {
    "url": "assets/js/3.a5c3baef.js",
    "revision": "6117ac9214bd690d15d34fdf4fbb2835"
  },
  {
    "url": "assets/js/30.e82f395a.js",
    "revision": "7b48f82d413c862a231dcde9ecd7e445"
  },
  {
    "url": "assets/js/31.723e142f.js",
    "revision": "f1187ed487f79be1313c8af8f21553c6"
  },
  {
    "url": "assets/js/32.e51b2ec8.js",
    "revision": "97f991241705393ac4eae4313dfdeab0"
  },
  {
    "url": "assets/js/33.c3621eca.js",
    "revision": "8541aab843a55311482635987b43ec48"
  },
  {
    "url": "assets/js/34.9cb3798f.js",
    "revision": "e44df880fad34af567ce8f4e20ba829c"
  },
  {
    "url": "assets/js/35.3a628431.js",
    "revision": "409f7c905b62310a86222ac1bc4b4426"
  },
  {
    "url": "assets/js/36.a3cecb6c.js",
    "revision": "32650521a64284f9f1a823508b24e559"
  },
  {
    "url": "assets/js/37.84f58c07.js",
    "revision": "5ae6e72deb5466322564eaa1a89c8a8b"
  },
  {
    "url": "assets/js/38.38dc5c8a.js",
    "revision": "b5ece28140437ca3f1912121db1c2ff2"
  },
  {
    "url": "assets/js/39.b3ae9053.js",
    "revision": "76e0e1b6e6e861dddb9b40ddc46c597f"
  },
  {
    "url": "assets/js/4.b47ce632.js",
    "revision": "280da701af155e225c23edecadaa4982"
  },
  {
    "url": "assets/js/40.261a65b7.js",
    "revision": "b052b1faf56100980658127be1fa078f"
  },
  {
    "url": "assets/js/41.f61a6308.js",
    "revision": "803a00284728e0d9664b08c35a180b77"
  },
  {
    "url": "assets/js/42.2c48c900.js",
    "revision": "2c0dcf3d9a864be6cf8a7a6cf2e2e11b"
  },
  {
    "url": "assets/js/5.29f6163d.js",
    "revision": "e65ad6c175d349d70c43838614b60a2e"
  },
  {
    "url": "assets/js/6.151574c3.js",
    "revision": "657e5bfbf4e353d83c448b21a51b0f80"
  },
  {
    "url": "assets/js/7.0e468645.js",
    "revision": "fee6bdeab2f2283d84f1eb0c57f5f8c5"
  },
  {
    "url": "assets/js/8.e78288de.js",
    "revision": "689074e6a21f5f23843a69a2df853859"
  },
  {
    "url": "assets/js/9.80ba2253.js",
    "revision": "ca993dafa4400ffd8b901a01232e9c10"
  },
  {
    "url": "assets/js/app.bb167610.js",
    "revision": "e6835e449a172df0ffc26a96a30bf353"
  },
  {
    "url": "assets/js/vendors~docsearch.5cb73dc3.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context-rxjs7.html",
    "revision": "58c45427b7821fd277f879062a274865"
  },
  {
    "url": "examples/context.html",
    "revision": "b37dcb290403639054711338c1182fba"
  },
  {
    "url": "examples/index.html",
    "revision": "92ce05360b7d0c71b551852a02ace734"
  },
  {
    "url": "examples/pomodoro-timer-rxjs7.html",
    "revision": "847418f2fcaadc58f8d6a705b1272c16"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "6c820d0285cfee64320718a81f1bf2f3"
  },
  {
    "url": "examples/suspense-rxjs7.html",
    "revision": "c8318f47f6e556d6093e2d8b51c5a519"
  },
  {
    "url": "examples/suspense.html",
    "revision": "3195825fa7946cc727e942cfeee89f49"
  },
  {
    "url": "examples/typeahead-rxjs7.html",
    "revision": "e0c92389a9680266521cbbaf1125ab85"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "a75bae5509886d49e7b7678b9485844a"
  },
  {
    "url": "guide/context.html",
    "revision": "6a09fb36174b2f3aa678df5a45213bb4"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "bf96f006251dead0f3fbd219908061ed"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "ec8cc10607126628e45d560dd5d8fd86"
  },
  {
    "url": "guide/index.html",
    "revision": "0b35552c9aaa82525f9e166b30a813a2"
  },
  {
    "url": "guide/migration.html",
    "revision": "1206859a616b8837f969e16db47c48df"
  },
  {
    "url": "guide/motivation.html",
    "revision": "ea5b7194246b92736eb5be4e6280de24"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "9d7599987c9191950dfddfd1718af1bb"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "cba270f22b21031f9b9cf2057051a471"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "7a7eab0e3303cfedb2004a2c4357e600"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "3898bcb83183b6253f87eb9d5e5b9c00"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "ab51839615e70a1a013c81cfd55e0fef"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "c4a1001f60be27aca3ea1bb5f8895c52"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "09e9640acece6fd035022a5c2379ba50"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "25a11c9ce7d49494fc02b25418105f89"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "8b84d4594e44362d08469deca1dce944"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "19b9fb409fda2e028390a9f8e8984697"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "7a7eab0e3303cfedb2004a2c4357e600"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "3cc6c868e59ca7a433089b3ee766b858"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "a541b4572b31e5010483834f1f86aeb7"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "b073878d967c78c7c12959602f0d2f19"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "b63605624ed9101367684b2841eba5dc"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "09e9640acece6fd035022a5c2379ba50"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "85c6aaf71eba2d0d8752830d74189be7"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "7b7c6956ee4bdc383ee85ea5a6d531ed"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "7b7c6956ee4bdc383ee85ea5a6d531ed"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "c34f5f522034bc1eb330d1b23460c0e1"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "da6fddb2d053d9b61aabb2364bda7c5a"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "25a11c9ce7d49494fc02b25418105f89"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "7a7eab0e3303cfedb2004a2c4357e600"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "b3defe28047ba8d1fa3ea46f30299313"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "5fa1c24701e48383678a584ecd65b949"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "fbbd99f625d130297e3b281b52bdc1dc"
  },
  {
    "url": "index.html",
    "revision": "86a2f59d678c79491598159ec23197a1"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "b3091c4f8c05f42d4d2864b9879c7635"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "85487443ddea54cc8f48b424ca2925f2"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "d036579d4b72f69f0487a4e9d9912546"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "a1104ad470ead050ce8cc9367e234d92"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "2f67e6a721c56cf448fef3135600671d"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "1dfae264e59b1502081fded559cd55c6"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "1576592fa9f3aa9cc3d0dbf98bd4dbc6"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "0c71988a12a049935e383dfbe87137d9"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "b0124573ee395776e96e92219a6f5a4f"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "810d4b0806da3ae475a83bd3fc17221a"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "66c2d2386ebeebfb3f8bb0fa166e9ff8"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "7de20a817dba32372f688a8c84e3130f"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "9611ff7906233f1e90cd199bf87f6b41"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
