<script setup lang="ts">
import type {
  SelectEmits,
  SelectOption,
  SelectProps,
  SelectStates,
} from './type'
import type { TooltipInstance } from '../Tooltip/type'
import Tooltip from '../Tooltip/Tooltip.vue'
import Input from '../Input/Input.vue'
import { isFunction, debounce } from 'lodash'
import { reactive, ref, computed, watch } from 'vue'
import type { InputInstance } from '../Input/type'
import Icon from '../Icon/Icon.vue'
import RenderVnode from '../Common/RenderVnode'

const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    //实现选项和input框等宽 popper.js
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`
      },
      phase: 'beforeWrite',
      requires: ['computeStyles'],
    },
  ],
}

defineOptions({
  name: 'mySelect',
})
const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
})
const emits = defineEmits<SelectEmits>()

//定义过滤后的选项 需实时更新
const filterOptions = ref(props.options)
watch(
  () => props.options,
  (newOptions) => {
    filterOptions.value = newOptions
  },
)

//过滤逻辑
const generateFilterOptions = async (searchValue: string) => {
  if (!props.filterable) return
  //filterMethod必须是一个函数
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filterOptions.value = props.filterMethod(searchValue)
  } else if (
    //远程查找
    props.remote &&
    props.remoteMethod &&
    isFunction(props.remoteMethod)
  ) {
    state.loading = true
    try {
      filterOptions.value = await props.remoteMethod(searchValue)
    } catch (e) {
      console.log(e)
      filterOptions.value = []
    } finally {
      state.loading = false
    }
  } //默认
  else {
    filterOptions.value = props.options.filter((option) =>
      option.label.includes(searchValue),
    )
  }
}
//发生过滤
const onFilter = () => {
  generateFilterOptions(state.inputValue)
}

//过滤后的文本
const filterplaceholder = computed(() => {
  //支持筛选 是否已选择了 下拉框是否可见
  return props.filterable && state.selectedOption && isDropdownShow.value
    ? state.selectedOption.label
    : props.placeholder
})

//组件里 ref绑定
const tooltipRef = ref<TooltipInstance>()

const inputRef = ref<InputInstance>()
//dropdown有没有被打开
const isDropdownShow = ref(false)
//设置请求时间
const timeout = computed(() => (props.remote ? 300 : 0))

const debounceonFilter = debounce(() => onFilter(), timeout.value)
//查找选项
const findOption = (value: string) => {
  const option = props.options.find((option) => option.value === value)
  return option ? option : null
}
//初始的选项
let initialOption = findOption(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    initialOption = findOption(newValue)
  },
)

//记录select的状态
const state = reactive<SelectStates>({
  //展示的值
  inputValue: initialOption ? initialOption.label : '',
  //选择的选项
  selectedOption: initialOption,
  mouseHover: false,
  loading: false,
})

//控制打开和关闭的逻辑
const controlDropdown = (show: boolean) => {
  //把tooltip的展示开/关了
  if (show) {
    //filter模式+之前选择过
    if (props.filterable && state.selectedOption) {
      state.inputValue = ''
      generateFilterOptions(state.inputValue)
    }
    tooltipRef.value?.show()
  } else {
    tooltipRef.value?.hide()
    //blur 将之前选择的值回灌input里
    if (props.filterable) {
      state.inputValue = state.selectedOption ? state.selectedOption.label : ''
    }
  }
  //标记一下tooltip开/关了 tooltip开/关了也就是内容显示/没了 也就是dropdown也开/关了
  isDropdownShow.value = show
  emits('visible-change', show)
}
//展示清除键
const showClearIcon = computed(() => {
  //hover
  //props.clearable=true
  //必须有过选项
  //input值不能为空
  return (
    props.clearable &&
    state.mouseHover &&
    state.selectedOption &&
    state.inputValue.trim() !== ''
  )
})
//清除逻辑
const onClear = () => {
  state.selectedOption = null
  state.inputValue = ''
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}

//真正触发开关
const toggleDropdown = () => {
  if (props.disabled) return
  if (isDropdownShow.value) {
    controlDropdown(false)
  } else {
    controlDropdown(true)
  }
}

//选择选项逻辑
const itemSelect = (e: SelectOption) => {
  if (e.disabled) return
  //更新状态：选项内容和所选择的事件 label才是选项内容({ label: 'hello', value: '1' },)
  state.inputValue = e.label
  state.selectedOption = e
  //提示父组件更新了 传入和发射的都是value(1,2,3,4...)
  emits('change', e.value)
  emits('update:modelValue', e.value)
  //点击完关闭框
  controlDropdown(false)
  inputRef.value?.ref.focus()
}
</script>
<template>
  <div class="my-select" :class="{ 'is-disabled': disabled }">
    <Tooltip
      placement="bottom-start"
      manual
      ref="tooltipRef"
      @click="toggleDropdown"
      :popperOptions="popperOptions"
      @click-outside="controlDropdown(false)"
      @mouseenter="state.mouseHover = true"
      @mouseleave="state.mouseHover = false"
    >
      <Input
        ref="inputRef"
        v-model="state.inputValue"
        :disabled="disabled"
        :placeholder="filterplaceholder"
        :readonly="!filterable || !isDropdownShow"
        @input="debounceonFilter"
        ><template #suffix>
          <Icon
            icon="circle-xmark"
            v-if="showClearIcon"
            class="my-input_clear"
            @mousedown.prevent="onClear"
          ></Icon>
          <Icon
            v-else
            icon="angle-down"
            class="header-angle"
            :class="{ 'is-active': isDropdownShow }"
          ></Icon>
        </template>
      </Input>
      <template #content>
        <div class="my-select__loading" v-if="state.loading">
          <Icon icon="spinner" spin></Icon>
        </div>
        <div
          class="my-select__nodata"
          v-else-if="filterable && filterOptions.length === 0"
        >
          no matching data
        </div>
        <ul class="my-select__menu" v-else>
          <template v-for="(item, index) in filterOptions" :key="index">
            <!-- click.stop 停止冒泡 不停止会触发toggleDropdown-->
            <li
              class="my-select__menu-item"
              :class="{
                'is-disable': item.disabled,
                'is-selected': state.selectedOption?.value === item.value,
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              <RenderVnode
                :v-node="renderLabel ? renderLabel(item) : item.label"
              ></RenderVnode>
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
