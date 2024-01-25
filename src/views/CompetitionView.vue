<script setup lang="ts">
import { ref } from 'vue'
import '@arco-design/web-vue/dist/arco.css'
import { useRouter } from 'vue-router'
import CompetitionCard from '@/components/competition/CompetitionCard.vue'
const router = useRouter()
// 比赛需要的相关数据
// id 主键
// title 比赛标题
// start_time	开始时间
// duration	比赛时长（s）
// visible	boolean		是否可见

// 创建一个响应式引用来存储比赛数据
// 需要从数据库获取
const competitions = ref([
  {
    id: 1,
    title: 'W-J(普及组)测试-3',
    start_time: '2024-01-13 09:00:00',
    duration: 3600,
    visible: true
  },
  {
    id: 2,
    title: 'W-J(普及组)测试-2',
    start_time: '2024-01-7 08:3-:00',
    duration: 3600,
    visible: true
  }
])
</script>

<template>
  <div>
    <a-card title="全部比赛">
      <a-list>
        <CompetitionCard
          v-for="competition in competitions"
          :key="competition.id"
          :competition="competition"
        />
      </a-list>
    </a-card>
  </div>
</template>

<style scoped></style>
