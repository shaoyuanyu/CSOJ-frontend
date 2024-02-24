<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, computed, defineProps } from 'vue'

interface Props {
  selectedPermissions: string[];
  selectedCategories: string[];
  searchContent?: string;
}

const props = defineProps<Props>();

const router = useRouter()

const data = ref([
  {
    id: 1000,
    title: '入门',
    auth: 'Private',
    categoryName: 'C++基础',
    progress: 0,
    num: 3,
    author: 'root',
    gmtModified: '2024-01-01'
  },
  {
    id: 1001,
    title: '顺序结构',
    auth: 'Private',
    categoryName: 'C++基础',
    progress: 0,
    num: 28,
    author: 'root',
    gmtModified: '2024-01-02'
  },
  {
    id: 1002,
    title: '选择结构',
    auth: 'Private',
    categoryName: 'C++基础',
    progress: 0,
    num: 22,
    author: 'root',
    gmtModified: '2024-01-03'
  },
  {
    id: 1002,
    title: '二叉树',
    auth: 'Private',
    categoryName: '高级数据结构',
    progress: 0,
    num: 22,
    author: 'root',
    gmtModified: '2024-01-03'
  }
])

const handleRowClick = (record: any, ev: Event) => {
  const routePath = '/train/trainSection'
  router.push({ path: routePath, query: { id: record.id } })
}

const filteredData = computed(() => {
  return data.value.filter(item => {
    // 检查搜索内容
    const searchMatch = !props.searchContent || Object.values(item).some(value => 
      String(value).toLowerCase().includes(props.searchContent?.toLowerCase() || "")
    );

    // 检查权限
    const permissionMatch = !props.selectedPermissions.length || props.selectedPermissions.includes(item.auth);

    // 检查分类
    const categoryMatch = !props.selectedCategories.length || props.selectedCategories.includes(item.categoryName);

    return searchMatch && permissionMatch && categoryMatch;
  });
});

</script>

<template>
  <div class="container">
    <a-table :data="filteredData" @row-click="handleRowClick" class="table">
      <template #columns>
        <a-table-column title="编号" data-index="id" align="center"></a-table-column>
        <a-table-column title="题单" data-index="title" align="center"></a-table-column>
        <a-table-column title="权限" data-index="auth" align="center">
          <template #cell="{ record }">
            <a-tag color="red">{{ record.auth }}</a-tag>
          </template>
        </a-table-column>
        <a-table-column title="分类" data-index="categoryName" align="center">
          <template #cell="{ record }">
            <a-tag bordered color="green">{{ record.categoryName }}</a-tag>
          </template>
        </a-table-column>
        <a-table-column title="进度" data-index="progress" align="center">
          <template #cell="{ record }">
            <a-progress :animation="true" :show-text="false">{{ record.progress }}</a-progress>
          </template>
        </a-table-column>
        <a-table-column title="题目数" data-index="num" align="center"></a-table-column>
        <a-table-column title="作者" data-index="author" align="center"></a-table-column>
        <a-table-column title="最近更新" data-index="gmtModified" align="center"></a-table-column>
      </template>
    </a-table>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.table {
  width: 80%;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
