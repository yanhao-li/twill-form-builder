<template>
  <div id="sidebar">
    <SettingList v-if="fieldSettingMode" />
    <AvailableFieldsList v-else />
  </div>
</template>

<script>
import AvailableFieldsList from './AvailableFieldsList'
import SettingList from './SettingList'
export default {
  components: {
    AvailableFieldsList,
    SettingList,
  },
  computed: {
    fieldSettingMode() {
      return this.$store.state.fieldSettingMode
    },
  },
}
</script>

<style lang="scss" scoped>
#sidebar {
  width: 300px;
  padding: 0 20px 0 0;
  overflow-y: scroll;
}
</style>
