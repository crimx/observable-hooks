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
    "revision": "ad81dfb3767260440f03e80bd8e5a5b7"
  },
  {
    "url": "api/helpers.html",
    "revision": "5b7f381c025e3e63c1614a47e0c46019"
  },
  {
    "url": "api/index.html",
    "revision": "4083624c7f1cb9e3f3e79ae757992226"
  },
  {
    "url": "api/suspense.html",
    "revision": "5a5019c392b5d842a1993efae49d0652"
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
    "url": "assets/js/10.a9cad20c.js",
    "revision": "89f7353bd91c797fa3286d07ee657979"
  },
  {
    "url": "assets/js/11.b029ebaa.js",
    "revision": "62d8f0cc65b4897cf23b66b9d08b1901"
  },
  {
    "url": "assets/js/12.a525c735.js",
    "revision": "33934acfda611f8b63345e2695e35883"
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
    "url": "assets/js/18.41c42984.js",
    "revision": "b0164a0447092e14d4ca9e546515c0b8"
  },
  {
    "url": "assets/js/19.062ecd42.js",
    "revision": "f44ce8c39744ea437de44e99feb6777c"
  },
  {
    "url": "assets/js/20.6bb2ba12.js",
    "revision": "bc26cd325801ce6dafb70870a265ab65"
  },
  {
    "url": "assets/js/21.342ea8fd.js",
    "revision": "3926c1ee112d33f251e24e98f492f9c3"
  },
  {
    "url": "assets/js/22.d2578b8c.js",
    "revision": "9e5f2b5fbf1f52c58b0cbc2eef630181"
  },
  {
    "url": "assets/js/23.2426b73b.js",
    "revision": "9ea7e895988f95272a86350b21093567"
  },
  {
    "url": "assets/js/24.b95770ce.js",
    "revision": "a886d97f4974b2bff51a43b6ff556e41"
  },
  {
    "url": "assets/js/25.c7049dba.js",
    "revision": "c14b0ca15f8dfa1eecdb9558101ff7ca"
  },
  {
    "url": "assets/js/26.ecb8f8bd.js",
    "revision": "1a4417d5c8cc7ab22e01189926dd6fdf"
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
    "url": "assets/js/29.528d963e.js",
    "revision": "b7c3dfe276bb6085b35a212493bebf2b"
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
    "url": "assets/js/31.723e142f.js",
    "revision": "f1187ed487f79be1313c8af8f21553c6"
  },
  {
    "url": "assets/js/32.8da0b439.js",
    "revision": "29e76bc07caf7d39d8e5226f07379e70"
  },
  {
    "url": "assets/js/33.a629c45e.js",
    "revision": "2c51db4108380540c1f8755129e55bc3"
  },
  {
    "url": "assets/js/34.9cb3798f.js",
    "revision": "e44df880fad34af567ce8f4e20ba829c"
  },
  {
    "url": "assets/js/35.494d6734.js",
    "revision": "0b058a85e58bb48354bf28899bb48ccc"
  },
  {
    "url": "assets/js/36.d0aa2481.js",
    "revision": "34efd6f5e6d13766ce61d0ef1a720981"
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
    "url": "assets/js/7.53f7520d.js",
    "revision": "7ac96d5194dd6823bbac4e1484a0b76b"
  },
  {
    "url": "assets/js/8.773a10f8.js",
    "revision": "4c0c516cec4216140ae9a88fdacd2697"
  },
  {
    "url": "assets/js/9.69fc0512.js",
    "revision": "554cd396cf574db809fa750c20af9424"
  },
  {
    "url": "assets/js/app.65b0f588.js",
    "revision": "20747e3037c2976341b2b724cb6ac4d6"
  },
  {
    "url": "assets/js/vendors~docsearch.5cb73dc3.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context-rxjs7.html",
    "revision": "b5195832b4adc6b4b54564c42e95eee3"
  },
  {
    "url": "examples/context.html",
    "revision": "6ccb0d173629be9b8a77adbe5a528152"
  },
  {
    "url": "examples/index.html",
    "revision": "70e243101bb18007bf3a5cb231e9ad7f"
  },
  {
    "url": "examples/pomodoro-timer-rxjs7.html",
    "revision": "d1666d4c4bbdf1146797e7b6b4b98f9e"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "7fe418ec05d02cacacb19e2e1633d078"
  },
  {
    "url": "examples/suspense-rxjs7.html",
    "revision": "5b17871bc0b628ba8fe2c6f4c1c14ea9"
  },
  {
    "url": "examples/suspense.html",
    "revision": "11b32848405d5a9b77150324ded9872b"
  },
  {
    "url": "examples/typeahead-rxjs7.html",
    "revision": "041d5e24ca2c001f8a5997ce8fbe816c"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "9687c08a3b801dc7c106e80d919f024b"
  },
  {
    "url": "guide/context.html",
    "revision": "97da11995f344a98cd005b2db45e9b13"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "d295b31472c58679ff075c308b15a32d"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "b9e742fef834d250a3b7a3408232937d"
  },
  {
    "url": "guide/index.html",
    "revision": "d74ef4a73a0ac2a3a82a13638b7e12db"
  },
  {
    "url": "guide/migration.html",
    "revision": "7e5af9694ebe442f79d51c7d411bdbaf"
  },
  {
    "url": "guide/motivation.html",
    "revision": "e4f0ab218140d0d3a336d2b95810e833"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "355e468d4838bbe7dba8fbda28735203"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "066cc08e4ddf2fe9cfc084bca054dfc7"
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
    "revision": "7d341ba0824f65182ae98eab25ea829c"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "f51c11c8a0c5ea0e5ac51f0b75f3d63b"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "8cf9042a50e58907a077dfbef47026fa"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "0a970245f64916aa7e47e020a8805c9f"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "6a192fc869d92db91c6148bda3de1345"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "e992851439101e7260a4f61228390e5f"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "692d109a095b2807514472a277b58c81"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "3366985a3842195c8a84a565e9fc96dc"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "54389d60d97b2695f1071b65564eda9c"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "b446512a2af8c2f2b091c05eb3e00b09"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "76f204e4edecc304886d080b898b50b6"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "2f59ffc9c97dc4364cdca221f0b06595"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "8d0e7af0c64525b2151894549ef6f00c"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "3d419b18aabf5ab5a30be252c3c5f705"
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
