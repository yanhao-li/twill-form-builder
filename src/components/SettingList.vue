<template>
  <div class="setting__list">
    <h1 class="header">{{ field ? field.label : '' }} properties</h1>
    <SettingField
      v-for="(setting, index) in field.settings"
      :key="index"
      :type="setting.type"
      :label="setting.label"
    />
    <div class="setting__list__footer">
      <Button
        type="primary"
        style="flex-grow: 1; margin-right: 12px; background-color: #269e41;"
      >
        Done
      </Button>
      <Button
        type="secondary"
        @click="exitFieldSettingMode"
        style="flex-grow: 1; background-color: #393939; border: none;"
      >
        Cancel
      </Button>
    </div>
  </div>
</template>

<script>
import { Button } from 'twill-ui'
import SettingField from './SettingField'
import { getAvailableFieldByFieldName } from '@/availableFields'

export default {
  components: {
    Button,
    SettingField,
  },
  methods: {
    exitFieldSettingMode() {
      this.$store.commit('setFieldSettingMode', false)
    },
  },
  computed: {
    fieldSettingMode() {
      return this.$store.state.fieldSettingMode
    },
    field() {
      return getAvailableFieldByFieldName(this.fieldSettingMode.field)
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
  overflow-y: scroll;
  padding-bottom: 100px;
  box-sizing: border-box;

  .header {
    font-weight: normal;
    font-size: 15px;
  }
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
