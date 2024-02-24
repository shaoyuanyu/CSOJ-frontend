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
      class="a-card"
      title="公告"
    >
      <template #extra>
        <a-link>查看全部</a-link>
      </template>

      <a-list class="a-list">
        <a-list-item class="a-list-item" v-for="(notice, index) in notices" :key="index">
            <h3>{{ notice.title }}</h3>
            <p>{{ notice.content }}</p>
        </a-list-item>
      </a-list>

    </a-card>
</template>

<style scoped>
.a-card {
  width: 80%;
  margin: 0px auto 10px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}
.a-list {
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}
.a-list-item {
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  padding: 10px;
  background-color: #fff;
}
</style>
