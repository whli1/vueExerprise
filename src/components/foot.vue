<template>
  <div id="container">
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-else-if="loading">LOADING...</h2>
    <h2 v-else-if="errorMsg">遇到错误，信息如下：{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src='user.avatar_url' style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PunSub from 'pubsub-js'
import axios from 'axios'
export default {
  data () {
    return {
      firstView: true,
      loading: false,
      users: null,
      errorMsg: ''
    }
  },
  mounted () {
  //  订阅搜索消息
    PunSub.subscribe('search', (msg, searchName) => {
      const url = `https://api.github.com/search/users?q=${searchName}`
      //  改变当前状态
      this.firstView = false
      this.loading = true
      //  发送ajax请求
      axios.get(url).then(response => {
        const res = response.data
        const users = res.items.map(item => ({
          url: item.html_url,
          avatar_url: item.avatar_url,
          name: item.login
        }))
        this.loading = false
        this.users = users
        // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        this.loading = false
        this.errorMsg = '请求失败'
      })
    })
  }
}
</script>
<style scoped>
  #container {
    width: 80%;
    margin: 40px auto;
  }
  h2 {
    font-size: 30px;
  }
  .card {
    float: left;
    width: 31.5%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
