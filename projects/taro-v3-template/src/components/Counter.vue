<template>
  <view>
    <text class="title">{{ counter.count }}</text>
    <view class="" @tap="onAdd">
      <nut-button type="primary">ADD</nut-button>
    </view>
  </view>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()
const onAdd = () => {
  counter.count++
}
</script>

<style>
.title {
  font-size: 32px;
}
</style>
