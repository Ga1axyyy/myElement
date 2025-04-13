import type { Placement, Options } from '@popperjs/core'
export interface TooltipProps {
  content?: string
  trigger?: 'hover' | 'click'
  placement?: Placement
  //手动模式
  manual?: boolean
  //Partial
  popperOptions?: Partial<Options>
  transition?: string
  openDelay?: number
  closeDelay?: number
}
export interface TooltiEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'click-outside', value: boolean): void
}

export interface TooltipInstance {
  show: () => void
  hide: () => void
}
