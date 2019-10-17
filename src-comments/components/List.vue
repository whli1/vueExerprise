<template>
  <div id="cList">
    <h3>评论回复</h3>
    <h2 v-show="comments.length===0">暂无评论，请在左边添加</h2>
    <Item v-for="(comment, index ) in comments" :key="index" :comment="comment" :delComment="delComment" :index="index"></Item>
  </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'cList',
  components: {
    Item
  },
  // 只指定属性名
  props: ['comments', 'delComment']
}
</script>

<style scoped>
h3{
  margin-bottom: 20px;
}
</style>
