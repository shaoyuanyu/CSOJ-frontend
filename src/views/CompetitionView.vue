<script setup lang="ts">
import { ref } from 'vue'
import '@arco-design/web-vue/dist/arco.css'
import { useRouter } from 'vue-router'
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

//TODO:跳转以及跳转界面
const handleRowClick = (record: any) => {
  const routePath = '/train/trainsection'
  router.push({ path: routePath, query: { id: record.id } })
}

// 添加一个函数来将秒转换为小时
const convertSecondsToHours = (seconds: number) => {
  return (seconds / 3600).toFixed(1);
}

// 添加一个函数来判断比赛是否已经结束
const hasCompetitionEnded = (startTime: string, duration: number) => {
  const endTime = new Date(startTime).getTime() + duration * 1000;
  return Date.now() > endTime;
};
</script>

<template>
  <div>
    <a-card title="全部比赛">
      <a-list>
        <a-list-item
          v-for="competition in competitions"
          :key="competition.id"
          @click="handleRowClick"
          class="list-item"
        >
          <a-list-item-meta
            :title="competition.title"
            :description="'开始时间: ' + competition.start_time + '持续时间' + competition.duration"
          >
            <template #avatar>
              <a-avatar shape="square">
                <img alt="avatar" src="../../public/material/Competition.jpg" />
              </a-avatar>
            </template>
            <template #description>
              <div>
                <icon-calendar />
                开始时间: {{competition.start_time}}&nbsp;&nbsp;&nbsp;&nbsp; <!--这里用来添加宽度 可删除-->
                <icon-schedule />
                持续时间: {{convertSecondsToHours(competition.duration)}}
              </div>
            </template>
          </a-list-item-meta>
          <template #extra>
            <a-tag v-if="hasCompetitionEnded(competition.start_time, competition.duration)" color="red">已结束</a-tag>
            <a-tag v-else color="green">进行中</a-tag>
          </template>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
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