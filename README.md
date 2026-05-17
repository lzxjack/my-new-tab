# My New Tab

自定义 Chrome 新标签页扩展，替换浏览器默认新标签页为一个简洁的搜索主页。

## 技术栈

- **React 18** + **TypeScript**
- **Vite 4** 构建工具
- **SCSS Modules** 样式方案
- **pnpm** 包管理
- Chrome Extension **Manifest V3**

## 功能

- **搜索栏**：支持 Google、Bing、Baidu 三个搜索引擎，图标点击切换
- **实时时钟**：大字号 `HH:MM` 格式，`requestAnimationFrame` 驱动
- **键盘快捷键**：
  - `Enter` — 有内容时搜索跳转，无内容时聚焦输入框
  - `Tab` — 切换搜索引擎（循环）
  - `Esc` — 清空输入框并聚焦
- **自动跟随系统主题**：通过 `prefers-color-scheme` 媒体查询自动切换深色/浅色主题
- **偏好持久化**：选中的搜索引擎通过 `localStorage` 保存
- **毛玻璃效果**：`backdrop-filter: blur` 实现

## 项目结构

```
├── public/
│   ├── manifest.json    # Chrome 扩展配置
│   └── logo.png         # 扩展图标
├── src/
│   ├── main.tsx         # 入口
│   ├── App.tsx          # 根组件（状态、事件、布局）
│   ├── App.module.scss  # 样式（主题变量、布局、过渡动画）
│   ├── index.css        # 全局重置
│   ├── constant.tsx     # 搜索引擎配置
│   ├── hooks/
│   │   └── useTime.ts   # 实时时钟 hook
│   └── components/
│       └── Icon/
│           ├── index.tsx  # SVG 图标组件
│           └── svgs.tsx   # Google/Bing/Baidu 图标
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 使用

```bash
# 安装依赖
pnpm install

# 开发模式（浏览器中预览）
pnpm dev

# 构建扩展
pnpm build:extension
```

构建完成后，`dist/` 目录即为可加载的扩展。

## 安装到 Chrome

1. 打开 `chrome://extensions/`
2. 开启「开发者模式」
3. 点击「加载已解压的扩展」
4. 选择项目的 `dist/` 目录
5. 打开新标签页即可看到自定义页面
