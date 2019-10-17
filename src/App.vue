<template>
  <div v-if="!repoUrl">loading</div>
  <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted () {
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    //  发送axios请求获取数据
    axios.get(url).then(response => {
      const result = response.data
      const mostRepo = result.items[0]
      this.repoUrl = mostRepo.html_url
      this.repoName = mostRepo.name
      // eslint-disable-next-line handle-callback-err
    }).catch(error => {
      alert('请求失败')
    })
  }
}
</script>

<style>
</style>
