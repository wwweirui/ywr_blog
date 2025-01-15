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
      // { text: '首页', link: '/' },
      // { text: '案例', link: '/demo1/markdown-examples' },
      {
        text: '个人思考',
        items: [
          {
            items: [
              { text: 'TodoList', link: '/blogRecord/todoList' },
              { text: '布道：参悟', link: '/blogRecord/insight' },
              { text: '计划List', link: '/blogRecord/dailyReord' },
              { text: '学习项目', link: '/blogRecord/projectMade' },
              { text: '职业生涯', link: '/blogRecord/SDEFELife' },
              { text: '金融经济', link: '/blogRecord/financial' },
              // { text: '个人思考', link: '/blogRecord/dailyProcess' },
            ],
          },
        ],
      },
      {
        text: '算法地图',
        items: [
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
      // blogRecord 目录
      '/blogRecord/': [
        {
          text: 'blogRecord',
          items: [
            { text: 'TodoList', link: '/blogRecord/todoList' },
            { text: '布道：参悟', link: '/blogRecord/insight' },
            { text: '计划List', link: '/blogRecord/dailyReord' },
            { text: '学习项目', link: '/blogRecord/projectMade' },
            { text: '职业生涯', link: '/blogRecord/SDEFELife' },
            { text: '金融经济', link: '/blogRecord/financial' },
            // { text: '个人思考', link: '/blogRecord/dailyProcess' },
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
