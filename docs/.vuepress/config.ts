import { defineUserConfig,defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: 'Dataswap',
  description: 'Dataswap is a blockchain-based Layer 2 project built on IPFS and Filecoin, functioning as a decentralized open data exchange platform.',
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Dataswap',
      description: 'Dataswap is a blockchain-based Layer 2 project built on IPFS and Filecoin, functioning as a decentralized open data exchange platform.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Dataswap',
      description: 'Dataswap是基于filecoin和ipfs开发的区块链layer2层项目，实现去中心化的数据交换平台.',
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: [
            {
                text:"Introduction",
                link:"/introduction"
            },
            {
                text:"Operation",
                link:"/operation"
            },
            {
                text:"about",
                link:"/about"
            },
        ],
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        navbar: [
            {
                text:"介绍",
                link:"/zh/introduction"
            },
            {
                text:"操作指南",
                link:"/zh/operation"
            },
            {
                text:"关于",
                link:"/zh/about"
            },
        ],

      },
    },
  }),
})
