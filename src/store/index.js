import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formName: 'Form Name',
    fields: [],
    fieldSettingMode: false,
  },
  mutations: {
    updateFormName(state, newName) {
      state.formName = newName
    },
    setFieldSettingMode(state, field) {
      if (field !== false) {
        this.commit('updateField', field)
      }

      state.fieldSettingMode = field
    },
    updateFields(state, newFields) {
      console.log('store commits - updateFields: ', newFields)
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
