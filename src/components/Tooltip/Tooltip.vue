<script setup lang="ts">
import { onUnmounted, reactive, ref, watch, computed } from 'vue'
import type { TooltiEmits, TooltipProps, TooltipInstance } from './type'
import type { Instance } from '@popperjs/core'
import { createPopper } from '@popperjs/core'
import useClickOutside from '@/hooks/clickOutSide'
import { debounce } from 'lodash'
import { emit } from 'process'

defineOptions({
  name: 'myTooltip',
})

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  manual: false,
})

const emits = defineEmits<TooltiEmits>()
const isOpen = ref(false)
//展示tooltip对应节点
const popperNode = ref<HTMLElement>()
//触发展示的节点
const triggerNode = ref<HTMLElement>()

const popperContainerNode = ref<HTMLElement>()

let popperInstance: null | Instance = null

let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})
let openTimes = 0
let closeTimes = 0
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9],
        },
      },
    ],
    ...props.popperOptions,
  }
})

const open = () => {
  openTimes++
  isOpen.value = true
  emits('visible-change', true)
  console.log('openTimes', openTimes)
  console.log(props.manual)
}
const close = () => {
  closeTimes++
  isOpen.value = false
  emits('visible-change', false)
  console.log('closeTimes', closeTimes)
}

const togglePopper = () => {
  if (isOpen.value) {
    closeFinal()
  } else {
    openFinal()
  }
}
//使用debounce防抖
const openDebounce = debounce(open, props.openDelay)
const closeDebounce = debounce(close, props.closeDelay)

const openFinal = () => {
  closeDebounce.cancel()
  openDebounce()
}
const closeFinal = () => {
  openDebounce.cancel()
  closeDebounce()
}

const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = openFinal
    outerEvents['mouseleave'] = closeFinal
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
  console.log('当前绑定事件:', events)
}
//点击外侧关闭
useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    closeFinal()
  }
  if (isOpen.value) {
    emits('click-outside', true)
  }
})

//不是手动模式才添加attachEvent
if (!props.manual) {
  attachEvents()
}

watch(
  () => props.manual,
  (isManual) => {
    //是手动就清空
    if (isManual) {
      events = {}
      outerEvents = {}
    } //不是就添加attachEvent 变成自动
    else {
      attachEvents()
    }
  },
)

watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      events = {}
      outerEvents = {}
      attachEvents()
    }
  },
)
watch(
  isOpen,
  (newvalue) => {
    if (newvalue) {
      //有元素就展示
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(
          triggerNode.value,
          popperNode.value,
          popperOptions.value,
        )
      } else {
        //没有则销毁
        popperInstance?.destroy()
      }
    }
  },
  { flush: 'post' },
)

defineExpose<TooltipInstance>({
  show: openFinal,
  hide: closeFinal,
})

onUnmounted(() => {
  popperInstance?.destroy()
})
</script>
<template>
  <div class="my-tooltip" v-on="outerEvents" ref="popperContainerNode">
    <!-- 点击展示的元素 -->
    <div class="my-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <!-- 展示内容 -->
    <Transition :name="transition">
      <div class="my-tooltip__popper" ref="popperNode" v-if="isOpen">
        <slot name="content">{{ content }}</slot>
        <div id="arrow" data-popper-arrow>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped></style>
