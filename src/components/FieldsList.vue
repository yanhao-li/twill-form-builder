<template>
  <ul>
    <li v-for="(field, index) in availableFields" :key="index">
      <Icon :name="field.icon" />
      <span class="field__label">{{ field.label }}</span>
    </li>
  </ul>
</template>

<script>
import availableFields from '@/availableFields.json'
import Icon from './Icon.vue'
export default {
  components: { Icon },
  data() {
    return {
      availableFields: availableFields,
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0 0 100px 0;
  margin: 0 20px 0 0;
  list-style: none;
  overflow-y: scroll;
  li {
    display: flex;
    clear: both;
    flex-direction: row;
    align-items: center;
    height: 52px;
    width: 300px;
    padding: 0 16px;
    background-color: #292929;
    margin-bottom: 8px;
    cursor: pointer;
    .field__label {
      padding-left: 30px;
      font-size: 15px;
    }
    &:hover {
      background-color: #383838;
    }
  }
}
</style>
