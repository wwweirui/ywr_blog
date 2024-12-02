import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
const base = "/ywr_blog/"
export default defineConfig({
  base,
  title: "My Awesome Project",
  description: "A VitePress Site",
  head: [
    // ["link", { rel: "icon", href: `/favicon.ico` }], 
   // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `${base}favicon.ico` }],  
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
