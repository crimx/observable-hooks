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
    "revision": "5a183f8b7ab8c92206afc9e8b286253f"
  },
  {
    "url": "api/helpers.html",
    "revision": "e2c188d4a138a61d869ceb757f8f3855"
  },
  {
    "url": "api/index.html",
    "revision": "8b6dc90019dfebbb1901e00ed01181b9"
  },
  {
    "url": "api/suspense.html",
    "revision": "8b7b21c0fb01bbb4955f5458caba0917"
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
    "url": "assets/js/19.2fdcaeb3.js",
    "revision": "ccddcb8c30851cc046e02025317b0328"
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
    "url": "assets/js/32.8da0b439.js",
    "revision": "29e76bc07caf7d39d8e5226f07379e70"
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
    "url": "assets/js/app.e6428963.js",
    "revision": "ca808803d01b701b6210d8383069d0e8"
  },
  {
    "url": "assets/js/vendors~docsearch.5cb73dc3.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context-rxjs7.html",
    "revision": "5c1616237f38b29f92143becf3e34c4a"
  },
  {
    "url": "examples/context.html",
    "revision": "289a2cf09b6ba20fea0d69429bee878a"
  },
  {
    "url": "examples/index.html",
    "revision": "d629f78cdfbce90c3eac8d81f3576ca1"
  },
  {
    "url": "examples/pomodoro-timer-rxjs7.html",
    "revision": "f9fbda8f1396ca6348c824cfdf8ab827"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "0f880be7c54c31cc5ae0f5209bdfdb67"
  },
  {
    "url": "examples/suspense-rxjs7.html",
    "revision": "0a7f64a94dd99f516dccc90f125f3b76"
  },
  {
    "url": "examples/suspense.html",
    "revision": "c6bc8e998626f35ef3b2d86c74fc5ebc"
  },
  {
    "url": "examples/typeahead-rxjs7.html",
    "revision": "d61563644add7c17bf45ef8427f0fa88"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "90411982c1a49c9b70ae4111bb9e4d06"
  },
  {
    "url": "guide/context.html",
    "revision": "03f4b55daec010db4c3e0431b50b4c28"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "2997e0ad6e61cb085514547056460821"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "4d022992d3055a259b6e47986c2a73fe"
  },
  {
    "url": "guide/index.html",
    "revision": "887b777f3d5dd6a87f58d51af761f8fe"
  },
  {
    "url": "guide/migration.html",
    "revision": "a2878306945a73e0f6858eb8c8849739"
  },
  {
    "url": "guide/motivation.html",
    "revision": "c762ceacaea94856fb18ec0c41fc0eab"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "974c0eb62cef3346a8ad9272d8babb2b"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "26f49f472da46db00d77971d91ccf263"
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
    "revision": "0c06c2364a70bfa62fa86dcb06ddb84d"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "beff039b43301b8698fbbdb915bf6040"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "745d6ca07f4089becc13763e9c37bc3a"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "f0a4e440040e5a86789df994247077b4"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "f34c680e28a4d6cde403d910009c88fd"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "063ff416628efeb43ff739fff2cce056"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "7a51baf222acde9f4e93b9db39fb6ee7"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "92154ca2ebcbcaf9029ba1835281538b"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "ce3b62addace2f06803683ea2d4d2ffa"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "541a15e6bcf32f4f2247fe14b87cbb7f"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "849fc75522677d5cb817350a506f4a1f"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "8da270e1a6a24624beaa67f5b163f681"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "d5f17f5f5db2debf1f86bb1ae765e989"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "a86bf727eac010ddccb76c8f26774525"
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
