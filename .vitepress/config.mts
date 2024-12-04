import { defineConfig } from 'vitepress'
import { generateSidebar } from "vitepress-sidebar";

const vitepressSidebarOptions = {
  documentRootPath: "/docs",
  collapsed: false, //折叠组关闭 
  collapseDepth: 2, //折叠组2级菜单 
  removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
  prefixSeparator: "_", //删除前缀的符号
};

// https://vitepress.dev/reference/site-config
const base = "/ywr_blog/"
export default defineConfig({
  base,
  lang: 'zh-CN',
  title: "叶微微站点",
  description: "个人成长进度记录",
  srcDir: "docs",
  head: [
    // ["link", { rel: "icon", href: `/favicon.ico` }], 
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `${base}favicon.ico` }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '案例', link: '/demo1/markdown-examples' },
      {
        text: '算法地图',
        items: [
          {
            // 分组标题1
            text: '介绍',
            items: [
              { text: '前言', link: '/preface' },
            ],
          },
          {
            // 分组标题2
            text: '类型分类',
            items: [
              { text: '数组', link: '/算法地图/数组' },
              { text: '链表', link: '/算法地图/链表' },
              // { text: '配置', link: '/configuration' },
              // { text: '页面', link: '/page' },
              // { text: 'Frontmatter', link: '/frontmatter' },
            ],
          },
          {
            // 分组标题3
            text: '进阶玩法',
            items: [
              { text: 'Markdown', link: '/Markdown' },
              { text: '静态部署', link: '/assets' },
            ],
          },
        ],
      },
    ],
    search: {
      provider: 'local'
    },

    //侧边栏
    sidebar: {
      // 目录1
      '/demo1/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ],
        },
      ],

      // 目录2
      '/算法地图/': [
        {
          text: 'Config',
          items: [
            { text: '数组', link: '/算法地图/数组' },
            { text: '链表', link: '/算法地图/链表' },
          ],
        },
      ],
    },


    // sidebar: generateSidebar(vitepressSidebarOptions),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      // copyright: 'Copyright © 2019-2023 present Evan You', 
      // 自动更新时间
      copyright: `Copyright © 2019-${new Date().getFullYear()} present yeweiwei`,
    },
  }
})
