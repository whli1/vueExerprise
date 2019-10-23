<template>
  <div class="home">
    <h3>Home组件</h3>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="News" name="first">
        <News></News>
      </el-tab-pane>
      <el-tab-pane label="Messages" name="second">
        <Messages></Messages>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import News from './news'
import Messages from './message'
export default {
  components: {
    News,
    Messages
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
