<script setup lang="ts">
import ProblemsPanel from '@/components/problems/ProblemsPanel.vue'
</script>

<template>
  <div id="problem-manage">
    <problems-panel class="panel" title="我创建的题目" type="mine" />
  </div>
</template>

<style scoped>
#problem-manage .panel {
  width: 70vw;
  min-width: 1000px;
  margin: 16px auto;
}
</style>