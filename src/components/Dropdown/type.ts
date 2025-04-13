import type { VNode } from 'vue'
import type { TooltipProps } from '../Tooltip/type'

//继承Tooltip 自己多两项内容
export interface DropdownProps extends TooltipProps {
  menuOptions: MenuOption[]
  //点击后关闭菜单
  hideAfterClick?: boolean
}

export interface MenuOption {
  //菜单项显示的文本或 VNode（支持渲染自定义内容，如图标、富文本）
  label: string | VNode
  key: string | number
  disabled?: boolean
  //是否在该项前显示分割线
  divided?: boolean
}

export interface DropdownEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'select', value: MenuOption): void
}

export interface DropdownInstance {
  show: () => void
  hide: () => void
}
