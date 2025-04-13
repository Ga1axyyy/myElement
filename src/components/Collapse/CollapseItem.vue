<script setup lang="ts">
import type { CollapseItemProps } from './type'
import { inject, computed } from 'vue'
import { collapseContextKey } from './type'
import Icon from '../Icon/Icon.vue'

defineOptions({
  name: 'myCollapseItem',
})

const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseContextKey)
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))
const handleClick = () => {
  if (props.disabled) {
    console.log(props)
    return
  }
  console.log(props)
  collapseContext?.handleItemClick(props.name)
}
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
}
</script>

<template>
  <div
    class="my-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="my-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      :id="`item-title-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <Icon icon="angle-right" class="header-angle"></Icon>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="my-collapse-item__wrapper" v-show="isActive">
        <div class="my-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.my-collapse-item__title {
  font-size: 30px;
}
</style>
