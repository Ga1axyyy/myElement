import type { CreateMessageProps, MessageContext } from './type'
import { render, h, shallowReactive } from 'vue'
import Message from './Message.vue'
import useZIndex from '@/hooks/useZIndex'

//自定义id
let seed = 1
//内容数组 存储消息
const instances: MessageContext[] = shallowReactive([])
export const CreateMessage = (props: CreateMessageProps) => {
  const { currentZIndex, nextZIndex } = useZIndex()
  // console.log(currentZIndex.value)
  nextZIndex()

  const id = `message_${seed++}`
  // 创建一个空的 div 容器
  const container = document.createElement('div')
  const destroy = () => {
    //删除数组中的实例
    const idx = instances.findIndex((instance) => instance.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
    render(null, container)
  }
  //手动删除
  const manualDestroy = () => {
    const instance = instances.find((instance) => instance.id === id)
    if (instance) {
      instance.vm.exposed!.visible.value = false
    }
  }
  const newProps = {
    ...props,
    id,
    zIndex: currentZIndex.value,
    //作为 props 传递给 Message 组件的
    onDestroy: destroy,
  }
  // 用 h 创建虚拟节点
  const vnode = h(Message, newProps)

  // 渲染虚拟节点到 container 中
  render(vnode, container)
  // console.log(vnode)
  // 将 container 插入到页面上    非空断言操作符!表明不会是null或undefined
  document.body.appendChild(container.firstElementChild!)

  //拿出vnode的组件实例
  const vm = vnode.component!

  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    destroy: manualDestroy,
  }
  // console.log(instance)
  console.log(vm)
  instances.push(instance)
  return instance
}

//获取上一个添加的实例
export const getLastInstance = () => {
  return instances.at(-1)
}

export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  // console.log('idx', id, idx, instances.length)
  //是第一项
  if (idx <= 0) {
    return 0
  } else {
    //不是第一项则拿到前一项
    const prev = instances[idx - 1]
    // console.log(prev)
    return prev.vm.exposed!.bottomOffset.value
  }
}
