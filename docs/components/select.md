---
title: Select | V-Element
description: Select 组件的文档
---

## 选择器

当选项过多时，使用下拉菜单展示并选择内容。

#### 基础用法

适用广泛的基础单选 v-model 的值为当前被选中的 option 的 `value` 属性值。

<preview path="../demo/Select/Basic.vue" title="基础选择器" description="Select 基础选择器"></preview>

#### 可清空单选

您可以使用清除图标来清除选择。
设置 `clearable` 属性，则可将选择器清空。

<preview path="../demo/Select/Clearable.vue" title="可清空单选" description="Select 可清空单选"></preview>

### 自定义模板

你可以自定义如何来渲染每一个选项，使用`renderLabel`属性，它接受一个回调函数，返回 vNode 类型。

<preview path="../demo/Select/CustomRender.vue" title="自定义模板" description="Select 自定义模板"></preview>

### 筛选选项

可以利用筛选功能快速查找选项。
添加 `filterable` 属性即可启用搜索功能。默认情况下，Select 会找出所有label属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。fiter-method 为一个Function，它会在输入值发生变化时调用，参数为当前输入值。

<preview path="../demo/Select/Filter.vue" title="筛选选项" description="Select 筛选选项"></preview>

### 远程搜索

输入关键字以从远程服务器中查找数据
服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将`filterable`和`remote`设置为true，同时传入一个 `remote-method`。remote-method为一个返回 Promise 的Function，类型为`(value:string)=>Promise<SelectOption[]>`。

<preview path="../demo/Select/Remote.vue" title="远程搜索" description="Select 远程搜索"></preview>

## 属性

| 属性名         | 类型                 | 默认值  | 说明                                   |
| -------------- | -------------------- | ------- | -------------------------------------- |
| `modelValue`   | `string`             | `-`     | 绑定的值，代表当前选中的选项的 `value` |
| `options`      | `SelectOption[]`     | `[]`    | 下拉框选项列表，数组类型               |
| `placeholder`  | `string`             | `-`     | 输入框的占位文本                       |
| `disabled`     | `boolean`            | `false` | 禁用状态，设置为 `true` 时禁用选择框   |
| `clearable`    | `boolean`            | `false` | 是否显示清除按钮                       |
| `filterable`   | `boolean`            | `false` | 是否开启过滤功能                       |
| `filterMethod` | `CustomFilter`       | `-`     | 自定义过滤方法                         |
| `remote`       | `boolean`            | `false` | 是否启用远程搜索                       |
| `remoteMethod` | `CustomFilterRemote` | `-`     | 远程搜索方法                           |

## 事件

| 事件名              | 说明                            | 参数             |
| ------------------- | ------------------------------- | ---------------- |
| `change`            | 当选中的值变化时触发            | `value: string`  |
| `update:modelValue` | 当 `v-model` 绑定的值更新时触发 | `value: string`  |
| `visible-change`    | 当下拉框显示或隐藏时触发        | `value: boolean` |
| `clear`             | 当清除按钮被点击时触发          | 无               |



