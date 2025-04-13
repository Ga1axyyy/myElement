<script setup>
import myDropdown from '@/components/Dropdown/Dropdown.vue'
import { h } from 'vue'
import Button from '@/components/Button/Button.vue'

const options = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2' },
  { key: 3, label: 'item3' },
  { key: 4, label: 'item4' },
]
</script>

<template>
  <myDropdown
    trigger="click"
    :menu-options="options"
    :open-delay="1000"
    :close-delay="1000"
  >
    <Button>click</Button>
  </myDropdown>
  <myDropdown
    trigger="hover"
    :menu-options="options"
    :open-delay="1000"
    :close-delay="1000"
  >
    <Button>hover</Button>
  </myDropdown>
</template>
