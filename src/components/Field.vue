<template>
  <div class="field-container">
    <template v-if="fieldType === 'container'">
      <Container :title="data.label"></Container>
    </template>
    <template v-else-if="fieldType === 'input'">
      <FormItem
        label="Default Input"
        note="Non urna aliquam pulvinar purus nascetur scelerisque"
      >
        <Input placeholder="Optional placeholder text" />
      </FormItem>
    </template>
  </div>
</template>

<script>
import { Container, FormItem, Input } from 'twill-ui'

export default {
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
  },
}
</script>

<style lang="scss" scoped></style>
