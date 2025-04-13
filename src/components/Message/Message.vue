<script setup lang="ts">
import type { MessageProps } from './type'
import RenderVnode from '../Common/RenderVnode'
import Icon from '../Icon/Icon.vue'
import { computed, onMounted, ref, watch, nextTick } from 'vue'
import { getLastBottomOffset, getLastInstance } from './method'
import useEventListener from '@/hooks/useEventListener'

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
  transitionName: 'fade-up',
})

const visible = ref(false)

const messageRef = ref<HTMLDivElement>()
// const instance = getCurrentInstance()
// console.log('inner', instance)
//计算偏移高度
//这个div的高度
const height = ref(0)
//上一个实例的bottomOffset(最下面的)坐标数字，第一个是0
const lastOffset = computed(() => getLastBottomOffset(props.id))
//这个元素的top
const topOffset = computed(() => props.offset + lastOffset.value)
//为下一个元素预留的offset
const bottomOffset = computed(() => height.value + topOffset.value)

const cssStyle = computed(() => {
  return { top: topOffset.value + 'px', zIndex: props.zIndex }
})

let timer: any
function startTimer() {
  if (props.duration === 0) return
  timer = setTimeout(() => {
    visible.value = false
  }, props.duration)
  console.log(timer)
}
function clearTimer() {
  clearTimeout(timer)
}

onMounted(async () => {
  visible.value = true
  startTimer()
})

function keydown(e: Event) {
  //按esc清除弹窗
  const event = e as KeyboardEvent
  if (event.code === 'Escape') {
    visible.value = false
  }
}
useEventListener(document, 'keydown', keydown)

// watch(visible, (newvalue) => {
//   if (!newvalue) {
//     props.onDestroy()
//   }
// })
function destroyComponent() {
  props.onDestroy()
}
function updateHeight() {
  height.value = messageRef.value!.getBoundingClientRect().height
}

defineExpose({
  //暴露给别的组件，给下一个组件用
  bottomOffset,
  visible,
})
</script>

<template>
  <Transition
    :name="transitionName"
    @after-leave="destroyComponent"
    @enter="updateHeight"
  >
    <div
      class="my-message"
      :class="{
        [`my-message--${type}`]: type,
        'is-close': showClose,
      }"
      role="alert"
      v-show="visible"
      ref="messageRef"
      :style="cssStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="my-message__content">
        <!-- 默认渲染内容 -->
        <slot>
          <RenderVnode :v-node="message" v-if="message" />
        </slot>
      </div>
      <div class="my-message__close" v-if="showClose">
        <!-- .stop修饰符会阻止事件继续向上传播，
       即防止父元素监听 click 事件时也被触发。 -->
        <Icon @click.stop="visible = false" icon="xmark"></Icon>
      </div>
    </div>
  </Transition>
</template>

<style scoped></style>
