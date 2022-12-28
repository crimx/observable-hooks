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
    "revision": "cd4afdf07ebd682a5f11b29292734ded"
  },
  {
    "url": "api/helpers.html",
    "revision": "45ad464fc63da1183880c232802068c1"
  },
  {
    "url": "api/index.html",
    "revision": "0866b78df3e8da9643ff863c881fe709"
  },
  {
    "url": "api/suspense.html",
    "revision": "29135b558613e3320991a1dd24693510"
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
    "url": "assets/js/11.d15899d8.js",
    "revision": "b11a1b7654c5dba75196c1d230b353ae"
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
    "url": "assets/js/14.88d60fde.js",
    "revision": "f93a0fffe8151078d6425e27e1310cc2"
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
    "url": "assets/js/21.93536ec4.js",
    "revision": "ac61c09bf9814fd890554d40c0a062af"
  },
  {
    "url": "assets/js/22.2c539b65.js",
    "revision": "9ced6ea72758012b97ca8b61726d5fc8"
  },
  {
    "url": "assets/js/23.ff677e68.js",
    "revision": "77a2b1d3ab30a5965d726dd5adcf2205"
  },
  {
    "url": "assets/js/24.b95770ce.js",
    "revision": "a886d97f4974b2bff51a43b6ff556e41"
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
    "url": "assets/js/27.152ed421.js",
    "revision": "73e94a07d532b12af6daefbf1ef6d339"
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
    "url": "assets/js/8.d950ed99.js",
    "revision": "97b057cef35b93d383894f94a146083a"
  },
  {
    "url": "assets/js/9.4c9c1113.js",
    "revision": "ec2ebc94391eccde1ee99cdfb3771086"
  },
  {
    "url": "assets/js/app.cff4befc.js",
    "revision": "8808cae5aa45856423732fa21a991128"
  },
  {
    "url": "assets/js/vendors~docsearch.5cb73dc3.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context-rxjs7.html",
    "revision": "9f0691bf6188e17723a943b0864e1e94"
  },
  {
    "url": "examples/context.html",
    "revision": "57294ef7d19e00ba8216198062230a02"
  },
  {
    "url": "examples/index.html",
    "revision": "55f803d5a3e9cdd4dac5fdad14629061"
  },
  {
    "url": "examples/pomodoro-timer-rxjs7.html",
    "revision": "ef87258d053b3ce464d8dc4922bc993b"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "b358f8f2ad3e50d0996efbe1bad53b1d"
  },
  {
    "url": "examples/suspense-rxjs7.html",
    "revision": "a535b37c7ea36ba2eee44071e24d86d7"
  },
  {
    "url": "examples/suspense.html",
    "revision": "0d15511016d3833df958471b47478fc0"
  },
  {
    "url": "examples/typeahead-rxjs7.html",
    "revision": "2892ea1bfde784acff0cb5e7fec5d7e9"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "8405a3849f1199366c15cbeb55d03437"
  },
  {
    "url": "guide/context.html",
    "revision": "341262c72d0cfbb7e266b43ce02dd21a"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "e1e2761f7a4f0e42c0fc84a849aba7dd"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "c07f598ea03bf2c3cf9141a3655494e9"
  },
  {
    "url": "guide/index.html",
    "revision": "026bf696108bc6f3ab1cc626132d9d8c"
  },
  {
    "url": "guide/migration.html",
    "revision": "e85f8fab82c58cd3bd35ecfb088dc308"
  },
  {
    "url": "guide/motivation.html",
    "revision": "09c2977243d30dacd7a6d6b9b2b13125"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "18b1e68bbc5d5ad4e8aee155161d940f"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "fa0d8ac1d92c0787f5a6dcb860deb8ac"
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
    "revision": "796cc316483ccbfb58aa2db2200ab192"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "c27c1018f62fa9f5cc5a402f446d26bc"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "9913e631e1030f246edef182b3fa58a8"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "011920303bfb6f494ebf2079500eeafa"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "22e76897aa8b22f2a0f7039c547ab3b4"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "542a50e9b7decf6b9d468d6e11da7ebf"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "8e2a0b075432b4b577333498d28ef366"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "f409b29a1c5941ef9692d1f5f2e54ef5"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "ade8a4df7b3c6f0c7a8f1088dacfee73"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "d55a4b9f0dc571da3b3a2f28b275c785"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "5bad30b666f77f2c45138234b7b42f39"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "ce0bc616657d6c3a3f1b22479b1ac25b"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "5dd95701e2733691e0fcfc9944c5b999"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "e8783d206038218c3747866e8260df74"
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
