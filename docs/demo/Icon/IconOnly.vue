<script setup>
import Icon from '@/components/Icon/Icon.vue'
</script>

<template>
  <div class="icon-demo-container">
    <Icon :icon="['fas', 'house']" color="blue" />
    <Icon :icon="['fas', 'user']" color="green" />
    <Icon :icon="['fas', 'magnifying-glass']" color="red" />
    <Icon :icon="['fas', 'gear']" color="gray" />
  </div>
</template>

<style scoped>
.icon-demo-container {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.my-icon {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
