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
    "revision": "6f4fce737f829c2d711f304b78c32eb4"
  },
  {
    "url": "api/helpers.html",
    "revision": "be9bb41f448098715796298505b26efe"
  },
  {
    "url": "api/index.html",
    "revision": "e6df41c0bbdcb758271fdfda73573e7a"
  },
  {
    "url": "api/suspense.html",
    "revision": "cc036f2574cb71cf9a004f86eeb8de17"
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
    "url": "assets/js/app.c55819c0.js",
    "revision": "2f7dd0090a845a96ce29f439db70cc39"
  },
  {
    "url": "assets/js/vendors~docsearch.e9a84dcc.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context-rxjs7.html",
    "revision": "fb0fffb47a384027a59483f611e256fd"
  },
  {
    "url": "examples/context.html",
    "revision": "f3ce33192f4be8d7febd0ab20946b96b"
  },
  {
    "url": "examples/index.html",
    "revision": "20abe2f8a689538d4b1e734121af3c47"
  },
  {
    "url": "examples/pomodoro-timer-rxjs7.html",
    "revision": "a39f2903ff7cb8abd6e7c7962dcd98f8"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "0e5ef30fc3c3e4befe45b1a62bd80b72"
  },
  {
    "url": "examples/suspense-rxjs7.html",
    "revision": "d907e7ebae491b8e048dae7595e0ccf9"
  },
  {
    "url": "examples/suspense.html",
    "revision": "51f2081377546e5cf25e50986cf3eb38"
  },
  {
    "url": "examples/typeahead-rxjs7.html",
    "revision": "21e0f5f8924bef19b24b667bf309e63b"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "5e96df9a05a8129a5aaa53cbf1dcda79"
  },
  {
    "url": "guide/context.html",
    "revision": "82eda7d326cef41801b227c320ce52cf"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "8d22d94925ae45a4c807be4960900b03"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "af1f70e3d0e3ac6f648e0b69be0b593e"
  },
  {
    "url": "guide/index.html",
    "revision": "c4de45d00b23b2759892509f25b35090"
  },
  {
    "url": "guide/migration.html",
    "revision": "54f0fc5f8da5e6334db8eabe6e3761c2"
  },
  {
    "url": "guide/motivation.html",
    "revision": "26390ab45672dd4520a2d6e72ebb8cb1"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "a6e7f934ec042a875a507a2ce1ee262c"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "7b89ad4899bed823b3f1879122e466fe"
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
    "revision": "7098233733da60477c0a7f3f161b13dd"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "e1af82a13b7108b5f0775424d1cd1da8"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "0b0ffcc7090153c80f6002b4e097ce83"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "5c1d4c3d402c86b848784ab80b663dcc"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "db5a0262b30467e82adbe7ddb28ca00f"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "977794ec2730b10d65bd9d10b8a21f83"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "5edfe9bcd7d85b69725175a52727420b"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "f3c58f3ba45cfdca29c45b91e39c8d27"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "f6497c62f9b75514a2e11508744f2166"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "fb2260d9661655f0612eed054d38590b"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "4e42bfb97a36f47e6cb4daaee9bcc179"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "4375717bb86c39fe69c42b24f9b5ab6a"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "de135f9edbac2f5d28dd1f3bdde1ed36"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "81929e99c6931c3bec71c634329fd144"
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
