<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

// 根据上面的比赛id主键获取比赛的简介
const brief = '本次测试题目难度较小，请同学们积极参加！'
</script>

<template>
    <a-card :style="{ width: '100%', marginTop: '5px' }">
      <h2>训练简介</h2>
      <div> {{ brief }} </div>
    </a-card>
</template>

<style scoped></style>
