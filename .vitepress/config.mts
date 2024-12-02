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
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: "docs",
  head: [
    // ["link", { rel: "icon", href: `/favicon.ico` }], 
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `${base}favicon.ico` }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/demo1/markdown-examples' }
    ],
    sidebar: generateSidebar(vitepressSidebarOptions),

    // sidebar: [
    // {
    //   text: 'Examples',
    //   items: [
    //     { text: 'Markdown Examples', link: '/markdown-examples' },
    //     { text: 'Runtime API Examples', link: '/api-examples' }
    //   ]
    // }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
