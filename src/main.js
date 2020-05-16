import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fields: [],
  },
  mutations: {},
})

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
