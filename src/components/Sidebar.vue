<template>
  <div id="sidebar">
    <transition name="setting__list">
      <SettingList v-if="fieldSettingMode" key="setting-list" />
    </transition>
    <transition name="available__fields__list">
      <AvailableFieldsList
        v-if="!fieldSettingMode"
        key="available-fields-list"
      />
    </transition>
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
  position: relative;
  width: 300px;
  padding: 0 20px 0 0;
  overflow: hidden;
}

.setting__list-enter-active,
.setting__list-leave-active,
.available__fields__list-enter-active,
.available__fields__list-leave-active {
  transition: all 0.5s;
}

.setting__list-enter,
.setting__list-leave-to {
  opacity: 0;
  transform: translateX(120%);
}

.available__fields__list-enter,
.available__fields__list-leave-to {
  opacity: 0;
  transform: translateX(-120%);
}
</style>
