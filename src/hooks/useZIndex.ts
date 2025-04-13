import { computed, ref } from 'vue'

const zIndex = ref(0)
const useZIndex = (initialValue = 2000) => {
  //传入的初始值
  const initialZIndex = ref(initialValue)
  //现在值
  const currentZIndex = computed(() => {
    return zIndex.value + initialZIndex.value
  })

  //Zindex增加方法
  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex
  }

  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  }
}

export default useZIndex
