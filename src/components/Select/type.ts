import type { VNode } from 'vue'

export interface SelectOption {
  label: string
  value: string
  disabled?: boolean
}

export interface SelectProps {
  // v-model
  modelValue: string
  // 选项
  options?: SelectOption[]
  // 一些基本表单属性
  placeholder: string
  disabled: boolean
  clearable?: boolean
  //vnode文本
  renderLabel?: RenderLabel
  //是否开启过滤
  filterable?: boolean
  filterMethod?: CustomFilter
  remote?: boolean
  remoteMethod?: CustomFilterRemote
}

//selcet状态记录
export interface SelectStates {
  inputValue: string
  selectedOption: null | SelectOption
  mouseHover: boolean
  loading: boolean
}

export type RenderLabel = (options: SelectOption) => VNode
export type CustomFilter = (value: string) => SelectOption[]
export type CustomFilterRemote = (value: string) => Promise<SelectOption[]>

export interface SelectEmits {
  (e: 'change', value: string): void
  (e: 'update:modelValue', value: string): void
  (e: 'visible-change', value: boolean): void
  (e: 'clear'): void
}
