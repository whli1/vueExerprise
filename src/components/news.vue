<template>
  <div>
    <ul class="news" v-for="(item, index) in news" :key="index">
      <li>{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      news: [
        'news01',
        'news02',
        'news03'
      ]
    }
  }
}
</script>
