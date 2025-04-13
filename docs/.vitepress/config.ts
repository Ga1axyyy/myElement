import { defineConfig } from 'vitepress'

import { fileURLToPath, URL } from 'node:url'
import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  base: '/your-repo-name/',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'Basic基础组件',
        items: [
          {
            text: 'Button按钮',
            link: '/components/button',
          },
          {
            text: 'Icon图标',
            link: '/components/Icon',
          },
        ],
      },
      {
        text: 'Form表单组件',
        items: [
          {
            text: 'Input输入框',
            link: '/components/input',
          },
          {
            text: 'Switch开关',
            link: '/components/switch',
          },
          {
            text: 'Select选择器',
            link: '/components/select',
          },
          {
            text: 'Form表单',
            link: '/components/form',
          },
        ],
      },
      {
        text: 'Data数据展示',
        items: [
          {
            text: 'Collapse折叠面板',
            link: '/components/Collapse',
          },
        ],
      },
      {
        text: 'Navigation导航',
        items: [
          {
            text: 'Dropdown下拉菜单',
            link: '/components/dropdown',
          },
        ],
      },
      {
        text: 'Feedback 反馈组件',
        items: [
          {
            text: 'Alert提示',
            link: '/components/alert',
          },
          {
            text: 'Message消息提示',
            link: '/components/message',
          },
          {
            text: 'Tooltip文字提示',
            link: '/components/tooltip',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
