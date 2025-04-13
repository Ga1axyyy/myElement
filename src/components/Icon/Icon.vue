<script setup lang="ts">
import type { IconProps } from './type'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import { computed } from 'vue'
defineOptions({
  name: 'myIcon',
})

const props = defineProps<IconProps>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>
<template>
  <i
    class="my-icon"
    :class="{
      [`my-icon--${type}`]: type,
    }"
    :style="customStyles"
  >
    <font-awesome-icon v-bind="filteredProps"> </font-awesome-icon>
  </i>
</template>

<style scoped lang="less"></style>
