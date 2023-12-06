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
    "revision": "80ad9222bd8caac75cb12c66c90156b1"
  },
  {
    "url": "api/helpers.html",
    "revision": "f6327a5073b96bcbddb0c3a388daadaa"
  },
  {
    "url": "api/index.html",
    "revision": "cee87faefae1fc051351f8bf7f01df24"
  },
  {
    "url": "api/suspense.html",
    "revision": "91c7d0295a2c62162f07534e7e84eb5a"
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
    "url": "assets/js/26.017dbf82.js",
    "revision": "cdf3a72cbb11d698d6d84d6c16685ca0"
  },
  {
    "url": "assets/js/27.afa10a40.js",
    "revision": "076629735eb336f0e3b42520f55a28e4"
  },
  {
    "url": "assets/js/28.e2df9bb5.js",
    "revision": "7c9844c0b13a07659eaeb1bed70aa6c7"
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
    "url": "assets/js/38.2c905ce9.js",
    "revision": "0ec5d2404517b70a73ba00db1a022b4a"
  },
  {
    "url": "assets/js/39.67ac42ca.js",
    "revision": "28bf698c530aa847f7a72630af9e3962"
  },
  {
    "url": "assets/js/4.7886ae13.js",
    "revision": "9cca4162496a899c95f224c6691c47f8"
  },
  {
    "url": "assets/js/40.b1d1ee45.js",
    "revision": "4e67a52f54bb0ca247e3303c57e6b028"
  },
  {
    "url": "assets/js/41.9c79d98b.js",
    "revision": "bb61cef7beab4e14753f0510247a15b8"
  },
  {
    "url": "assets/js/42.9d321ee5.js",
    "revision": "4993c667c65348c32020525e951c422f"
  },
  {
    "url": "assets/js/43.4985b066.js",
    "revision": "070284dde245b0825544405442ed61f8"
  },
  {
    "url": "assets/js/44.f29f32df.js",
    "revision": "8527095531aa636c0c7425a2b4ac38eb"
  },
  {
    "url": "assets/js/45.653ad0f8.js",
    "revision": "a316e14ccbc6ff82f4e3388d03eb0575"
  },
  {
    "url": "assets/js/46.e30adabf.js",
    "revision": "3465322fb3151b0e5af850a0c373832b"
  },
  {
    "url": "assets/js/47.c1c65651.js",
    "revision": "89cd7c6f901db3fe2813b6c086ef4e1d"
  },
  {
    "url": "assets/js/48.98a0af8d.js",
    "revision": "30acf28a8fd6e5d317d1b8be4aa7d05a"
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
    "url": "assets/js/app.565db474.js",
    "revision": "f4766785709431fb33361dfd39c1169c"
  },
  {
    "url": "assets/js/vendors~docsearch.5a4296f1.js",
    "revision": "9a07ded8c9d15204fdf41e88fb30ae5c"
  },
  {
    "url": "examples/context.html",
    "revision": "94aa56daea110494847da8fa3acfd7f7"
  },
  {
    "url": "examples/index.html",
    "revision": "d2c46d05db8abb6ad0f24997584c8e25"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "9fe65ee277c9f762749fa3fc6a147128"
  },
  {
    "url": "examples/suspense.html",
    "revision": "e8ab10746b6cc87c2d67f1d80354b223"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "88fc6f8fd4c90efe4cfd3c424da93a92"
  },
  {
    "url": "guide/context.html",
    "revision": "dee3d4f5559ececca9fa5b1f3ca00727"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "08852ccef3a1bffc3d259a96daee408b"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "0fbec204d230c17f112c35dee0c1066e"
  },
  {
    "url": "guide/index.html",
    "revision": "f56fe40ef3c39c24ac2812494e3f32c5"
  },
  {
    "url": "guide/migration.html",
    "revision": "1b31b22e4f3de1f75e2f0bf577787ea9"
  },
  {
    "url": "guide/motivation.html",
    "revision": "b94de00f0ee6c8ed01d3db813692e7f6"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "68f2e364b7f469f754e17c6aa27deb0c"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "6e8b881fd6379177d678f5b930c07516"
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
    "revision": "3dd71f8c72cafd65839994bedae8456f"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "aa755df2d0b64af4e4a4f23162eadc9d"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "4e00af929d0d6757ae86013b23a198a7"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "2351f1c4acaefcc815bc1022b75468e4"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "c629c73b9ba2665b1172a98c7e22a515"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "90eb52492b3e1d97229dcbaecd15af78"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "0bab945606e3e11c7713f8118c84dca7"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "36af6cde6fadfacf6595f7a0af94efd3"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "da85d546900add636fcf05c864235118"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "46e23f4ff93b2bfbec1d5044e6190814"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "541abd6b189100fc5991fb428ab8e528"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "bfab57197ee0b5b4ba5abb752c58aa68"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "c1be706867bdd1c0fd186c6acf8960eb"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "db1a9184ea52076a4a8cf0cc6c17476e"
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
