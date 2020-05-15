<template>
  <div id="form">
    <draggable :list="fields" group="fields">
      <Field
        v-for="(fieldData, index) in fields"
        :data="fieldData"
        :key="index"
      />
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Field from './Field'
export default {
  components: { Field, draggable },
  data() {
    return {
      fields: [
        {
          field: 'container',
          label: 'Content',
          children: [],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#form {
  display: flex;
  flex-direction: column;
  padding: 20px 70px;
  height: 100%;
  flex-grow: 1;
  background-color: #f2f2f2;
  color: #000;
  overflow-y: scroll;
}
</style>
