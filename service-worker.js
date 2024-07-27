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
    "revision": "42e1f393f17d1f86c053598da77de9ed"
  },
  {
    "url": "api/helpers.html",
    "revision": "374e5db0a5fcd980bdbc36a74a91f89b"
  },
  {
    "url": "api/index.html",
    "revision": "cadcddecf2e5a4ee5615467cdf69b4f4"
  },
  {
    "url": "api/suspense.html",
    "revision": "26791856a9780dc6c93c099a9980cdd9"
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
    "url": "assets/js/47.cb1df089.js",
    "revision": "2fab93931c6686917f89df3fb194c57d"
  },
  {
    "url": "assets/js/48.98a0af8d.js",
    "revision": "30acf28a8fd6e5d317d1b8be4aa7d05a"
  },
  {
    "url": "assets/js/49.5c69ea4e.js",
    "revision": "1f8c3e1ef24e65d04a52a68024a6ad07"
  },
  {
    "url": "assets/js/5.99acf38d.js",
    "revision": "c0c9fe3671aa77cf4f2c00424883ee9b"
  },
  {
    "url": "assets/js/50.5ff4caaa.js",
    "revision": "7620efd22c495f0c74bbd8b555bf47ac"
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
    "url": "assets/js/app.56e5dfc2.js",
    "revision": "a082a9e02caaeea9fc1078230205ccc0"
  },
  {
    "url": "assets/js/vendors~docsearch.5a4296f1.js",
    "revision": "9a07ded8c9d15204fdf41e88fb30ae5c"
  },
  {
    "url": "examples/context.html",
    "revision": "32b647972c3ebeac3a8f35b6a454e282"
  },
  {
    "url": "examples/index.html",
    "revision": "0092198590de85f052b7f53a98dce003"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "b06d21b30d411e0dc32bcebd6995bb3e"
  },
  {
    "url": "examples/suspense.html",
    "revision": "a82ea28460f79d51fa5cce5b2663118e"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "e763247b16bddbaee3fd2172642550ac"
  },
  {
    "url": "guide/context.html",
    "revision": "55d1a19a1e53ece5dc6df1385b4e2e57"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "86a21614dbb4dd89c825a10a4d27b7b6"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "391880fd11ad91f24b1b946a6a0ea9dc"
  },
  {
    "url": "guide/index.html",
    "revision": "07f78271f1b9669f4ffebaa40d6f8418"
  },
  {
    "url": "guide/migration.html",
    "revision": "0a6f61513f780ed3bc435b7546c01df1"
  },
  {
    "url": "guide/motivation.html",
    "revision": "66f8d110ccef7ed1e729c4d833b60fc8"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "0625aac45196741f8cb32362db46f08f"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "050ee68be7f0af6168c47938bfab25ea"
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
    "revision": "efd480c857521cacd2cdbd1c0ef79d9a"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "7e0a3cc9377c9024e977726e037b8592"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "85c687a16873b1c2bfa854476af68240"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "67def6907715402eb90cf1f1dae586db"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "79a3e466ce30b868d74f2acf4e8c7f41"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "c4d6900873e642cba0a8cda9ccc4540e"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "1fa311b185fa02efaa91fe206e2e6f52"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "e23f794eb14416281c5102290c98e0b1"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "469490a179acd61b0b1cefbd99b8d0c1"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "2b1f4f2423910b020f34adfd08329bbf"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "97197f85d225bd0de9affd7840f4b7bb"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "9a2be7b31f21a280aa06b1fe29fb3fff"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "626e83abed2924edace483be07884b7f"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "b52345fa4fcbd54e19b2336b61f872b2"
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
