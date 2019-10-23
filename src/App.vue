<template>
  <div>
    <el-row class="tac">
      <el-col :span="3">
        <h3>Router Basic - 01</h3>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          router
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="aboutPage">
            <i class="el-icon-menu"></i>
            <span slot="title">Aboout</span>
          </el-menu-item>
          <el-menu-item index="homePage">
            <i class="el-icon-setting"></i>
            <span slot="title">home</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import About from './components/about'
import Home from './components/home'

export default {
  components: {
    About,
    Home
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
</style>
