//函数式组件
import { defineComponent } from 'vue'
//vnode不会默认渲染 所以需要处理后返回vnode
const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [String, Object], // 限制输入的 vNode 只能是字符串或对象（VNode）
      required: true,
    },
  },
  //传入的是字符串，Vue 会自动把它转成一个文本节点 TextVNode
  //传入的是一个 VNode 对象，Vue 会直接渲染这个 VNode的内容。
  setup(props) {
    return () => props.vNode // 直接返回传入的 vNode
  },
})

export default RenderVnode
