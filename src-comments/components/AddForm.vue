<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="评论内容">
      <el-input type="textarea" v-model="form.content" :rows="8"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">发布</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        content: ''
      }
    }
  },
  props: {
    addComment: {
      type: Function,
      required: true
    }
  },
  methods: {
    onSubmit () {
      const username = this.form.username
      const content = this.form.content
      if (!username || !content) {
        alert('用户名或评论内容不能为空')
        return
      }

      const comment = {
        username,
        content
      }
      this.addComment(comment)
      this.form.content = ''
      this.form.username = ''
    }
  }
}
</script>
