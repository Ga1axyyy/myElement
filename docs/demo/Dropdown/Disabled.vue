<script setup>
import { h } from 'vue'
import Button from '@/components/Button/Button.vue'

import MyDropdown from '@/components/Dropdown/Dropdown.vue'
const menuOptions = [
  { key: '1', label: '菜单项 1' },
  { key: '2', label: '菜单项 2', disabled: true },
  { key: '3', label: '菜单项 3',divided:true },
]
</script>

<template>
  <div class="dropdown-demo">
    <MyDropdown trigger="click" placement="bottom" :menuOptions="menuOptions">
      <Button>菜单</Button>
    </MyDropdown>
  </div>
</template>

