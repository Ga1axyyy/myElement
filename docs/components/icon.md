---
title: Icon | V-Element
description: Icon 组件的文档
---

# Icon 图标

提供常见的图标显示功能，支持 FontAwesome 图标。

## 基础用法

通过 `type` 属性传递 FontAwesome 图标的名称，您可以根据需要定制图标颜色。

<preview path="../demo/Icon/Basic.vue" title="基础用法" description="展示不同类型和颜色的图标"></preview>

## 只显示图标

如果只需要显示图标而没有文本，可以使用以下方式，仅传递图标类型。

<preview path="../demo/Icon/IconOnly.vue" title="只显示图标" description="展示没有文本的图标"></preview>

### Icon Attributes

| 属性名 | 说明     | 类型     | 默认值 |
| ------ | -------- | -------- | ------ |
| type   | 图标类型 | `string` | -      |
| color  | 图标颜色 | `string` | -      |

### FontAwesome 图标列表

- `['fas', 'house']`：房子
- `['fas', 'user']`：用户
- `['fas', 'magnifying-glass']`：搜索
- `['fas', 'gear']`：设置

---

- 更多设置可查看 `https://fontawesome.com/icons`

---

#### 样式说明

- `font-size` 控制图标的大小。
- `color` 属性支持动态设置颜色，可以使用 `red`、`green`、`blue` 等常见颜色值。
