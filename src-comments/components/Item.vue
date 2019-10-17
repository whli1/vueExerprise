<template>
  <el-row type="flex" class="row-bg" justify="space-between">
    <el-col :span="18">
      <p class="user">{{comment.username}}<span>说：</span></p>
      <p class="content">{{comment.content}}</p>
    </el-col>
    <el-col :span="6">
      <button @click="deleteComment">删除</button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  // 指定属性名和属性值
  props: {
    comment: Object,
    delComment: {
      type: Function,
      required: true
    },
    index: Number
  },
  methods: {
    deleteComment () {
      const {comment, index, delComment} = this
      if (window.confirm(`确认删除${comment.username}的评论吗`)) {
        delComment(index)
      }
    }
  }
}
</script>

<style scoped>
  .row-bg{
    border: 0.5px solid black;
    padding: 10px;
  }
  .user{
    font-size: 25px;
  }
  .content{
    text-indent: 36px;
  }
  button{
    float: right;
  }

</style>
