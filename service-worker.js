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
    "revision": "455eb24858c27fee3dbcf11e83eee0ef"
  },
  {
    "url": "api/helpers.html",
    "revision": "20850e8787a3f8550aafb5fb14fbc582"
  },
  {
    "url": "api/index.html",
    "revision": "63da4b8ee1d89084965c2f3e2aa94b12"
  },
  {
    "url": "api/suspense.html",
    "revision": "28663cee035f2b94ca1ba3912fc4dead"
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
    "url": "assets/js/10.584dd210.js",
    "revision": "5d6e46e8154b7e3f499664fc09d1f6d4"
  },
  {
    "url": "assets/js/11.16f55981.js",
    "revision": "746bb362602f55e3d1362a967814a9d2"
  },
  {
    "url": "assets/js/12.a95acb48.js",
    "revision": "33160bc4cd50581e5cd6fb2444e5e13c"
  },
  {
    "url": "assets/js/13.04a496c2.js",
    "revision": "97ee9ad35a365af5bfdd6885121e3810"
  },
  {
    "url": "assets/js/14.edbd648a.js",
    "revision": "e5cb5b712f11773978aae390452a1141"
  },
  {
    "url": "assets/js/15.d16c436f.js",
    "revision": "b215c7047040e8d02a4c702def7f8075"
  },
  {
    "url": "assets/js/16.81c34633.js",
    "revision": "cdd31c02468780e8f9f6fe3870096c95"
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
    "url": "assets/js/20.439b2522.js",
    "revision": "e44861a588aa14f8734f191a70d99633"
  },
  {
    "url": "assets/js/21.3edd1c7f.js",
    "revision": "941f05154b624d96df1499511a4c2dcd"
  },
  {
    "url": "assets/js/22.70eabae1.js",
    "revision": "6b837ce23ac1398eee09b98643f12b7e"
  },
  {
    "url": "assets/js/23.3acba9b9.js",
    "revision": "9dd93301d70aac6d96a4b4941a39ec76"
  },
  {
    "url": "assets/js/24.7e40d5c0.js",
    "revision": "cf8aece25f87818f7e6f2b6e4ded4002"
  },
  {
    "url": "assets/js/25.04c4da60.js",
    "revision": "c7edfb77665df9bd414ab4f69bbf6f3d"
  },
  {
    "url": "assets/js/26.ecb8f8bd.js",
    "revision": "1a4417d5c8cc7ab22e01189926dd6fdf"
  },
  {
    "url": "assets/js/27.b57b045c.js",
    "revision": "ce5798b9328d84bfb2c7e6bd44159cab"
  },
  {
    "url": "assets/js/28.0930230d.js",
    "revision": "76cbcf47716df3ddce1aec42400a85dc"
  },
  {
    "url": "assets/js/29.623c02f7.js",
    "revision": "6b4ecc8301d974733c2a583a1c1d1194"
  },
  {
    "url": "assets/js/3.a5c3baef.js",
    "revision": "6117ac9214bd690d15d34fdf4fbb2835"
  },
  {
    "url": "assets/js/30.34652b0c.js",
    "revision": "1076c9437637c64eed2ae87768de96e7"
  },
  {
    "url": "assets/js/31.e2a7b696.js",
    "revision": "d9a59dfef754640fbdc98a340d79858c"
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
    "url": "assets/js/7.d32eb4d5.js",
    "revision": "8282fd9d07aa9d33f4275b9671430819"
  },
  {
    "url": "assets/js/8.3b3e59dd.js",
    "revision": "eeed06563b14ba62c4ff82c8402b9ea5"
  },
  {
    "url": "assets/js/9.0c10d80a.js",
    "revision": "9d8cec780bd44b79198fc62b94f5d0d6"
  },
  {
    "url": "assets/js/app.06164e9d.js",
    "revision": "493237b7ce7d9b8460555fb5da2c825d"
  },
  {
    "url": "assets/js/vendors~docsearch.5cb73dc3.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context-rxjs7.html",
    "revision": "4052b76724b38713a89776a4d5dadb7c"
  },
  {
    "url": "examples/context.html",
    "revision": "4f170821423b24fc839d25c8553ec27e"
  },
  {
    "url": "examples/index.html",
    "revision": "88d9690917f6809938812f0827ab25ce"
  },
  {
    "url": "examples/pomodoro-timer-rxjs7.html",
    "revision": "0d265440b4576f003425043e9e57dd08"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "3411304ce3bb0d01c5f6b56ce329df6d"
  },
  {
    "url": "examples/suspense-rxjs7.html",
    "revision": "0daba8896964ab5bcc363d966e4ae675"
  },
  {
    "url": "examples/suspense.html",
    "revision": "df4a11119a4692bf2a9096c2c681e981"
  },
  {
    "url": "examples/typeahead-rxjs7.html",
    "revision": "b1302f50615c44915bdfdc66df0ef6c8"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "438aeed28ab093e0f6f845d7354c2334"
  },
  {
    "url": "guide/context.html",
    "revision": "2af1c4b7a242f5d4be461a10fafcb73d"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "dfb7600464594984c153f0bb8394fd8b"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "1044208393a42b79f50101f4b4dd724c"
  },
  {
    "url": "guide/index.html",
    "revision": "264eaa9599ecaa7b0711ec1338bb736d"
  },
  {
    "url": "guide/migration.html",
    "revision": "ac54ad03a938f688187b79d271abbb12"
  },
  {
    "url": "guide/motivation.html",
    "revision": "fcdc1a9bfc1247f397ce91bfb0fbcaca"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "f7f7b7a80a2abd0b3380761689a134aa"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "ae7fa5584d5f230af2ae22674661499b"
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
    "revision": "8da9a79e8e8727ae3b928c795401efd6"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "5247928155d823aab8f594e908d548c2"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "2f95f8488070ea16b6025a11489ac510"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "49f8e515e5ddb0ee942f1566ea487945"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "e791de9a0309cc33994e8543866b58da"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "c9ecc0a576729344548776b94daef98c"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "0f43a7360affbd82d23ef916a79d77c2"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "a03c34eb08cc56245a54b28de317136e"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "7d0f35a610528eba400e7b9553d1a177"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "626bc133df10074c6a695dc7607e41fc"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "347a69e608fb04a6ae38ef7e07e5cbea"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "e557a3d83d0d5a0bb26b7f8508846aa1"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "c2fa186ad068f42e5d07f339d287c5d3"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "7f6bf71d33a8c7f01e4286c2e8826401"
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
