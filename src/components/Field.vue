<template>
  <div class="field-container">
    <template v-if="fieldType === 'container'">
      <Container :title="data.label">
        <tfb-field
          v-for="(field, index) in children"
          :data="field"
          :key="index"
        />
      </Container>
    </template>
    <template v-else-if="fieldType === 'input'">
      <FormItem
        label="Default Input"
        note="Non urna aliquam pulvinar purus nascetur scelerisque"
      >
        <Input
          :placeholder="data.placeholder"
          :type="data.type ? data.type : 'text'"
        />
      </FormItem>
    </template>
  </div>
</template>

<script>
import { Container, FormItem, Input } from 'twill-ui'

export default {
  name: 'tfb-field',
  components: {
    Container,
    Input,
    FormItem,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fieldType() {
      return this.data.field
    },
    children() {
      return this.data.children ? this.data.children : []
    },
  },
}
</script>

<style lang="scss" scoped></style>
