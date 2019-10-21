<template>
  <div>
    <input type="text" v-model="searchName" placeholder="enter the name you search" @keyup.enter="search"/>
    <button @click="search">Search</button>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  data () {
    return {
      searchName: ''
    }
  },
  methods: {
    search () {
      const searchName = this.searchName.trim()
      if (searchName) {
        PubSub.publish('search', searchName)
      }
    }
  }
}
</script>
<style scoped>
  div{
    margin-top: 20px;
    margin-left: 150px;
    font-size: 30px;
  }
  input{
    height: 30px;
    width: 300px;
    font-size: 24px;
  }
  button{
    height: 35px;
    width: 100px;
    font-size: 24px;
  }
</style>
