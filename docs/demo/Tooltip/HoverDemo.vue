<script setup >
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import { ref } from 'vue'

const content = ref('这是 Tooltip 的内容')
</script>

<template>
  <div>
    <!-- 使用 Tooltip 组件，触发方式为 hover -->
    <Tooltip trigger="hover" placement="top" :content="content">
      <button>Hover me to show Tooltip</button>
    </Tooltip>
  </div>
</template>


