<template>
  <footer class="sidebar__footer">
    <Button
      type="primary"
      @click="$emit('button-one-click')"
      style="flex: 1; margin-right: 12px; background-color: #269e41;"
    >
      {{ buttonOneLabel }}
    </Button>
    <Button
      type="secondary"
      @click="$emit('button-two-click')"
      style="flex: 1; background-color: #393939; border: none;"
    >
      {{ buttonTwoLabel }}
    </Button>
  </footer>
</template>

<script>
import { Button } from 'twill-ui'
export default {
  components: {
    Button,
  },
  props: {
    buttonOneLabel: {
      type: String,
      required: true,
    },
    buttonTwoLabel: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
.sidebar__footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #161616;
  justify-content: space-between;
  padding-top: 20px;
}
</style>
