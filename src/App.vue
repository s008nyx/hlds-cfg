<template>
  <div id="app">
    <Config/>
  </div>
</template>

<script>
import Config from './components/Config'

export default {
  name: 'App',
  components: {
    Config
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
