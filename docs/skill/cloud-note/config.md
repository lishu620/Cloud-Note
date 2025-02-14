---
id: cloud-note-config
slug: /cloud-note-config
title: 配置文件
authors: mlishu
---

## docusaurus.config.ts

`docusaurus.config.ts` 位于网站的根目录，包含了本站点的配置信息

在这里可以修改 logo，站点名(title)，作者名，顶部的公告(announcementBar)，导航栏(navbar)，底部导航(footer)等等

### 站点信息

```typescript title='docusaurus.config.ts' icon='logos:docusaurus'
const config: Config = {
  title: '璃殊の云笔记',
  url: 'https://note.mlishu.top',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mlishu',
  projectName: 'blog',
  themeConfig: {
    image: 'img/logo.png',
    metadata: [
      {
        name: 'keywords',
        content: '璃殊, mlishu, blog, javascript, typescript, node, react, vue, web, 前端, 后端',
      },
    ],
    // ...
}

export default config
```

也包含了主页的相关配置信息

### 导航栏

```typescript title='docusaurus.config.ts' icon='logos:docusaurus'
navbar: {
      logo: {
        alt: '璃殊',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        { label: '笔记', position: 'right', to: 'docs/skill' },
        { label: '博客', position: 'right', to: 'blog' },
        { label: '项目', position: 'right', to: 'project' },
        { label: '友链', position: 'right', to: 'friends' },
        { label: '关于', position: 'right', to: 'about' },
        {
          label: '更多',
          position: 'right',
          items: [
            { label: '归档', to: 'blog/archive' },
            { label: '工具推荐', to: 'docs/tools' },
          ],
        },
      ],
    }
```

### 底部导航

```typescript title='docusaurus.config.ts' icon='logos:docusaurus'
footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            { label: '博客', to: 'blog' },
            { label: '归档', to: 'blog/archive' },
            { label: '技术笔记', to: 'docs/skill' },
          ],
        },
        {
          title: '社交媒体',
          items: [
            { label: '关于我', to: '/about' },
            { label: 'GitHub', href: social.github.href },
          ],
        },
        {
          title: '网站',
          items: [
            { label: 'MySQL Study', to: 'https://mysql.mlishu.top' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '友链', position: 'right', to: 'friends' },
            {
              html: `
                <a href="https://docusaurus.io" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                </a>
                `,
            },
          ],
        },
      ],
      copyright: `
        <p>Copyright © 2020 - ${new Date().getFullYear()} mlishu. | Built with Docusaurus.</p>
        `,
    }
```

完整的配置信息说明 [docusaurus.config.ts | Docusaurus](https://docusaurus.io/zh-CN/docs/api/docusaurus-config)