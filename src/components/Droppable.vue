<template>
  <draggable :list="fields" group="fields" class="droppable">
    <transition-group name="field-list" class="droppable">
      <Field
        v-for="field in fields"
        :data="field"
        :key="field.id"
        @delete="deleteField"
      />
    </transition-group>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  model: {
    prop: 'fields',
    event: 'update',
  },
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
      this.$emit(
        'update',
        this.fields.filter((field) => field.id !== id),
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.droppable {
  display: block;
  height: 100%;
  min-height: 100px;
  width: 100%;
}

.field-list-move {
  transition: transform 0.5s;
}

.field-list-leave-active {
  transition: all 1s;
}

.field-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
