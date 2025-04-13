---
title: Collapse | V-Element
description: Collapse 折叠面板组件的文档
---

# Collapse 折叠面板

用于将内容区域折叠/展开，节省页面空间。

## 基础用法

可以同时展开多个面板。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 的基础使用方法"></preview>

## 手风琴模式

设置 `accordion` 属性后，最多只能展开一个面板。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴模式" description="每次只能展开一个面板"></preview>

## 禁用面板

为某个面板设置 `disabled` 属性可禁止用户操作。

<preview path="../demo/Collapse/Disabled.vue" title="禁用面板" description="某些面板不可操作时的处理方式"></preview>

---

## 自定义标题 slot

可以通过 `#title` slot 来自定义面板标题内容。

<preview path="../demo/Collapse/CustomTitle.vue" title="自定义标题" description="使用插槽自定义面板标题内容"></preview>

## Collapse 属性

| 属性名     | 说明                     | 类型       | 默认值  |
| ---------- | ------------------------ | ---------- | ------- |
| modelValue | 当前展开的面板 name 数组 | `string[]` | `[]`    |
| accordion  | 是否开启手风琴模式       | `boolean`  | `false` |

## CollapseItem 属性

| 属性名   | 说明           | 类型      | 默认值  |
| -------- | -------------- | --------- | ------- |
| title    | 面板标题       | `string`  | —       |
| name     | 面板唯一标识   | `string`  | —       |
| disabled | 是否禁用此面板 | `boolean` | `false` |
