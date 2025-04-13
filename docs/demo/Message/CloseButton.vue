<script setup>
import { CreateMessage } from '@/components/Message/method'
import Button from '@/components/Button/Button.vue'
import { ref } from 'vue'

const test = ref()
const message = "这个提示有关闭按钮！"
const open = () => {
  CreateMessage({ message: message,type:'danger', showClose: true,duration:0 })
 
}

</script>

<template>
  <Button @click="open">showMessage</Button>
</template>

<style scoped>
/* 自定义样式 */
</style>
