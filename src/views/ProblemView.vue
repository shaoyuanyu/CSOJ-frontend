<script setup lang="ts">
import { onMounted, ref } from 'vue'
// components
import ProblemDisplay from '@/components/problem/ProblemDisplay.vue'
import ProblemHandle from '@/components/problem/ProblemHandle.vue'
// api
import { queryProblemDetailById } from '@/api/problem'
// models
import type { Problem } from '@/models/problem'
import type { ProblemDetail } from '@/models/problemDetail'

// Props
const props = defineProps<{ id: string }>()

const size = ref(0.5)
const problemDetail = ref<ProblemDetail>({
  problemId: '',
  author: '',
  createdByUser: '',
  dateCreated: '',
  dateLastModified: '',
  difficulty: 0,
  examples: '',
  hint: '',
  inputDescription: '',
  isRemoteJudge: false,
  lastModifiedByUser: '',
  memoryLimit: 0,
  oiScore: 0,
  outputDescription: '',
  problemDescription: '',
  problemSource: '',
  problemType: 0,
  stackLimit: 0,
  timeLimit: 0,
  title: ''
})

const moved = ref(0)
// 分割面板移动完毕
function spiltMoved(): void {
  // 0/1切换
  moved.value = -moved.value + 1
}

onMounted(() => {
  queryProblemDetailById(props.id).then((res) => {
    problemDetail.value = res.data
    // console.log(problemDetail.value)
  })
})
</script>

<template>
  <div id="problem">
    <a-split v-model:size="size" :max="0.7" :min="0.3" class="box" @move-end="spiltMoved()">
      <template #first>
        <ProblemDisplay :problem="problemDetail" />
      </template>

      <template #second>
        <ProblemHandle :id="id" :moved="moved" />
      </template>
    </a-split>
  </div>
</template>

<style scoped>
/* 修改伸缩杆背景颜色 */
:deep(.arco-split-trigger-icon-wrapper) {
  background-color: var(--color-fill-2);
}

/* 修改伸缩杆宽度 */
:deep(.arco-split-trigger-icon) {
  margin: -1px;
}

/* 修改分割面板样式 */
/* :deep(.arco-split-pane) {
  border-radius: 6px;
  background-color: #fff;
} */

/* 修改背景 */
#problem {
  /* flex: 1; */
  padding: 8px;
  background-color: var(--color-fill-2);
}

/* 修改分割框高度 */
#problem .box {
  /* 60 + 8*2 */
  height: calc(100vh - 90px);
}
</style>
