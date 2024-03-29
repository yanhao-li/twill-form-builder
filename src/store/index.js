import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formName: 'Form Name',
    fields: [],
    fieldSettingMode: false,
    showSidebar: true,
  },
  mutations: {
    updateFormName(state, newName) {
      state.formName = newName
    },
    setFieldSettingMode(state, field) {
      if (field !== false) {
        this.commit('updateField', field)
      }
      state.showSidebar = true
      state.fieldSettingMode = field
    },
    updateFields(state, newFields) {
      state.fields = newFields
    },
    // Find and replace a field with the new field data
    updateField(state, newField) {
      state.fields = backtracking(state.fields, newField)
    },
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar
    },
    reset(state) {
      state.formName = 'Form Name'
      state.fields = []
    }
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
