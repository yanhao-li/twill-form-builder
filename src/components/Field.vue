<template>
  <div
    class="field--container"
    :class="{
      'field--container__hovering': hovering,
    }"
    @mouseover.stop="hovering = true"
    @mouseleave.stop="hovering = false"
  >
    <template v-if="fieldType === 'container'">
      <Container :title="data.label">
        <Droppable v-model="children" />
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
      <button class="field__control__btn" @click.stop.prevent="onDelete">
        <Icon name="trash" />
      </button>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
import Droppable from './Droppable'
import { Container, FormItem, Input } from 'twill-ui'

export default {
  components: {
    Droppable,
    Container,
    Input,
    FormItem,
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
    children: {
      get() {
        return this.data.children ? this.data.children : []
      },
      set(newValue) {
        this.data.children = newValue
      },
    },
  },
  methods: {
    onDelete() {
      this.$emit('delete', this.data.id)
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

.field--container.sortable-ghost {
  opacity: 0.3;
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
