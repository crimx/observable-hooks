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
    "revision": "26f308e06e42fc6715db482ec38d99a0"
  },
  {
    "url": "api/helpers.html",
    "revision": "12794d27bda7dca08559f9826091b93d"
  },
  {
    "url": "api/index.html",
    "revision": "f983ab8d967a93a56cc04a941e84e058"
  },
  {
    "url": "api/suspense.html",
    "revision": "2201da39a64f2220b4869c4eed80b504"
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
    "url": "assets/js/24.41e88096.js",
    "revision": "33e66809ca9e00a756424b69c21eb28a"
  },
  {
    "url": "assets/js/25.685a5164.js",
    "revision": "8b9b0841839f7362e6e53d3764c90a6b"
  },
  {
    "url": "assets/js/26.d595d463.js",
    "revision": "fadb14261969f40d60e934365c7b7b27"
  },
  {
    "url": "assets/js/27.9b139f02.js",
    "revision": "023fa605b76478a0d62cf918315db95a"
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
    "url": "assets/js/31.7e9776fc.js",
    "revision": "099bb44343961a1c324f252852399ef8"
  },
  {
    "url": "assets/js/32.ae9246b1.js",
    "revision": "901e90c30d5fecb97c41f1a8c875c7ec"
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
    "url": "assets/js/35.095fd04e.js",
    "revision": "48cf910528bc1232a5bdf53743569bff"
  },
  {
    "url": "assets/js/36.5b24e5bb.js",
    "revision": "788453ec5a8e00b43447293e613a5b91"
  },
  {
    "url": "assets/js/37.ed832f69.js",
    "revision": "a09cc75e24482cd22ef0d099a8b86c88"
  },
  {
    "url": "assets/js/38.b612a8ed.js",
    "revision": "56a2ab7a07c1d85b56d309c71c95a37a"
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
    "url": "assets/js/40.b1d1ee45.js",
    "revision": "4e67a52f54bb0ca247e3303c57e6b028"
  },
  {
    "url": "assets/js/41.d36de1c1.js",
    "revision": "b210dbc05c47ab665074de211b443d01"
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
    "url": "assets/js/46.392589fc.js",
    "revision": "4e9051b0e478a916296be81ca77b46f9"
  },
  {
    "url": "assets/js/47.c1c65651.js",
    "revision": "89cd7c6f901db3fe2813b6c086ef4e1d"
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
    "url": "assets/js/50.4179183e.js",
    "revision": "97d062c1c51ac1fd2c4591ec7109588f"
  },
  {
    "url": "assets/js/51.6952c8d8.js",
    "revision": "cac2139c6987ed5b2ed6c323b1bb68a7"
  },
  {
    "url": "assets/js/52.c7df83f6.js",
    "revision": "f101dbb5b1056d1bb6a8be9449469713"
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
    "url": "assets/js/app.dfe3ecf7.js",
    "revision": "63fe07db9835a035b98e5783871a6c72"
  },
  {
    "url": "assets/js/vendors~docsearch.5a4296f1.js",
    "revision": "9a07ded8c9d15204fdf41e88fb30ae5c"
  },
  {
    "url": "examples/context.html",
    "revision": "91937a4f227398f20a06ab4bd2de1be1"
  },
  {
    "url": "examples/index.html",
    "revision": "b66758f32add48e1c91b6985c8fdf49c"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "a0a4fc14f3c5f48730b901486a563bda"
  },
  {
    "url": "examples/suspense.html",
    "revision": "eb4a1961874488923627a7f72a468aa9"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "2903f065127982157a177b72f5278b0c"
  },
  {
    "url": "guide/context.html",
    "revision": "8f3e3d324f0e51aff0132ba7dccbc046"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "3323da9aabf50272d2934f1b1afa9359"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "2ccda5c433df97dec0b7723ccca78a7d"
  },
  {
    "url": "guide/index.html",
    "revision": "d0d4e2c2605be35c07ffc88b527f973e"
  },
  {
    "url": "guide/migration.html",
    "revision": "f1d927b440b6a7c359f1ef71250ada42"
  },
  {
    "url": "guide/motivation.html",
    "revision": "6c29e770c5e4b32c264d4ea1a0ca80e4"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "de98383b932ecbb659e93f250df69646"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "ed2c7d0c4d4569b52ad660cb990dad0d"
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
    "revision": "de1d299bc0d19450fbf687e4abee9c6c"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "8a7d86d23cf6faf1bba24b845176b5ff"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "87584e0554f4b1e691553fa6334bcfa9"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "f39c73b3c75db9f0701f012da6b92cda"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "9b7a56bac14d7e622eb757c26d6b811e"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "d271d2194f1bd1b14b3c1629e6609b85"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "cc597da85d2e5783b1df3d2f3a0ce145"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "2226e89ec3a152ff1e10029a1090ed41"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "073440931897825eac50159636ef0e33"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "1f7f98384451c22d5af32f236a82c56f"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "38f03adc6cf0d1e303b6859d2f2afbd2"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "c8d3c027e101540cb62f2395d36d6d61"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "986ceb6343e5e607482b4192dc1ec8c1"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "4b196825faa6d21d7a6b90a508bc5203"
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
