<template>
  <div id="form">
    <Field
      v-for="(fieldData, index) in fields"
      :data="fieldData"
      :key="index"
    />
  </div>
</template>

<script>
import Field from './Field'
export default {
  components: { Field },
  data() {
    return {
      fields: [
        {
          field: 'container',
          label: 'Content',
          children: [
            {
              field: 'input',
              label: 'Input',
              placeholder: 'Please enter the content here',
              note: 'test note',
            },
          ],
        },
        {
          field: 'input',
          label: 'Input',
          placeholder: 'Please enter the content here',
          note: 'test note',
        },
        {
          field: 'input',
          label: 'Input',
          type: 'textarea',
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
