import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aboutPage',
      name: 'aboutPage',
      component: resolve => require(['@/components/about.vue'], resolve)
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: resolve => require(['@/components/home.vue'], resolve)
    }
  ]
})
