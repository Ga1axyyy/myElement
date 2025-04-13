<script setup>
import Button from '@/components/Button/Button.vue'
</script>

<template>
  <div class="button-demo">
    <!-- 默认按钮 -->
    <div class="button-demo__item">
      <Button>默认</Button>
    </div>

    <!-- 按钮类型展示 -->
    <div class="button-demo__item">
      <Button type="primary">Primary </Button>
      <Button type="danger">Danger </Button>
      <Button type="success">Success </Button>
    </div>

    <!-- 圆角按钮 -->
    <div class="button-demo__item">
      <Button round>圆角</Button>
      <Button type="primary" round>Primary </Button>
      <Button type="danger" round>Danger </Button>
    </div>

    <!-- 圆形按钮 -->
    <div class="button-demo__item">
      <Button circle>圆形</Button>
      <Button type="primary" circle>Primary </Button>
      <Button type="danger" circle>Danger</Button>
    </div>
  </div>
</template>

<style scoped>
.button-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}

.button-demo__item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.button-demo__item .my-button {
  margin: 5px;
}
</style>
