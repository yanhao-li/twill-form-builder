<template>
  <ul>
    <li v-for="(field, index) in availableFields" :key="index">
      <div class="icon-container">
        <Icon :name="field.icon" />
      </div>
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
    height: 50px;
    width: 300px;
    padding: 0 16px 0 0;
    background-color: #292929;
    margin-bottom: 8px;
    cursor: pointer;

    .field__label {
      padding-left: 10px;
      font-size: 15px;
      user-select: none;
    }

    &:hover {
      background-color: #383838;
    }

    .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
