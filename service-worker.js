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
    "revision": "1daa8cb90ffab5f2b930abd5e9a59a3f"
  },
  {
    "url": "api/helpers.html",
    "revision": "14c11026af1812908951b257c81404bb"
  },
  {
    "url": "api/index.html",
    "revision": "e23d2afaa7032dceb07e9a07905c1d8d"
  },
  {
    "url": "api/suspense.html",
    "revision": "243adbf5730721b49dc9c521e08d0a2e"
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
    "url": "assets/js/27.4213b372.js",
    "revision": "0e07e0df940d5b67526668e9ae541f4a"
  },
  {
    "url": "assets/js/28.a20b73ee.js",
    "revision": "178010a48928fb44a70b8670949c5532"
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
    "url": "assets/js/34.62eb69be.js",
    "revision": "190cee047bf190616e053e6512bb5fe2"
  },
  {
    "url": "assets/js/35.437dbda7.js",
    "revision": "f79956301b06acf4302a1d0e30efcf32"
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
    "url": "assets/js/40.e7c7d719.js",
    "revision": "792bcbad8deae1a1e2b42a44c2630a26"
  },
  {
    "url": "assets/js/41.eb5b2e78.js",
    "revision": "7117d7ab7e0a89cdb765314774216ccb"
  },
  {
    "url": "assets/js/42.0fa64b29.js",
    "revision": "8313bcd2b208d9ad262d257b1ddb0b28"
  },
  {
    "url": "assets/js/43.af719121.js",
    "revision": "399dd085350e7138dc13b528c9e94a5d"
  },
  {
    "url": "assets/js/44.5785b8cf.js",
    "revision": "90d173459cd89c51153417ee06271c54"
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
    "url": "assets/js/47.1b1276e1.js",
    "revision": "cb4aa8361bbc3cb5cae031e0afaee2c6"
  },
  {
    "url": "assets/js/48.2bb4667f.js",
    "revision": "d05f4d6debfbb1543d04c4c0f61a64bc"
  },
  {
    "url": "assets/js/49.3fc73350.js",
    "revision": "9e0ce6ca55009281c0e3c94d5e3084c7"
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
    "url": "assets/js/52.1f535781.js",
    "revision": "11569b1be2330274e74e1646ab4cf793"
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
    "url": "assets/js/app.0a2604ce.js",
    "revision": "634e53bb3f41ad0d2449a4ad6f7b8083"
  },
  {
    "url": "assets/js/vendors~docsearch.5a4296f1.js",
    "revision": "9a07ded8c9d15204fdf41e88fb30ae5c"
  },
  {
    "url": "examples/context.html",
    "revision": "8abf552f36e419d5142a4cec6e2fb5d1"
  },
  {
    "url": "examples/index.html",
    "revision": "faa768faa7a94a74b2e3396fcd0daafe"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "9d8931eb2dd68c5996ed1c63cbb7e81b"
  },
  {
    "url": "examples/suspense.html",
    "revision": "4e41efebab2ff3e8c092c6adf47e0778"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "0f8510ff0d239e4cf68dbec1ee10037a"
  },
  {
    "url": "guide/context.html",
    "revision": "ed19db45209e8757946ac6a40827cd69"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "2f08f1ba64f4270736e5b45aa991a275"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "ab07278a7d0e750540b412711128e3a2"
  },
  {
    "url": "guide/index.html",
    "revision": "8fb65510bf1ee8288fa1a676f083d565"
  },
  {
    "url": "guide/migration.html",
    "revision": "af6d473e96215a690de95ab9b4a01d5d"
  },
  {
    "url": "guide/motivation.html",
    "revision": "e87cca1a1360afca0999728ffa26f8ca"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "4b89e98652747c59997f431bbcaa3769"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "3becfe42eeee0ce47b2f4ee4ada58ce9"
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
    "revision": "a610e150ba16453add06fadcabf00cd6"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "ef037ff4344688f975eff9dd8712d767"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "026c866b450adb35f805f94ec7a51e5e"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "64f4f8dea20202230073790bbc019077"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "15b3eab47262107df790cd6609818f0f"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "8867ce6747001de36bf49d2dc2d62eb6"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "ea9c859b57c0c480e102112de4402a9a"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "1fc081ee9ae01fd8bfea4203eccdb3be"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "996503db3e75ea149a36728b681bb827"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "6299872a2e937b093d9e7c2f8bc5df3c"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "ea473708c92bc6e17453547d3e20699c"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "a1618786311e87e067ec0ad33a99c83c"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "8ae9ca478edf5074d09703fbce596443"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "f0876431a87f3607c759aae4f5d5f1ce"
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
