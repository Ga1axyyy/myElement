import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from '../Icon/Icon.vue'

describe('Button.vue', () => {
  test('basic button', () => {
    //挂载 mount(组件,传入具体的内容)
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
      },
      slots: {
        default: 'button',
      },
    })
    console.log(wrapper.html())
    // 检查props
    expect(wrapper.classes()).toContain('my-button--primary')
    // 检查slots
    // 两种方法：get 找不到就中断, find 不中断
    expect(wrapper.get('button').text()).toBe('button')
    // 检查events  trigger 触发
    wrapper.get('button').trigger('click')
    console.log(wrapper.emitted()) //emitted 显示被发射的事件
    expect(wrapper.emitted()).toHaveProperty('click') //toHaveProperty 是否有属性
  })
  test('disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'disabled',
      },
    })
    // attributes dom节点属性
    expect(wrapper.attributes('disabled')).toBeDefined()
    //.element.disabled 直接拿dom元素上的属性
    expect(wrapper.find('button').element.disabled).toBeDefined()
    wrapper.get('button').trigger('click')
    //disabled 不发送事件 所以是not.toHaveProperty
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
  test('icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up',
      },
      slots: {
        default: 'icon',
      },
      //全局用 stub 替代 FontAwesomeIcon 组件。
      global: {
        stubs: ['FontAwesomeIcon'],
      },
    })
    console.log(wrapper.html())
    //查找真实组件 需要import FontAwesomeIcon
    const iconElement = wrapper.findComponent(FontAwesomeIcon)
    //exits 判断是否存在
    expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.attributes('icon')).toBe('arrow-up')
  })
  test('loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
      slots: {
        default: 'loading',
      },
      global: {
        stubs: ['Icon'],
      },
    })
    console.log(wrapper.html())
    const iconElement = wrapper.findComponent(Icon)
    expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.attributes('icon')).toBe('spinner')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
