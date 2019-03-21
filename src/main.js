import Vue from 'vue'
import Notifications from 'vue-notification'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/scss/main.scss'
import 'vue-material-design-icons/styles.css'
import 'vue-swatches/dist/vue-swatches.min.css'

Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
