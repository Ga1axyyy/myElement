<script setup>
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import { ref } from 'vue'

const activeNames = ref(['1'])
</script>

<template>
  <Collapse v-model="activeNames">
    <CollapseItem title="面板一" name="1"> 可点击内容 1 </CollapseItem>
    <CollapseItem title="面板二（禁用）" name="2" :disabled="true">
      你看不到这段内容
    </CollapseItem>
    <CollapseItem title="面板三" name="3"> 可点击内容 3 </CollapseItem>
  </Collapse>
</template>
