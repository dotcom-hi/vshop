import Vue from 'vue'
import App from './App'
import router from './router.js'
import './plugins/element.js'
import './assets/css/global.css'

Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
