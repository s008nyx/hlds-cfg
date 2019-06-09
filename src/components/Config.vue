<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <ul id="example-1">
      <Item v-for="(item, key) in o_cfg" :key="key" :item="item"/>
    </ul>
    <button v-on:click="getConfig">Get Config</button>
    <div><pre>{{ output }}</pre></div>
  </div>
</template>

<script>
import Item from './Form/Item'
import axios from 'axios'

export default {
  name: 'Config',
  components: {
    Item
  },
  data () {
    return {
      title: 'Variables Configurator',
      o_cfg: {},
      user_cfg: {},
      output: ''
    }
  },
  beforeMount: function () {
    axios
      .get(this.$parent.$props.cfg)
      .then(response => {
        if (response.data.variables) {
          this.o_cfg = response.data.variables
        }
        if (response.data.title) {
          this.title = response.data.title
        }
      })
  },
  methods: {
    getConfig: function () {
      let params = this.user_cfg
      this.output = ''

      for (var key in params) {
        this.output += (params[key].command + ' "' + params[key].value + '"\n')
      }
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  padding: 10px;
  margin: 0 10px;
  width: 90%;
  max-width: 1200px;
  background: #ececec;
}

li:nth-child(even) {
  background: whitesmoke;
}
a {
  color: #42b983;
}
</style>
