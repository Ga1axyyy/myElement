
# vue3-myelement 项目介绍

## 项目概述
vue3-myelement 是一个基于 Vue 3 开发的UI组件库，类似于 Element Plus，使用 TypeScript 构建。该项目采用了 Vite 作为构建工具，提供了丰富的UI组件和功能。

展示文档地址：https://ga1axyyy.github.io/myElement/

## 技术栈
- Vue 3
- TypeScript
- Vite
- PostCSS
- Vitest (单元测试)
- VitePress (文档)

## 已实现组件
目前已实现的组件包括：
- Button（按钮）：支持多种类型、尺寸、状态
- Icon（图标）：集成 FontAwesome 图标库
- Collapse（折叠面板）
- Tooltip（文字提示）
- Dropdown（下拉菜单）
- Message（消息提示）
- Input（输入框）
- Switch（开关）
- Select（选择器）
- Form（表单）(开发中)
- Alert(弹窗)(开发中)

## 设计特点
1. **组件化设计**：每个组件独立维护
2. **TypeScript支持**：完善的类型定义系统
3. **可定制主题**：使用 PostCSS 实现样式系统
4. **完善的文档**：通过 VitePress 构建组件文档和示例

## 项目结构
```
vue3-myelement/
├── src/
│   ├── components/     # 组件库目录
│   ├── hooks/          # 自定义钩子
│   ├── style/          # 样式文件
│   └── assets/         # 资源文件
├── docs/               # 文档目录
└── ...
```

## 开发指南
1. 安装依赖：`npm install`
2. 开发模式：`npm run dev`
3. 构建项目：`npm run build`
4. 运行测试：`npm run test:unit`
5. 文档开发：`npm run docs:dev`

## 特色功能
- 支持按需引入
- 提供完善的类型定义
- 现代化的设计风格
- 丰富的组件交互性
