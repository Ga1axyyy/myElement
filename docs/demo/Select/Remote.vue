<script setup>
import { ref } from 'vue'
import Select from '@/components/Select/Select.vue'

// 中国的省份列表
const provinces = [
  { label: '北京市', value: 'beijing' },
  { label: '天津市', value: 'tianjin' },
  { label: '河北省', value: 'hebei' },
  { label: '山西省', value: 'shanxi' },
  { label: '内蒙古自治区', value: 'neimenggu' },
  { label: '辽宁省', value: 'liaoning' },
  { label: '吉林省', value: 'jilin' },
  { label: '黑龙江省', value: 'heilongjiang' },
  { label: '上海市', value: 'shanghai' },
  { label: '江苏省', value: 'jiangsu' },
  { label: '浙江省', value: 'zhejiang' },
  { label: '安徽省', value: 'anhui' },
  { label: '福建省', value: 'fujian' },
  { label: '江西省', value: 'jiangxi' },
  { label: '山东省', value: 'shandong' },
  { label: '河南省', value: 'henan' },
  { label: '湖北省', value: 'hubei' },
  { label: '湖南省', value: 'hunan' },
  { label: '广东省', value: 'guangdong' },
  { label: '广西壮族自治区', value: 'guangxi' },
  { label: '海南省', value: 'hainan' },
  { label: '重庆市', value: 'chongqing' },
  { label: '四川省', value: 'sichuan' },
  { label: '贵州省', value: 'guizhou' },
  { label: '云南省', value: 'yunnan' },
  { label: '西藏自治区', value: 'xizang' },
  { label: '陕西省', value: 'shanxi2' },
  { label: '甘肃省', value: 'gansu' },
  { label: '青海省', value: 'qinghai' },
  { label: '宁夏回族自治区', value: 'ningxia' },
  { label: '新疆维吾尔自治区', value: 'xinjiang' },
  { label: '台湾省', value: 'taiwan' },
  { label: '香港特别行政区', value: 'hongkong' },
  { label: '澳门特别行政区', value: 'macau' },
]

// 过滤选项
const filterOptions = ref(provinces)
const selectedOption = ref(null)

// 模拟的远程搜索方法
const remoteMethod = (searchValue) => {
  return new Promise((resolve) => {
    if (searchValue) {
      setTimeout(() => {
        const filtered = provinces.filter((province) =>
          province.label.toLowerCase().includes(searchValue.toLowerCase()),
        )
        resolve(filtered)
      }, 500) // 模拟一个延迟
    } else {
      resolve([])
    }
  })
}
const handleFetch = (query) => {
  if (!query) return Promise.resolve([])
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      return items.slice(0, 20).map((item) => ({
        label: item.name,
        value: item.node_id,
      }))
    })
    .catch((err) => {
      console.error('请求失败:', err)
      return [] 
    })
}
</script>
<template>
  <div>
    <Select
      v-model="selectedOption"
      filterable
      :remoteMethod="handleFetch"
      placeholder="远程搜索"
      remote
    />
  </div>
</template>
