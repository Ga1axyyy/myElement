<script setup lang="ts">
import type { ButtonProps } from './type'
import { defineOptions, ref } from 'vue'
import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'MyButton',
})
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})

const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref,
})
</script>

<template>
  <button
    ref="_ref"
    class="my-button"
    :class="{
      [`my-button--${type}`]: type,
      [`my-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading"></Icon>
    <Icon :icon="icon" v-if="icon"></Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped lang="less"></style>
