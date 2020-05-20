<template>
  <div class="form__name__container">
    <div
      class="form__name__input"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <input
        v-model="formName"
        @focus="onFocus"
        @blur="onBlur"
        :class="{ active: active }"
      />
      <span>{{ formName }}</span>
    </div>
    <Icon name="edit" />
    <Button class="reset__btn" @click="onResetClick">Reset</Button>
  </div>
</template>

<script>
import Icon from './Icon'
import { Button } from 'twill-ui'
export default {
  components: {
    Icon,
    Button,
  },
  data() {
    return {
      active: false,
      focusing: false,
    }
  },
  computed: {
    formName: {
      get() {
        return this.$store.state.formName
      },
      set(newName) {
        return this.$store.commit('updateFormName', newName)
      },
    },
  },
  methods: {
    onFocus() {
      this.active = true
      this.focusing = true
    },
    onBlur() {
      this.active = false
      this.focusing = false
    },
    onMouseEnter() {
      this.active = true
    },
    onMouseLeave() {
      this.active = this.focusing
    },
    onResetClick() {
      this.$store.commit('updateFields', [])
    },
  },
}
</script>

<style lang="scss" scoped>
.form__name__container {
  display: flex;
  height: 70px;
  border-bottom: 1px solid #e5e5e5;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
}

.form__name__input {
  display: block;
  position: relative;
  font-weight: 600;
  margin-right: 28px;
  input {
    position: absolute;
    display: inline-block;
    font-size: 15px;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    border-radius: 5px;
    padding: 2px 10px;
  }

  input.active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  span {
    box-sizing: content-box;
    font-size: 15px;
    display: inline-block;
    visibility: hidden;
    position: relative;
  }
}

.reset__btn {
  margin-left: auto;
  background-color: grey;
  border: none;
  &:hover {
    background-color: grey;
  }
}
</style>
