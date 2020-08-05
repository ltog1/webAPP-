import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/reset.css'
import 'lib-flexible/flexible'
import '@/assets/iconfont/iconfont.css'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueLazyload, {
  preLoad: 1,
  attempt: 1,
  error: require('./assets/imgs/error.png'),
  loading: require('./assets/imgs/loading.gif')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
