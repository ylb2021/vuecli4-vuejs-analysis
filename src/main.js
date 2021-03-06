// import Vue from 'vue'
import Vue from "web/entry-runtime"
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
