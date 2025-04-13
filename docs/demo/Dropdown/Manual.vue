<script setup>
import { ref } from 'vue'
import myDropdown from '@/components/Dropdown/Dropdown.vue'
import { h } from 'vue'
import Button from '@/components/Button/Button.vue'

const dropdownRef = ref()
const options = [
  { key: '1', label: '菜单一' },
  { key: '2', label: '菜单二' },
]

const open = () => dropdownRef.value?.show()
const close = () => dropdownRef.value?.hide()
</script>

<template>
  <Button @click="open">显示</Button>
  <Button @click="close">隐藏</Button>
  <myDropdown ref="dropdownRef" manual :menu-options="options">
    <p style="padding: 0px 50px;">菜单</p>
  </myDropdown>
</template>
