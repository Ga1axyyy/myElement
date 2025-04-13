<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import { ref } from 'vue'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
const TooltipRef = ref()
const open = () => {
  TooltipRef.value?.show()
}
const close = () => {
  TooltipRef.value?.hide()
}

const content = ref('这是 Tooltip 的内容')
</script>

<template>
  <div>
    <!-- 使用 Tooltip 组件，手动控制显示 -->

    <Tooltip trigger="click" manual :content="content" ref="TooltipRef"
      ><Icon :icon="['fas', 'house']" fontsize="20px" color="blue"
        >首页
      </Icon></Tooltip
    >

    <Button @click="open">open</Button>
    <Button @click="close">close</Button>
  </div>
</template>

<style scoped>
button {
  margin: 10px;
  padding: 10px;
}
</style>
