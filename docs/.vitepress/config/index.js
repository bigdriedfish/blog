import sidebar from './sidebar'
import nav from './nav'
import { footer } from './footer'

const config = {
  title: '鱼干的学习笔记',
  description: '学习开发日常记录',
  lastUpdated: true,
  appearance: 'dark',

  // 从 URL 中删除随尾.html
  // cleanUrls: 'with-subfolders',

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '卤蛋的学习笔记',

    sidebar,
    nav,
    
    docFooter: {
      prev: '🔙',
      next: '🔜',
    },
    lastUpdatedText: "最后更新时间",

    markdown: {
      lineNumbers: true,
    },
    footer: footer,

    // editLink: {
    //   pattern: 'https://github.com/bigdriedfish/blog/edit/master/docs/:path',
    //   text: '前往GitHub进行修改'
    // },

  },
}

export default config


