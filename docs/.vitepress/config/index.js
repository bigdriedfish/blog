import sidebar from './sidebar'
import nav from './nav'
import { footer } from './footer'

const config = {
  title: '鱼干的学习笔记',
  description: '学习开发日常记录',
  lastUpdated: true,

  author: '卤蛋',
  authorAvatar: '/logo.svg',
  // 从 URL 中删除随尾.html
  // cleanUrls: 'with-subfolders',

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '卤蛋的学习笔记',

    sidebar,
    nav,
    
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdatedText: "最后更新时间",

    footer: footer,

    editLink: {
      pattern: 'https://github.com/bigdriedfish/blog/edit/master/docs/:path',
      text: '前往GitHub进行修改'
    },

  },
  appearance: 'dark',
}

export default config


