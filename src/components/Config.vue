<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul id="example-1">
      <Item v-for="item in cfg.variables" :item="item"/>
    </ul>
  </div>
</template>

<script>
import Item from './Form/Item'

export default {
  name: 'Config',
  components: {
    Item
  },
  data () {
    return {
      msg: 'Server Variables Configurator',
      cfg: {
        "variables":
          [
            {
              "command": "sv_alltalk",
              "type": "int",
              "values": [0, 1, 2],
              "label": "Label",
              "description": "text description",
              "default": 1
            },
            {
              "command": "sv_alltyalk",
              "type": "int",
              "label": "Label",
              "description": "text description",
              "default": 1
            }
          ]
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
