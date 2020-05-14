<template>
  <div class="field-container">
    <Container :title="data.label"></Container>
  </div>
</template>

<script>
import Container from 'twill-ui/lib/container'
import 'twill-ui/lib/container/style.css'
export default {
  components: {
    Container,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    computed: {
      fieldType() {
        return this.data.field
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.field-container {
  padding-bottom: 30px;
}
</style>
