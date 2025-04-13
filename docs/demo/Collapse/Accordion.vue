<script setup>
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import { ref } from 'vue'

const activeNames = ref(['1'])
</script>

<template>
  <Collapse v-model="activeNames" accordion>
    <CollapseItem title="面板一" name="1"> 手风琴内容 1 </CollapseItem>
    <CollapseItem title="面板二" name="2"> 手风琴内容 2 </CollapseItem>
    <CollapseItem title="面板三" name="3"> 手风琴内容 3 </CollapseItem>
  </Collapse>
</template>
