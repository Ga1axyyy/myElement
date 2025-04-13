<script setup>
import myDropdown from '@/components/Dropdown/Dropdown.vue'
import { h } from 'vue'
import Button from '@/components/Button/Button.vue'

const options = [
  { key: '1', label: '不会关闭' },
  { key: '2', label: '继续展示' },
]
</script>

<template>
  <myDropdown :menu-options="options" :hide-after-click="false" trigger="click">
    <Button>点击不关闭</Button>
  </myDropdown>
</template>
