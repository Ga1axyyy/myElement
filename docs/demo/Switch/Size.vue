<script setup>
import { ref } from 'vue'
import Switch from '@/components/Switch/Switch.vue'
const test = ref(false)
</script>
<template>
  <div class="switch-size-container">
    <Switch v-model="test" size="large" />
    <Switch v-model="test" />
    <Switch v-model="test" size="small" />
  </div>
</template>
