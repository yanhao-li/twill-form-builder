<template>
  <div id="app">
    <Header />
    <div class="content">
      <Sidebar v-if="showSidebar" />
      <Form />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Form from './components/Form.vue'
import Sidebar from './components/Sidebar.vue'
import { decodeToJSON, getUrlParam } from '@/utils'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    Sidebar,
  },
  computed: {
    formName() {
      return this.$store.state.formName
    },
    showSidebar() {
      return this.$store.state.showSidebar
    },
  },
  watch: {
    formName() {
      this.updatePageTitle(this.formName)
    },
  },
  mounted() {
    this.updatePageTitle(this.formName)
    const code = getUrlParam('code')
    if (code) {
      const { formName, fields } = JSON.parse(decodeToJSON(code))
      this.$store.commit('updateFormName', formName)
      this.$store.commit('updateFields', fields)
    }
  },
  methods: {
    updatePageTitle(newTitle) {
      document.title = newTitle + ' - Twill Form Builder'
    },
  },
}
</script>

<style lang="scss">
html,
body {
  display: flex;
  margin: 0;
  flex-direction: column;
  background-color: #161616;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  padding: 0 20px 20px 20px;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
  overflow: hidden;
}

.content {
  display: flex;
  flex-direction: row;
  height: calc(100% - 70px);
}
</style>
