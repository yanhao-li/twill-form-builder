<template>
  <div class="setting__list">
    <div class="setting__list__content">
      <h1 class="header">
        {{ fieldPrototype ? fieldPrototype.label : '' }} properties
      </h1>
      <SettingField
        v-for="(setting, index) in fieldPrototype.settings"
        :key="index"
        :field="field"
        :setting="setting"
      />
    </div>
    <SidebarFooter
      button-one-label="Done"
      button-two-label="Cancel"
      @button-one-click="exitFieldSettingMode"
      @button-two-click="revertChanges"
    />
  </div>
</template>

<script>
import SettingField from './SettingField'
import SidebarFooter from './SidebarFooter'
import { getAvailableFieldByFieldName } from '@/availableFields'

export default {
  components: {
    SettingField,
    SidebarFooter,
  },
  data() {
    return {
      originalField: this.$store.state.fieldSettingMode,
    }
  },
  methods: {
    exitFieldSettingMode() {
      this.$store.commit('setFieldSettingMode', false)
    },
    revertChanges() {
      this.$store.commit('setFieldSettingMode', this.originalField)
      this.exitFieldSettingMode()
    },
  },
  computed: {
    fieldSettingMode() {
      return this.$store.state.fieldSettingMode
    },
    fieldPrototype() {
      return getAvailableFieldByFieldName(this.fieldSettingMode.field)
    },
    field() {
      return this.fieldSettingMode
    },
    fieldSettings() {
      return this.field.settings
    },
  },
}
</script>

<style lang="scss" scoped>
.setting__list {
  // temp workaround for fixed+transform bug: https://stackoverflow.com/questions/2637058/positions-fixed-doesnt-work-when-using-webkit-transform
  position: absolute;
  height: 100%;
  width: 300px;
  overflow-y: hidden;
  box-sizing: border-box;

  .header {
    font-weight: normal;
    font-size: 15px;
  }
}

.setting__list__content {
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 100px;
  box-sizing: border-box;
}

.setting__list__footer {
  position: fixed;
  display: flex;
  flex-direction: row;
  background-color: #161616;
  justify-content: space-between;
  bottom: 20px;
  width: 300px;
}
</style>
