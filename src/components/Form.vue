<template>
  <div id="form">
    <FormName />
    <Droppable :fields.sync="fields" class="form__content" />
  </div>
</template>

<script>
import Droppable from './Droppable'
import FormName from './FormName'

import { encodeFromJSON, updateUrlQuery } from '@/utils'
export default {
  components: {
    Droppable,
    FormName,
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
  watch: {
    // update url when fields get changed
    fields(newFields) {
      updateUrlQuery(encodeFromJSON(newFields))
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
#form {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  background-color: #f2f2f2;
  color: #000;
  overflow-y: scroll;
}

.form__content {
  padding: 20px 70px;
  width: 100%;
  box-sizing: border-box;
}
</style>
