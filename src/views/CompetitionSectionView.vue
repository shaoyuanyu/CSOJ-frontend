<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import CompetitionSectionHead from '@/components/competition_section/CompetitionSectionHead.vue'
import CompetitionSectionBrief from '@/components/competition_section/CompetitionSectionBrief.vue'
import CompetitionSectionProblem from '@/components/competition_section/CompetitionSectionProblem.vue'
import CompetitionSectionStatus from '@/components/competition_section/CompetitionSectionStatus.vue'
import CompetitionSectionRank from '@/components/competition_section/CompetitionSectionRank.vue'
import CompetitionSectionNotice from '@/components/competition_section/CompetitionSectionNotice.vue'
import CompetitionSectionComments from '@/components/competition_section/CompetitionSectionComments.vue'
import CompetitionSectionReAssessment from '@/components/competition_section/CompetitionSectionReAssessment.vue'
const route = useRoute()
const id = ref(route.query.id)

// 上面传入了比赛主键id
// 可以根据主键id查询数据库得到下列数据
// 并建立下列数组

const competition = {
    id: 1,
    title: 'W-J(普及组)测试-3',
    start_time: '2024-01-13 09:00:00',
    duration: 3600,
    visible: true
}

// 创建一个响应式引用来跟踪当前选中的菜单项
const selectedKey = ref('0')

// 在handleClick方法中更新selectedKey
const handleClick = (key: string) => {
  selectedKey.value = key
}

// 使用toRefs将ref转换为可以在模板中直接访问的对象
const state = toRefs({ selectedKey })
</script>

<template>
  <CompetitionSectionHead :data="competition" />
  <div :style="{ display: 'flex' }">
    <a-card class="a-card">
      <div class="menu">
        <a-menu
          mode="horizontal"
          :selected-keys="[state.selectedKey.value]"
          @menu-item-click="handleClick"
        >
          <a-menu-item key="0"><icon-home />比赛简介</a-menu-item>
          <a-menu-item key="1"><icon-list />题目</a-menu-item>
          <a-menu-item key="2"><icon-computer />状态</a-menu-item>
          <a-menu-item key="3"><icon-bar-chart />排名</a-menu-item>
          <a-menu-item key="4"><icon-sound-fill />公告</a-menu-item>
          <a-menu-item key="5"><icon-thumb-up />评论</a-menu-item>
          <a-menu-item key="6"><icon-refresh />重新评测</a-menu-item>
        </a-menu>
      </div>
    </a-card>
  </div>

  <CompetitionSectionBrief v-if="state.selectedKey.value === '0'" :data="competition" />
  <CompetitionSectionProblem v-if="state.selectedKey.value === '1'" :data="competition" />
  <CompetitionSectionStatus v-if="state.selectedKey.value === '2'" :data="competition" />
  <CompetitionSectionRank v-if="state.selectedKey.value === '3'" :data="competition" />
  <CompetitionSectionNotice v-if="state.selectedKey.value === '4'" :data="competition" />
  <CompetitionSectionComments v-if="state.selectedKey.value === '5'" :data="competition" />
  <CompetitionSectionReAssessment v-if="state.selectedKey.value === '6'" :data="competition" />
</template>

<style scoped>
.a-card {
  width: 80%;
  margin: 0 auto 10px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}
</style>

