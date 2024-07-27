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
    "revision": "3da5cc3447d7160adb4283f911b2a382"
  },
  {
    "url": "api/helpers.html",
    "revision": "9a53714eec61d021fb8ca4892afedcee"
  },
  {
    "url": "api/index.html",
    "revision": "ae70771e073662b3225a91b02e61d9b6"
  },
  {
    "url": "api/suspense.html",
    "revision": "b6c11092afc143715e6729297bc3a91a"
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
    "url": "assets/js/27.7067e67d.js",
    "revision": "bc4bcb162555d924b5fa79429758a9f3"
  },
  {
    "url": "assets/js/28.9f7d9870.js",
    "revision": "9c9325f7334ae1a97d5568cf9543737b"
  },
  {
    "url": "assets/js/29.55429919.js",
    "revision": "b16ddd51b94460269b6963e2bd68e9d8"
  },
  {
    "url": "assets/js/3.95177359.js",
    "revision": "2ed650822b4628d6affde84406fdf4c8"
  },
  {
    "url": "assets/js/30.80138b5f.js",
    "revision": "eb42f08905e0fb26ba5459c053e4fd5c"
  },
  {
    "url": "assets/js/31.29314d8c.js",
    "revision": "268d99680c6d237d53d6504421cc8b06"
  },
  {
    "url": "assets/js/32.3eabc19a.js",
    "revision": "b79d95c1841d127029ca03ba6e22638c"
  },
  {
    "url": "assets/js/33.7b76382b.js",
    "revision": "0fbe66d3b54dfc19381a448db4f492c4"
  },
  {
    "url": "assets/js/34.0bd17aa5.js",
    "revision": "db584522252e036265ab679a12dcfaf6"
  },
  {
    "url": "assets/js/35.437dbda7.js",
    "revision": "f79956301b06acf4302a1d0e30efcf32"
  },
  {
    "url": "assets/js/36.5b24e5bb.js",
    "revision": "788453ec5a8e00b43447293e613a5b91"
  },
  {
    "url": "assets/js/37.493f2dcd.js",
    "revision": "7205378a587aa2a5a7380dfbbef36603"
  },
  {
    "url": "assets/js/38.b612a8ed.js",
    "revision": "56a2ab7a07c1d85b56d309c71c95a37a"
  },
  {
    "url": "assets/js/39.ec37a971.js",
    "revision": "bd11dd3bba786321ec86a8fa8a87b81b"
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
    "url": "assets/js/41.d688b579.js",
    "revision": "5ba51ca64917f4090063bff5fec4a97c"
  },
  {
    "url": "assets/js/42.9d321ee5.js",
    "revision": "4993c667c65348c32020525e951c422f"
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
    "url": "assets/js/app.9db4870b.js",
    "revision": "39aa50da2b2a338f9d26f0dd2acdf189"
  },
  {
    "url": "assets/js/vendors~docsearch.5a4296f1.js",
    "revision": "9a07ded8c9d15204fdf41e88fb30ae5c"
  },
  {
    "url": "examples/context.html",
    "revision": "a3ad913a28099e65eede0e721d12f0fe"
  },
  {
    "url": "examples/index.html",
    "revision": "462efe1c3271e585c4bbb1a931f97c32"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "a5aac83da6c0f015ea0b33f4f5d74464"
  },
  {
    "url": "examples/suspense.html",
    "revision": "05b589df7d49e6f837c7f30ef9a8e3bd"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "eea74f87aa4388ae24803a99d4c6a44a"
  },
  {
    "url": "guide/context.html",
    "revision": "c4adb3d77b0c1f510621879bad7b0b1d"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "053f43dfa82c0930ff29271d2cbf0e57"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "be2e28ef1f2e5605e15c89fa90e6bdba"
  },
  {
    "url": "guide/index.html",
    "revision": "a924f2b4fbfb8d27e6f3b48f4cce3def"
  },
  {
    "url": "guide/migration.html",
    "revision": "e31f65a5ff92e276c02f2b4f31db8b83"
  },
  {
    "url": "guide/motivation.html",
    "revision": "8c5a56804f594441fe4308bf868629e9"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "f4b892351d28c10623daa1819ac9d105"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "d276a72d67e14aecc8dcd101090af412"
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
    "revision": "119dac5da89b666c6e7a91cdbf5a676a"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "10a509d9cf95694bc2e20e978ab319f2"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "2e6991c0edbb4829dcb3d1c91c07d86a"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "820a2cf67e7d532c93de8423f47d91a3"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "41d8295e238715bc9fb7a43906bc3cbb"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "0508874ab85f192058cb8484b3bb1adf"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "e9834a3106cc9c22e8c4116c9702a1ab"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "a62b23ff7deec3b4845242762a825428"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "0bf7cf0658fa5841cbea92de8eaf2254"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "1b3c31234ecd26238d45d58db371216f"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "dab23049022fc19176fa4ecccdea12dc"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "850d5586c70584631235174c5ce89060"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "42211137659d1b163b448f0913865fb4"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "65b07014d367cf93d57b35a70ba4fee4"
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
