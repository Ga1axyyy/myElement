<script setup lang="ts">
import type {
  DropdownProps,
  DropdownEmits,
  DropdownInstance,
  MenuOption,
} from './type'
import type { TooltipInstance } from '../Tooltip/type'
import Tooltip from '../Tooltip/Tooltip.vue'
import { ref } from 'vue'
import RenderVnode from '../Common/RenderVnode'

defineOptions({
  name: 'myDropdown',
})

//小测试用具 简单封装cl
// const inlineConsole = (...args: any) => {
//   console.log(...args)
// }
// 模板中
// @visible-change="e=>inlineConsole("visibleChange",e)"
// @visible-change="e=>inlineConsole("visibleChange",e)"

const props = withDefaults(defineProps<DropdownProps>(), {
  hideAfterClick: true,
})
const emits = defineEmits<DropdownEmits>()
const tooltipRef = ref<TooltipInstance | null>(null)

const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (e: MenuOption) => {
  if (e.disabled) return
  else {
    emits('select', e)
  }
  if (props.hideAfterClick) {
    hide()
  }
}
const show = () => tooltipRef.value?.show()
const hide = () => tooltipRef.value?.hide()
defineExpose<DropdownInstance>({
  show,
  hide,
})
</script>
<template>
  <div class="my-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      @visible-change="visibleChange"
      ref="tooltipRef"
      :manual="manual"
    >
      <slot></slot>
      <template #content>
        <ul class="my-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li
              v-if="item.divided"
              role="separator"
              class="divided-placeholder"
            ></li>
            <li
              class="my-dropdown__item"
              @click="() => itemClick(item)"
              :class="{
                'is-disabled': item.disabled,
                'is-divided': item.divided,
              }"
              :id="`dropdown-item-${item.key}`"
            >
              <!-- 展示内容 vnode不会默认渲染 所以需要处理后返回vnode -->
              <RenderVnode :v-node="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<style scoped></style>
