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
    "revision": "0ca0a710ccdf00c20177513cbf3ddce9"
  },
  {
    "url": "api/helpers.html",
    "revision": "9386078a4fb89a1606b86118c7c3beb5"
  },
  {
    "url": "api/index.html",
    "revision": "b6f0f397d36a8710c7998d1306afd82c"
  },
  {
    "url": "api/suspense.html",
    "revision": "1c074e170f764685822048da8e1f41fa"
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
    "url": "assets/js/13.cc7cfd07.js",
    "revision": "f4208089ab0259266d7d79e07768e003"
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
    "url": "assets/js/21.b1999018.js",
    "revision": "f4ee85346c20827de0b4cb33ad3bca6f"
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
    "url": "assets/js/8.2b0cf09c.js",
    "revision": "3115e2b44dc3b89b5086b7dadb1de458"
  },
  {
    "url": "assets/js/9.cd2df33f.js",
    "revision": "ec2ebc94391eccde1ee99cdfb3771086"
  },
  {
    "url": "assets/js/app.2893c823.js",
    "revision": "00ac97ec24ad817dedd273c0ff210b5b"
  },
  {
    "url": "assets/js/vendors~docsearch.e9a84dcc.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context-rxjs7.html",
    "revision": "bf4fbb8578574d6c7f263a68cc9d5299"
  },
  {
    "url": "examples/context.html",
    "revision": "5b9f7d656b9a70ebf14182216ad3c40e"
  },
  {
    "url": "examples/index.html",
    "revision": "97c76df52cc0751d59307442794bdc68"
  },
  {
    "url": "examples/pomodoro-timer-rxjs7.html",
    "revision": "6a0a5dece3984fecbc598a54d03d467c"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "1396c575d9098170ce8541e42b56922e"
  },
  {
    "url": "examples/suspense-rxjs7.html",
    "revision": "2ea7e4b81ea330fc433edd49b76125aa"
  },
  {
    "url": "examples/suspense.html",
    "revision": "5c58b12935250d051a65150cd412fb42"
  },
  {
    "url": "examples/typeahead-rxjs7.html",
    "revision": "bca5e8f9a114a04da9fbbb109f6cd45b"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "36aa0c204388da4fe5818b401946d73f"
  },
  {
    "url": "guide/context.html",
    "revision": "3c193cc8d035dc1d3ee161e09af02a3d"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "61c10f77ed5d919634d62447ee8cea1e"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "972ca8f7c17f2baaa32dca80230ad5ba"
  },
  {
    "url": "guide/index.html",
    "revision": "d90a1b0b98e69b188a7c78743d5b76ea"
  },
  {
    "url": "guide/migration.html",
    "revision": "2afcef9a263f498209ee4c1ad0eb021c"
  },
  {
    "url": "guide/motivation.html",
    "revision": "9415b7a59bc3553440ff223507405dce"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "bce0d46ff8ea4cb35619947888f72271"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "acd59a821c77bac7c365efb6cd8a4ca0"
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
    "revision": "17dd5197c8aa329b7231aec8c20b783a"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "67ed19462c5c6942c5af1dae7580551f"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "2873e8fbecf0205f6367908770477631"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "cdcf3ebe4354ef5a618f445aef7cec71"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "b238b15de1158a360043131134a812a9"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "730096e2b73d3e92ce5b2fa6e891af11"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "8167ce80457cbee7975b0aeb2e661583"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "b7d9d89288dd3df172f210403d014bb9"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "b668e3ecf39586bbdefe50c8544d0de7"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "3c0f4151b9d9c5477c796d3fcf60aacb"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "68f6d3f981c25fe6e3849dd33f25b08b"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "7aae0a3d646e5fd0dc5eec17429c2d12"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "6c32f9ecc07decc71d7753f60417564a"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "cc633ff114defa9a26a47c74a2e321f8"
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
