import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

new Vue({
  render: h => h(App),
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  }
}).$mount('#app')
