<script setup>
import myDropdown from '@/components/Dropdown/Dropdown.vue'
import { h } from 'vue'
import Button from '@/components/Button/Button.vue'

const options = [
  { key: '1', label: '菜单一', divided: true },
  { key: '2', label: '菜单二', divided: true },
  { key: '3', label: '菜单三', divided: true },
]
</script>

<template>
  <myDropdown :menu-options="options" :open-delay="1000" :close-delay="1000">
    <Button>带分割线</Button>
  </myDropdown>
</template>
