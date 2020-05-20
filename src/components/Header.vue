<template>
  <header>
    <h1 class="brand">
      <img alt="Twill logo" src="../assets/logo.svg" />
      Form Builder
    </h1>
    <div class="control">
      <Button class="share-btn" @click="onClickShare">
        <Icon name="link" />
        Share
      </Button>
    </div>
  </header>
</template>

<script>
import Icon from './Icon'
import { Button } from 'twill-ui'
import { Notification } from 'twill-ui'

export default {
  components: {
    Button,
    Icon,
  },
  methods: {
    onClickShare() {
      const currentURL = window.location.href
      navigator.clipboard.writeText(currentURL)
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
  margin-left: auto;
}

.share-btn {
  display: flex;
  align-items: center;
  height: 36px;
  background-color: #6a26d9;
  border: none;
  .icon {
    margin-top: 1px;
    margin-right: 8px;
  }
}
</style>
