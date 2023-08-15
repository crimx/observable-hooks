module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Observable Hooks',
      description:
        'React hooks for RxJS Observables. Simple, flexible, testable and performant.'
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: 'Observable Hooks',
      description: 'React hooks for RxJS Observables. 简洁、灵活、可测试且注重性能。'
    }
  },
  themeConfig: {
    repo: 'crimx/observable-hooks',
    // edit footer
    docsDir: 'docs',
    editLinks: true,
    algolia: {
      apiKey: '473fd2b63b7c903e3f950d4fef8351d1',
      indexName: 'observable-hooks'
    },
    locales: {
      '/': {
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'API', link: '/api/' },
          { text: 'Examples', link: '/examples/' }
        ],
        sidebar: {
          '/examples/': [
            ['/examples/', 'Simple Examples'],
            {
              title: 'Example Projects', // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 2, // optional, defaults to 1
              children: [
                ['/examples/typeahead', 'Typeahead'],
                ['/examples/pomodoro-timer', 'Pomodoro Timer'],
                ['/examples/context', 'React Context'],
                ['/examples/suspense', 'Render-as-You-Fetch (using Suspense)']
              ]
            },
          ],
          '/api/': [
            {
              title: 'API Reference', // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 2, // optional, defaults to 1
              children: ['/api/', '/api/suspense', '/api/helpers']
            }
          ],
          '/guide/': [
            {
              title: 'Guide', // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 2, // optional, defaults to 1
              children: ['/guide/', '/guide/core-concepts', '/guide/motivation']
            },
            {
              title: 'Advanced', // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 2, // optional, defaults to 1
              children: [
                '/guide/context',
                '/guide/render-as-you-fetch-suspense',
                '/guide/react-independent-epics'
              ]
            },
            {
              title: 'Miscellaneous',
              collapsable: false,
              children: [
                '/guide/gotchas',
                '/guide/migration'
              ]
            }
          ]
        },
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        }
      },
      '/zh-cn/': {
        nav: [
          { text: '指南', link: '/zh-cn/guide/' },
          { text: 'API', link: '/zh-cn/api/' },
          { text: '样例', link: '/zh-cn/examples/' }
        ],
        sidebar: {
          '/zh-cn/examples/': [
            ['/zh-cn/examples/', '简单例子'],
            {
              title: '样例项目', // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 2, // optional, defaults to 1
              children: [
                ['/examples/typeahead', 'Typeahead'],
                ['/examples/pomodoro-timer', 'Pomodoro Timer'],
                ['/examples/context', 'React Context'],
                ['/examples/suspense', 'Render-as-You-Fetch (using Suspense)']
              ]
            },
          ],
          '/zh-cn/api/': [
            {
              title: 'API 参考', // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 2, // optional, defaults to 1
              children: ['/zh-cn/api/', '/zh-cn/api/suspense', '/zh-cn/api/helpers']
            }
          ],
          '/zh-cn/guide/': [
            {
              title: '开发指南', // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 2, // optional, defaults to 1
              children: ['/zh-cn/guide/', '/zh-cn/guide/core-concepts', '/zh-cn/guide/motivation']
            },
            {
              title: '高阶使用', // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 2, // optional, defaults to 1
              children: [
                '/zh-cn/guide/context',
                '/zh-cn/guide/render-as-you-fetch-suspense',
                '/zh-cn/guide/react-independent-epics'
              ]
            },
            {
              title: '杂项',
              collapsable: false,
              children: [
                '/zh-cn/guide/gotchas',
                '/zh-cn/guide/migration'
              ]
            }
          ]
        },
        selectText: '选择语言',
        // label for this locale in the language dropdown
        label: '简体中文',
        // Aria Label for locale in the dropdown
        ariaLabel: '简体中文',
        // text for the edit-on-github link
        editLinkText: '在 GitHub 上编辑此页',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用。',
            buttonText: '刷新'
          }
        }
      }
    }
  },
  plugins: [
    require('./plugins/examples'),
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'codesandbox',
        defaultTitle: 'CodeSandbox',
        before: src => {
          src = src
            .trim()
            .replace(
              /^https:\/\/codesandbox\.io\/s\//,
              'https://codesandbox.io/embed/'
            )
          return `<iframe
            style="width:100%; height:500px; border:1px solid #ebedf0; background-color:#ebedf0; border-radius: 4px; overflow:hidden;"
            title="vigorous-mirzakhani-684bw"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            src="${src}?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"></iframe>`
        },
        after: '\n'
      }
    ]
  ],
  // prettier-ignore
  head: [
    ['link', {rel: "apple-touch-icon", sizes: "57x57", href: "/icons/apple-icon-57x57.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "60x60", href: "/icons/apple-icon-60x60.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "72x72", href: "/icons/apple-icon-72x72.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "76x76", href: "/icons/apple-icon-76x76.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "114x114", href: "/icons/apple-icon-114x114.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "120x120", href: "/icons/apple-icon-120x120.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "144x144", href: "/icons/apple-icon-144x144.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "152x152", href: "/icons/apple-icon-152x152.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-icon-180x180.png"}],
    ['link', {rel: "icon", type: "image/png", sizes: "192x192" , href: "/icons/android-icon-192x192.png"}],
    ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png"}],
    ['link', {rel: "icon", type: "image/png", sizes: "96x96", href: "/icons/favicon-96x96.png"}],
    ['link', {rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png"}],
    ['link', {rel: "manifest", href: "/manifest.json"}],
    ['meta', {name: "msapplication-TileColor", content: "#ffffff"}],
    ['meta', {name: "msapplication-TileImage", content: "/icons/ms-icon-144x144.png"}],
    ['meta', {name: "theme-color", content: "#9B59B6"}]
  ]
}
