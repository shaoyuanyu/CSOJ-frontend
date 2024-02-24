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
    <a-card title="比赛简介" class="a-card">
      <div> {{ brief }} </div>
    </a-card>
</template>

<style scoped>
.a-card {
  width: 80%;
  margin: 0 auto 10px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}
</style>