<template>
  <div id="form">
    <Droppable :fields.sync="fields" />
  </div>
</template>

<script>
import Droppable from './Droppable'
export default {
  components: {
    Droppable,
  },
  computed: {
    fields: {
      get() {
        return this.$store.state.fields
      },
      set(fields) {
        return this.$store.commit('updateFields', fields)
      },
    },
  },
  methods: {},
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
