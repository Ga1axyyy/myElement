<script setup lang="ts">
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Message from './components/Message/Message.vue'
import Input from './components/Input/Input.vue'
import Switch from './components/Switch/Switch.vue'

import { CreateMessage } from './components/Message/method'

import { ref, onMounted, h } from 'vue'

import type { Options } from '@popperjs/core'
import type { ButtonInstance } from './components/Button/type'
import type { TooltipInstance } from './components/Tooltip/type'
import type { MenuOption } from './components/Dropdown/type'
import type { Instance } from '@popperjs/core'
import type { InputProps } from './components/Input/type'
import { size } from 'lodash'

const buttonRef = ref<ButtonInstance | null>(null)
const TooltipRef = ref<TooltipInstance | null>(null)

// //两个图层
// const overlayNode = ref<HTMLElement>() //显示浮层本身，比如 tooltip、菜单、popover
// const triggerNode = ref<HTMLElement>() //触发浮层显示的元素，比如按钮
let popperInstance: Instance | null = null
const options1: Partial<Options> = {
  placement: 'right',
  strategy: 'fixed',
}
const options: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' },
]

const Inputtest = ref('')

const openedValue = ref(['a'])
const trigger = ref<any>('click')

const open = () => {
  CreateMessage({ message: 'hello world', showClose: true })
  TooltipRef.value?.show()
}
const close = () => {
  TooltipRef.value?.hide()
}

onMounted(() => {
  CreateMessage({ message: 'hello world 1', showClose: true })
  CreateMessage({
    type: 'success',
    message: 'hello world 2',
    duration: 0,
    showClose: true,
  })
  CreateMessage({
    type: 'danger',
    message: 'hello world 3',
    duration: 0,
    showClose: true,
  })
  CreateMessage({
    type: 'warning',
    message: 'hello world 4',
    duration: 0,
    showClose: true,
  })
})
</script>
<template>
  <Input v-model="Inputtest" showPassword clearable />
  <header>
    <Dropdown
      :trigger="trigger"
      :menu-options="options"
      :open-delay="1000"
      :close-delay="1000"
      ref="TooltipRef"
      
    >
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="125"
        height="125"
        ref="triggerNode"
      />
      <template #content> hello </template>
    </Dropdown>
  </header>
  <Icon :icon="['fas', 'user-secret']" />
  <Icon
    :icon="['fas', 'arrow-up']"
    size="2xl"
    spin
    type="danger"
    color="#0e7a0d"
  />
  <main>
    <Button ref="buttonRef" @click="open">Test Button</Button>
    <Button plain @click="close">Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>my</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br /><br />
    <a href="#">link</a>

    <Collapse v-model="openedValue" accordion>
      <Item name="a">
        <template #title>
          <h1>headline title</h1>
        </template>
        <div>this is content a aaa</div>
      </Item>
      <Item name="b" title="Title B">
        <div>this is bbbbb test</div>
      </Item>
      <Item name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </Item>
    </Collapse>
    {{ openedValue }}
  </main>
</template>

<style lang="less"></style>
