import { onMounted, onBeforeUnmount, isRef, watch, unref } from 'vue'
import type { Ref } from 'vue'

function useEventListener(
  //事件可以是响应式或者event
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  handler: (e: Event) => any,
) {
  //isRef判断是不是响应式
  if (isRef(target)) {
    watch(target, (newvalue, oldvalue) => {
      oldvalue?.removeEventListener(event, handler)
      newvalue?.addEventListener(event, handler)
    })
  } else {
    onMounted(() => {
      target.addEventListener(event, handler)
    })
  }

  onBeforeUnmount(() => {
    //unref
    //如果传入的是一个 ref 对象，unref 会返回 ref 对象的值。
    //不是ref对象直接返回原始值
    unref(target)?.removeEventListener(event, handler)
  })
}

export default useEventListener
