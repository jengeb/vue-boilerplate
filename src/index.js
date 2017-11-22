import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import routes from './routes'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
