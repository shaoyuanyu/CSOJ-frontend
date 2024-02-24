<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  trainingPermissions: string[],
  trainingCategories: string[]
}>();

const emit = defineEmits(['select-category', 'select-permission', 'search']);

const selectedPermissions = ref<string[]>([]);
const selectedCategories = ref<string[]>([]);

const isAllPermissionsSelected = ref(true);
const isAllCategoriesSelected = ref(true);

const searchContent = ref('');

function handleSearch() {
  emit('search', searchContent.value);
}

// 处理权限标签选择
function handlePermissionSelection(permission: string) {
  if (permission === '全部') {
    isAllPermissionsSelected.value = !isAllPermissionsSelected.value;
    selectedPermissions.value = isAllPermissionsSelected.value ? [...props.trainingPermissions] : [];
  } else {
    if (isAllPermissionsSelected.value) {
      selectedPermissions.value = [permission];
      isAllPermissionsSelected.value = false;
    } else {
      const index = selectedPermissions.value.indexOf(permission);
      if (index >= 0) {
        selectedPermissions.value.splice(index, 1);
      } else {
        selectedPermissions.value.push(permission);
      }
      isAllPermissionsSelected.value = selectedPermissions.value.length === props.trainingPermissions.length;
    }
  }
  emit('select-permission', selectedPermissions.value);
}

// 处理分类标签选择
function handleCategorySelection(category: string) {
  if (category === '全部') {
    isAllCategoriesSelected.value = !isAllCategoriesSelected.value;
    selectedCategories.value = isAllCategoriesSelected.value ? [...props.trainingCategories] : [];
  } else {
    if (isAllCategoriesSelected.value) {
      selectedCategories.value = [category];
      isAllCategoriesSelected.value = false;
    } else {
      const index = selectedCategories.value.indexOf(category);
      if (index >= 0) {
        selectedCategories.value.splice(index, 1);
      } else {
        selectedCategories.value.push(category);
      }
      isAllCategoriesSelected.value = selectedCategories.value.length === props.trainingCategories.length;
    }
  }
  emit('select-category', selectedCategories.value);
}

// 初始化选项
watchEffect(() => {
  if (isAllPermissionsSelected.value) {
    selectedPermissions.value = [...props.trainingPermissions];
  }
  if (isAllCategoriesSelected.value) {
    selectedCategories.value = [...props.trainingCategories];
  }
});

// 判断权限是否被选中
function isPermissionSelected(permission: string) {
  const isSelected = selectedPermissions.value.includes(permission);
  return isSelected;
}

// 判断分类是否被选中
function isCategorySelected(category: string) {
  const isSelected = selectedCategories.value.includes(category);
  return isSelected;
}
</script>

<template>
  <div class="container">
    <a-card class="card">
      <div :style="{ display: 'flex', alignItems: 'center', marginBottom: '0px' }">
        <h2 :style="{ marginRight: '30px' }">搜索训练</h2>
        <div class="search-container">
          <a-input-search :style="{ width: '320px' }" v-model="searchContent" placeholder="输入关键词" @search="handleSearch" search-button />
        </div>
      </div>
      <div>
        <h3>训练权限</h3>
        <a-space>
          <a-tag 
            size="large"
            checkable 
            color="arcoblue" 
            :checked="isAllPermissionsSelected" 
            @check="() => handlePermissionSelection('全部')"
          >
            全部
          </a-tag>
          <a-tag 
            v-for="permission in props.trainingPermissions" 
            :key="permission" 
            checkable 
            size="large"
            color="arcoblue" 
            :checked="isPermissionSelected(permission)" 
            @check="() => handlePermissionSelection(permission)"
          >
            {{ permission }}
          </a-tag>
        </a-space>
      </div>
      <div>
        <h3>训练分类</h3>
        <a-space>
          <a-tag 
            checkable 
            size="large"
            color="arcoblue" 
            :checked="isAllCategoriesSelected" 
            @check="() => handleCategorySelection('全部')"
          >
            全部
          </a-tag>
          <a-tag 
            v-for="category in props.trainingCategories" 
            :key="category" 
            checkable 
            size="large"
            color="arcoblue" 
            :checked="isCategorySelected(category)" 
            @check="() => handleCategorySelection(category)"
          >
            {{ category }}
          </a-tag>
        </a-space>
      </div>
    </a-card>
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

.card {
  width: 80%;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>