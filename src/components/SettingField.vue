<template>
  <div class="setting__field">
    <template v-if="type === 'input'">
      <FormItem :label="label">
        <Input v-model="value" />
      </FormItem>
    </template>
  </div>
</template>

<script>
import { FormItem, Input } from 'twill-ui'
export default {
  components: {
    FormItem,
    Input,
  },
  props: {
    field: {
      type: Object,
      required: true,
    },
    setting: {
      type: Object,
      required: true,
    },
  },
  computed: {
    type() {
      return this.setting.type
    },
    label() {
      return this.setting.label
    },
    model() {
      return this.setting.model
    },
    value: {
      get() {
        return this.field[this.model]
      },
      set(val) {
        this.$store.commit('setFieldSettingMode', {
          ...this.field,
          [this.model]: val,
        })
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.setting__field {
  ::v-deep {
    .input__label {
      color: #fff;
      font-size: 15px;
    }
    .input__field {
      background-color: #222222;
      border: 1px solid #4e4e4e;
      input {
        color: #fff;
      }
    }
  }
}
</style>
