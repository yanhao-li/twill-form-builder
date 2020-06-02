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
      <t-container :title="data.label">
        <Droppable :fields.sync="children" />
      </t-container>
    </template>

    <!-- Input -->
    <template v-else-if="fieldType === 'input'">
      <t-form-item :label="data.label" :note="data.note">
        <t-input
          v-model="inputValue"
          :placeholder="data.placeholder"
          :type="data.type ? data.type : 'text'"
          :maxlength="parseInt(data.maxlength)"
        />
      </t-form-item>
    </template>

    <!-- Checkbox -->
    <template v-else-if="fieldType === 'checkbox'">
      <t-checkbox v-model="inputValue" :label="data.label" />
    </template>

    <!-- Radio -->
    <template v-else-if="fieldType === 'radio'">
      <t-radio v-model="inputValue" :label="data.label" :value="data.value" />
    </template>

    <!-- WYSIWYG -->
    <template v-else-if="fieldType === 'wysiwyg'">
      <t-editor :showCounter="false" :edit-source="data.editSource" />
    </template>

    <!-- Date Picker -->
    <template v-else-if="fieldType === 'date-picker'">
      <t-date-picker placeholder="Select the date" />
    </template>

    <!-- Dropdown -->
    <template v-else-if="fieldType === 'dropdown'">
      <t-select :options="dropdownOptions" v-model="dropdownSelected"> </t-select>
    </template>

    <!-- Repeater -->
    <template v-else-if="fieldType === 'repeater'">
      <t-repeater :model="repeaterModel" v-model="repeaterData">
        <template v-slot="{ repeaterItem }">
          <t-form-item label="Default Username">
            <t-input
              v-model="repeaterItem.username"
              type="text"
              placeholder="Optional placeholder text"
              :maxlength="150"
            />
          </t-form-item>
        </template>
      </t-repeater>
    </template>

    <template v-else> WIP: {{ data.field }} </template>

    <div class="field__control" v-if="hovering">
      <button class="field__control__btn" @click.stop="onClickSetting">
        <Icon name="setting" />
      </button>
      <button class="field__control__btn" @click.stop="onClickDelete">
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
  Select,
  Repeater,
} from 'twill-ui'

export default {
  components: {
    Droppable,
    't-container': Container,
    't-input': Input,
    't-form-item': FormItem,
    Icon,
    't-checkbox': Checkbox,
    't-radio': Radio,
    't-editor': Editor,
    't-date-picker': DatePicker,
    't-select': Select,
    't-repeater': Repeater,
  },
  data() {
    return {
      inputValue: '',
      hovering: false,
      dropdownOptions: ['option 1', 'option 2', 'option 3', 'option 4'],
      dropdownSelected: null,
      repeaterModel: {
        username: '',
      },
      repeaterData: [],
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
