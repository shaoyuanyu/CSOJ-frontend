<script setup lang="ts">
import { defineProps } from 'vue'
import { ref } from 'vue'
import {
  IconHeart,
  IconMessage,
  IconStar,
  IconStarFill,
  IconHeartFill,
} from '@arco-design/web-vue/es/icon';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const like = ref(false);
const star = ref(false);
const onLikeChange = () => {
    like.value = !like.value;
};
const onStarChange = () => {
    star.value = !star.value;
};
// 根据上面的主键获取评论
const comments = ref([
{
    author: '王书豪',
    content: '测试内容1',
    datetime: '1 hour',
},
{
    author: '书豪王',
    content: '测试内容2',
    datetime: '2 hour',
},
]);

</script>

<template>
    <a-card class="a-card">
        <a-textarea placeholder="快来写下你的评论吧~" :auto-size="{minRows:5}" style="margin-bottom: 10px; margin-top: 10px;"/>
        <div style="display: flex; justify-content: space-between; margin-bottom: 20px; margin-top: 10px;">
            <a-rate/>
            <a-button type="primary"><icon-check-circle-fill />提交评论</a-button>
        </div>
        <!--下方是评论内容-->
        <a-comment style="margin-top: 10px;" v-for="(comment, index) in comments" :key="index" :content="comment.content" :author="comment.author" :datetime="comment.datetime">
            <template #actions>
                <span class="action" key="heart" @click="onLikeChange">
                    <span v-if="like">
                        <IconHeartFill :style="{ color: '#f53f3f' }" />
                    </span>
                    <span v-else>
                        <IconHeart />
                    </span>
                    {{ 83 + (like ? 1 : 0) }}
                </span>
                <span class="action" key="star" @click="onStarChange">
                    <span v-if="star">
                        <IconStarFill style="{ color: '#ffb400' }" />
                    </span>
                    <span v-else>
                        <IconStar />
                    </span>
                    {{ 3 + (star ? 1 : 0) }}
                </span>
                <span class="action" key="reply">
                    <IconMessage /> 回复
                </span>
            </template>
            <template #avatar>
                <a-avatar>
                    <img
                        alt="avatar"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                    />
                </a-avatar>
            </template>
        </a-comment>
    </a-card>
</template>

<style scoped>
.a-card {
  width: 80%;
  margin: 0px auto 10px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}
</style>
