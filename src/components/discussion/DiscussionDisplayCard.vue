<script setup lang="ts">

const props = defineProps({
  title: String,
  description: String
})
</script>

<template>
    <a-card class="card-style" :title="props.title">
        <template #extra>
          <a-link>更多</a-link>
        </template>
        <p>{{ props.description }}</p>
    </a-card>
</template>

<style scoped>
.card-style {
    width: 100%;
    margin-top: 10px;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>