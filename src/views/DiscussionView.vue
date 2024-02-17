<script setup lang="ts">
import { ref, computed } from 'vue'
import TopCard from "@/components/discussion/TopCard.vue"
import DiscussionDisplayCard from "@/components/discussion/DiscussionDisplayCard.vue"
import ClassificationCard from '@/components/discussion/ClassificationCard.vue';

// 从数据库获取讨论的总数代替
const count = ref(0)

// 从数据库获取所有讨论的数组
const discussions = ref([
  { id: 1, title: '讨论1', content: '讨论详情1', description: '讨论描述1', category_id: 1 },
  { id: 2, title: '讨论2', content: '讨论详情2', description: '讨论描述2', category_id: 2 },
  // ...
])

// 从数据库获取所有的分类标签
const classificationData = ref([
  { id: 1, name: '分类1' },
  { id: 2, name: '分类2' },
  { id: 3, name: '分类3' },
  // ...
])

// 存储搜索框的内容
const searchContent = ref('')

// 存储选中的类别ID
const selectedKeys = ref<number[]>([])

// 计算属性，根据搜索内容筛选讨论
const filteredDiscussions = computed(() => {
  if (!searchContent.value) {
    return discussions.value
  }
  return discussions.value.filter(discussion =>
    discussion.title.includes(searchContent.value) ||
    discussion.description.includes(searchContent.value)
  )
})

// 计算属性，根据选中的类别过滤讨论
const filteredDiscussionsByCategory = computed(() => {
  if (!selectedKeys.value.length) {
    return filteredDiscussions.value
  }
  return filteredDiscussions.value.filter(discussion =>
    selectedKeys.value.includes(discussion.category_id)
  )
})

// 处理 search 事件的方法
const onSearch = (value: string) => {
  searchContent.value = value
}

// 处理类别选择的方法
const onSelect = (keys: number[]) => {
  selectedKeys.value = keys
}

</script>

<template>
  <a-row justify="center">
    <a-col :span="14">
      <TopCard :count="count" @search="onSearch"/>
      <DiscussionDisplayCard v-for="discussion in filteredDiscussionsByCategory" :key="discussion.id" :title="discussion.title" :description="discussion.description" />
    </a-col>

    <a-col :span="1">
      <!--空一格-->
    </a-col>

    <a-col :span="4">
      <a-button type="primary" size="large" shape="round" class="shadow-button" long>发布一个讨论</a-button>
      <ClassificationCard :data="classificationData" @update:selectedKeys="onSelect" />
    </a-col>

  </a-row>
</template>

<style scoped>
.shadow-button {
  box-shadow: 0px 3px 6px #00000029;
}
</style>