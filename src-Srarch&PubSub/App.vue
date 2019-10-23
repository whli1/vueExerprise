<template>
  <div>
    <section>
      <h3 class="head">Search Github Users</h3>
      <Search></Search>
    </section>
    <Foot></Foot>
  </div>
</template>

<script>
import Search from './components/search'
import Foot from './components/foot'

export default {
  components: {
    Search,
    Foot
  }
}
</script>
<style scoped>
  section{
    width: 80%;
    height: 350px;
    margin: 0 auto;
    background-color: #efefef;
  }
  .head{
    padding-top: 150px;
    font-size: 36px;
    margin-left: 150px;
  }

</style>
