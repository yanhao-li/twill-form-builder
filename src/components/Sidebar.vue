<template>
  <div id="sidebar">
    <SettingList v-if="settingMode" />
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
    settingMode() {
      return this.$store.state.settingMode
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
