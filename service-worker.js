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
    "revision": "cbdf43a372b41b76a4b55d52047d8e47"
  },
  {
    "url": "api/helpers.html",
    "revision": "9edcddea033a5ea52337816600d48ca5"
  },
  {
    "url": "api/index.html",
    "revision": "31245e94ef565abf47475e201565218a"
  },
  {
    "url": "api/suspense.html",
    "revision": "aae365355d130a2ce512a2fe7cf51097"
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
    "url": "assets/js/11.57fea06d.js",
    "revision": "b11a1b7654c5dba75196c1d230b353ae"
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
    "url": "assets/js/15.81905663.js",
    "revision": "14693769b5f4f68733def4107bd27a72"
  },
  {
    "url": "assets/js/16.de6c994b.js",
    "revision": "fee6ab145f3abc019dc6372ddf7e4685"
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
    "url": "assets/js/21.06bb16a7.js",
    "revision": "ac61c09bf9814fd890554d40c0a062af"
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
    "url": "assets/js/24.8db88c91.js",
    "revision": "a886d97f4974b2bff51a43b6ff556e41"
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
    "url": "assets/js/28.ac61505f.js",
    "revision": "2fe0c8e5b2c151e6bc16d884e3895f07"
  },
  {
    "url": "assets/js/29.d24e88d9.js",
    "revision": "97e9bd62cdefbca5e5fe9de107094042"
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
    "url": "assets/js/8.594cab63.js",
    "revision": "97b057cef35b93d383894f94a146083a"
  },
  {
    "url": "assets/js/9.cd2df33f.js",
    "revision": "ec2ebc94391eccde1ee99cdfb3771086"
  },
  {
    "url": "assets/js/app.da8b820f.js",
    "revision": "21dc2a84c238b459d51d0f243c9477d6"
  },
  {
    "url": "assets/js/vendors~docsearch.e9a84dcc.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context-rxjs7.html",
    "revision": "be485d025a223da0356ee0572b66519f"
  },
  {
    "url": "examples/context.html",
    "revision": "3774bf8b1bda7d302fdd16aaf743cc2e"
  },
  {
    "url": "examples/index.html",
    "revision": "873d1e4ebb2db5c3d6ee74eb7d90b4ed"
  },
  {
    "url": "examples/pomodoro-timer-rxjs7.html",
    "revision": "ee8b01e9058fc8aabbd12dffeef79152"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "626601e4bed06dfb1a7e70f79b689c52"
  },
  {
    "url": "examples/suspense-rxjs7.html",
    "revision": "bbc01ecebcfd7555c36007e68754bb00"
  },
  {
    "url": "examples/suspense.html",
    "revision": "efe060bd379d18f749d041f083baef62"
  },
  {
    "url": "examples/typeahead-rxjs7.html",
    "revision": "99384c316a6574a9ba25487a634ba5fa"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "d60eefb58650984549602ae30a2b5b77"
  },
  {
    "url": "guide/context.html",
    "revision": "5471647f8221114f6762f2e68bca0506"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "63cdd55aba4987b9ad6a1ffaf875b0a8"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "24e7893c39d6f3c2aea3ee2a24a6b6c6"
  },
  {
    "url": "guide/index.html",
    "revision": "7d5db1754fb61739c9afc80b0c473651"
  },
  {
    "url": "guide/migration.html",
    "revision": "83a0da213bfb898c687a2b7fa84913d2"
  },
  {
    "url": "guide/motivation.html",
    "revision": "f9f8a2b17f7e17c38fc2af4e74476668"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "a675b66a617877f1de6a43e3ad1fe7d6"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "e3407d317f3a34415c354898be304e71"
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
    "revision": "ef6140b068f53f2373665187c549b991"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "669302960e2d429c091e5729a8877713"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "2713fef1ce0d6d4407095430ff5923c9"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "aecfad8d8532bf9a75315a8ea65ad9ad"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "c33f088f92ed8a0873be6516f1fe5d44"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "dc8897cfbe60317e0c6ab5f5744e6dce"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "1950aaeea08ab06664ef0b3b37e196eb"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "138a0719502d9d23897bf44998ea797a"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "2f867e5d9865b0d915ddc5e6bd5d7199"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "b939f84216ae4936b4c4db8a0b72182a"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "c78b0a3ad9e1b81a45efb1f30d334506"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "fd24249ceb9d28920818e0c254202fe5"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "04305e79688c1e06e99346e034cb124d"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "f5688f5c838dd1342aa654acfa91db9c"
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
