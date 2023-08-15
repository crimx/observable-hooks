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
    "revision": "8274a6af548ba74bb0ce2cef53d7f6d4"
  },
  {
    "url": "api/helpers.html",
    "revision": "804a76ce3da699e08eb0a30656c8c227"
  },
  {
    "url": "api/index.html",
    "revision": "58f916a13df5afcfbaecd2c1c32a64d9"
  },
  {
    "url": "api/suspense.html",
    "revision": "d7804fb62b6fc9fff3c29adbfcfa9aa8"
  },
  {
    "url": "assets/css/0.styles.d1126fd2.css",
    "revision": "4e830c682df2ca45534171aea5221bea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.05c5d22f.js",
    "revision": "b69d55db025d5312acb9c0cedf500df1"
  },
  {
    "url": "assets/js/10.a64fa3d4.js",
    "revision": "80928ae76619751928a24a6935154a7f"
  },
  {
    "url": "assets/js/11.3a01efaf.js",
    "revision": "2d2599de831e73ff7494d074ab3162af"
  },
  {
    "url": "assets/js/12.29be64e5.js",
    "revision": "e4b45f09963619752920e5a4650a4559"
  },
  {
    "url": "assets/js/13.42ba676b.js",
    "revision": "20a97a41fc11eeaed1442881608a517c"
  },
  {
    "url": "assets/js/14.4c8496b0.js",
    "revision": "c6439cda8e6857ad77b63e7ad0442a6b"
  },
  {
    "url": "assets/js/15.c4943164.js",
    "revision": "942013178a9b14224594328189486125"
  },
  {
    "url": "assets/js/16.80fff533.js",
    "revision": "be554b564e99ec95360d3d7ef0034adb"
  },
  {
    "url": "assets/js/17.0b06748a.js",
    "revision": "5ce9900bdf321c041661cc0e818f3e18"
  },
  {
    "url": "assets/js/18.d18af064.js",
    "revision": "88b5b21121940e0bea2472cbd7ddcc08"
  },
  {
    "url": "assets/js/19.d4d6c946.js",
    "revision": "51e3f842ffe31d3ec3c8c8a35e89b12e"
  },
  {
    "url": "assets/js/2.393da890.js",
    "revision": "9248c1bdea3a4b7c8b0d0300421ab8ab"
  },
  {
    "url": "assets/js/20.72b8423c.js",
    "revision": "fd5300cf1d7e09306e369e80e934e40b"
  },
  {
    "url": "assets/js/21.a513cdb7.js",
    "revision": "35cbc1dcb1833b00219aaf2094b25acc"
  },
  {
    "url": "assets/js/22.c541a2d5.js",
    "revision": "2d075e9cc0e2871ed70ace0e1e9409ad"
  },
  {
    "url": "assets/js/23.6baf0ac4.js",
    "revision": "6675314eea01a3c083bb796b29b65cd9"
  },
  {
    "url": "assets/js/24.66c3f1f1.js",
    "revision": "b924e9cc7c0e6ae342317da380dd7e93"
  },
  {
    "url": "assets/js/25.4110a808.js",
    "revision": "80cc482ea3a0a2fb4cff090ad8f253f0"
  },
  {
    "url": "assets/js/26.031ea384.js",
    "revision": "f504c014cc98782090c9f396d0e2fdda"
  },
  {
    "url": "assets/js/27.afa10a40.js",
    "revision": "076629735eb336f0e3b42520f55a28e4"
  },
  {
    "url": "assets/js/28.9f7d9870.js",
    "revision": "9c9325f7334ae1a97d5568cf9543737b"
  },
  {
    "url": "assets/js/29.9d13e8ba.js",
    "revision": "ed6d915f9b06903e226afcf60bd2258d"
  },
  {
    "url": "assets/js/3.95177359.js",
    "revision": "2ed650822b4628d6affde84406fdf4c8"
  },
  {
    "url": "assets/js/30.d34aba2f.js",
    "revision": "9a7d410e2b5eadb0eb7ec4270951fd6c"
  },
  {
    "url": "assets/js/31.c409262b.js",
    "revision": "c90d32d8fb2b8ab18040b2d6f0cae33d"
  },
  {
    "url": "assets/js/32.3eabc19a.js",
    "revision": "b79d95c1841d127029ca03ba6e22638c"
  },
  {
    "url": "assets/js/33.97d7637f.js",
    "revision": "f0de02b51153385eb0073802f262669e"
  },
  {
    "url": "assets/js/34.d894e045.js",
    "revision": "e37e38b672349c673e7325733f0158ee"
  },
  {
    "url": "assets/js/35.32367194.js",
    "revision": "e0114f6f89ef7581b0d165683b74a9d7"
  },
  {
    "url": "assets/js/36.664a9d21.js",
    "revision": "9a5a3f88d4293c9aff1bdc3304859286"
  },
  {
    "url": "assets/js/37.c81259ad.js",
    "revision": "7201ffd67ff756a177eaf0eb4823725a"
  },
  {
    "url": "assets/js/38.d36ee677.js",
    "revision": "393ebead4cfe23124461a55fd4a4689e"
  },
  {
    "url": "assets/js/39.93c87fad.js",
    "revision": "366a00ce65bfa746a3121e321fd347c4"
  },
  {
    "url": "assets/js/4.7886ae13.js",
    "revision": "9cca4162496a899c95f224c6691c47f8"
  },
  {
    "url": "assets/js/40.7471b4e8.js",
    "revision": "443a9f0e3862849bbb4cd9df3af1ba7d"
  },
  {
    "url": "assets/js/41.eb5b2e78.js",
    "revision": "7117d7ab7e0a89cdb765314774216ccb"
  },
  {
    "url": "assets/js/42.1a6f3c48.js",
    "revision": "570b7efb0a472a8ec933b2c0d681bbb0"
  },
  {
    "url": "assets/js/43.23fa6ef9.js",
    "revision": "f8e880a0d5d9ec13d83f900e79cda15a"
  },
  {
    "url": "assets/js/44.d23e3417.js",
    "revision": "df5c8a467b96dc96527668ae099ae563"
  },
  {
    "url": "assets/js/45.598832d1.js",
    "revision": "5730df02e37320cac0a01f8e0d602a7c"
  },
  {
    "url": "assets/js/46.d10ce16f.js",
    "revision": "a812f6960e6f997f411921bf7573d55d"
  },
  {
    "url": "assets/js/47.1b1276e1.js",
    "revision": "cb4aa8361bbc3cb5cae031e0afaee2c6"
  },
  {
    "url": "assets/js/48.22871051.js",
    "revision": "9fbd07ae29e5a38e4afba2149e3a7eb0"
  },
  {
    "url": "assets/js/49.7fb2b43a.js",
    "revision": "6466fe9f29e63e607dfe9d8bc4687c35"
  },
  {
    "url": "assets/js/5.99acf38d.js",
    "revision": "c0c9fe3671aa77cf4f2c00424883ee9b"
  },
  {
    "url": "assets/js/50.54cad3d2.js",
    "revision": "e2498af419d86d89875cc877e145ca87"
  },
  {
    "url": "assets/js/51.6cc733ec.js",
    "revision": "de9786984eb402ad735f6d7221d499f6"
  },
  {
    "url": "assets/js/52.2f77b9cc.js",
    "revision": "6616b9ff853cddaaa56ca8697db8e51f"
  },
  {
    "url": "assets/js/53.3b520dd4.js",
    "revision": "9b0301939785a95fae78867f72283711"
  },
  {
    "url": "assets/js/6.041d4ece.js",
    "revision": "4eb6ba4e99963a2c4aca8a7124df6dc0"
  },
  {
    "url": "assets/js/7.2faa9701.js",
    "revision": "ee61095955ca9e69ba18c9f3d41fd53f"
  },
  {
    "url": "assets/js/app.db3307a8.js",
    "revision": "c1a8655887b634f45ec9d456d08bd145"
  },
  {
    "url": "assets/js/vendors~docsearch.5a4296f1.js",
    "revision": "9a07ded8c9d15204fdf41e88fb30ae5c"
  },
  {
    "url": "examples/context.html",
    "revision": "ffd37b195f5abf16d1fb267d9e890263"
  },
  {
    "url": "examples/index.html",
    "revision": "a8e0e73a96199e1f77fa2ec96404c3bd"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "7a46695edc292daa02fc48de65d70e7d"
  },
  {
    "url": "examples/suspense.html",
    "revision": "4ef61d915772350202cb1a38859a0060"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "24c8be2a62495613a8002ad3408b2771"
  },
  {
    "url": "guide/context.html",
    "revision": "fb5c18e8ee4f31661a4a0c2acb08532d"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "c2a6a66a30f4c9d1299100937bbb7615"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "a07b5e15b25e8f9a8f3f7e4c299c1461"
  },
  {
    "url": "guide/index.html",
    "revision": "0158960a4c59f0871e17d5df8d5761f0"
  },
  {
    "url": "guide/migration.html",
    "revision": "39eadf921c009439405b6802ec13f3e9"
  },
  {
    "url": "guide/motivation.html",
    "revision": "d01a8f356c8a4724002430b3ad767c20"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "ea3406276488332fd74d774ba3cc9779"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "e004eceb315d5d2d151e3f0893535903"
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
    "revision": "844c849037f78688a4ec778f75f47969"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "8d911c52f1876346e3aef377b29b85ee"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "90d7340728f6aac7856af344226ae029"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "2f80b5fc8aab155acbf4487ce20ca48c"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "03e363936ec2cd5f8f62d7f18898b94c"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "12aeabdc519e881d15e21cd6a169d370"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "ee91c9f54b29c19ec8b3181d85fd708e"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "4b19e72a3123622186e42fd16940c0d6"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "644c8ee69b6b74edf958303ec424fe11"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "337c5ad4a6c69ee19320eed7f8bdbe56"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "702b1ae7fada62b2e68e739fb86f925f"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "2d096d6c0b3513a926a445764e9f1c1e"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "71d67dd744eaea7101c60647c6c294af"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "e9767c9ea8d8155491e0b0ac35669dd1"
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
