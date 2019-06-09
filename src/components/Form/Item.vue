<template>
  <li>
    <div class="row">
        <div class="label">
          <label>
            {{ item.label }}<br>
            <small>{{ item.description }}</small>
          </label>
        </div>
        <Select :item="item" v-if="item.values" v-on:set-cfg-param="setCfgParam"/>
        <Input :item="item" v-else v-on:set-cfg-param="setCfgParam"/>
    </div>
  </li>
</template>

<script>
import Input from './Input'
import Select from './Select'

export default {
  name: 'Item',
  components: {
    Select,
    Input
  },
  props: {
    item: Object
  },
  methods: {
    setCfgParam: function (value) {
      this.$parent.user_cfg[this.item.command] = {
        command: this.item.command,
        value: value
      }
    }
  },
  created: function () {
    this.setCfgParam(this.item.default)
  }
}
</script>

<style>
  label {
    display: inline-block;
  }
  div.row {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .label {
    flex-grow: 1;
  }
  .form {
    width: 30%;
  }
  small {
    font-size: 0.7em;
    color: #99a3a3;
  }
  select, input {
    width: 90%;
    padding: 3px;
    margin: 10px;
    min-width: 250px;
    -ms-box-sizing:content-box;
    -moz-box-sizing:content-box;
    -webkit-box-sizing:content-box;
    box-sizing:content-box;
  }
</style>
