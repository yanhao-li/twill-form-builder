<template>
  <draggable :list="fields" group="fields" class="droppable">
    <Field
      v-for="field in fields"
      :data="field"
      :key="field.id"
      @delete="deleteField"
    />
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    Field: () => import('./Field'),
    draggable,
  },
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteField(id) {
      this.data.children = this.data.children.filter((field) => field.id !== id)
    },
  },
}
</script>

<style lang="scss" scoped>
.droppable {
  height: 100%;
  min-height: 100px;
  width: 100%;
}
</style>
