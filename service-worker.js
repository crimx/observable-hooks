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
    "revision": "adfa8e66f6cd3e059d69ef2072e0da28"
  },
  {
    "url": "api/helpers.html",
    "revision": "262a82c9ecbab062b5297180cd600e84"
  },
  {
    "url": "api/index.html",
    "revision": "cad30e24d3f1ce29b6ee7ece3bbad1ab"
  },
  {
    "url": "api/suspense.html",
    "revision": "fef3f96333ad1036486d147713676921"
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
    "url": "assets/js/1.4fac312c.js",
    "revision": "7e21a81d31400bc8ff018c7865fd2101"
  },
  {
    "url": "assets/js/10.0e84fc15.js",
    "revision": "8d63341dc7c6599249099fef36ee0e23"
  },
  {
    "url": "assets/js/11.3d88376a.js",
    "revision": "3bb49214f15c1031d43b558384228e37"
  },
  {
    "url": "assets/js/12.03818ad1.js",
    "revision": "326155bcec4771eeb5dc8ba3358070d2"
  },
  {
    "url": "assets/js/13.7f0f6784.js",
    "revision": "832e0dd790baceb4387d1a71cfa91c19"
  },
  {
    "url": "assets/js/14.dd1b0709.js",
    "revision": "30c63a3772b3ad9282786ca135a96697"
  },
  {
    "url": "assets/js/15.0d65d408.js",
    "revision": "88a5e07b7d781e0b7d63178a75af0f11"
  },
  {
    "url": "assets/js/16.62c405c3.js",
    "revision": "1ec7fb233a0fdcc59e1c9bcaa55757bc"
  },
  {
    "url": "assets/js/17.f3ffcfdf.js",
    "revision": "a1028a1dd67f4b6890d34f16f470014a"
  },
  {
    "url": "assets/js/18.ba7870f1.js",
    "revision": "688f2801f5ca601f0a850934accbcb5a"
  },
  {
    "url": "assets/js/19.7a070d7f.js",
    "revision": "bcd47efd4d7fe9f1b10c269b88bf4ca3"
  },
  {
    "url": "assets/js/2.cdf8e68f.js",
    "revision": "7c687cb284e5dfea00bd74c83cbbb5ee"
  },
  {
    "url": "assets/js/20.90dea7df.js",
    "revision": "c352b01ad54d000830196e0e7b384b79"
  },
  {
    "url": "assets/js/21.6efe18e0.js",
    "revision": "2b882491f9f8c9326be05d69b37bbdde"
  },
  {
    "url": "assets/js/22.0a0eb708.js",
    "revision": "773c6ee906dd5a01c4130b26ab3f9e0e"
  },
  {
    "url": "assets/js/23.98474197.js",
    "revision": "894852b02ef895f4f4f40cf6a660ece5"
  },
  {
    "url": "assets/js/24.11904bdb.js",
    "revision": "afe8af397c77192a15eb9cfdfb12534f"
  },
  {
    "url": "assets/js/25.e96e7491.js",
    "revision": "950f86da5700d1fe3c6f183c30173b61"
  },
  {
    "url": "assets/js/26.aff83154.js",
    "revision": "fadb14261969f40d60e934365c7b7b27"
  },
  {
    "url": "assets/js/27.8502433f.js",
    "revision": "076629735eb336f0e3b42520f55a28e4"
  },
  {
    "url": "assets/js/28.6c605f36.js",
    "revision": "9c9325f7334ae1a97d5568cf9543737b"
  },
  {
    "url": "assets/js/29.0b34547d.js",
    "revision": "ed6d915f9b06903e226afcf60bd2258d"
  },
  {
    "url": "assets/js/3.cc52e1bd.js",
    "revision": "18ed3692d7777543d68d39df9a62b4d8"
  },
  {
    "url": "assets/js/30.15e7e615.js",
    "revision": "9a7d410e2b5eadb0eb7ec4270951fd6c"
  },
  {
    "url": "assets/js/31.bc788f8f.js",
    "revision": "c90d32d8fb2b8ab18040b2d6f0cae33d"
  },
  {
    "url": "assets/js/32.3080cdfe.js",
    "revision": "b79d95c1841d127029ca03ba6e22638c"
  },
  {
    "url": "assets/js/33.64c2099f.js",
    "revision": "f0de02b51153385eb0073802f262669e"
  },
  {
    "url": "assets/js/34.a6c268c1.js",
    "revision": "e37e38b672349c673e7325733f0158ee"
  },
  {
    "url": "assets/js/35.d40e1340.js",
    "revision": "e0114f6f89ef7581b0d165683b74a9d7"
  },
  {
    "url": "assets/js/36.1f066565.js",
    "revision": "9a5a3f88d4293c9aff1bdc3304859286"
  },
  {
    "url": "assets/js/37.ef01a384.js",
    "revision": "7201ffd67ff756a177eaf0eb4823725a"
  },
  {
    "url": "assets/js/38.c72a2836.js",
    "revision": "0ec5d2404517b70a73ba00db1a022b4a"
  },
  {
    "url": "assets/js/39.fe3ae2dd.js",
    "revision": "28bf698c530aa847f7a72630af9e3962"
  },
  {
    "url": "assets/js/4.b758b873.js",
    "revision": "b9c3c07e044b6045aca535b50ad48e7b"
  },
  {
    "url": "assets/js/40.5033dc0d.js",
    "revision": "4e67a52f54bb0ca247e3303c57e6b028"
  },
  {
    "url": "assets/js/41.68dcb498.js",
    "revision": "b210dbc05c47ab665074de211b443d01"
  },
  {
    "url": "assets/js/42.05c9f573.js",
    "revision": "1c4a6648a73a64af5baffca38db897cd"
  },
  {
    "url": "assets/js/43.58b3e8e6.js",
    "revision": "070284dde245b0825544405442ed61f8"
  },
  {
    "url": "assets/js/44.2f07630f.js",
    "revision": "8527095531aa636c0c7425a2b4ac38eb"
  },
  {
    "url": "assets/js/45.670f95b3.js",
    "revision": "a316e14ccbc6ff82f4e3388d03eb0575"
  },
  {
    "url": "assets/js/46.a412b1da.js",
    "revision": "3465322fb3151b0e5af850a0c373832b"
  },
  {
    "url": "assets/js/47.5e891780.js",
    "revision": "cb4aa8361bbc3cb5cae031e0afaee2c6"
  },
  {
    "url": "assets/js/48.1e4e9614.js",
    "revision": "9fbd07ae29e5a38e4afba2149e3a7eb0"
  },
  {
    "url": "assets/js/49.0a2d24ba.js",
    "revision": "6466fe9f29e63e607dfe9d8bc4687c35"
  },
  {
    "url": "assets/js/5.4cf519e8.js",
    "revision": "f6126256f4ae6ce7900b97e7c9f348a2"
  },
  {
    "url": "assets/js/50.b9459473.js",
    "revision": "e2498af419d86d89875cc877e145ca87"
  },
  {
    "url": "assets/js/51.b424c501.js",
    "revision": "de9786984eb402ad735f6d7221d499f6"
  },
  {
    "url": "assets/js/52.f11d8dcf.js",
    "revision": "6616b9ff853cddaaa56ca8697db8e51f"
  },
  {
    "url": "assets/js/53.3b520dd4.js",
    "revision": "9b0301939785a95fae78867f72283711"
  },
  {
    "url": "assets/js/6.cb9825a9.js",
    "revision": "62b0ee64598158c9a6d556b2540679e6"
  },
  {
    "url": "assets/js/7.81d80099.js",
    "revision": "ee61095955ca9e69ba18c9f3d41fd53f"
  },
  {
    "url": "assets/js/app.a4769f76.js",
    "revision": "d4708985ad047950822a862063a45508"
  },
  {
    "url": "assets/js/vendors~docsearch.5a4296f1.js",
    "revision": "9a07ded8c9d15204fdf41e88fb30ae5c"
  },
  {
    "url": "examples/context.html",
    "revision": "c234580c00eb7a3303537e934e55b074"
  },
  {
    "url": "examples/index.html",
    "revision": "dcc7a91c3da8e85628202429d5ae4350"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "71ccd8f72fb94c6529d3a594e710254a"
  },
  {
    "url": "examples/suspense.html",
    "revision": "a4f132a9cdb01f0b7ac31865f296d245"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "f9560b35d913fb46e94a291b87c76c78"
  },
  {
    "url": "guide/context.html",
    "revision": "f399b75d9f7d30037f7635e1c0c805e3"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "90c0a8c13d6f09ff32e4701e03656e07"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "80ef05e7bbe39333c0a1c11dcdaa927b"
  },
  {
    "url": "guide/index.html",
    "revision": "073df18a57e68df8a60a2d7651cc142d"
  },
  {
    "url": "guide/migration.html",
    "revision": "5917e507b1833f986a212ec3b96eafd7"
  },
  {
    "url": "guide/motivation.html",
    "revision": "1481ceba3b8ad70c8b7cf018ef45b7c9"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "743fa79d04d6fdc5339582cc08bd49cc"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "8e35f400a0ebd6218e777ad1387e340d"
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
    "revision": "1018a2983d3133ca4d6952e446fae216"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  },
  {
    "url": "zh-cn/api/helpers.html",
    "revision": "65a808735a4075e7fdfcda49ab745ed1"
  },
  {
    "url": "zh-cn/api/index.html",
    "revision": "931b595bb2abb65aec3bf2d9f3d79f1e"
  },
  {
    "url": "zh-cn/api/suspense.html",
    "revision": "cb248a50baece56d67ae49b0eac76485"
  },
  {
    "url": "zh-cn/examples/index.html",
    "revision": "6d55f0486d89fc6b5429d490cbee731f"
  },
  {
    "url": "zh-cn/guide/context.html",
    "revision": "78f8eccaf12e54f27f29807aeb0bac71"
  },
  {
    "url": "zh-cn/guide/core-concepts.html",
    "revision": "caa11501c6c6ba7d114bdae9b4d222b3"
  },
  {
    "url": "zh-cn/guide/gotchas.html",
    "revision": "40dad56f86b54ecbd80bc51d329a3da1"
  },
  {
    "url": "zh-cn/guide/index.html",
    "revision": "298ad1e4523dcae40715eb41d4937900"
  },
  {
    "url": "zh-cn/guide/migration.html",
    "revision": "a73c8320be1104cdbabc4851503c98c6"
  },
  {
    "url": "zh-cn/guide/motivation.html",
    "revision": "22adb81f4844f9b32c28439bb3daa0ce"
  },
  {
    "url": "zh-cn/guide/react-independent-epics.html",
    "revision": "a021ae761b64a800147bcaf3d1799543"
  },
  {
    "url": "zh-cn/guide/render-as-you-fetch-suspense.html",
    "revision": "2ea361f3aac7dcdb2f9f0e1fe7de16e8"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "63c92ce0cb934e12663932ac93b5d6ac"
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
