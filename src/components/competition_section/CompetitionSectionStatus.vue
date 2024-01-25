<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

// 上方传入的data中包含主键ID
// 可以通过主键向数据库索要相关数据
// 形成下方的题目列表
const problemData = ref([
  {
    runID: 5281,
    problemTitle: '测试',
    status: 'Partial Accepted',
    score: 90,
    runTime: '107ms',
    runMemory: '1.5MB',
    codeLength: '342B',
    language: 'C++',
    judgeSource: 'judger-alone',
    author: 'root',
    commitTime: null,
  },
])

const handleRowClick = (record: any) => {
  router.push({ path: `/problem/${record.problemID}` })
}
</script>

<template>
  <a-table
    :data="problemData"
    @row-click="handleRowClick"
    :style="{ marginTop: '5px', cursor: 'pointer' }"
  >
    <template #columns>
      <a-table-column title="Run ID" data-index="runID" align="center"></a-table-column>
      <a-table-column title="题目" data-index="problemTitle" align="center"></a-table-column>
      <a-table-column title="状态" data-index="status" align="center">
        <template #cell="{ record }">
          <a-tag color="blue">{{ record.status }}</a-tag>
        </template>
      </a-table-column>
      <a-table-column title="分数" data-index="score" align="center">
        <template #cell="{ record }">
          <a-tag v-if="record.score != null" color="green">{{ record.score }}</a-tag>
        </template>
      </a-table-column>
      <a-table-column title="运行时间" data-index="runTime" align="center"></a-table-column>
      <a-table-column title="运行内存" data-index="runMemory" align="center"></a-table-column>
      <a-table-column title="代码长度" data-index="codeLength" align="center"></a-table-column>
      <a-table-column title="语言" data-index="codeLength" align="center"></a-table-column>
      <a-table-column title="判题源" data-index="judgeSource" align="center"></a-table-column>
      <a-table-column title="作者" data-index="author" align="center"></a-table-column>
      <a-table-column title="提交时间" data-index="commitTime" align="center"></a-table-column>
    </template>
  </a-table>
</template>

<style scoped></style>
