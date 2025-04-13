<script setup lang="ts">
import { computed, ref, useAttrs, watch, type Ref } from 'vue'
import type { InputProps, InputEmits } from './type'
import Icon from '../Icon/Icon.vue'

defineOptions({
  name: 'myInput',
})

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',

  autocomplete: 'off',
})
const emits = defineEmits<InputEmits>()
const attrs = useAttrs()

const innerValue = ref(props.modelValue)
const isFocus = ref(false)
const passwordVisible = ref(false)
//将组件暴露出去
const inputRef = ref() as Ref<HTMLInputElement>
//父组件变化同步到子组件
watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal
  },
)

// 子组件变化回传父组件
const handleInput = () => {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
}
const handleChange = () => {
  emits('change', innerValue.value)
}

//支持点击清空
const showClear = computed(() => {
  return (
    props.clearable && !props.disabled && !!innerValue.value && isFocus.value
  )
})

const handleFocus = (event: FocusEvent) => {
  isFocus.value = true
  emits('focus', event)
}
const handleBlur = (event: FocusEvent) => {
  console.log('blur triggered')
  isFocus.value = false
  emits('blur', event)
}
const clear = () => {
  innerValue.value = ''
  emits('update:modelValue', innerValue.value)
  emits('clear')
  emits('input', '')
  emits('change', '')
}

//支持密码显示/不显示
const showPasswordArea = computed(() => {
  return props.showPassword && !props.disabled && !!innerValue.value
})
const togglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}

defineExpose({
  ref: inputRef,
})
</script>

<template>
  <div
    class="my-input"
    :class="{
      [`my-input--${type}`]: type,
      [`my-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocus,
    }"
  >
    <!-- input类型-->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="my-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="my-input__wrapper">
        <!-- prefix slot -->
        <span v-if="$slots.prefix" class="my-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <input
          class="my-input__inner"
          v-bind="attrs"
          ref="inputRef"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :disabled="disabled"
          :placeholder="placeholder"
          :readonly="readonly"
          v-model="innerValue"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :form="form"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />

        <!-- suffix slot -->
        <span
          v-if="$slots.suffix || showClear || showPasswordArea"
          class="my-input__suffix"
        >
          <slot name="suffix"></slot>
          <Icon
            icon="circle-xmark"
            v-if="showClear"
            class="my-input__clear"
            @mousedown.prevent="clear"
          />
          <Icon
            icon="eye"
            v-if="showPasswordArea && passwordVisible"
            class="my-input__password"
            @mousedown.prevent="togglePasswordVisible"
          />

          <Icon
            icon="eye-slash"
            v-if="showPasswordArea && !passwordVisible"
            class="my-input__password"
            @mousedown.prevent="togglePasswordVisible"
          />
        </span>
      </div>

      <!-- append slot -->
      <div v-if="$slots.append" class="my-input__append">
        <slot name="append"></slot>
      </div>
    </template>

    <!-- textarea类型 -->
    <template v-else>
      <textarea
        class="my-textarea__wrapper"
        v-bind="attrs"
        ref="inputRef"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        v-model="innerValue"
        @input="handleInput"
        @focus="handleFocus"
        @change="handleChange"
        @blur="handleBlur"
      >
      </textarea>
    </template>
  </div>
</template>

<style scoped lang="less"></style>
