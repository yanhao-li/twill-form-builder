<template>
  <div id="form">
    <Label text="asd" />
  </div>
</template>

<script>
import Label from 'twill-ui/lib/label'
export default {
  components: {
    Label,
  },
}
</script>

<style lang="scss" scoped>
#form {
  display: flex;
  min-height: 1000px;
  flex-grow: 1;
  background-color: #f2f2f2;
  color: #000;
}
</style>
