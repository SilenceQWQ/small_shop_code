import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import './plugins/vant.js'
import './assets/css/normalize.css'
import './assets/css/base.css'
import store from './store'

Vue.prototype.$store = store
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
