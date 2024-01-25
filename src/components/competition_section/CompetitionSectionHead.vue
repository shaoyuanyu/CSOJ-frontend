<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const calculateProgress = (startTime: string, duration: number): number => {
  const start = new Date(startTime);
  const now = new Date();
  const elapsed = now.getTime() - start.getTime();
  const totalDuration = duration * 1000;
  let progress = elapsed / totalDuration;
  progress = progress > 1 ? 1 : progress;
  return progress;
}

const progress = computed(() => calculateProgress(props.data.startTime, props.data.duration));

const hasCompetitionEnded = (startTime: string, duration: number) => {
  const endTime = new Date(startTime).getTime() + duration * 1000
  return Date.now() > endTime
}
</script>

<template>
  <div :style="{ display: 'flex' }">
    <a-card :style="{ width: '100%' }">
      <h2 :style="{ textAlign: 'center' }">{{ props.data.title }}</h2>
      <div :style="{ display: 'flex', justifyContent: 'space-between' }">
        <div :style="{ fontSize: '16px' }"><icon-clock-circle /> 开始时间：{{ props.data.start_time }}</div>
        <div :style="{ fontSize: '16px' }"><icon-clock-circle /> 结束时间：{{ new Date(new Date(props.data.start_time).getTime() + props.data.duration * 1000).toLocaleString() }}</div>
      </div>
      <a-progress :percent="progress" :stroke-width="10" :show-text='false' :style="{width:'100%', marginTop: '15px'}" />
      <div :style="{ display: 'flex', justifyContent: 'center', marginTop: '15px'}">
        <a-tag size="large" v-if="hasCompetitionEnded(props.data.start_time, props.data.duration)" color="red">已结束</a-tag>
        <a-tag size="large" v-else color="green">进行中</a-tag>
      </div>
    </a-card>
  </div>
</template>

<style scoped></style>
