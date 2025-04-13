<script setup>
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import { ref } from 'vue'
const activeNames = ref([''])
</script>

<template>
  <Collapse v-model="activeNames">
    <CollapseItem name="1">
      <template #title>
        <span style="color: red">🔥 自定义标题</span>
      </template>
      <p>这里是自定义标题的内容</p>
    </CollapseItem>
    <CollapseItem name="2">
      <template #title>
        <span style="color: red">🔥</span>
      </template>
      <p>这里是自定义标题的内容</p>
    </CollapseItem>
  </Collapse>
</template>
