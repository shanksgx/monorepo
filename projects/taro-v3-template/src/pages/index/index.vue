<template>
  <view class="index">
    <Counter />
    <nut-input-number v-model="value" min="1" max="20" />
    <nut-rate v-model="value" />
  </view>
</template>

<script lang="ts">
import { ref } from 'vue'
import './index.scss'
import Counter from '@/components/Counter.vue'

export default {
  name: 'Index',
  components: {
    Counter
  },
  setup() {
    const value = ref<number>(1)
    return { value }
  }
}
</script>
