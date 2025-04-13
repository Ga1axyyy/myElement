<script setup>
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import { ref } from 'vue'

const activeNames = ref([''])
</script>

<template>
  <Collapse v-model="activeNames">
    <CollapseItem title="面板一" name="1"> 这是面板一的内容 </CollapseItem>
    <CollapseItem title="面板二" name="2"> 这是面板二的内容 </CollapseItem>
    <CollapseItem title="面板三" name="3"> 这是面板三的内容 </CollapseItem>
  </Collapse>
</template>
