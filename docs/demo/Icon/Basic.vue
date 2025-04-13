<script setup >
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="icon-demo-container">
    <Icon :icon="['fas', 'house']" fontsize='20px' color="blue" /> 首页
    <Icon :icon="['fas', 'user']" color="green" /> 用户
    <Icon :icon="['fas', 'magnifying-glass']" color="red" /> 搜索
    <Icon :icon="['fas', 'gear']" color="gray" /> 设置
  </div>
</template>

<style scoped>
.icon-demo-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  align-items: center;
}

.my-icon {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
