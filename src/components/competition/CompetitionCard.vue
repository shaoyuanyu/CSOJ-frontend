<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { CompetitionDisplay } from '@/models/competition.d.ts'
const router = useRouter()

const props = defineProps({
  competition: {
    type: Object as () => CompetitionDisplay,
    default: () => ({})
  }
})

const handleRowClick = () => {
  const routePath = '/competition/competitionSection'
  router.push({ path: routePath, query: { id: props.competition.id } })
}

const convertSecondsToHours = (seconds: number) => {
  return (seconds / 3600).toFixed(1)
}

const hasCompetitionEnded = (startTime: string, duration: number) => {
  const endTime = new Date(startTime).getTime() + duration * 1000
  return Date.now() > endTime
}
</script>

<!-- CompetitionCard.vue -->
<template>
  <a-list-item @click="handleRowClick" class="list-item">
    <a-list-item-meta
      :title="competition.title"
      :description="'开始时间: ' + competition.start_time + '持续时间' + competition.duration"
    >
      <template #avatar>
        <a-avatar shape="square">
          <img alt="avatar" src="/material/Competition.jpg" />
        </a-avatar>
      </template>
      <template #description>
        <div>
          <icon-calendar />
          开始时间: {{ competition.start_time }}&nbsp;&nbsp;&nbsp;&nbsp;
          <!--这里用来添加宽度 可删除-->
          <icon-schedule />
          持续时间: {{ convertSecondsToHours(competition.duration) }} 小时
        </div>
      </template>
    </a-list-item-meta>
    <template #extra>
      <a-tag v-if="hasCompetitionEnded(competition.start_time, competition.duration)" color="red"
        >已结束</a-tag
      >
      <a-tag v-else color="green">进行中</a-tag>
    </template>
  </a-list-item>
</template>

<style scoped>
.list-item {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-item:hover {
  background-color: #f5f5f5; /* 灰色 */
}
</style>
