# My New Tab 浏览器扩展

这是一个自定义Chrome新标签页的扩展项目。

## 功能特点

- 纯个人工具
- 搜索框自动聚焦
- `Enter`有内容时搜索，无内容时手动聚焦
- `Tab`切换搜索引擎bing、google、baidu
- `Esc`清空输入框并聚焦
- 实时时间

## 构建扩展

```bash
# 安装依赖
yarn

# 构建扩展
yarn build:extension
```

构建完成后，`dist`目录中包含了可以加载到Chrome浏览器的扩展。

## 安装扩展

1. 打开Chrome浏览器，导航到 `chrome://extensions/`
2. 启用右上角的"开发者模式"
3. 点击"加载已解压的扩展"
4. 选择项目中的`dist`目录
5. 现在，每次你打开新标签页时，都会显示自定义页面

## 开发

```bash
# 开发模式
yarn dev
```
