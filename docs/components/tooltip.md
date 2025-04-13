---
title: Tooltip | V-Element
description: Tooltip 组件的文档
---

# Tooltip 提示框

`Tooltip` 组件用于显示提示信息，支持不同的触发方式、位置和手动控制。它可以通过鼠标悬停、点击等方式显示，且支持自定义内容。

## 悬停触发 Tooltip

在该示例中，`Tooltip` 组件通过 `trigger="hover"` 属性，展示了一个通过悬停触发的提示框。

<preview path="../demo/Tooltip/HoverDemo.vue" title="悬停触发 Tooltip" description="展示 Tooltip 组件的悬停触发功能。"></preview>

## 点击触发 Tooltip

通过 `trigger="click"` 属性，可以实现点击按钮时显示 `Tooltip`。

<preview path="../demo/Tooltip/ClickDemo.vue" title="点击触发 Tooltip" description="展示 Tooltip 组件的点击触发功能。"></preview>

## 手动控制显示 Tooltip

在此示例中，使用 `manual` 属性可以手动控制 Tooltip 的显示和隐藏。

<preview path="../demo/Tooltip/ManualDemo.vue" title="手动控制显示 Tooltip" description="展示如何手动控制 Tooltip 的显示和隐藏。"></preview>

---

### Tooltip 属性

| 属性名            | 说明                          | 类型            | 默认值   |
| ----------------- | ----------------------------- | --------------- | -------- |
| trigger           | 触发方式（'hover' 或 'click'）| `string`        | 'hover'  |
| placement         | 提示框位置                    | `string`        | 'bottom' |
| transition        | 动画名称                      | `string`        | 'fade'   |
| manual            | 是否手动控制显示              | `boolean`       | false    |
| popperOptions     | Popper.js 的配置项             | `Partial<Options>` | `{}`    |
| openDelay         | 显示延时（毫秒）              | `number`        | 0        |
| closeDelay        | 关闭延时（毫秒）              | `number`        | 0        |

### Tooltip 事件

| 事件名            | 说明                          | 回调参数       |
| ----------------- | ----------------------------- | ------------- |
| visible-change    | 显示/隐藏变化                 | `boolean`     |
| click-outside     | 点击外部时触发                 | `boolean`     |
