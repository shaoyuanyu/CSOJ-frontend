<script setup lang="ts">

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <a-card class="card-left">
      <div style="display: flex; justify-content: space-between; padding: 16px">
        <span style="text-align: left">训练编号</span>
        <span style="text-align: right">{{ props.data.id }}</span>
      </div>

      <div style="display: flex; justify-content: space-between; padding: 16px">
        <span>训练权限</span>
        <a-tag color="red">{{ props.data.auth }}</a-tag>
      </div>

      <div style="display: flex; justify-content: space-between; padding: 16px">
        <span>训练分类</span>
        <a-tag color="green">{{ props.data.categoryName }}</a-tag>
      </div>

      <div style="display: flex; justify-content: space-between; padding: 16px">
        <span style="text-align: left">总题数</span>
        <span style="text-align: right">{{ props.data.num }}</span>
      </div>

      <div style="display: flex; justify-content: space-between; padding: 16px">
        <span style="text-align: left">作者</span>
        <span style="text-align: right">{{ props.data.author }}</span>
      </div>

      <div style="display: flex; justify-content: space-between; padding: 16px">
        <span style="text-align: left">最近更新</span>
        <span style="text-align: right">{{ props.data.gmtModified }}</span>
      </div>
    </a-card>

    <div class="spacer"></div>

    <a-card class="card-right">
      <h3>训练简介</h3>
      <div>{{ props.data.brief }}</div>
    </a-card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
}

.card-left {
  width: 30%;
  margin-top: 5px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
}
.card-right {
  width: 70%;
  margin-top: 5px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
}

.spacer {
  width: 5px;
}
</style>
