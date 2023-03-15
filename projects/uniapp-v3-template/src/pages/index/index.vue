<template>
  <view class="content">
    <u-alert
      style="width: 100%"
      title="你好，goduer！"
      type="success"
      :fontSize="26"
      :center="true"
    ></u-alert>
    <image class="logo" src="/static/logo.jpg" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view class="btn" @click="goSuccess">
      <u-button type="success" :plain="true" text="显示Toast"></u-button>
    </view>
    <u-toast ref="utoast"></u-toast>
    <u-notify message="Hi uview-plus" ref="notify"></u-notify>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref<string>('Hello World')
const utoast = ref<any>(null)
const notify = ref<any>(null)

const goSuccess = () => {
  utoast.value.show({
    type: 'error',
    icon: false,
    title: '失败主题',
    message: '一弦一柱思华年',
    fontSize: 26
  })
  notify.value.show({
    top: -1,
    type: 'error',
    message: 'Hi uview-plus for uniapp',
    duration: 1000 * 3,
    fontSize: 30,
    safeAreaInsetTop: false
  })
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: $uni-color-success;
  }
  .btn {
    margin-top: 24rpx;
  }
}
</style>
