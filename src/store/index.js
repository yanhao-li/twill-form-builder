import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: [
      {
        id: 123,
        field: 'container',
        label: 'Content',
        children: [],
      },
    ],
    fieldSettingMode: {
      id: 123,
      field: 'container',
      label: 'Content',
      children: [],
    },
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
