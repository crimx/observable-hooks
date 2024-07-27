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
    "revision": "ce92a1e1d980e44e1050266a6c0f4bd7"
  },
  {
    "url": "api/helpers.html",
    "revision": "0c2b7d4c966fa11ae73e4ef1035170f3"
  },
  {
    "url": "api/index.html",
    "revision": "1e1520fae07db74a8c58fb39b6738661"
  },
  {
    "url": "api/suspense.html",
    "revision": "20f96060a8b9a8f5d2dd1bf0f2abac88"
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
    "url": "assets/js/24.0ba5b9e4.js",
    "revision": "5345b9617f4f85f4a7fb01b0705a8493"
  },
  {
    "url": "assets/js/25.685a5164.js",
    "revision": "8b9b0841839f7362e6e53d3764c90a6b"
  },
  {
    "url": "assets/js/26.306c4e6d.js",
    "revision": "4788e05b223c3d35d9b349f597435d15"
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
    "url": "assets/js/29.050c0e9f.js",
    "revision": "968eb545d35ee7848b9b1a19256145c0"
  },
  {
    "url": "assets/js/3.95177359.js",
    "revision": "2ed650822b4628d6affde84406fdf4c8"
  },
  {
    "url": "assets/js/30.8d7f9684.js",
    "revision": "7709d351f94ea862125120a96f9d83c0"
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
    "url": "assets/js/37.493f2dcd.js",
    "revision": "7205378a587aa2a5a7380dfbbef36603"
  },
  {
    "url": "assets/js/38.ebb67b0b.js",
    "revision": "77460d536d11fc3b5fadd30b8b4b4e74"
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
    "url": "assets/js/41.d36de1c1.js",
    "revision": "b210dbc05c47ab665074de211b443d01"
  },
  {
    "url": "assets/js/42.1a6f3c48.js",
    "revision": "570b7efb0a472a8ec933b2c0d681bbb0"
  },
  {
    "url": "assets/js/43.56493bd2.js",
    "revision": "02f06ba7e79cc378e3c68f7d0902dbe5"
  },
  {
    "url": "assets/js/44.f29f32df.js",
    "revision": "8527095531aa636c0c7425a2b4ac38eb"
  },
  {
    "url": "assets/js/45.a1a0b01e.js",
    "revision": "42500c60394e63a7ccb232b65fcae3f6"
  },
  {
    "url": "assets/js/46.e30adabf.js",
    "revision": "3465322fb3151b0e5af850a0c373832b"
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
    "url": "assets/js/51.252cddf5.js",
    "revision": "a722e74548db7ba533816243fef64533"
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
    "url": "assets/js/app.4ee1e2d3.js",
    "revision": "97decd4e857aed4dc17d1b2e70d12b57"
  },
  {
    "url": "assets/js/vendors~docsearch.5a4296f1.js",
    "revision": "9a07ded8c9d15204fdf41e88fb30ae5c"
  },
  {
    "url": "examples/context.html",
    "revision": "10cb406e5740bc31bedbf431be356e62"
  },
  {
    "url": "examples/index.html",
    "revision": "3f8a4461b198de72fc48bf691734e755"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "4f1c25f26dd433a750baf2287b7d430c"
  },
  {
    "url": "examples/suspense.html",
    "revision": "39fa1fcc3ecff538bd337207c9b5068c"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "d3d5ab203160403e0576031269b734c6"
  },
  {
    "url": "guide/context.html",
    "revision": "89dae3802fc55819b634649e697c0440"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "7f018c255605690a008572b17b46af4e"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "fa966e3f35ed6a579d0924c4fb8bef86"
  },
  {
    "url": "guide/index.html",
    "revision": "b2aa1d4707514202e790656ee208434a"
  },
  {
    "url": "guide/migration.html",
    "revision": "85f354c10f6e60a16998b89c45880467"
  },
  {
    "url": "guide/motivation.html",
    "revision": "b4919d8ef2a27eb0a18abfa78aa13934"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "b8f591b92cbcd9679a83c7d236b3da10"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "286fc8f61bc5b793ed878912ac042235"
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
    "revision": "c616058c03240931d8a94174087af5ad"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "22c57e33d96a73db8a5b39832510f915"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "4f6052e88139acd7906899cb19bebfdc"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "442619650b54fc62969144e23c67a56b"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "63fdf3c392f6c1d3051564bcc1cacfd2"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "3d145c464316add7e37c9c1504c686b8"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "84161c0d7af5e0d618f6c7595053caed"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "93372ce3b74f435714c3df0352010bf4"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "e3de7b7c31d76a97857a361af4faed01"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "9466d11306aea3d10db8b8ad31812e4f"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "06f4e9f41cac8e1dddf9f5179fb312d2"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "b8169d4d8a8d740640be9b011b73ab62"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "5b35c19008bf4b8b751f8e3331739acb"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "e7c624c229fd8870d79152b0e6c35ab6"
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
