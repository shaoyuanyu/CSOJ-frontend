<script setup lang="ts">

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <a-card class="a-card">
      <h2 :style="{ textAlign: 'center' }">{{ props.data.title }}</h2>
      <a-progress
        :percent="data.progress"
        :style="{ width: '100%' }"
        :steps="data.num"
        :stroke-width="10"
      />
    </a-card>
  </div>
</template>

<style scoped>
.a-card {
  width: 80%;
  margin: 0px auto 10px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}
</style>
