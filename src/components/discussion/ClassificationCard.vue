<script setup lang="ts">
import { reactive, ref, watch, onMounted } from 'vue'

// 表格数据的类型
interface TableData {
    id: number;
    name: string;
}

interface TableRowSelection {
    type: 'checkbox' | 'radio';
    showCheckedAll?: boolean;
}

// 从父组件接受data
const props = defineProps({
    data: {
        type: Array as () => TableData[],
        required: true
    }
})

// 向父组件传递selectedKeys
const emit = defineEmits(['update:selectedKeys'])

const columns = [
  {
    title: '分类标签',
    dataIndex: 'name',
  },
]

const selectedKeys = ref<number[]>([])

const rowSelection = reactive<TableRowSelection>({
    type: 'checkbox',
    showCheckedAll: true
})

// 在组件挂载后，将selectedKeys设置为所有数据的id
onMounted(() => {
    selectedKeys.value = props.data.map(item => item.id)
})

// 监视selectedKeys的变化，并在变化时向父组件发送更新
watch(selectedKeys, (newVal) => {
    emit('update:selectedKeys', newVal)
})

</script>

<template>
    <a-table class="classify-table" row-key="id" :columns="columns" :data="props.data" :row-selection="rowSelection" v-model:selectedKeys="selectedKeys" />
</template>

<style scoped>
.classify-table {
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>