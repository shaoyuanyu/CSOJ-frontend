<script setup lang="ts">
import type { DescData } from '@arco-design/web-vue'
// models
import type { Problem } from '@/models/problem'
import { onMounted, ref, watch } from 'vue'
// components
// import CodeEditor from '@/components/code_editor/CodeEditor.vue'
import MarkdownViewer from '@/components/markdown/MarkdownViewer.vue'
import SubmissionsPanel from '@/components/submission_record/SubmissionsPanel.vue'
// store
import { useLangStore } from '@/stores/lang'

// Props
const props = defineProps<{
  problem: Problem
}>()

const langStore = useLangStore()

const basicInfo = ref<DescData[]>([
  { label: '时间限制', value: '- ms' },
  { label: '内存限制', value: '- MB' },
  { label: '提交次数', value: '-' },
  { label: '通过次数', value: '-' },
  { label: '通过率', value: '-' }
])

// 获取难度Tag的颜色
function getLevelTagColor(level: string): string {
  switch (level) {
    case '1':
      return 'arcoblue'
    case '2':
      return 'blue'
    case '3':
      return 'cyan'
    case '4':
      return 'green'
    case '5':
      return 'lime'
    case '6':
      return 'gold'
    case '7':
      return 'orange'
    case '8':
      return 'orangered'
    case '9':
      return 'magenta'
    case '10':
      return 'red'
    default:
      return 'gray'
  }
}

// 更新信息(由language或problem变更引起)
function updateBasicInfo(): void {
  let timeLimit = -1
  let memoryLimit = -1
  let matched = false

  props.problem.judgeConfig.forEach((judgeConfig) => {
    if (judgeConfig.language == langStore.lang || (!matched && judgeConfig.language == 'Others')) {
      matched = true
      timeLimit = judgeConfig.timeLimit
      memoryLimit = judgeConfig.memoryLimit
      console.log('匹配到: ', judgeConfig.language)
    }
  })

  basicInfo.value[0].value = timeLimit + ' ms'
  basicInfo.value[1].value = memoryLimit + ' MB'
  basicInfo.value[2].value = `${props.problem.submitCount}`
  basicInfo.value[3].value = `${props.problem.acceptedCount}`
  basicInfo.value[4].value =
    props.problem.submitCount === 0
      ? '暂无数据'
      : `${((props.problem.acceptedCount / props.problem.submitCount) * 100).toFixed(1)} %`
}

watch(props, () => {
  updateBasicInfo()
})

watch(langStore, () => {
  updateBasicInfo()
})

onMounted(() => {
  updateBasicInfo()
})
</script>

<template>
  <div class="problem-display-card">
    <!-- 页面导航栏 -->
    <a-page-header
      :style="{ background: 'var(--color-bg-2)' }"
      :title="problem.title"
      :show-back="false"
      class="problem-page-header"
    >
      <template #subtitle>
        <a-tag :color="getLevelTagColor(problem.difficultLevel)" bordered>
          {{ problem.difficultLevel }}级
        </a-tag>
      </template>

      <template #breadcrumb>
        <a-breadcrumb>
          <a-breadcrumb-item>题库</a-breadcrumb-item>
          <a-breadcrumb-item>分类</a-breadcrumb-item>
        </a-breadcrumb>
      </template>
    </a-page-header>

    <!-- 信息区域 -->
    <a-tabs
      animation
      default-active-key="1"
      lazy-load
      size="medium"
      type="rounded"
      style="height: 100%"
    >
      <a-tab-pane key="1" title="浏览题目">
        <a-scrollbar style="height: calc(100vh - 121px); overflow-y: auto">
          <!-- 题目内容 -->
          <!-- 此处高度存在问题，可能是控件的问题，考虑换成MDX(https://github.com/mdx-js/mdx/tree/main) -->
          <!-- <markdown-viewer :text="problem.content" /> -->
          <a-typography class="text-area">
            <a-typography-title :heading="5" bold> 题目描述 </a-typography-title>
            <a-typography-paragraph v-for="(content, key) in problem.content" :key="key">
              {{ content }}
            </a-typography-paragraph>
          </a-typography>

          <!-- 输入输出描述 -->
          <a-typography class="text-area">
            <a-typography-title :heading="5">输入描述</a-typography-title>
            <a-typography-paragraph>{{ problem.inputDescription }}</a-typography-paragraph>
            <a-typography-title :heading="5">输出描述</a-typography-title>
            <a-typography-paragraph>{{ problem.outputDescription }}</a-typography-paragraph>
          </a-typography>

          <br />

          <!-- 限制和提交信息描述 -->
          <a-descriptions
            :column="5"
            :data="basicInfo"
            layout="inline-vertical"
            style="margin: 0 32px 16px"
          />

          <!-- 样例/标签/参考答案 -->
          <a-collapse :bordered="false" :default-active-key="[]">
            <a-collapse-item key="0" header="样例" disabled>
              <a-space v-for="(example, key) in problem.exampleCases" :key="key">
                <!-- 此处需要替换组件，markdown为临时使用 -->
                <markdown-viewer :text="example.caseIn" />
                <markdown-viewer :text="example.caseOut" />
              </a-space>
            </a-collapse-item>

            <a-collapse-item key="1" header="题目标签" disabled>
              <a-space>
                <a-tag v-for="tag in problem.tags" :key="tag" color="arcoblue" size="large">
                  {{ tag }}
                </a-tag>
              </a-space>
            </a-collapse-item>

            <a-collapse-item key="2" header="参考答案" disabled>
              <!--               <code-editor :code="problem.refAnswer" disabled /> -->
            </a-collapse-item>
          </a-collapse>
        </a-scrollbar>
      </a-tab-pane>

      <a-tab-pane key="2" title="评论" disabled />

      <a-tab-pane key="3" title="提交记录">
        <submissions-panel :problem-id="props.problem.id" style="margin: 16px" type="problem" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped>
.problem-display-card {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  border-radius: 6px;
  background-color: #fff;
}

.problem-page-header {
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

/* 修改标签栏间距 */
:deep(.arco-tabs-content) {
  padding: 0;
}

/* 修改标签面板高度 */
:deep(.arco-tabs-pane) {
  /* overflow-y: auto; */
  height: calc(100vh - 121px);
  /* ？85px为经验值，非计算值？ */
  /* height: calc(100% - 85px); */
}

.text-area {
  width: 95%;
  margin: 0 auto;
}
</style>
