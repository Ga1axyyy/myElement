<script setup>
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
import { h } from 'vue'
const menuOptions = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: '1' },
  { key: 3, label: 'item3' },
  { key: 4, label: 'item4' },
]
</script>

<template>
  <div class="dropdown-demo">
    <Dropdown
      trigger="click"
      placement="bottom"
      :menuOptions="menuOptions"
    >
      <Button>基础下拉菜单</Button>
    </Dropdown>
  </div>
</template>
