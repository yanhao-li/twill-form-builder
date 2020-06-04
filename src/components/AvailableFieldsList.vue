<template>
  <div class="fields__list__container">
    <ul>
      <draggable
        :sort="false"
        :clone="cloneField"
        :group="{ name: 'fields', pull: 'clone', put: false }"
        v-model="availableFields"
      >
        <li
          v-for="field in availableFields"
          :key="field.default.field"
          class="available-field-item"
        >
          <div class="icon-container">
            <Icon :name="field.icon" />
          </div>
          <span class="field__label">{{ field.label }}</span>
        </li>
      </draggable>
    </ul>
    <SidebarFooter
      :dark="true"
      button-one-label="New Form"
      button-two-label="Reset"
      @button-one-click="onNewFormClick"
      @button-two-click="onResetClick"
    />
  </div>
</template>

<script>
import SidebarFooter from './SidebarFooter'
import draggable from 'vuedraggable'
import availableFields from '@/availableFields'
import Icon from './Icon.vue'
import shortid from 'shortid'
import { getCurrentUrlWithoutQuery } from '@/utils'
export default {
  components: { Icon, draggable, SidebarFooter },
  data() {
    return {
      availableFields: availableFields,
    }
  },
  methods: {
    cloneField(field) {
      // temp solution for deep clone
      return JSON.parse(
        JSON.stringify({
          id: shortid.generate(),
          ...field.default,
        }),
      )
    },
    onNewFormClick() {
      window.open(getCurrentUrlWithoutQuery(), '_blank')
    },
    onResetClick() {
      this.$store.commit('reset')
    },
  },
}
</script>

<style lang="scss" scoped>
.fields__list__container {
  position: relative;
  width: 300px;
  height: 100%;
  overflow-y: hidden;
}
ul {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  padding-bottom: 100px;
  margin: 0;
  list-style: none;
  overflow-y: scroll;
  box-sizing: border-box;
}

.available-field-item {
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
    color: #fff;
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

.available-field-item.sortable-ghost {
  opacity: 0.2;
}
</style>
