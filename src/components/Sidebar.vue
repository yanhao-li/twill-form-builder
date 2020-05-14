<template>
  <div id="sidebar">
    <AvailableFieldsList />
  </div>
</template>

<script>
import AvailableFieldsList from './AvailableFieldsList'
export default {
  components: {
    AvailableFieldsList,
  },
}
</script>

<style lang="scss" scoped>
#sidebar {
  width: 300px;
  padding: 0 20px 0 0;
}
</style>
