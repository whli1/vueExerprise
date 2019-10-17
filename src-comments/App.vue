<template>
  <div id="app">
    <header>
      <el-row :gutter="20">
          <el-col :span="21" :offset="3"><h1>请发表对Vue的评论</h1></el-col>
      </el-row>
    </header>
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="6" :offset="3"> <AddForm :addComment="addComment"></AddForm></el-col>
        <el-col :span="8" :offset="1"> <List :comments="comments" :delComment="delComment"></List></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import AddForm from './components/AddForm'
import List from './components/List'
export default {
  name: 'App',
  components: {
    AddForm,
    List
  },
  data () {
    return {
      comments: []
    }
  },
  methods: {
    addComment (comment) {
      this.comments.unshift(comment)
    },
    delComment (index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<style>
  header {
    background-color: #ececec;
    height: 330px;
  }
  h1{
    line-height: 300px;
    font-size: 60px;
  }
  .container{
    margin-top: 50px;
  }
</style>
