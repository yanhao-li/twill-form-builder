<template>
  <div class="setting__list">
    <h1>Title</h1>
    <FormItem label="test">
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
}
</script>

<style lang="scss" scoped>
.setting__list {
  position: relative;
  height: 100%;
  width: 100%;
}

.setting__list__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
