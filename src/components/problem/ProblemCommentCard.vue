<script setup lang="ts">
import { useRouter } from 'vue-router'
import { VMarkdownView } from 'vue3-markdown'

const router = useRouter()
const props = defineProps({
  id: Number,
  title: String,
  content: String
})

</script>

<template>
  <div class="router-link-active card-container">
      <a-card class="card-style" :title="props.title">
          <template #extra>
            <a-link>更多</a-link>
          </template>
          <VMarkdownView :content="content">
          </VMarkdownView>
      </a-card>
  </div>
</template>

<style scoped>
.card-container {
    width: 90%;
    margin: auto;
}

.card-style {
    width: 100%;
    margin-top: 10px;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: box-shadow 0.3s ease-in-out; /* 添加过渡效果 */
}

.card-style:hover {
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.3); /* 鼠标悬停时加深阴影 */
}

.router-link-active {
    text-decoration: none;
}
</style>