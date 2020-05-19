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
      if (field !== false) {
        this.commit('updateField', field)
      }

      state.fieldSettingMode = field
    },
    updateFields(state, newFields) {
      state.fields = newFields
    },
    // Find and replace a field with the new field data
    updateField(state, newField) {
      state.fields = backtracking(state.fields, newField)
    },
  },
})

const backtracking = (fields, newField) => {
  return fields.map((field) => {
    if (field.id === newField.id) {
      return newField
    }

    if (Object.prototype.hasOwnProperty.call(field, 'children')) {
      field.children = backtracking(field.children, newField)
    }

    return field
  })
}