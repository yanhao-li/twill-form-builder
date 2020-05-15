<template>
  <ul>
    <draggable
      :sort="false"
      :clone="cloneField"
      :group="{ name: 'fields', pull: 'clone', put: false }"
      v-model="availableFields"
    >
      <li v-for="(field, index) in availableFields" :key="index">
        <div class="icon-container">
          <Icon :name="field.icon" />
        </div>
        <span class="field__label">{{ field.label }}</span>
      </li>
    </draggable>
  </ul>
</template>

<script>
import draggable from 'vuedraggable'
import availableFields from '@/availableFields.json'
import Icon from './Icon.vue'
export default {
  components: { Icon, draggable },
  data() {
    return {
      availableFields: availableFields,
    }
  },
  methods: {
    cloneField(field) {
      return field.default
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0 0 100px 0;
  margin: 0;
  list-style: none;
  overflow-y: scroll;
  li {
    display: flex;
    clear: both;
    flex-direction: row;
    align-items: center;
    height: 50px;
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
