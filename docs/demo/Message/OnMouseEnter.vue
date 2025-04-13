<script setup>
import { CreateMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'
import { ref } from 'vue'

const test = ref()
const message = '鼠标悬停时会暂停自动关闭计时'
const open = () => {
  CreateMessage({ message: message, type: 'success' })
  
}

</script>

<template>
  <Button @click="open">showMessage</Button>
</template>

<style scoped>
/* 自定义样式 */
</style>
