<script setup>
import { h } from 'vue'
import myDropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'

const options = [
  {
    key: '1',
    label: h('span', { style: 'color: red;' }, '红色菜单'),
  },
  {
    key: '2',
    label: h('span', { style: 'font-weight: bold;' }, '加粗菜单'),
  },
]
</script>

<template>
  <myDropdown :menu-options="options" :open-delay="1000" :close-delay="1000">
    <Button>自定义内容</Button>
  </myDropdown>
</template>
