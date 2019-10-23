<template>
  <div>
    <ul v-for="(item, index) in messages" :key="index">
      <li><a :href="item.href">{{item.name}}</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      messages: [
        {
          name: 'message01',
          href: 'https://element.eleme.cn/#/zh-CN/component/tabs#tabs-events'
        },
        {
          name: 'message02',
          href: 'https://www.baidu.com'
        },
        {
          name: 'message03',
          href: 'https://v.qq.com/'
        }
      ]
    }
  }
}
</script>
