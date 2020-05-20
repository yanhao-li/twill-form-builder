<template>
  <div
    class="field--container"
    :class="{
      'field--container__hovering': hovering,
    }"
    @click.stop="onClick"
    @mouseover.stop="hovering = true"
    @mouseleave.stop="hovering = false"
  >
    <!-- Container -->
    <template v-if="fieldType === 'container'">
      <Container :title="data.label">
        <Droppable :fields.sync="children" />
      </Container>
    </template>

    <!-- Input -->
    <template v-else-if="fieldType === 'input'">
      <FormItem :label="data.label" :note="data.note">
        <Input
          v-model="inputValue"
          :placeholder="data.placeholder"
          :type="data.type ? data.type : 'text'"
          :maxlength="parseInt(data.maxlength)"
        />
      </FormItem>
    </template>

    <!-- Checkbox -->
    <template v-else-if="fieldType === 'checkbox'">
      <Checkbox v-model="inputValue" label="Checkbox" />
    </template>

    <!-- Radio -->
    <template v-else-if="fieldType === 'radio'">
      <Radio v-model="inputValue" label="Male" value="male" />
    </template>

    <!-- WYSIWYG -->
    <template v-else-if="fieldType === 'wysiwyg'">
      <Editor
        placeholder="'write text ehre'"
        :maxlength="200"
        :showCounter="false"
        :edit-source="true"
        initial-value="preset text"
      />
    </template>

    <!-- Date Picker -->
    <template v-else-if="fieldType === 'date-picker'">
      <DatePicker placeholder="Select the date" />
    </template>

    <template v-else> WIP: {{ data.field }} </template>

    <div class="field__control" v-if="hovering">
      <button class="field__control__btn" @click.stop.prevent="onClickSetting">
        <Icon name="setting" />
      </button>
      <button class="field__control__btn" @click.stop.prevent="onClickDelete">
        <Icon name="trash" />
      </button>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
import Droppable from './Droppable'
import {
  Container,
  FormItem,
  Input,
  Checkbox,
  Radio,
  Editor,
  DatePicker,
} from 'twill-ui'

export default {
  components: {
    Droppable,
    Container,
    Input,
    FormItem,
    Icon,
    Checkbox,
    Radio,
    Editor,
    DatePicker,
  },
  data() {
    return {
      inputValue: '',
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
    id() {
      return this.data.id
    },
    fieldType() {
      return this.data.field
    },
    children: {
      get() {
        return this.data.children ? this.data.children : []
      },
      set(newChildren) {
        this.onUpdate({
          ...this.data,
          children: newChildren,
        })
      },
    },
  },
  methods: {
    onClick() {
      const fieldSettingMode = this.$store.state.fieldSettingMode
      if (
        !Object.prototype.hasOwnProperty.call(fieldSettingMode, 'id') ||
        fieldSettingMode.id !== this.id
      ) {
        this.$store.commit('setFieldSettingMode', this.data)
      }
    },
    onClickDelete() {
      this.$emit('delete', this.data.id)
      this.$store.commit('setFieldSettingMode', false)
    },
    onClickSetting() {
      const fieldSettingMode = this.$store.state.fieldSettingMode
      if (
        Object.prototype.hasOwnProperty.call(fieldSettingMode, 'id') &&
        fieldSettingMode.id === this.id
      ) {
        this.$store.commit('setFieldSettingMode', false)
      } else {
        this.$store.commit('setFieldSettingMode', this.data)
      }
    },
    onUpdate(val) {
      this.$emit('update', this.id, val)
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
