import Vue from 'vue'
import Router from 'vue-router'
import ComingSoon from './views/ComingSoon.vue'
import Home from './components/Home.vue'

Vue.use(Router)


export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/soon',
      name: 'ComingSoon',
      component: ComingSoon
    }
  ]
})
