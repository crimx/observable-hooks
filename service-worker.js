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
    "revision": "5760d3bc9e753e552ab5288cc1b85db5"
  },
  {
    "url": "api/helpers.html",
    "revision": "baa7efd8e3a3573220918365db89bac9"
  },
  {
    "url": "api/index.html",
    "revision": "cfd753d2f6aba692da0e4ddb66b5cd34"
  },
  {
    "url": "api/suspense.html",
    "revision": "65b404f6ddfee3fea29f65b507e87952"
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
    "url": "assets/js/14.f3d8d661.js",
    "revision": "f93a0fffe8151078d6425e27e1310cc2"
  },
  {
    "url": "assets/js/15.9c78793b.js",
    "revision": "16a4a4cd16feebc18a298c831b954c19"
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
    "url": "assets/js/21.81ae2b77.js",
    "revision": "6c894bc7daee0e2cb6be81d567921d3b"
  },
  {
    "url": "assets/js/22.b0ab3dd5.js",
    "revision": "9ced6ea72758012b97ca8b61726d5fc8"
  },
  {
    "url": "assets/js/23.c11efe09.js",
    "revision": "77a2b1d3ab30a5965d726dd5adcf2205"
  },
  {
    "url": "assets/js/24.baf0a7a9.js",
    "revision": "cd6a8e755bed74dbba93298bd06a4a1d"
  },
  {
    "url": "assets/js/25.554c3a72.js",
    "revision": "112f1371582208d732f0ac924b67d378"
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
    "url": "assets/js/33.979a9ef7.js",
    "revision": "6aff20039d8461f6845b59fbaa01e458"
  },
  {
    "url": "assets/js/34.476b9b09.js",
    "revision": "64a6e12568cb77ee113ef2b6b1ca31a8"
  },
  {
    "url": "assets/js/35.ca99b921.js",
    "revision": "0b058a85e58bb48354bf28899bb48ccc"
  },
  {
    "url": "assets/js/36.ad5d631d.js",
    "revision": "ab8b9c659e7ee5b33d9876947c14b7db"
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
    "url": "assets/js/39.ee9820c6.js",
    "revision": "9034ba0e532c502bc7fbeaad8bfb7f0c"
  },
  {
    "url": "assets/js/4.f2192f58.js",
    "revision": "280da701af155e225c23edecadaa4982"
  },
  {
    "url": "assets/js/40.052b9b79.js",
    "revision": "895d4ced1f49d033bfb84c76b71f0208"
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
    "url": "assets/js/app.4cc28caa.js",
    "revision": "7832ffc2e3a267f57c860d26a03ca6ca"
  },
  {
    "url": "assets/js/vendors~docsearch.e9a84dcc.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context-rxjs7.html",
    "revision": "fd5b5965f283793997b743655fe76bc3"
  },
  {
    "url": "examples/context.html",
    "revision": "5798fbb620b80de487c3b5779bdab437"
  },
  {
    "url": "examples/index.html",
    "revision": "4037b8d2157a205a4eb74273f5b33e3d"
  },
  {
    "url": "examples/pomodoro-timer-rxjs7.html",
    "revision": "7b3c4223bda3f1270928ba1c904aaab1"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "2e394c83e6a646056a2b1f75c6ec719d"
  },
  {
    "url": "examples/suspense-rxjs7.html",
    "revision": "fb4420e2d08ded1ebafc9d60ee5a3ad8"
  },
  {
    "url": "examples/suspense.html",
    "revision": "4746c68ce73ef5f98b9598bcee400742"
  },
  {
    "url": "examples/typeahead-rxjs7.html",
    "revision": "ca66e7aab0d7011d73ce8e61f76656ab"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "5b900c4851ac03fe40b41472498bd0e3"
  },
  {
    "url": "guide/context.html",
    "revision": "4dc5124361b5e64e352d97904d904de1"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "5cb169059361429288fc5c9748988db5"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "6130c0772299f1385865fdc038462e3f"
  },
  {
    "url": "guide/index.html",
    "revision": "bf925ada3bad86da88d4b12b5a6dd5fd"
  },
  {
    "url": "guide/migration.html",
    "revision": "7b6255c1de52569df452854862332c82"
  },
  {
    "url": "guide/motivation.html",
    "revision": "3560120b28db3cb137aff4f2205bbd9d"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "2e0a7524054134d7f4371adfb68cb5bb"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "61db5f2923c0b3407568075b8185a0ea"
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
    "revision": "67ba381ec9369e2c921758da2b163d3b"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "5d87df239d106d568844c4d5c15b31fa"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "a9cfb2aadfe07fc6399fde70608c9781"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "c212ca668a37e2ffa5935ecb9bf0d281"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "584abf5331a6de090d7ed27102388a77"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "f0c012e0900a40d82fd852054a9b7159"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "50348cc4564dd07e8c4c3fd3fcfe5bb6"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "1c7e0607da62dcfbed94d1b0f09085b7"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "0a7db58a75574ee830a4a980a89337f0"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "85f5f59c966bafe488758b115e5b9ef3"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "365cdba175b70b62a75564e63478e077"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "4e973bef2afe211dde4bf73af6b46870"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "defea8fc750d5958caa2b19fd474f490"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "da3392af4300c35e8c634994b9a6c19c"
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
