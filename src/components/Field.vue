<template>
  <div
    class="field--container"
    :class="{
      'field--container__hovering': hovering,
    }"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <template v-if="fieldType === 'container'">
      <Container :title="data.label">
        <draggable
          :list="children"
          group="fields"
          style="min-height: 100px; width: 100%;"
        >
          <field
            v-for="(field, index) in children"
            :data="field"
            :key="index"
          />
        </draggable>
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
    <div class="field__control" v-if="hovering">
      <button class="field__control__btn">
        <Icon name="setting" />
      </button>
      <button class="field__control__btn">
        <Icon name="trash" />
      </button>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Icon from './Icon'
import { Container, FormItem, Input } from 'twill-ui'

export default {
  name: 'field',
  components: {
    Container,
    Input,
    FormItem,
    draggable,
    Icon,
  },
  data() {
    return {
      hovering: false,
    }
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

<style lang="scss" scoped>
.field--container {
  position: relative;
  padding: 10px;
}

.field--container__hovering {
  border: 1px dashed #d2bef4;
}

.field__control {
  position: absolute;
  top: 0;
  right: 0;
  .field__control__btn {
    background-color: #f0e9fb;
    outline: none;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 2px;
    margin: 4px 4px 0 0;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
