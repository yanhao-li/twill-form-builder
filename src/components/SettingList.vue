<template>
  <div class="setting__list">
    <h1 class="header">{{ field ? field.label : '' }} properties</h1>
    <FormItem label="Label" class="dark">
      <Input />
    </FormItem>
    <div class="setting__list__footer">
      <Button
        type="primary"
        style="flex-grow: 1; margin-right: 12px; background-color: #269e41;"
      >
        Done
      </Button>
      <Button
        type="secondary"
        @click="exitFieldSettingMode"
        style="flex-grow: 1; background-color: #393939; border: none;"
      >
        Cancel
      </Button>
    </div>
  </div>
</template>

<script>
import { Button, FormItem, Input } from 'twill-ui'
import { getAvailableFieldByFieldName } from '@/availableFields'

export default {
  components: {
    Button,
    FormItem,
    Input,
  },
  methods: {
    exitFieldSettingMode() {
      this.$store.commit('setFieldSettingMode', false)
    },
  },
  computed: {
    fieldSettingMode() {
      return this.$store.state.fieldSettingMode
    },
    field() {
      return getAvailableFieldByFieldName(this.fieldSettingMode.field)
    },
  },
}
</script>

<style lang="scss" scoped>
.setting__list {
  // temp workaround for fixed+transform bug: https://stackoverflow.com/questions/2637058/positions-fixed-doesnt-work-when-using-webkit-transform
  transform: translateX(0);
  position: absolute;
  height: 100%;
  width: 300px;

  .header {
    font-weight: normal;
    font-size: 15px;
  }
}

.setting__list__footer {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 0px;
  width: 300px;
}

.dark {
  ::v-deep {
    .input__label {
      color: #fff;
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
