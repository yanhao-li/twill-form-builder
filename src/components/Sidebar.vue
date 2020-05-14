<template>
  <div id="sidebar">
    <FieldsList />
  </div>
</template>

<script>
import FieldsList from './FieldsList'
export default {
  components: {
    FieldsList,
  },
}
</script>

<style lang="scss" scoped>
#sidebar {
  width: 300px;
  padding: 0 20px 0 0;
}
</style>
