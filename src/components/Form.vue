<template>
  <div id="form">
    <Container title="Content" />
  </div>
</template>

<script>
import Container from 'twill-ui/lib/container'
import 'twill-ui/lib/container/style.css'

export default {
  components: {
    Container,
  },
}
</script>

<style lang="scss" scoped>
#form {
  display: flex;
  flex-direction: column;
  padding: 20px 70px;
  min-height: 1000px;
  flex-grow: 1;
  background-color: #f2f2f2;
  color: #000;
}
</style>
