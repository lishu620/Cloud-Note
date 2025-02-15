<h2 align="center">
璃殊的个人博客
</h2>
<p align="center">
<a href="https://vercel.com/new/clone?repository-url=https://github.com/mlishu/blog/tree/main&project-name=blog&repo-name=blog" rel="nofollow"><img src="https://vercel.com/button"></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/mlishu/blog" rel="nofollow"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
<a href="https://stackblitz.com/github/mlishu/blog" rel="nofollow"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"></a>
</p>

## 👋 介绍

这篇文章记录了本项目搭建、安装的过程以及技术栈，希望本项目能够让你学到更多

如果你想要搭建一个类似的站点，可直接克隆本项目使用

## ✨ 特性

- 🦖 **Docusaurus** - 本项目基于 Docusaurus，拥有强大的文档生成和博客功能
- ✍️ **Markdown** - 基于Markdown语法，写作方便
- 🎨 **Beautiful** - 项目展示方式整洁、美观，优先服务于阅读
- 🖥️ **PWA** - 本项目支持渐进式Web应用
- 🌐 **i18n** - 支持国际化
- 💯 **SEO** - 搜索引擎优化，易于收录
- 📊 **谷歌分析** - 支持 Google Analytics
- 🔎 **全文搜索** - 支持 [Algolia DocSearch](https://github.com/algolia/docsearch)
- 🚀 **持续集成** - 支持 CI/CD，自动部署更新内容
- 🏞️ **首页视图** - 显示最新博客文章、项目展示，个人特点，技术栈等
- 🗃️ **博文视图** - 不同的博文视图，列表、宫格
- 🌈 **资源导航** - 收集并分享有用、有意思的资源
- 📦 **项目展示** - 展示你的项目，可用作于作品集

我的主题魔改实现：[Docusaurus 主题魔改](https://note.mlishu.top/docs/docusaurus-guides)

## 🔧 技术栈

- Docusaurus
- TailwindCSS
- Framer motion & magicui

## 📊 目录结构

```bash
├── blog                           # 博客
│   ├── first-blog.md
├── docs                           # 文档/笔记
│   └── doc.md
├── data
│   ├── feature.tsx                # 特点
│   ├── friends.tsx                # 友链
│   ├── projects.tsx               # 项目
│   ├── skills.tsx                 # 技术栈
│   ├── resources.tsx              # 资源
│   └── social.ts                  # 社交链接
├── i18n                           # 国际化
├── src
│   ├── components                 # 组件
│   ├── css                        # 自定义CSS
│   ├── pages                      # 自定义页面
│   ├── plugin                     # 自定义插件
│   └── theme                      # 自定义主题组件
├── static                         # 静态资源文件
│   └── img                        # 静态图片
├── docusaurus.config.ts           # 站点的配置信息
├── sidebars.ts                    # 文档的侧边栏
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

## 📥 运行

```bash
git clone https://github.com/lishu620/Cloud-Note.git
cd Cloud-Note
pnpm install
pnpm start
```

构建本地静态

```bash
pnpm build
```

## 📷 截图

<img width="1471" alt="Live Demo" src="https://github.com/lishu620/blog/blob/main/static/img/og.png?raw=true">

## 📝 许可证

[MIT](./LICENSE)
