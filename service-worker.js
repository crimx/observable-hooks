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
    "revision": "6b937b40c82d336e90b0fb5278977c4b"
  },
  {
    "url": "api/helpers.html",
    "revision": "9c63a3385257dd3140c27a4f5200e348"
  },
  {
    "url": "api/index.html",
    "revision": "58a8aba35ac7497136e364bbeb724edd"
  },
  {
    "url": "api/suspense.html",
    "revision": "ec7c7c05ee16d5a70cbd60377881ddd1"
  },
  {
    "url": "assets/css/0.styles.5e1f57d9.css",
    "revision": "b001af44b6fab483ca36024b540cb778"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9a2a9ecc.js",
    "revision": "c1c840d0cddec72d4180ce77335371bd"
  },
  {
    "url": "assets/js/11.79bacc76.js",
    "revision": "da873884b26f5d8d3e72c9d422be46c7"
  },
  {
    "url": "assets/js/12.ac785721.js",
    "revision": "ea9242cb3d994ed30d5780118f6ebb69"
  },
  {
    "url": "assets/js/13.a74a1ede.js",
    "revision": "4519ca5428f62414e8f05bd788e89d25"
  },
  {
    "url": "assets/js/14.c83f6680.js",
    "revision": "56233dc7af54082b6c2c8bcd79ebcaae"
  },
  {
    "url": "assets/js/15.4368f3bf.js",
    "revision": "608a3060f1952d5676037ad812c36c4d"
  },
  {
    "url": "assets/js/16.5b20ea49.js",
    "revision": "e865583687d93c03306d437096d30552"
  },
  {
    "url": "assets/js/17.6caf1345.js",
    "revision": "d5c686d90c62cc97074c4a6868219038"
  },
  {
    "url": "assets/js/18.7dcf8f69.js",
    "revision": "4b78d5218e9336c6b7f1b79b524bce53"
  },
  {
    "url": "assets/js/19.7a22ef11.js",
    "revision": "ccddcb8c30851cc046e02025317b0328"
  },
  {
    "url": "assets/js/20.56c9ed39.js",
    "revision": "b5c14b8d3298d4f6e99273a764078969"
  },
  {
    "url": "assets/js/21.5c472ba8.js",
    "revision": "39bb191d686a7748e9b59271e3d03526"
  },
  {
    "url": "assets/js/22.36687907.js",
    "revision": "77334c9a06454ad42d34b7e53465cbcd"
  },
  {
    "url": "assets/js/23.b3779240.js",
    "revision": "9ea7e895988f95272a86350b21093567"
  },
  {
    "url": "assets/js/24.3fe3d69d.js",
    "revision": "6224da41b992f6cee2cf0f2a986f6a14"
  },
  {
    "url": "assets/js/25.9ccb0357.js",
    "revision": "c7edfb77665df9bd414ab4f69bbf6f3d"
  },
  {
    "url": "assets/js/26.ad49b897.js",
    "revision": "4ac83f8ecf26efd5594484dec3ed30f8"
  },
  {
    "url": "assets/js/27.5ce383fa.js",
    "revision": "73e94a07d532b12af6daefbf1ef6d339"
  },
  {
    "url": "assets/js/28.a41b2b94.js",
    "revision": "917b81fde1694fa2728d04d039631a37"
  },
  {
    "url": "assets/js/29.3f009e4f.js",
    "revision": "86dd7f32d52ff6d977f8a84db94dcb51"
  },
  {
    "url": "assets/js/3.4924f867.js",
    "revision": "b1373341d7415c81afd71238eb7b89b4"
  },
  {
    "url": "assets/js/30.8b1b6c9f.js",
    "revision": "7b48f82d413c862a231dcde9ecd7e445"
  },
  {
    "url": "assets/js/31.3f251ee2.js",
    "revision": "f1187ed487f79be1313c8af8f21553c6"
  },
  {
    "url": "assets/js/32.03261fb6.js",
    "revision": "29e76bc07caf7d39d8e5226f07379e70"
  },
  {
    "url": "assets/js/33.cc5d241c.js",
    "revision": "8541aab843a55311482635987b43ec48"
  },
  {
    "url": "assets/js/34.9f40a0d4.js",
    "revision": "e44df880fad34af567ce8f4e20ba829c"
  },
  {
    "url": "assets/js/35.e29a88fe.js",
    "revision": "409f7c905b62310a86222ac1bc4b4426"
  },
  {
    "url": "assets/js/36.256f6589.js",
    "revision": "32650521a64284f9f1a823508b24e559"
  },
  {
    "url": "assets/js/37.f23acb65.js",
    "revision": "5ae6e72deb5466322564eaa1a89c8a8b"
  },
  {
    "url": "assets/js/38.b00f183c.js",
    "revision": "b5ece28140437ca3f1912121db1c2ff2"
  },
  {
    "url": "assets/js/39.01feda9b.js",
    "revision": "76e0e1b6e6e861dddb9b40ddc46c597f"
  },
  {
    "url": "assets/js/4.f2192f58.js",
    "revision": "280da701af155e225c23edecadaa4982"
  },
  {
    "url": "assets/js/40.5dfebc81.js",
    "revision": "b052b1faf56100980658127be1fa078f"
  },
  {
    "url": "assets/js/41.6828984e.js",
    "revision": "803a00284728e0d9664b08c35a180b77"
  },
  {
    "url": "assets/js/42.a1adf8a6.js",
    "revision": "2c0dcf3d9a864be6cf8a7a6cf2e2e11b"
  },
  {
    "url": "assets/js/5.1d4d528e.js",
    "revision": "e65ad6c175d349d70c43838614b60a2e"
  },
  {
    "url": "assets/js/6.46a713d7.js",
    "revision": "657e5bfbf4e353d83c448b21a51b0f80"
  },
  {
    "url": "assets/js/7.6dd24a86.js",
    "revision": "fee6bdeab2f2283d84f1eb0c57f5f8c5"
  },
  {
    "url": "assets/js/8.357a1ad6.js",
    "revision": "93c082140d0d6e83c7e171c8810f6706"
  },
  {
    "url": "assets/js/9.cd2df33f.js",
    "revision": "ec2ebc94391eccde1ee99cdfb3771086"
  },
  {
    "url": "assets/js/app.b7e746c5.js",
    "revision": "f10d18448e992a11bfba720c4d23608f"
  },
  {
    "url": "assets/js/vendors~docsearch.e9a84dcc.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context-rxjs7.html",
    "revision": "c1252fde50928c2f73013ea9a9486d7d"
  },
  {
    "url": "examples/context.html",
    "revision": "172d5af7995d3b976f7ebb973ff9c9ac"
  },
  {
    "url": "examples/index.html",
    "revision": "ebb2bf866d6dac3453b388857e458ab6"
  },
  {
    "url": "examples/pomodoro-timer-rxjs7.html",
    "revision": "5ac8017fe18cce504a092fde1d5b434d"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "d52f414c0d47a2f9dd7ff84780a9ee09"
  },
  {
    "url": "examples/suspense-rxjs7.html",
    "revision": "e24fdc53029c55dac03e0816775aebc8"
  },
  {
    "url": "examples/suspense.html",
    "revision": "f08e7fb73510e3964259f45d4eda0b8f"
  },
  {
    "url": "examples/typeahead-rxjs7.html",
    "revision": "f0cfe423e586d993298ab1a4dbdf6638"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "9e1aea48b0f32b7c8b67f2a606794b75"
  },
  {
    "url": "guide/context.html",
    "revision": "251f83b82cc2a117502de22ea709226d"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "3f4a3b29eee7bd46c2210523046ffa0c"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "8f12ca745e949b4ce7851dc03b7cc433"
  },
  {
    "url": "guide/index.html",
    "revision": "87c2e618b710e328e0a58d4d5730fe29"
  },
  {
    "url": "guide/migration.html",
    "revision": "be4f7cda17c63ff54e69dde0e554fae3"
  },
  {
    "url": "guide/motivation.html",
    "revision": "c27b9eab78d1a3a6a8bc9e6e630f73bb"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "bbb1a5914a92a3b3b1d90392a5b6cad4"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "cdd52bddc0c9048610f051dc25a2ce7b"
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
    "revision": "591f01379fef38a1bb610194cffa0ce7"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "3a46277b68fa58100ef264dce121a518"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "484bd358098d67035fb447dc3a72da5b"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "2c53635c37f6bfe416daa0800986c7b6"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "505834f5bf6047ea3ab537649754f871"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "85ba251ac1665f56022becbcff65f09f"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "cb1e032f610ec6075aa3d2bff9bb78e7"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "da78b1e630291350947b992539d8a8f1"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "c1bb0304f44009b6057b8c54442cbf79"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "2c95b8f50a18d6cd837ed81a559df267"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "38a892160645cae34c970f3c56e5abf4"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "ab94361bef3f848fea6cf612619ca66d"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "18c833d67e365a3ea692163d437566a7"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "78f5282faf443b54eb530b9d1430f587"
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
