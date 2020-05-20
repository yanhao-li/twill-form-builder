<template>
  <draggable :value="fields" @input="onUpdate" group="fields" class="droppable">
    <transition-group name="field-list" class="droppable">
      <Field
        v-for="field in fields"
        :data="field"
        :key="field.id"
        @delete="deleteField"
        @update="updateField"
      />
    </transition-group>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    // circular reference: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
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
    onUpdate(newFields) {
      this.$emit('update:fields', newFields)
    },
    deleteField(id) {
      this.$emit(
        'update:fields',
        this.fields.filter((field) => field.id !== id),
      )
    },
    updateField(id, newField) {
      const newFields = this.fields.map((field) => {
        if (field.id === id) {
          return newField
        }
        return field
      })
      console.log('updateField: ', newFields)
      this.$emit('update:fields', newFields)
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
