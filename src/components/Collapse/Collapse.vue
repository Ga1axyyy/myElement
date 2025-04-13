<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseEmits, CollapseProps } from './type'
import { collapseContextKey } from './type'
defineOptions({
  name: 'myCollapse',
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeNames = ref<NameType[]>(props.modelValue)

watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  },
)
//数组  验证是否有手风琴功能 不是可打开多个面板
if (props.accordion && activeNames.value.length > 1) {
  console.warn('手风琴模式只允许展示一个内容')
}
const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  } else {
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(item)
    }
  }
  emits('update:modelValue', activeNames.value)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
})
</script>
<template>
  <div class="my-collapse">
    <slot></slot>
  </div>
</template>

<style scoped lang="less"></style>
