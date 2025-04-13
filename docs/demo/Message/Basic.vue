<script setup>
import { CreateMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
import { ref, h } from 'vue'

const test = ref()
const message = '这是一个简单的消息！'
const messageVNode = h('div', { class: 'custom-message' }, [
  h('strong', '这是一条复杂的消息！'),
  h(Icon, { icon: 'info-circle' }),
])
const open = () => {
  CreateMessage({ message: message, type: 'success' })
}
const open2 = () => {
  CreateMessage({ message: messageVNode, type: 'success' })
}
</script>

<template>
  <Button @click="open">showMessage</Button>
  <Button @click="open2">showVNode</Button>
</template>

<style scoped>
/* 自定义样式 */
</style>
