import type { Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

const useClickOutside = (
  elementRef: Ref<HTMLElement | undefined>,
  callback: (e: MouseEvent) => void,
) => {
  const handler = (e: MouseEvent) => {
    //e.target鼠标点击的实际 DOM 元素
    if (elementRef.value && e.target) {
      //contains检查用户点击的目标元素是否包含在 elementRef.value 内
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        //不包含 (！false = true)执行回调
        callback(e)
      }
    }
  }
  /*onMounted 和 onUnmounted：
    onMounted 钩子在组件挂载后添加点击事件监听器 (click)，当用户点击页面上的任何地方时，handler 函数会被调用。
    onUnmounted 钩子在组件卸载时移除点击事件监听器，避免内存泄漏。
  */
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
}
export default useClickOutside
