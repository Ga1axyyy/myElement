import type { VNode, ComponentInternalInstance } from 'vue'

export interface MessageProps {
  message?: string | VNode
  //对话框多久关闭 0则永远不关闭
  duration?: number
  showClose?: boolean
  type?: 'success' | 'info' | 'warning' | 'danger'
  onDestroy: () => void
  offset?: number
  id: string
  zIndex: number
  transitionName?: string
}

export interface MessageContext {
  id: string
  vnode: VNode
  vm: ComponentInternalInstance
  props: MessageProps
  destroy: () => void
}

export type CreateMessageProps = Omit<
  MessageProps,
  'onDestroy' | 'id' | 'zIndex'
>
