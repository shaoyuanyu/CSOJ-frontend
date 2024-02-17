<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})

const searchValue = ref('') // 用于存储搜索框的内容
const emit = defineEmits(['search']) // 定义 emit 函数来触发自定义事件

// 点击搜索按钮时的事件处理函数
const onSearch = (value: string) => {
  emit('search', value)
}

</script>

<template>
    <a-card class="styled-card">
        <a-space direction="horizontal" size="large" style="display: flex; justify-content: space-between;">
            <h3>全部（{{ props.count }}）</h3>
            <!-- 将 v-model 绑定到 searchValue 将 @search 绑定到 onSearch -->
            <a-input-search v-model="searchValue" @search="onSearch" placeholder="输入关键词" search-button/>
        </a-space>
    </a-card>
</template>

<style scoped>
.styled-card {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.space-style {
  display: flex;
  justify-content: space-between;
}
</style>