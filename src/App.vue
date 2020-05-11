<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style lang="scss">
html,
body {
  background-color: #000;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  padding: 0 20px;
}
</style>
