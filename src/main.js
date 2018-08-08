import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetyper from 'vue-typer'

Vue.config.productionTip = false

Vue.use(vuetyper)

new Vue({
  router,
  store,
  vuetyper,
  render: h => h(App)
}).$mount('#app')
