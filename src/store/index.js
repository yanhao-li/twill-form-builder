import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: [],
    fieldSettingMode: false,
  },
  mutations: {
    setFieldSettingMode(state, bool) {
      state.fieldSettingMode = bool
    },
  },
})
