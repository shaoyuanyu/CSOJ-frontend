<script setup lang="ts">
import { ref } from 'vue';
import SearchCard from '@/components/train/SearchCard.vue'
import ProblemListCard from '@/components/train/ProblemListCard.vue'

// 从数据库中获取所有的训练类型
const trainingPermissions = ref(['Public', 'Private']);
const trainingCategories = ref(['C++基础', '高级数据结构', '高级算法', '高级数学及其他', '图论算法', '高级动态规划']);

// 定义接收子组件发出的事件的响应式引用
const selectedPermissions = ref<string[]>([]);
const selectedCategories = ref<string[]>([]);
const searchContent = ref<string>('');

// 定义处理子组件发出的事件的函数
const handleSelectPermission = (permissions: string[]) => {
  selectedPermissions.value = permissions;
};

const handleSelectCategory = (categories: string[]) => {
  selectedCategories.value = categories;
};

const handleSearch = (content: string) => {
  searchContent.value = content;
};
</script>

<template>
  <div>
    <SearchCard 
      :trainingPermissions="trainingPermissions" 
      :trainingCategories="trainingCategories" 
      @select-permission="handleSelectPermission"
      @select-category="handleSelectCategory"
      @search="handleSearch"
    />
    <div style="margin-top: 5px"></div>
    <ProblemListCard 
      :selectedPermissions="selectedPermissions"
      :selectedCategories="selectedCategories"
      :searchContent="searchContent"
    />
  </div>
</template>

<style scoped></style>