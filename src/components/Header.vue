<template>
  <header>
    <h1 class="brand">
      <img alt="Twill logo" src="../assets/logo.svg" />
      <Label
        text="Form Builder"
        style="background-color: #757575; color: #fff;"
      />
    </h1>
    <div class="control">
      <Button class="control-btn" @click="onClickShare">
        <Icon name="link" />
        Share
      </Button>
      <Button class="control-btn" @click="$store.commit('toggleSidebar')">
        <Icon :name="showSidebar ? 'preview' : 'editor'" />
        {{ showSidebar ? 'Preview' : 'Editor' }}
      </Button>
    </div>
  </header>
</template>

<script>
import Icon from './Icon'
import { getCurrentUrl } from '@/utils'
import { Button, Label } from 'twill-ui'
import { Notification } from 'twill-ui'

export default {
  components: {
    Button,
    Icon,
    Label,
  },
  computed: {
    showSidebar() {
      return this.$store.state.showSidebar
    },
  },
  methods: {
    onClickShare() {
      navigator.clipboard.writeText(getCurrentUrl())
      Notification({
        message: 'Link copied to clipboard',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
}

.brand {
  font-weight: 100;
  color: #8a8a8a;
  user-select: none;
}

.control {
  display: flex;
  flex-direction: row;
  margin-left: auto;
}

.control-btn {
  display: flex;
  align-items: center;
  height: 36px;
  background-color: #6a26d9;
  border: none;
  margin-right: 12px;

  &:focus {
    background-color: #6a26d9;
  }

  &:hover {
    background-color: #6a26d9;
  }

  .icon {
    margin-top: 1px;
    margin-right: 8px;
  }
}
</style>
