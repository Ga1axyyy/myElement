## 基础用法

通过 `menuOptions` 配置菜单项，`label` 支持字符串或 vnode，自定义展示内容。

<preview path="../demo/Dropdown/Basic.vue" title="基础用法" description="最简单的菜单使用方式，点击按钮触发下拉菜单。" />

---

## 触发方式

通过 `trigger` 属性设置触发方式，可选值为 `click` 或 `hover`。

<preview path="../demo/Dropdown/Trigger.vue" title="触发方式" description="分别演示 click 与 hover 两种触发方式。" />

---

## 禁用菜单项

为 `menuOptions` 中的某项设置 `disabled: true` 可禁用该菜单项。

<preview path="../demo/Dropdown/Disabled.vue" title="禁用菜单项" description="禁用的菜单项不可被点击，点击事件不会触发。" />

---

## 分隔线

通过为某一项设置 `divided: true` 显示菜单分隔线，视觉上隔离操作组。

<preview path="../demo/Dropdown/Divider.vue" title="分隔线" description="在菜单项之间添加分割线区分操作区域。" />

---

## 自定义内容

支持通过 `label` 传入 vnode 来自定义菜单项样式，如带图标、颜色等。

<preview path="../demo/Dropdown/CustomLabel.vue" title="自定义菜单项" description="可使用渲染函数或插槽自定义菜单项内容样式。" />

---

## 手动控制显隐

使用 `manual` 模式时，不再响应点击或 hover 自动控制，需要手动调用 `show()` / `hide()`。

<preview path="../demo/Dropdown/Manual.vue" title="手动控制" description="通过外部逻辑手动控制下拉菜单的显隐。" />

---

## 点击后不自动关闭

通过 `hideAfterClick=false` 控制菜单项点击后是否自动关闭。

<preview path="../demo/Dropdown/KeepOpen.vue" title="点击后不关闭" description="设置 hideAfterClick 为 false 后，点击菜单项不会关闭菜单。" />

---

## Props 属性

| 属性名          | 类型                                | 默认值        | 描述                               |
|-----------------|-------------------------------------|---------------|------------------------------------|
| `trigger`       | `'click' \| 'hover'`                | `'click'`     | 触发方式                           |
| `placement`     | `Placement`                         | `'bottom'`    | 弹出位置，参考 Popper.js 文档     |
| `menuOptions`   | `MenuOption[]`                      | `[]`          | 菜单项数组                         |
| `hideAfterClick`| `boolean`                           | `true`        | 点击菜单项后是否自动关闭菜单       |
| `manual`        | `boolean`                           | `false`       | 手动模式，需手动控制显隐           |
| `popperOptions` | `Partial<Options>`                  | `{}`          | Popper.js 配置项                   |
| `openDelay`     | `number`                            | `0`           | 显示延迟（毫秒）                  |
| `closeDelay`    | `number`                            | `0`           | 隐藏延迟（毫秒）                  |

---

## Emits 事件

| 事件名            | 参数             | 描述                     |
|-------------------|------------------|--------------------------|
| `select`          | `item: MenuOption` | 点击菜单项时触发        |
| `visible-change`  | `visible: boolean` | 菜单显隐状态变更时触发  |

---

## 插槽

| 插槽名   | 描述             |
|----------|------------------|
| default  | 触发源插槽内容   |
| content  | 菜单列表插槽内容（已内置） |