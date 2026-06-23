# 思源笔记官网内容归档

> 提取自 `src/siyuan/pages/`、`partials/`、`public/static/index.js`、`site.json`。
> 用途：网站重设计前的完整内容清单，避免遗漏既有文案、链接与页面。

## 目录

1. [站点配置](#站点配置-sitejson)
2. [页面路由](#页面路由清单)
3. [全局 SEO 与导航](#全局-seo-与导航)
4. [首页打字机文案](#首页打字机文案)
5. [静态资源](#静态资源-publicstatic)
6. [各页面正文](#各页面正文)
7. [全站外链汇总](#全站外链汇总)
8. [重设计时注意](#重设计时注意)

## 站点配置 (site.json)

```json
{
  "version": "3.6.5",
  "siteUrl": "https://b3log.org/siyuan",
  "releaseCdn": "https://release.liuyun.io/siyuan",
  "githubRepo": "https://github.com/siyuan-note/siyuan"
}
```

## 页面路由清单

| 源文件 | 构建输出 |
| --- | --- |
| pages/community.html | community.html |
| pages/distributors/lizhi.html | distributors/lizhi.html |
| pages/download.html | download.html |
| pages/en/community.html | en/community.html |
| pages/en/download.html | en/download.html |
| pages/en/eula.html | en/eula.html |
| pages/en/index.html | en/index.html |
| pages/en/pricing.html | en/pricing.html |
| pages/en/privacy.html | en/privacy.html |
| pages/eula.html | eula.html |
| pages/index.html | index.html |
| pages/pricing.html | pricing.html |
| pages/privacy.html | privacy.html |

## 全局 SEO 与导航

### 中文 head 默认标题/描述 (partials/head-zh.html)

- 标题模板：`{页面标题前缀}思源笔记 - 隐私优先的个人知识管理系统，支持 Markdown 排版、块级引用和双向链接`
- og:site_name：`{页面标题前缀}思源笔记`
- Twitter：@b3logos
- 图标：https://b3log.org/images/brand/siyuan-128.png

### 英文 head 默认标题/描述 (partials/head-en.html)

- 标题模板：`{页面标题前缀}SiYuan - Privacy-first personal knowledge management system that supports Markdown, block-level ref, and bidirectional links`
- og:site_name：`{页面标题前缀}SiYuan`

### 中文顶栏 (partials/header-zh.html)

思源笔记

    下载
    定价
    社区
    指南
    English

导航链接：GitHub、下载、定价、社区、指南 (https://siyuan-cn.b3log.org)、English (en/?lang=en)

### 英文顶栏 (partials/header-en.html)

**当前源文件为空**。英文页面构建后无顶栏导航（仅页脚链接可用）。重设计时需补全或从中文版翻译。

### 中文页脚 (partials/footer-zh.html)

滇ICP备14007358号-1 © 2023
      云南链滴科技有限公司

    下载
    定价
    用户协议
    隐私政策
    指南
    路线图
    English

### 英文页脚 (partials/footer-en.html)

滇ICP备14007358号-1 © 2023
      Yunnan Liandi Technology Co., Ltd.

    Download
    Pricing
    User Agreement
    Privacy Policy
    Guide
    Roadmap
    中文

### 语言跳转 (partials/script-redirect-zh.html)

中文首页：若浏览器语言非中文且 URL 无 `lang` 参数，自动跳转到 `en/`。

## 首页打字机文案

### 中文

- 随时随地离线可用
- 端到端加密保证隐私安全
- 优雅的 Markdown 编辑体验
- 文字创作时沉浸在内容构思中
- 触摸灵感和思绪的清晰脉络
- 将知识碎片构建成结构化的体系
- 找到那些埋藏在记忆深处的灵犀
- 思源有云，往来随心

### 英文

- Available offline anytime, anywhere
- End-to-end encryption ensures privacy and security
- Elegant Markdown editing experience
- Immerse yourself in content ideas while writing
- Touch a clear vein of inspiration and thought
- Build knowledge fragments into a structured system
- Find those consonants buried deep in memory
- SiYuan has a cloud, and you can communicate with your heart

## 静态资源 (public/static)

页面引用的图片/SVG/脚本（重设计时如需保留视觉素材可参考）：

- base.css
- distributors-lizhi.png
- feature0.png
- feature1-1.png
- feature1-2.png
- feature1-3.png
- feature1-4.png
- feature2-1.svg
- feature2-2.png
- feature2-3.png
- feature2-4.png
- feature2-5.png
- feature3-1.png
- feature3-2.png
- feature3-3.png
- feature4-1.png
- feature4-2.png
- feature4-3.png
- feature5-1.svg
- feature5-2.svg
- feature5-3.svg
- home-backup.svg
- home-backup2.svg
- home-img.png
- home-img.svg
- home-img2.svg
- home.svg
- icon-check.svg
- icon-info.svg
- icon-x.svg
- img-bg.svg
- img-bg2.svg
- img-bg3.svg
- img-bg4.svg
- index.js
- logo-android.png
- logo-chromium.png
- logo-dark.svg
- logo-discord.png
- logo-docker.png
- logo-github.png
- logo-harmonyos.png
- logo-insider.png
- logo-ios.png
- logo-linux.png
- logo-macOS.png
- logo-mobile.png
- logo-qq.png
- logo-twitter.png
- logo-weibo.png
- logo-windows.png
- logo.svg

## 各页面正文

### pages/community.html

- 标题前缀：`社区 - `

社区

          链滴

          用户论坛

          GitHub

          SiYuan 仓库
          集市仓库
          路线图

          微博

          B3log开源社区

**本页链接：**

- [用户论坛](https://ld246.com/tag/siyuan)
- [SiYuan 仓库](https://github.com/siyuan-note/siyuan)
- [集市仓库](https://github.com/siyuan-note/bazaar)
- [路线图](https://github.com/orgs/siyuan-note/projects/1)
- [B3log开源社区](https://weibo.com/u/2778228501)

---

### pages/distributors/lizhi.html

- 标题前缀：`数码荔枝 - 代理经销商 - `

授权证明

          云南链滴科技有限公司
          授权
          「数码荔枝」
          为大中国区官方合作伙伴，负责以下软件在中国的销售事宜
          思源笔记

          该合作伙伴的销售渠道
          https://lizhi.shop
          /
          https://digitalychee.taobao.com

        AUTHORIZATION CERTIFICATE

          We,
          Yunnan Liandi Technology Co., Ltd.
          the developer of
          SiYuan
          authorizes
          DIGITALYCHEE
          as our official partner in China, Responsible for the sales of the following product(s)
          SiYuan

          The sales channels of this partner
          https://lizhi.shop
          /
          https://digitalychee.taobao.com

**本页链接：**

- [https://lizhi.shop](https://lizhi.shop)
- [https://digitalychee.taobao.com](https://digitalychee.taobao.com)
- [https://lizhi.shop](https://lizhi.shop)
- [https://digitalychee.taobao.com](https://digitalychee.taobao.com)

---

### pages/download.html

- 标题前缀：`下载 - `

下载

            英特尔芯片
            升级需要再次下载

            苹果芯片
            升级需要再次下载

            x86_64 安装包
            升级需要再次下载

            微软商店
            支持一键升级

            安卓安装包
            升级需要再次下载

            Linux AppImage
            升级需要再次下载

          v3.6.5

            除了以下渠道，也可以考虑通过
            百度网盘下载

          Windows

            安装包
            x86_64
            ,
            arm64

            微软商店
            x86_64
            ,
            arm64

            源代码

          macOS

            苹果芯片安装包
            arm64

            英特尔芯片安装包
            x86_64

            源代码

          Linux

            AppImage
            x86_64
            ,
            arm64

            deb
            x86_64
            ,
            arm64

            tar.gz
            x86_64
            ,
            arm64

            源代码

          Android

          华为应用市场
          小米应用商店
          Google Play

            酷安
            ,
            APK
            ,
            源代码

          iPhone/iPad

          App Store
          TestFlight
          源代码

          鸿蒙 NEXT

          已上架应用市场
          手机 平板 PC/2in1

            源代码

          浏览器扩展

          Chrome
          Edge
          源代码

          服务器

          非程序员请勿尝试
          Docker 镜像
          源代码

          历史版本

          历史版本下载

          常见问题

            思源是如何存储数据的？

            数据保存在工作空间文件夹下，在工作空间 data 文件夹下：

                assets
                用于保存所有插入的资源文件

                emojis
                用于保存自定义图标表情图片

                snippets
                用于保存代码片段

                storage
                用于保存命名查询和闪卡数据等

                templates
                用于保存模板片段

                widgets
                用于保存挂件

                plugins
                用于保存插件

                public
                用于保存公开的数据

                其余文件夹就是用户自己创建的笔记本文件夹，笔记本文件夹下
                .sy
                后缀的文件用于保存文档数据，数据格式为 JSON

            思源是开源的吗？

            思源笔记是完全开源的，欢迎参与贡献：

                界面和内核

                Android 端

                iOS 端

                鸿蒙端

                Chrome 剪藏扩展

            使用需要付费吗？

              大部分功能是免费的，即使是在商业环境下使用。

              部分功能需要付费才能使用，更多细节请参考

                  定价

**本页链接：**

- [英特尔芯片 升级需要再次下载](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-mac.dmg)
- [苹果芯片 升级需要再次下载](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-mac-arm64.dmg)
- [x86_64 安装包 升级需要再次下载](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-win.exe)
- [微软商店 支持一键升级](https://apps.microsoft.com/detail/9p7hpmxp73k4)
- [安卓安装包 升级需要再次下载](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@.apk)
- [Linux AppImage 升级需要再次下载](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux.AppImage)
- [百度网盘下载](https://pan.baidu.com/s/1ivC6QGYBZSC1E_-ZeS2Omg?pwd=open)
- [x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-win.exe)
- [arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-win-arm64.exe)
- [x86_64](https://apps.microsoft.com/detail/9p7hpmxp73k4)
- [arm64](https://apps.microsoft.com/detail/9p7hpmxp73k4)
- [源代码](https://github.com/siyuan-note/siyuan)
- [arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-mac-arm64.dmg)
- [x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-mac.dmg)
- [源代码](https://github.com/siyuan-note/siyuan)
- [x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux.AppImage)
- [arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux-arm64.AppImage)
- [x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux.deb)
- [arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux-arm64.deb)
- [x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux.tar.gz)
- [arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux-arm64.tar.gz)
- [源代码](https://github.com/siyuan-note/siyuan)
- [华为应用市场](https://appgallery.huawei.com/app/C105558879)
- [小米应用商店](https://app.mi.com/details?id=org.b3log.siyuan)
- [Google Play](https://play.google.com/store/apps/details?id=org.b3log.siyuan)
- [酷安](https://www.coolapk.com/apk/292664)
- [APK](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@.apk)
- [源代码](https://github.com/siyuan-note/siyuan-android)
- [App Store](https://apps.apple.com/cn/app/siyuan/id1583226508)
- [TestFlight](https://testflight.apple.com/join/BBLHMJ4g)
- [源代码](https://github.com/siyuan-note/siyuan-ios)
- [源代码](https://github.com/siyuan-note/siyuan-harmony)
- [Chrome](https://chrome.google.com/webstore/detail/siyuan/hkcgjbeblifaincobbcfiffbpgoafepk)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/siyuan/lclhdlhleinlppggbbgimbekofanbkcf)
- [源代码](https://github.com/siyuan-note/siyuan-chrome)
- [Docker 镜像](https://hub.docker.com/r/b3log/siyuan)
- [源代码](https://github.com/siyuan-note/siyuan)
- [历史版本下载](https://github.com/siyuan-note/siyuan/releases)
- [界面和内核](https://github.com/siyuan-note/siyuan)
- [Android 端](https://github.com/siyuan-note/siyuan-android)
- [iOS 端](https://github.com/siyuan-note/siyuan-ios)
- [鸿蒙端](https://github.com/siyuan-note/siyuan-harmony)
- [Chrome 剪藏扩展](https://github.com/siyuan-note/siyuan-chrome)
- [定价](pricing.html)

---

### pages/en/community.html

- 标题前缀：`Community - `

Community

          LiuYun

          User forum

          GitHub

          SiYuan Repo
          Marketplace Repo
          Roadmap

          Twitter

          @b3logos - Twitter

**本页链接：**

- [User forum](https://liuyun.io)
- [SiYuan Repo](https://github.com/siyuan-note/siyuan)
- [Marketplace Repo](https://github.com/siyuan-note/bazaar)
- [Roadmap](https://github.com/orgs/siyuan-note/projects/1)
- [@b3logos - Twitter](https://twitter.com/b3logos)

---

### pages/en/download.html

- 标题前缀：`Download - `

Download

            Intel chip
            (Upgrade requires re-download)

            Apple silicon
            (Upgrade requires re-download)

            x86_64 Installer
            Download upgrade

            Microsoft Store
            In-store upgrade

            Android
            (Upgrade requires re-download)

            Linux AppImage
            (Upgrade requires re-download)

          v3.6.5

          Windows

            Installer
            x86_64
            ,
            arm64

            Microsoft Store
            x86_64
            ,
            arm64

            Source

          macOS

            Apple dmg
            arm64

            Intel dmg
            x86_64

            Source

          Linux

            AppImage
            x86_64
            ,
            arm64

            deb
            x86_64
            ,
            arm64

            tar.gz
            x86_64
            ,
            arm64

            Source

          Android

          Google Play
          APK
          Source

          iPhone/iPad

          App Store
          TestFlight
          Source

          Browser extension

          Chrome
          Edge
          Source

          Server

          Non-programmers don't try
          Docker image
          Source

          Insider

          Alpha-version will be released before major changes
          Visit the insider repository

          History

          Download historical releases

          FAQ

            How does SiYuan store data?

            The data is saved in the workspace folder, in the workspace data folder:

                assets
                is used to save all inserted assets

                emojis
                is used to save emoji images

                snippets
                is used to save code snippets

                storage
                is used to save named criteria and flashcards, etc.

                templates
                is used to save template snippets

                widgets
                is used to save widgets

                plugins
                is used to save plugins

                public
                is used to save public data

                The rest of the folders are the notebook folders created by the user, files with the suffix of
                .sy
                in the notebook folder are used to save the document data, and the data format is JSON

            Is SiYuan open source?

            SiYuan is completely open source, and contributions are welcome:

                User Interface and Kernel

                Android App

                iOS App

                HarmonyOS NEXT

                Chrome Clipping Extension

            Do I need to pay to use it?

              Most features are free, even for commercial use.

              Some features are only available to paid members, for more details please refer to

                  pricing

**本页链接：**

- [Intel chip (Upgrade requires re-download)](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@-mac.dmg)
- [Apple silicon (Upgrade requires re-download)](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@-mac-arm64.dmg)
- [x86_64 Installer Download upgrade](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@-win.exe)
- [Microsoft Store In-store upgrade](https://apps.microsoft.com/detail/9p7hpmxp73k4)
- [Android (Upgrade requires re-download)](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@.apk)
- [Linux AppImage (Upgrade requires re-download)](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@-linux.AppImage)
- [x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-win.exe)
- [arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-win-arm64.exe)
- [x86_64](https://apps.microsoft.com/detail/9p7hpmxp73k4)
- [arm64](https://apps.microsoft.com/detail/9p7hpmxp73k4)
- [Source](https://github.com/siyuan-note/siyuan)
- [arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-mac-arm64.dmg)
- [x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-mac.dmg)
- [Source](https://github.com/siyuan-note/siyuan)
- [x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux.AppImage)
- [arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux-arm64.AppImage)
- [x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux.deb)
- [arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux-arm64.deb)
- [x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux.tar.gz)
- [arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux-arm64.tar.gz)
- [Source](https://github.com/siyuan-note/siyuan)
- [Google Play](https://play.google.com/store/apps/details?id=org.b3log.siyuan)
- [APK](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@.apk)
- [Source](https://github.com/siyuan-note/siyuan-android)
- [App Store](https://apps.apple.com/cn/app/siyuan/id1583226508)
- [TestFlight](https://testflight.apple.com/join/BBLHMJ4g)
- [Source](https://github.com/siyuan-note/siyuan-ios)
- [Chrome](https://chrome.google.com/webstore/detail/siyuan/hkcgjbeblifaincobbcfiffbpgoafepk)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/siyuan/lclhdlhleinlppggbbgimbekofanbkcf)
- [Source](https://github.com/siyuan-note/siyuan-chrome)
- [Docker image](https://hub.docker.com/r/b3log/siyuan)
- [Source](https://github.com/siyuan-note/siyuan)
- [Visit the insider repository](https://github.com/siyuan-note/insider)
- [Download historical releases](https://github.com/siyuan-note/siyuan/releases)
- [User Interface and Kernel](https://github.com/siyuan-note/siyuan)
- [Android App](https://github.com/siyuan-note/siyuan-android)
- [iOS App](https://github.com/siyuan-note/siyuan-ios)
- [HarmonyOS NEXT](https://github.com/siyuan-note/siyuan-harmony)
- [Chrome Clipping Extension](https://github.com/siyuan-note/siyuan-chrome)
- [pricing](pricing.html)

---

### pages/en/eula.html

- 标题前缀：`User Agreement - `

User Agreement

              Release Date: February 11, 2022

              Last updated: Mar 27, 2024

            SiYuan uses the
            AGPLv3 Open Source License
            , please be sure to follow it.

       // This program is free software: you can redistribute it and/or modify // it under the terms of the GNU Affero General Public License as published by // the Free Software Foundation, either version 3 of the License, or // (at your option) any later version. // // This program is distributed in the hope that it will be useful, // but WITHOUT ANY WARRANTY; without even the implied warranty of // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the // GNU Affero General Public License for more details. // // You should have received a copy of the GNU Affero General Public License // along with this program. If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/). \n

          For SiYuan cloud services, sharing and trading user accounts is prohibited, otherwise the account will be banned.

            Never purchase a second-hand account from any third party, as the account can be retrieved by the original owner, which can result in losses for
            you.

**本页链接：**

- [AGPLv3 Open Source License](https://github.com/siyuan-note/siyuan/blob/master/LICENSE)

---

### pages/en/index.html

Refactor your thinking

            WYSIWYG
            Block Ref

            E2EE Sync
            Privacy-first

            SiYuan is a privacy-first personal knowledge management system that supports complete offline usage, as well as end-to-end encrypted data sync.

            Fuse blocks, outlines, and bidirectional links to refactor your thinking.

          Free download to use

          Block editing

          Flashcards & Database & AI

          Bidirectional link

          List outline

          Privacy & Sync

        Download

          Block editing

            SiYuan, the only important core concept is Content block.

              The content block can be formed through the formatting format, so that we can organize our thoughts and knowledge at the block-level granularity,
              and it is also convenient for reading and outputting long content.

          Elements

            Built-in 20+ types of block-level elements and 10+ span-level elements.
            Rich elements meet common typesetting needs, and more specialized needs can be extended through widget blocks.

          Zoom-in

            Going into block focus, let's focus more on the content of the current block.
            All blocks support zoom-in focus, easily switch in context with breadcrumb navigation.

          Million words

            Editing of large documents is also possible.
            Through dynamic loading technology, large documents with millions of words can be edited smoothly on ordinary computers.

            Spaced repetition

            By
            FSRS
             Algorithm

            Improve memory efficiency, adjust learning effects, optimize time allocation, and increase learning motivation.
             By effectively reviewing what you have learned, you can discover your own progress and achievements, and then enhance your
            confidence and self-identity.

            Database

            Support relation, rollup and template

            The two databases can be connected through "relation" to achieve linkage management.
             Rollup knowledge,
            stay on top of things.

            Artificial Intelligence

            Access
            OpenAI

            It can help us continue writing, translate, extract abstracts, brainstorm, correct grammar, spelling and typos.
             Answer any interesting questions,
            efficient assistance.

          Bidirectional link
          Block-level

            Documentation page are also blocks, reducing mental load.

              All content exists on a block basis, and documentation pages are no exception. Blocks can be converted to each other, splitting, reorganizing and
              moving do not affect existing links.

            Backlinks reflect bidirectional link value.

              Discover potential knowledge associations through backlink mentions, and convert mentions into links to solidify the association structure. The
              backlink panel supports filtering and searching, making the connection of knowledge easier and more efficient.

            Explore the link graph.

              A bird's-eye view of the knowledge structure distribution through a global relationship graph, and a focus on knowledge link paths through a
              block-level focused relationship graph. Visualize the growth of knowledge, and watch the decompression in your spare time, which is pleasing to
              the eye.

          List outline
          Sort out the main points, logically layered

            This outline is not that outline.
            List outlines are mostly used to quickly organize knowledge with logical levels, which are simple, efficient, and intuitive.

          Folding

            Folding is one of the core operations of the list outline. It hides details and outlines by folding. In SiYuan, the title block also has the same
            powerful folding, and the document outline and the list outline complement each other.

            The list outline can also have rich typography.
            Documented records can be made under each outline item, so that the document and the outline can be fully integrated, and the knowledge structure
            can be carried out to the end.

            Privacy security

            Encrypted cloud, worry-free privacy

              Privacy Policy

            Data is stored entirely on the device under the control of the user.
            Even if there is no network, even if the cloud service is down, it can still be used locally without restrictions.
            No offline, no notes.

            Mobile server.
            Not just an app, it can also be used as a mobile server, as long as the computer and mobile phone are in a local area network, you can directly use
            SiYuan on the mobile phone through the computer browser.
            Personal privacy and knowledge wealth cannot be coveted by others.

          Multi-device data sync
          Keep data complete and consistent

            End-to-end encrypted data sync
            End-to-end encryption technology ensures privacy and security, and incremental sync technology saves traffic and improves data sync efficiency.

            Mobile server
            Not just an app, it can also be used as a mobile server, as long as the computer and mobile phone are in a local area network, you can directly use
            SiYuan on the mobile phone through the computer browser.

            Docker server
            Deploy SiYuan on the server through the Docker image to build your own cloud notes, and control the access rights through the authorization code,
            which is convenient for multiple people to collaborate.

**本页链接：**

- [Free download to use](download.html)
- [Download](download.html)
- [FSRS](https://github.com/open-spaced-repetition/free-spaced-repetition-scheduler)
- [OpenAI](https://openai.com/)
- [Privacy Policy](privacy.html)

---

### pages/en/pricing.html

- 标题前缀：`Pricing - `

Free

              $0
              Lifetime

            Download

              Basic functions

            PRO Features

              $96
               $64
              Lifetime

            Pay once, use for life
            Upgrade

              Integrate third-party S3 data sync and backup (You need to connect to the third-party S3 service yourself)

                Integrate third-party WebDAV data sync and backup (You need to connect to the third-party WebDAV service yourself,
                Nutstore is not supported
                )

            Subscription

              $296
               $148
              Lifetime

            🔥 Seats are limited
            Subscribe

              Cloud assets hosting (Please refer to the User Guide - Assets hosting)

              Official cloud space size 8G

              Official data sync and backup

              Cloud Inbox

              S3 data sync and backup (You need to connect to the third-party S3 service yourself)

                WebDAV data sync and backup (You need to connect to the third-party WebDAV service yourself.
                Nutstore is not supported
                )

            Basic functions

              Cloud assets hosting

            Cloud Inbox

              Official cloud space size

            -

            -

            8G

            Official data sync and backup

              Integrate third-party S3 data sync and backup

              (You need to connect to the third-party S3 service yourself)

              Integrate third-party WebDAV data sync and backup

                (You need to connect to the third-party WebDAV service yourself,
                Nutstore is not supported
                )

          FAQ

            Is a refund supported after subscription?

              Refunds are
              not supported
              after payment for the subscription.

              If you have the intension for a subscription, it is highly recommanded to firstly enable the trial subscription in SiYuan Desktop - Settings -
              Account, and consider paying for the subscription only if you are satisfied.
              Do not act impulsively
              .

              Why is the official synchronization space only 8GB? Are there plans to expand it in the future, such as increasing it to hundreds of GB like other
              cloud note services?

              The official synchronization service of SiYuan has higher traffic costs compared to cloud note services. Providing 8GB of cloud space for each
              user is the current limit we can afford.

              If you have a high demand for cloud synchronization space, it is recommended to use third-party S3 synchronization services (included in the
              subscription or purchased separately as a feature).

            How is the price calculated for resubscribing after a subscription interruption?

              The renewal price is permanently based on the price at the time of the first subscription. Even if the subscription is interrupted and renewed
              later, the price will still be the same as the first subscription.

            What is "third-party data sync and backup"?

              This means you can
              set up
              your own S3 (or WebDAV) service (such as purchasing from Amazon, Azure cloud, etc.) and integrate it with SiYuan for synchronization and backup.

**本页链接：**

- [Download](download.html)
- [Upgrade](https://liuyun.io/one-time-pay/siyuan)
- [Nutstore is not supported](https://help.jianguoyun.com/?p=2064)
- [Subscribe](https://liuyun.io/subscribe/siyuan)
- [Nutstore is not supported](https://help.jianguoyun.com/?p=2064)
- [Nutstore is not supported](https://help.jianguoyun.com/?p=2064)

---

### pages/en/privacy.html

- 标题前缀：`Privacy Policy - `

Privacy Policy

              Release Date: February 11, 2022

              Last updated: March 21, 2022

          SiYuan's privacy policy document to declare its commitment to user privacy protection.

          Will personal information or data be collected?

              Does not collect user personal information and usage data

              All data is kept on the device under full control of the user

          Developer Information and Contact

              SiYuan is designed and developed by Yunnan Liandi Technology Co., Ltd.

              Contact via 845765@qq.com

          View Privacy Policy

                By visiting the webpage
                https://b3log.org/siyuan/en/privacy.html

              Click "Help" in the software, and open the "Privacy Policy and License" document in the opened "SiYuan User Guide"

**本页链接：**

- [https://b3log.org/siyuan/en/privacy.html](https://b3log.org/siyuan/en/privacy.html)

---

### pages/eula.html

- 标题前缀：`用户协议 - `

用户协议

              发布日期：2022 年 2 月 11 日

              最近更新：2024 年 3 月 27 日

            思源笔记使用
            AGPLv3 开源协议
            ，请务必遵循。

       // This program is free software: you can redistribute it and/or modify // it under the terms of the GNU Affero General Public License as published by // the Free Software Foundation, either version 3 of the License, or // (at your option) any later version. // // This program is distributed in the hope that it will be useful, // but WITHOUT ANY WARRANTY; without even the implied warranty of // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the // GNU Affero General Public License for more details. // // You should have received a copy of the GNU Affero General Public License // along with this program. If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/). \n

          对于思源笔记云端服务，禁止共享和交易用户账号，否则账号会被封禁。

          切勿从任何第三方处购买二手账号，因为账号可以被原号主找回，这会导致你遭受损失。

**本页链接：**

- [AGPLv3 开源协议](https://github.com/siyuan-note/siyuan/blob/master/LICENSE)

---

### pages/index.html

重构你的思维

            所见所得
            双链块引

            加密同步
            隐私优先

            思源笔记是一款隐私优先的个人知识管理系统，支持完全离线使用，同时也支持端到端加密同步。

            融合块、大纲和双向链接，重构你的思维。

          免费下载使用

          块式编辑

          闪卡、数据库和 AI

          双链块引

          列表大纲

          隐私和同步

        下载

          Block 编辑模式

            在思源中，唯一重要的核心概念是内容块。
            通过排版格式即可形成内容块，这样我们就能在块级粒度上对思绪和知识进行整理，同时也能方便长文阅读和输出。

          元素

            内置 20+ 种类型的块元素和 10+ 种行级元素。
            丰富的元素满足常用排版需要，更多特性化的需求可通过挂件块进行扩展。

          聚焦

            进入到块中聚焦，让我们更专注于当前块的内容。
            所有块都支持聚焦，通过面包屑导航在上下文中轻松切换。

          百万字

            超大文档编辑亦可行云流水。
            通过动态加载技术，在配置普通的电脑上也能流畅编辑百万字级别的大文档。

            间隔重复

            使用
            FSRS
             算法

            提高记忆效率，调节学习效果，优化时间分配，增加学习动力。
            通过有效的回顾所学内容，发现自己的进步和成就，进而增强
            自信和自我认同。

            数据库

            支持关联、汇总及模版

            两个数据库之间可以通过“关联”建立联系，从而进行联动管理。
            汇总知识，
            掌控动态。

            人工智能

            接入
            OpenAI

            可以帮助我们续写，翻译，摘取提要，进行头脑风暴，修正语法、拼写和错别字。
            回答任何有趣的问题，
            高效助力。

          双链块引
          块级双向链接

            文档页面也是块，降低心智负担。
            所有内容都以块为基础存在，文档页面也不例外。块之间可以相互转换，拆分、重组和移动都不影响已有链接。

            反向链接体现双链价值。

              通过反向链接的提及发现潜在的知识关联，将提及转换为链接来固化关联结构。反链面板支持过滤搜索，让知识的连接更简单和高效。

            探索链接关系图。

              通过全局关系图鸟瞰知识结构分布，通过块级聚焦关系图专注知识链接路径。可视化知识的增长，闲暇之余观赏减压，赏心悦目。

          列表大纲
          梳理要点，逻辑分层

            此大纲非彼大纲。
            列表大纲多用于快速组织具有逻辑层次的知识，简单、高效且直观。

          折叠

            折叠是列表大纲最核心的操作之一，通过折叠隐藏细节、提纲挈领。在思源里，标题块也有着同样强大的折叠，文档大纲和列表大纲优势互补。

            列表大纲下也可以拥有丰富的排版。
            每条大纲条目下都能进行文档式记录，让文档与大纲充分融合，将知识的结构化进行到底。

            隐私安全

            加密上云，隐私无忧

              隐私政策

            数据完全存储在用户自己掌控的设备上。
            即使没有网络、即使云端服务宕机，依然可以在本地不受限制使用。
            无离线，不笔记。

            隐私安全靠的不是承诺。
            多设备数据同步基于端到端加密技术实现，云端数据即使泄漏也几乎不可能被他人知晓内容。
            个人隐私、知识财富不容他人觊觎。

          多设备数据同步
          保持数据的完整和一致

            端到端加密同步
            通过端到端加密技术确保隐私安全，通过增量同步技术节省流量，提升数据同步效率。

            移动端伺服
            不仅仅是一个 App，它还能作为移动服务器端使用，只要电脑和手机在一个局域网里就能通过电脑浏览器直接使用手机上的思源。

            Docker 部署
            通过 Docker 镜像将思源部署在服务器上来搭建自己的云端笔记，通过授权码控制访问权限，方便多人协作。

**本页链接：**

- [免费下载使用](download.html)
- [下载](download.html)
- [FSRS](https://github.com/open-spaced-repetition/free-spaced-repetition-scheduler)
- [OpenAI](https://openai.com/)
- [隐私政策](privacy.html)

---

### pages/pricing.html

- 标题前缀：`定价 - `

完全免费

              ￥0
              终身

            靠爱发电
            下载

              基础功能

            功能特性

              ￥96
              ￥80
              终身

            一次付费，终身使用
            去升级

              接入第三方 S3 数据同步和备份（需自行购买或搭建 S3 服务）

                接入第三方 WebDAV 数据同步和备份（需自行购买或搭建 WebDAV 服务，
                不支持坚果云
                ）

            年付订阅

              ￥192
              ￥148
              每年

            🔥
            两人团首年 6.4 折
            去订阅

              资源文件图床（用法详情请参考用户指南 - 资源文件图床）

              定时微信提醒

              收集箱

              官方云端存储大小 8G

              官方数据同步和备份

              接入第三方 S3 数据同步和备份（需自行购买或搭建 S3 服务）

                接入第三方 WebDAV 数据同步和备份（需自行购买或搭建 WebDAV 服务，
                不支持坚果云
                ）

            基础功能

              资源文件图床

            定时微信提醒

            收集箱

              官方云端存储大小

            -

            -

            8G

            官方数据同步和备份

              接入第三方 S3 数据同步和备份

              （需自行购买或搭建 S3 服务）

              接入第三方 WebDAV 数据同步和备份

                （需自行购买或搭建 WebDAV 服务，
                不支持坚果云
                ）

          常见问题

            订阅后是否支持退款？

              付费订阅后
              不支持
              退款。

              请避免冲动消费，建议请先在思源桌面端 - 设置 - 账号中开启
              试用订阅
              ，满意后再考虑是否付费订阅。具体请看

                思源笔记付费须知

            官方的同步空间为什么只有 8GB？以后有扩容计划吗？比如增加到同类云笔记那样数百 GB 的容量？

            思源官方同步服务相对于云笔记服务流量成本更高，为每位用户提供 8G 云端空间是我们目前所能承担的极限。

            如果您对云端同步空间的容量需求较大，建议使用第三方 S3 同步服务（包含在订阅内，或单独购买功能特性）。

            中断过订阅之后重新订阅价格怎么算？

            续订价格终身按第一次订阅时的价格，即断过续订后再次续订也是第一次订阅时的价格。

            该政策不适用于团购订阅激活码，团购订阅激活码续订价格为购买激活码时的正常订阅价（目前是 ￥148）。

            什么是“第三方数据同步和备份”

              指你可以
              自行搭建
              S3 服务（如从七牛云、阿里云等云服务购买）或者 Webdav 服务（由于频率限制，不支持坚果云），并对接到思源中进行同步和备份。

            一次性开通多个订阅有优惠吗？

              有的，具体请看

                思源笔记团购订阅激活码

            学生用户订阅有教育优惠吗？

              有的，具体请看

                学生优惠订阅教育邮箱支持列表

**本页链接：**

- [靠爱发电](https://ld246.com/sponsor)
- [下载](download.html)
- [去升级](https://ld246.com/one-time-pay/siyuan)
- [不支持坚果云](https://help.jianguoyun.com/?p=2064)
- [两人团首年 6.4 折](https://ld246.com/subscribe/siyuan/batch)
- [去订阅](https://ld246.com/subscribe/siyuan)
- [不支持坚果云](https://help.jianguoyun.com/?p=2064)
- [不支持坚果云](https://help.jianguoyun.com/?p=2064)
- [思源笔记付费须知](https://ld246.com/article/1623032639157)
- [思源笔记团购订阅激活码](https://ld246.com/subscribe/siyuan/batch)
- [学生优惠订阅教育邮箱支持列表](https://ld246.com/article/1618844886264)

---

### pages/privacy.html

- 标题前缀：`隐私政策 - `

隐私政策

              发布日期：2022 年 2 月 11 日

              最近更新：2025 年 6 月 20 日

            SiYuan（思源笔记）
            是云南链滴科技有限公司（以下简称“我们”）通过合法拥有并运营的、包括且不限于思源笔记桌面端软件、移动端应用、
            思源笔记云端服务
            。思源笔记云端服务以及该服务所包括的各种业务功能统称为“我们的产品和服务”。

            我们深知个人隐私信息对您的重要性，所以
            我们在此承诺保护使用我们的产品和服务的用户的个人信息及隐私安全
            。

            我们的目的是希望能尽量帮您记录更多信息，让您方便的整理和搜索关于您的信息。我们会在尽量提供便利性的基础上，尽量少的收集关于您的信息，尽可能的保护您的隐私。

            所以我们希望通过本协议，向您说明我们在收集和使用您相关个人信息时对应的处理规则，以及我们为您提供的访问、更正、删除和保护这些个人信息的方式，以便更好的保障您的权益。

          本《隐私政策》将帮助您了解以下内容：

          一、我们将收集哪些信息，以及如何收集和使用您的个人信息；

          二、我们如何使用 Cookies 或相关技术；

          三、我们可能分享、转让和披露的个人信息；

          四、我们如何保留、储存和保护您的个人信息安全；

          五、如何管理您的个人信息；

          六、第三方服务；

          七、隐私政策的通知和修订；

          八、如何联系我们。

          一、我们将收集哪些信息及如何收集和使用您的个人信息

          我们收集您的个人信息主要是为了您更容易和更满意地使用思源笔记云端服务。而这些个人信息有助于我们实现这一目标。

          我们将通过以下途径收集和获得您的个人信息

          您提供的个人信息。例如：

              您在注册思源笔记云端服务的账号或使用思源笔记云端服务时，向我们提供的个人信息；

              您通过思源笔记云端服务向其他方提供的共享个人信息，以及您使用思源笔记云端服务时所储存的个人信息。

            如果您不使用思源笔记云端服务，我们不会收集和获得您的个人信息
            。

          我们会出于以下目的，收集和使用您以下类型的个人信息

          帮助您完成思源云端服务的注册及登录

          为便于我们为您提供完整的服务，您需要提供基本注册或登录个人信息，包括手机号码、电子邮箱地址，并创建您的账号、用户名和密码。

            同时，依照相关法律法规的要求或者特定功能及服务需要，您在使用特定功能及服务前，可能需要您提供其他个人信息（例如姓名、身份证、面部特征及其他身份证明信息）。如果您不提供上述个人信息，我们将不能向您提供相关的功能及服务。

            如果您不再使用思源笔记云端服务，在符合服务协议约定条件及国家相关法律法规规定的情况下，您可以自行注销您的账号，届时我们将停止为您提供思源笔记云端服务。（当您的账号注销后，与该账号相关的思源笔记云端服务项下的全部服务资料和数据将被删除或匿名化处理，但法律法规另有规定的除外。）

          向您提供服务

          我们所收集和使用的个人信息是为您提供思源笔记云端服务的必要条件，如缺少相关个人信息，我们将无法为您提供思源笔记云端服务的核心内容：

                个人信息的发布：您在使用思源笔记云端服务时、上传和/或发布个人信息以及进行相关行为（例如您附加于任何页面上的文件、项目、列表和企业名称或者对某一对象的描述，您在文字、分享、文件上的评论，您上传的图片、表情以及文件等）时，我们将收集您上传、发布或形成的个人信息，并有权在您授权的情况下，展示您的昵称、头像和发布内容。

                支付结算：如您在使用我们的服务过程中产生支付结算，您可以选择思源关联方或与思源合作的第三方支付机构（以下称“支付机构”）所提供的支付服务。您可能会提供付款账号信息，如银行卡卡号等。支付或售后服务过程中我们可能需要将您的订单号与交易金额信息同这些支付机构共享以实现其确认您的支付指令并完成支付。

                订单管理：为展示您的账号的订单信息及保障您的售后权益，思源会收集您在使用思源过程中产生的订单信息、交易和消费记录、虚拟财产信息用于向您展示及便于您对订单进行管理。

                客服与售后服务：当您与我们联系时，我们可能会保存您的通信/通话记录和内容或您留下的联系方式等个人信息，以便与您联系或帮助您解决问题，或记录相关问题的处理方案及结果。为确认交易状态及为您提供售后与争议解决服务，我们会通过您基于交易所选择的交易对象、支付机构、物流公司等收集与交易进度相关的您的交易、支付、物流信息，或将您的交易信息共享给上述服务提供者。

              我们在您使用服务过程中可能收集的个人信息

          为识别账号异常状态，我们可能会收集关于您使用的服务以及使用方式的个人信息并将这些个人信息进行关联，这些个人信息包括：

                日志信息：当您使用思源笔记云端服务时，我们可能会自动收集您对我们服务的详细使用情况，作为有关网络日志保存。例如您的登录账号、搜索查询内容、IP
                地址、浏览器的类型、电信运营商、网络环境、使用的语言、访问日期和时间及您访问的网页浏览记录、Push 打开记录、停留时长、刷新记录、发布记录及分享。

                设备信息：我们可能会根据您在软件安装及使用中授予的具体权限，接收并记录您所使用的设备相关信息（例如

                  IMEI、MAC、Serial、SIM 卡 IMSI
                  识别码、设备机型、操作系统及版本、客户端版本、设备分辨率、包名、设备设置、进程及软件列表、唯一设备标识符、软硬件特征

                信息）、设备所在位置相关信息（
                例如 IP 地址、GPS 位置以及能够提供相关个人信息的 WLAN 接入点、蓝牙和基站传感器
                信息）。

            请注意：单独的设备信息、日志信息是无法识别特定自然人身份的个人信息。如果我们将这类非个人信息与其他个人信息结合用于识别特定自然人身份，或者将其与个人信息结合使用，则在结合使用期间，这类非个人信息将被视为个人信息，除取得您授权或法律法规另有规定外，我们会将该类个人信息做匿名化、去标识化处理。

          我们通过间接方式收集到的您的个人信息

              我们可能从管理方、第三方合作伙伴获取您授权共享的相关个人信息。例如，我们可能从第三方获取您授权共享的账户个人信息（头像、昵称、登录时间）并在您同意本《隐私政策》后将您的第三方账户与您的思源笔记云端服务账户绑定，使您可以通过第三方账户直接登录并使用我们的产品和服务。

            我们将在符合相关法律法规规定，并依据与关联方或第三方合作伙伴的约定、确信其提供的个人信息来源合法的前提下，收集并使用您的这些个人信息。

                基于上述您向我们提供的个人信息、我们可能收集的个人信息及我们通过间接方式收集到的您的个人信息，我们可能会基于上述一项或几项个人信息的结合，识别账号异常状态。

              向您推送消息或发送通知

              我们可能在必需时（例如当我们由于系统维护而暂停某一单项服务、变更、终止提供某一单项服务时）向您发出与服务有关的通知。

                如您不希望继续接收我们推送的消息，您可要求我们停止推送，例如：根据短信退订指引要求我们停止发送推广短信，或在移动端设备中进行设置，不再接收我们推送的消息；但我们依法律规定或单项服务的服务协议约定发送消息的情形除外。

          为您提供安全保障

              为提高您使用我们及合作伙伴提供服务的安全性，保护您或其他用户或公众的人身财产安全免遭侵害，更好地预防钓鱼网站、欺诈、网络漏洞、计算机病毒、网络攻击、网络侵入等安全风险，更准确地识别违反法律法规或思源服务相关协议规则的情况，我们可能会收集、使用或整合您的账户信息、交易信息、设备信息、日志信息以及我们关联公司、合作伙伴取得您授权或依据法律共享的个人信息，来综合判断您账户及交易风险、进行身份验证、检测及防范安全事件，并依法采取必要的记录、审计、分析、处置措施。

          改进我们的服务

            我们可能将通过某一项思源笔记云端服务所收集的个人信息，用于我们的其他服务。例如，在您使用某一项思源笔记云端服务时所收集的您的个人信息，可能在另一项思源笔记云端服务中用于向您提供特定内容或向您展示与您相关的、而非普遍推送的信息；我们可能让您参与有关思源笔记云端服务的调查，帮助我们改善现有服务或设计新服务；同时，我们可能将您的个人信息用于软件更新。

              您了解并同意，在收集您的个人信息后，我们将通过技术手段对数据进行去标识化处理，去标识化处理的个人信息将无法识别您的身份，在此情况下我们有权使用已经去标识化的个人信息，对用户数据库进行分析并予以商业化的利用。

          其他用途

              请您注意，如果我们要将您的个人信息用于本《隐私政策》中未载明的其他用途或额外收集未提及的其他个人信息，我们会另行事先请您同意（确认同意的方式：如勾选、弹窗、站内信、邮件、短信等方式）。一旦您同意，该等额外用途将视为本《隐私政策》的一部分，该等额外个人信息也将适用本《隐私政策》。

          征得授权同意的例外

          根据相关法律法规规定，以下情形中收集您的个人信息无需征得您的授权同意：

              与国家安全、国防安全有关的；

              与公共安全、公共卫生、重大公共利益有关的；

              与犯罪侦查、起诉、审判和判决执行等有关的；

              出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到您本人同意的；

              所收集的个人信息是您自行向社会公众公开的；

              从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；

              根据您的要求签订合同所必需的；

              用于维护思源笔记云端服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；

              为合法的新闻报道所必需的；

              学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；

              法律法规规定的其他情形。

                您理解并同意，思源笔记云端服务可能需要您在您的设备中开启特定的访问权限（例如您的位置信息、摄像头、相册、麦克风、通讯录及/或日历），以实现这些权限所涉及个人信息的收集和使用。当您需要关闭该功能时，大多数移动设备都会支持您的这项需求，具体方法请参考或联系您移动设备的服务商或生产商。请您注意，您开启任一权限即代表您授权我们可以收集和使用相关个人信息来为您提供对应服务，您一旦关闭任一权限即代表您取消了授权，我们将不再基于对应权限继续收集和使用相关个人信息，也无法为您提供该权限所对应的服务。但是，您关闭权限的决定不会影响此前基于您的授权所进行的个人信息收集及使用。

              有关敏感个人信息的提示。

            以上由您提供或我们收集您的个人信息中，可能包含您的个人敏感信息，例如银行账号、交易和消费记录、虚拟财产信息、系统账号、邮箱地址及其有关的密码、电话号码、网页浏览记录、位置信息。请您谨慎并留意个人敏感信息，您同意您的个人敏感信息我们可以按本《隐私政策》所述的目的和方式来处理。

          二、我们如何使用 Cookies 或同类技术

          我们或我们的第三方合作伙伴可能通过 Cookies 获取和使用您的个人信息，并将该等个人信息储存为日志信息。

            通过使用 Cookies，我们才能记住您的账号身份。一个 Cookies 是少量的数据，它们从一个网络服务器送至您的浏览器并存在计算机硬盘上。我们使用 Cookies
            是为了让您可以受益。比如，为使得思源的登录过程更快捷，您可以选择把用户名存在一个 Cookies 中。这样下次当您要登录思源的服务时能更加方便快捷。Cookies
            能帮助我们确定您连接的页面和内容，节省您在思源笔记云端服务上花费的时间。

            Cookies 使得我们能更好、更快地为您服务。然而，您应该能够控制 Cookies
            是否以及怎样被你的浏览器接受。请查阅您的浏览器附带的帮助以获得更多这方面的个人信息。

          我们和第三方合作伙伴可能通过 Cookies 收集和使用您的个人信息，并将该等个人信息储存。

          我们使用自己的 Cookies，可能用于以下用途：

              记住您的身份。例如：Cookies 有助于我们辨认您作为我们的注册用户的身份，或保存您向我们提供有关您的喜好或其他个人信息；

              分析您使用我们服务的情况。我们可利用 Cookies 来了解您使用思源笔记云端服务进行什么活动、或哪些服务或服务最受欢迎；

            您可以通过浏览器或用户选择机制拒绝或管理 Cookies。但请您注意，如果您停用 Cookies，我们有可能无法为您提供最佳的服务体验，某些服务也可能无法正常使用。

          三、我们可能分享、转让或披露的个人信息

          分享

          除以下情形外，未经您同意，我们不会与我们及我们的关联方之外的任何第三方分享您的个人信息：

                向您提供我们的服务。我们可能向合作伙伴及其他第三方分享您的个人信息，以实现您需要的核心功能或提供您需要的服务，例如：向短信服务商提供对应的手机号码；

                维护和改善我们的服务。我们可能向合作伙伴及其他第三方分享您的个人信息，以帮助我们为您提供更有针对性、更完善的服务，例如：代表我们发出电子邮件或推送通知的通讯服务提供商等；

              实现本《隐私政策》第一条“我们如何收集和使用您的个人信息”部分所述目的；

              履行我们在本《隐私政策》或我们与您达成的其他协议中的义务和行使我们的权利；

                在法律法规允许的范围内，为了遵守法律、维护我们及我们的关联方或合作伙伴、您或其他思源用户或社会公众利益、财产或安全免遭损害，比如为防止欺诈等违法活动和减少信用风险，我们可能与其他公司和组织交换个人信息。不过,这并不包括违反本《隐私政策》中所作的承诺而为获利目的出售、出租、共享或以其它方式披露的个人信息。

              应您合法需求，协助处理您与他人的纠纷或争议；

              应您的监护人合法要求而提供您的个人信息；

              根据与您签署的单项服务协议（包括在线签署的电子协议以及相应的平台规则）或其他的法律文件约定所提供；

              基于学术研究而提供；

              基于符合法律法规的社会公共利益而提供。

            我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息。对我们与之共享个人信息的公司、组织和个人，我们会与其签署严格的保密协定，要求他们按照我们的说明、本《隐私政策》以及其他任何相关的保密和安全措施来处理个人信息。

          转让

                随着我们业务的持续发展，我们有可能进行合并、收购、资产转让或类似的交易，而您的个人信息有可能作为此类交易的一部分而被转移。我们会要求新的持有您个人信息的公司、组织继续受本《隐私政策》的约束，否则，我们将要求该公司、组织重新向您征求授权同意。

              在获得您的明确同意后，我们会向其他方转让您的个人信息。

          披露

          我们仅会在以下情况下，且采取符合业界标准的安全防护措施的前提下，才会披露您的个人信息：

              根据您的需求，在您明确同意的披露方式下披露您所指定的个人信息；

                根据法律、法规的要求、强制性的行政执法或司法要求所必须提供您个人信息的情况下，我们可能会依据所要求的个人信息类型和披露方式披露您的个人信息。在符合法律法规的前提下，当我们收到上述披露个人信息的请求时，我们会要求接收方必须出具与之相应的法律文件，如传票或调查函。我们坚信，对于要求我们提供的个人信息，应该在法律允许的范围内尽可能保持透明。我们对所有的请求都进行了慎重的审查，以确保其具备合法依据，且仅限于执法部门因特定调查目的且有合法权利获取的数据。

          分享、转让、披露个人信息时事先征得授权同意的例外

          以下情形中，分享、转让、披露您的个人信息无需事先征得您的授权同意：

              与国家安全、国防安全有关的；

              与公共安全、公共卫生、重大公共利益有关的；

              与犯罪侦查、起诉、审判和判决执行等司法或行政执法有关的；

              出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；

              您自行向社会公众公开的个人信息；

              从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。

            根据法律规定，共享、转让经去标识化处理的个人信息，且确保数据接收方无法复原并重新识别个人信息主体的，不属于个人信息的对外共享、转让及公开披露行为，对此类数据的保存及处理将无需另行向您通知并征得您的同意。

          我们如何保留、储存和保护您的个人信息安全

            我们仅在本《隐私政策》所述目的所必需期间和法律法规及监管规定的时限内保存您的个人信息。如我们终止服务或运营，我们将及时停止继续收集您个人信息的活动，同时会遵守相关法律法规要求提前向您通知，并在终止服务或运营后对您的个人信息进行删除或匿名化处理，法律法规或监管部门另有规定的除外。

          我们在中华人民共和国境内运营中收集和产生的个人信息，存储在中国境内。以下情形除外：

              法律法规有明确规定；

              获得您的授权同意；

              您使用思源笔记云端服务，且需要向境外传输您的个人信息完成交易的；

          针对以上情形，我们会确保依据本《隐私政策》及国家法律法规要求对您的个人信息提供足够的保护。

          我们非常重视个人信息安全，我们将采取一切合理可行的措施，保护您的个人信息：

          数据安全技术措施

            我们会采用符合业界标准的安全防护措施，包括建立合理的制度规范、安全技术来防止您的个人信息遭到未经授权的访问使用、修改,避免数据的损坏或丢失。网络服务采取了多种加密技术，例如在某些服务中，我们将利用加密技术（例如
            SSL）来保护您的个人信息，采取加密技术对您的个人信息进行加密保存，并通过隔离技术进行隔离。在个人信息使用时，例如个人信息展示、个人信息关联计算，我们会采用多种数据脱敏技术增强个人信息在使用中的安全性。采用严格的数据访问权限控制和多重身份认证技术保护个人信息，避免数据被违规使用。

              我们为保护个人信息采取的其他安全措施：

                  我们通过建立数据例行备份制度、数据分类分级制度、数据安全管理规范、数据安全开发规范来管理规范个人信息的存储和使用。

                    我们通过个人信息接触者保密协议、监控和审计机制来对数据进行全面安全控制。并对个人信息接触者所有操作过程进行记录，以便遇到泄露时方便回溯。

                    我们仅允许有必要知晓这些个人信息的我们及我们关联方的员工、合作伙伴访问您的个人信息，并为此设置了严格的访问权限控制和监控机制。我们同时要求可能接触到您的个人信息的所有人员履行相应的保密义务。如果未能履行这些义务，可能会被追究法律责任或被中止与我们的合作关系。

                互联网并非绝对安全的环境，而且电子邮件、即时通讯、社交软件或其他服务软件等与其他用户的交流方式无法确定是否完全加密，我们建议您使用此类工具时请使用复杂密码，并注意保护您的个人信息安全。

                我们将尽力确保或担保您发送给我们的任何个人信息的安全性。如果我们的物理、技术、或管理防护设施遭到破坏，导致个人信息被非授权访问、公开披露、篡改、或毁坏，导致您的合法权益受损，我们将承担相应的法律责任。

          安全事件处置

            在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们同时将及时将事件相关情况以邮件、信函、短信、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况。

              请您理解，由于技术的限制以及风险防范的局限，即便我们已经尽量加强安全措施，也无法始终保证个人信息百分之百的安全。您需要了解，您接入思源笔记云端服务所用的系统和通讯网络，有可能因我们可控范围外的情况而发生问题。

          四、如何管理您的个人信息

            我们鼓励您更新和修改您的个人信息以使其更准确有效，也请您理解，您更正、删除、撤回授权或停止使用思源笔记云端服务的决定，并不影响我们此前基于您的授权而开展的个人信息处理。除法律法规另有规定，当您更正、删除您的个人信息或申请注销账号时，我们可能不会立即从备份系统中更正或删除相应的个人信息，但会在备份更新时更正或删除这些个人信息。

          您可以通过以下方式来管理您的个人信息：

          访问、更正和删除您的个人信息

            您能通过思源笔记云端服务访问您的个人信息，并根据对应个人信息的管理方式自行完成或要求我们进行访修改、补充和删除。我们将采取适当的技术手段或提供提交申请的联系渠道，尽可能保证您可以访问、更新和更正自己的个人信息或使用思源笔记云端服务时提供的其他个人信息。

            在访问、更正和删除前述个人信息时，我们可能会要求您进行身份验证，以保障个人信息安全。对于通过 Cookies
            或同类技术收集的您的个人信息，我们还在本《隐私政策》第二条“我们如何使用 Cookies
            或同类技术”部分说明了向您提供的选择机制。如果您无法通过上述路径访问、更正该等个人信息，您可以通过本《隐私政策》第八条“如何联系我们”约定的联系方式与我们取得联系。对于您在使用思源笔记云端服务过程中产生的其他个人信息需要访问、更正或删除，我们会根据本《隐私政策》所列明的方式、期限及范围来响应您的请求。在部分个人信息删除时，我们可能会要求您进行身份验证，以保障个人信息安全。

          在以下情形中，您可以向我们提出删除个人信息的请求：

              如果我们处理个人信息的行为违反法律法规；

              如果我们收集、使用您的个人信息，却未征得您的授权同意；

              如果我们处理个人信息的行为严重违反了与您的约定；

              如果我们不再为您提供思源笔记云端服务。

            若我们决定响应您的删除请求，我们还将同时尽可能通知从我们处获得您的个人信息的实体，要求其及时删除，除非法律法规另有规定，或这些实体获得您的独立授权。

          公开与分享

            我们的多项服务可让您不仅与您的社交网络、也与使用该服务的所有用户公开分享您的相关个人信息，例如，您在思源笔记云端服务中所上传或发布的个人信息、您对其他人上传或发布的个人信息作出的回应，通过电子邮件或在思源笔记云端服务中不特定用户可见的公开区域内上传或公布您的个人信息，以及包括与这些个人信息有关的位置数据和日志信息。只要您不删除您所公开或共享的个人信息，有关个人信息可能一直留存在公众领域；即使您删除共享个人信息，有关个人信息仍可能由其他用户或不受我们控制的第三方独立地缓存、复制或储存，或由其他用户或该等第三方在公众领域保存。如您将个人信息通过上述渠道公开或共享，由此造成您的个人信息泄露，我们不承担责任。因此，我们提醒并请您慎重考虑是否通过上述渠道公开或共享您的个人信息。

          改变您授权同意的范围

            您总是可以选择是否披露个人信息。有些个人信息是使用思源笔记云端服务所必需的，但大多数其他个人信息的提供是由您决定的。您可以通过删除个人信息、关闭设备功能等方式改变您授权我们继续收集个人信息的范围或撤回您的授权。

            当您撤回授权后，我们无法继续为您提供撤回授权所对应的服务，也不再处理您相应的个人信息。但您撤回授权的决定，不会影响此前基于您的授权而开展的个人信息处理。

          注销你的账户

            如您需要注销账户，请登录链滴，进入
            设置 - 账号
            自行停用。

          在注销账户之后，我们将停止为您提供产品或服务，并依据您的要求，删除您的个人信息，但法律法规另有规定的除外。

          获取个人信息副本

            您有权获取您的个人信息副本，您可以通过以下方式自行操作：登录 思源 网页端，进入「设置」-「账号详情」-「导出」。我们会在 24
            小时内为你生成全部个人信息副本的下载链接。

          五、第三方 SDK 服务

          思源笔记云端服务可能链接至第三方提供的社交媒体或其他服务（包括网站或其他服务形式），包括：

                您可利用“分享”键将某些内容分享到第三方平台（如微信），或您可利用第三方服务登录思源笔记云端服务。这些功能可能会收集您的个人信息（包括您的日志信息），并可能在您的电脑装置
                Cookie，从而正常运行上述功能；

              我们通过广告或我们服务的其他方式向您提供链接，使您可以接入第三方的服务或网站；

              其他接入第三方服务的情形。

            以上第三方社交媒体或其他服务由相关的第三方负责运营。若您需要使用以上这些第三方的社交媒体服务或其他服务（包括您向该等第三方提供的任何个人信息）时，须受第三方自己的服务条款及个人信息保护声明（而非本《隐私政策》）约束，请仔细阅读其条款。本《隐私政策》仅适用于“思源”所收集的任何个人信息，并不适用于任何第三方提供的服务或第三方的个人信息使用规则，而我们对任何第三方使用由您提供的个人信息不承担任何责任。

          下面是详细 SDK 情况说明：

          社交类服务 SDK：

            SDK 名称：微信开放平台

            公司名称：腾讯科技（深圳）有限公司

              SDK 官网：
              https://open.weixin.qq.com

            使用目的：用于帮助用户分享内容至微信

              收集的个人信息类型/字段：设备标识信息\n

                https://open.weixin.qq.com/cgi-bin/frame?t=news/protocol_developer_tmpl

          六、应用内会申请的权限

            我们需要申请部分涉及个人隐私的系统权限，确保应用内某些功能可以正常使用。我们会在您使用这些功能时，向您申请授权，明确获得您的授权后，我们才会访问您的个人信息。若您不需要使用这些功能，可以拒绝授权；若您从未使用过这些功能，我们不会向您申请权限、也不会访问您的个人信息。

          我们会申请的权限及这些权限对应的功能包括：

            Android 应用会申请的权限：

                允许访问网络：
                当您安装应用时，我们会申请此权限。

                允许常驻通知：
                当您安装应用时，我们会申请此权限。

                允许获取应用列表：
                当您安装应用时，我们会申请此权限。

                允许通知：
                当您安装应用时，我们会申请此权限。

                允许前台服务：
                当您安装应用时，我们会申请此权限。

                允许添加桌面快捷方式：
                当您安装应用时，我们会申请此权限。

                允许拍照/访问相册：
                当您希望添加照片时，我们会申请此权限。

            iOS 应用会申请的权限

                允许访问网络：
                当您安装应用时，我们会申请此权限。

                允许访问系统相册：
                当您希望添加照片时，我们会申请此权限。

            鸿蒙应用会申请的权限

                允许访问网络：
                当您安装应用时，我们会申请此权限。

                允许获取 WiFi 信息：
                当您安装应用时，我们会申请此权限。

                允许后台运行：
                当您安装应用时，我们会申请此权限。

          七、隐私政策的通知和修订

            我们可能适时修改本《隐私政策》的条款，该等修改构成本《隐私政策》的一部分。对于重大变更，我们会提供更显著的通知，您如果不同意该等变更，可以选择停止使用思源笔记云端服务；如您仍然继续使用思源笔记云端服务的，即表示同意受经修订的本《隐私政策》的约束。

          我们鼓励您在每次使用思源笔记云端服务时都查阅我们的隐私政策。

          我们可能在必需时（例如当我们由于系统维护而暂停某一项服务时）发出与服务有关的公告。您可能无法取消这些与服务有关、性质不属于推广的公告。

          最后，您必须对您的账号和密码信息负有保密义务。任何情况下，请小心妥善保管。

          八、如何联系我们

          请发送邮件到 845765@qq.com。

**本页链接：**

- [https://open.weixin.qq.com](https://open.weixin.qq.com/)
- [https://open.weixin.qq.com/cgi-bin/frame?t=news/protocol_developer_tmpl](https://open.weixin.qq.com/cgi-bin/frame?t=news/protocol_developer_tmpl)

---

## 全站外链汇总

- pages/en/download.html：[Linux AppImage (Upgrade requires re-download)](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@-linux.AppImage)
- pages/en/download.html：[Apple silicon (Upgrade requires re-download)](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@-mac-arm64.dmg)
- pages/en/download.html：[Intel chip (Upgrade requires re-download)](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@-mac.dmg)
- pages/en/download.html：[x86_64 Installer Download upgrade](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@-win.exe)
- pages/en/download.html：[Android (Upgrade requires re-download)](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@.apk)
- pages/en/download.html：[APK](@@GITHUB_RELEASE@@/siyuan-@@SIYUAN_VERSION@@.apk)
- pages/download.html, pages/en/download.html：[arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux-arm64.AppImage)
- pages/download.html, pages/en/download.html：[arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux-arm64.deb)
- pages/download.html, pages/en/download.html：[arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux-arm64.tar.gz)
- pages/download.html：[Linux AppImage 升级需要再次下载](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux.AppImage)
- pages/download.html, pages/en/download.html：[x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux.AppImage)
- pages/download.html, pages/en/download.html：[x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux.deb)
- pages/download.html, pages/en/download.html：[x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-linux.tar.gz)
- pages/download.html：[苹果芯片 升级需要再次下载](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-mac-arm64.dmg)
- pages/download.html, pages/en/download.html：[arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-mac-arm64.dmg)
- pages/download.html：[英特尔芯片 升级需要再次下载](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-mac.dmg)
- pages/download.html, pages/en/download.html：[x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-mac.dmg)
- pages/download.html, pages/en/download.html：[arm64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-win-arm64.exe)
- pages/download.html：[x86_64 安装包 升级需要再次下载](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-win.exe)
- pages/download.html, pages/en/download.html：[x86_64](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@-win.exe)
- pages/download.html：[安卓安装包 升级需要再次下载](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@.apk)
- pages/download.html：[APK](@@RELEASE_CDN@@/siyuan-@@SIYUAN_VERSION@@.apk)
- pages/en/index.html：[Free download to use](download.html)
- pages/en/index.html, pages/en/pricing.html：[Download](download.html)
- pages/index.html：[免费下载使用](download.html)
- pages/index.html, pages/pricing.html：[下载](download.html)
- pages/download.html：[小米应用商店](https://app.mi.com/details?id=org.b3log.siyuan)
- pages/download.html：[华为应用市场](https://appgallery.huawei.com/app/C105558879)
- pages/download.html, pages/en/download.html：[App Store](https://apps.apple.com/cn/app/siyuan/id1583226508)
- pages/download.html：[微软商店 支持一键升级](https://apps.microsoft.com/detail/9p7hpmxp73k4)
- pages/download.html, pages/en/download.html：[x86_64](https://apps.microsoft.com/detail/9p7hpmxp73k4)
- pages/download.html, pages/en/download.html：[arm64](https://apps.microsoft.com/detail/9p7hpmxp73k4)
- pages/en/download.html：[Microsoft Store In-store upgrade](https://apps.microsoft.com/detail/9p7hpmxp73k4)
- pages/en/privacy.html：[https://b3log.org/siyuan/en/privacy.html](https://b3log.org/siyuan/en/privacy.html)
- pages/download.html, pages/en/download.html：[Chrome](https://chrome.google.com/webstore/detail/siyuan/hkcgjbeblifaincobbcfiffbpgoafepk)
- pages/distributors/lizhi.html：[https://digitalychee.taobao.com](https://digitalychee.taobao.com)
- pages/en/index.html, pages/index.html：[FSRS](https://github.com/open-spaced-repetition/free-spaced-repetition-scheduler)
- pages/community.html：[路线图](https://github.com/orgs/siyuan-note/projects/1)
- pages/en/community.html：[Roadmap](https://github.com/orgs/siyuan-note/projects/1)
- pages/community.html：[集市仓库](https://github.com/siyuan-note/bazaar)
- pages/en/community.html：[Marketplace Repo](https://github.com/siyuan-note/bazaar)
- pages/en/download.html：[Visit the insider repository](https://github.com/siyuan-note/insider)
- pages/community.html：[SiYuan 仓库](https://github.com/siyuan-note/siyuan)
- pages/download.html：[源代码](https://github.com/siyuan-note/siyuan)
- pages/download.html：[界面和内核](https://github.com/siyuan-note/siyuan)
- pages/en/community.html：[SiYuan Repo](https://github.com/siyuan-note/siyuan)
- pages/en/download.html：[Source](https://github.com/siyuan-note/siyuan)
- pages/en/download.html：[User Interface and Kernel](https://github.com/siyuan-note/siyuan)
- pages/download.html：[源代码](https://github.com/siyuan-note/siyuan-android)
- pages/download.html：[Android 端](https://github.com/siyuan-note/siyuan-android)
- pages/en/download.html：[Source](https://github.com/siyuan-note/siyuan-android)
- pages/en/download.html：[Android App](https://github.com/siyuan-note/siyuan-android)
- pages/download.html：[源代码](https://github.com/siyuan-note/siyuan-chrome)
- pages/download.html：[Chrome 剪藏扩展](https://github.com/siyuan-note/siyuan-chrome)
- pages/en/download.html：[Source](https://github.com/siyuan-note/siyuan-chrome)
- pages/en/download.html：[Chrome Clipping Extension](https://github.com/siyuan-note/siyuan-chrome)
- pages/download.html：[源代码](https://github.com/siyuan-note/siyuan-harmony)
- pages/download.html：[鸿蒙端](https://github.com/siyuan-note/siyuan-harmony)
- pages/en/download.html：[HarmonyOS NEXT](https://github.com/siyuan-note/siyuan-harmony)
- pages/download.html：[源代码](https://github.com/siyuan-note/siyuan-ios)
- pages/download.html：[iOS 端](https://github.com/siyuan-note/siyuan-ios)
- pages/en/download.html：[Source](https://github.com/siyuan-note/siyuan-ios)
- pages/en/download.html：[iOS App](https://github.com/siyuan-note/siyuan-ios)
- pages/en/eula.html：[AGPLv3 Open Source License](https://github.com/siyuan-note/siyuan/blob/master/LICENSE)
- pages/eula.html：[AGPLv3 开源协议](https://github.com/siyuan-note/siyuan/blob/master/LICENSE)
- pages/download.html：[历史版本下载](https://github.com/siyuan-note/siyuan/releases)
- pages/en/download.html：[Download historical releases](https://github.com/siyuan-note/siyuan/releases)
- pages/en/pricing.html：[Nutstore is not supported](https://help.jianguoyun.com/?p=2064)
- pages/pricing.html：[不支持坚果云](https://help.jianguoyun.com/?p=2064)
- pages/download.html：[Docker 镜像](https://hub.docker.com/r/b3log/siyuan)
- pages/en/download.html：[Docker image](https://hub.docker.com/r/b3log/siyuan)
- pages/pricing.html：[学生优惠订阅教育邮箱支持列表](https://ld246.com/article/1618844886264)
- pages/pricing.html：[思源笔记付费须知](https://ld246.com/article/1623032639157)
- pages/pricing.html：[去升级](https://ld246.com/one-time-pay/siyuan)
- pages/pricing.html：[靠爱发电](https://ld246.com/sponsor)
- pages/pricing.html：[去订阅](https://ld246.com/subscribe/siyuan)
- pages/pricing.html：[两人团首年 6.4 折](https://ld246.com/subscribe/siyuan/batch)
- pages/pricing.html：[思源笔记团购订阅激活码](https://ld246.com/subscribe/siyuan/batch)
- pages/community.html：[用户论坛](https://ld246.com/tag/siyuan)
- pages/en/community.html：[User forum](https://liuyun.io)
- pages/en/pricing.html：[Upgrade](https://liuyun.io/one-time-pay/siyuan)
- pages/en/pricing.html：[Subscribe](https://liuyun.io/subscribe/siyuan)
- pages/distributors/lizhi.html：[https://lizhi.shop](https://lizhi.shop)
- pages/download.html, pages/en/download.html：[Edge](https://microsoftedge.microsoft.com/addons/detail/siyuan/lclhdlhleinlppggbbgimbekofanbkcf)
- pages/privacy.html：[https://open.weixin.qq.com](https://open.weixin.qq.com/)
- pages/privacy.html：[https://open.weixin.qq.com/cgi-bin/frame?t=news/protocol_developer_tmpl](https://open.weixin.qq.com/cgi-bin/frame?t=news/protocol_developer_tmpl)
- pages/en/index.html, pages/index.html：[OpenAI](https://openai.com/)
- pages/download.html：[百度网盘下载](https://pan.baidu.com/s/1ivC6QGYBZSC1E_-ZeS2Omg?pwd=open)
- pages/download.html, pages/en/download.html：[Google Play](https://play.google.com/store/apps/details?id=org.b3log.siyuan)
- pages/download.html, pages/en/download.html：[TestFlight](https://testflight.apple.com/join/BBLHMJ4g)
- pages/en/community.html：[@b3logos - Twitter](https://twitter.com/b3logos)
- pages/community.html：[B3log开源社区](https://weibo.com/u/2778228501)
- pages/download.html：[酷安](https://www.coolapk.com/apk/292664)
- pages/download.html：[定价](pricing.html)
- pages/en/download.html：[pricing](pricing.html)
- pages/en/index.html：[Privacy Policy](privacy.html)
- pages/index.html：[隐私政策](privacy.html)

## 重设计时注意

1. **中英文内容不对等**：中文隐私政策为完整长文；英文 privacy 为简短声明（更新日期也不同）。
2. **英文首页 feature5 第二段**：标题为 “Mobile server”，但配图与中文 “隐私安全靠的不是承诺” 段不同，疑似文案错位。
3. **定价页差异**：中文为「年付订阅 ￥148/年」；英文 PRO 订阅写为 $148 Lifetime，且无「定时微信提醒」对比行。
4. **下载页差异**：中文版含鸿蒙 NEXT、华为/小米应用市场、酷安、百度网盘；英文版含 Insider 仓库，无鸿蒙与部分国内渠道。
5. **社区页差异**：中文为链滴+微博；英文为 LiuYun+Twitter。
6. **仅中文页面**：`pages/distributors/lizhi.html`（数码荔枝授权证明）。
7. **header-en.html 为空**：英文子站当前无顶栏，需在新设计中处理。
