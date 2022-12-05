<template>
  <div id="app">
    <input v-model="code"/>
    <Root/>
  </div>
</template>

<script>
import Root from 'components/Root.vue'

export default {
  name: 'App',
  components: {
    Root
  },
  provide(){
    return {
      getCode: () => this.code
    }
  },
  data(){
    return {
      code: '1'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
