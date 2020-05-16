import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: [],
    fieldSettingMode: false,
  },
  mutations: {
    setFieldSettingMode(state, field) {
      state.fieldSettingMode = field
    },
    updateFields(state, fields) {
      state.fields = fields
    },
  },
})
