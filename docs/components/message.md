---
title: Message | V-Element
description: Message 组件的文档
---

# Message 消息提示

Message 组件用于展示短暂的消息提示，支持自定义类型、持续时间、偏移量、关闭按钮等功能。

## 基础用法

通过 `message` 属性传递消息内容，`type` 属性设置提示类型，`duration` 属性设置显示的持续时间。

<preview path="../demo/Message/Basic.vue" title="基础用法" description="Message 组件的基础使用方法"></preview>

## 带关闭按钮

可以设置 `showClose` 为 `true`，使得消息提示框显示关闭按钮。

<preview path="../demo/Message/CloseButton.vue" title="带关闭按钮" description="Message 组件的带关闭按钮功能"></preview>

## 鼠标悬停暂停计时

当鼠标悬停在消息提示上时，自动关闭计时会暂停，移开鼠标后重新开始计时。

<preview path="../demo/Message/OnMouseEnter.vue" title="鼠标悬停时暂停计时" description="Message 组件的鼠标悬停暂停计时功能"></preview>

---

### Message Attributes

| 属性名         | 说明                                        | 类型                                                             | 默认值    |
| -------------- | ------------------------------------------- | ---------------------------------------------------------------- | --------- |
| message        | 消息内容                                    | `string`                                                         | —         |
| type           | 消息类型                                    | `enum - 'info' \| 'success' \| 'warning' \| 'danger' \| 'info' ` |
| duration       | 消息显示时长（毫秒） -如果是0则不会主动消失 | `number`                                                         | 3000      |
| offset         | 消息与页面顶部的偏移量                      | `number`                                                         | 20        |
| transitionName | 消息出现与消失的过渡名称                    | `string`                                                         | 'fade-up' |
| showClose      | 是否显示关闭按钮                            | `boolean`                                                        | false     |

### Message Events

| 事件名         | 说明                 | 回调参数  |
| -------------- | -------------------- | --------- |
| visible-change | 消息的显示与隐藏变化 | `boolean` |
