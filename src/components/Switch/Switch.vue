<script setup lang="ts">
import type { SwtichProps, SwtichEmits } from './type'
import { computed, ref, onMounted, watch } from 'vue'

defineOptions({
  name: 'mySwtich',
})

const props = withDefaults(defineProps<SwtichProps>(), {
  activeValue: true,
  inactiveValue: false,
})
const emits = defineEmits<SwtichEmits>()
const input = ref<HTMLInputElement>()

const innerValue = ref(props.modelValue)

const checked = computed(() => {
  return innerValue.value === props.activeValue
})

const switchValue = () => {
  if (props.disabled) return
  const newValue = checked.value ? props.inactiveValue : props.activeValue
  innerValue.value = newValue
  emits('update:modelValue', newValue)
  emits('change', newValue)
}

onMounted(() => {
  input.value!.checked = checked.value
})

watch(checked, (newValue) => {
  input.value!.checked = newValue
})

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue
  },
)
</script>

<template>
  <div
    class="my-switch"
    :class="{
      [`my-switch--${size}`]: size,
      'is-disabled': disabled,
      //是否选中
      'is-checked': checked,
    }"
  >
    <input
      class="my-swtich__input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue"
      ref="input"
    />
    <div class="my-switch__core" @click="switchValue">
      <!-- 小圆点文字 -->
      <div class="my-switch__core-inner">
        <span
          v-if="activeText || inactiveText"
          class="my-switch__core-inner-text"
          >{{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <!-- 小圆点 -->
      <div class="my-switch__core-action"></div>
    </div>
  </div>
</template>
