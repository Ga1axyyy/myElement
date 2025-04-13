---
title: Button | V-Element
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>

## 带图标按钮

可以在按钮中加入图标，通过 `icon` 属性传递图标名称。

<preview path="../demo/Button/Icon.vue" title="带图标按钮" description="Button 组件的图标用法"></preview>

## 加载中按钮

按钮支持加载中状态，设置 `loading` 属性时会显示一个加载动画。

<preview path="../demo/Button/Loading.vue" title="加载中按钮" description="Button 组件的加载中状态"></preview>

## 禁用按钮

按钮可以设置为禁用状态，禁用时按钮不可点击。

<preview path="../demo/Button/Disabled.vue" title="禁用按钮" description="Button 组件的禁用状态"></preview>

---

### Button Attributes

| 属性名      | 说明                | 类型                                                           | 默认值 |
| ----------- | ------------------- | -------------------------------------------------------------- | ------ |
| size        | 尺寸                | `enum` -`'large'\| 'small'`                                    | —      |
| type        | 按钮类型            | `enum`-`'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —      |
| plain       | 是否为朴素按钮      | `boolean`                                                      | false  |
| round       | 是否为圆角按钮      | `boolean`                                                      | false  |
| circle      | 是否为圆形按钮      | `boolean`                                                      | false  |
| loading     | 是否为加载中状态    | `boolean`                                                      | false  |
| disabled    | 按钮是否为禁用状态  | `boolean`                                                      | false  |
| icon        | 图标组件            | `string`                                                       | —      |
| autofocus   | 原生 autofocus 属性 | `boolean`                                                      | false  |
| native-type | 原生 type 属性      | `enum` -`'button'\| 'submit'\| 'reset'`                        |
