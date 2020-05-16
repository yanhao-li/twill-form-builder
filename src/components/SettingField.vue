<template>
  <div class="setting__field">
    <template v-if="type === 'input'">
      <FormItem :label="label">
        <Input />
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
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
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
