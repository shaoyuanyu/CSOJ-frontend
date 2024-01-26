<script setup lang="ts">
import { defineProps } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

// 根据上述主键id获取公告
const notices = ref([
  {
    title: '测试标题1',
    content: '测试内容1'
  },
  {
    title: '测试标题2',
    content: '测试内容2'
  },
  // 可以添加更多的通知
])

</script>

<template>
    <a-card
      style="width: 100%; height: 100%; margin-top: 5px;"
      title="公告"
      :bordered="false"
    >
      <template #extra>
        <a-link>查看全部</a-link>
      </template>

      <a-list>
        <a-list-item v-for="(notice, index) in notices" :key="index">
            <h3>{{ notice.title }}</h3>
            <p>{{ notice.content }}</p>
        </a-list-item>
      </a-list>

    </a-card>
</template>

<style scoped></style>
