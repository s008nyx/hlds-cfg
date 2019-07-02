<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <Item v-for="(item, key) in o_cfg" :key="key" :item="item"/>
    </ul>
    <div class="stick">
      <button v-on:click="getConfig" ref="cfgButton">Get Config</button>
    </div>
    <div ref="modal" id="modal">
      <div class="modal__body">
        <button v-on:click="hideModal" class="close">Close</button>
        <transition name="fade">
        <pre v-if="output">{{ output }}</pre>
        </transition>
      </div>
    </div>
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
      output: '',
      show: false,
      disable: {}
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
    isDisabled: function () {
      for (let error in this.disable) {
        if (this.disable[error] === true) {
          return true
        }
      }
      return false
    },
    checkParam: function () {
      this.$refs.cfgButton.disabled = this.isDisabled()
    },
    getConfig: function () {
      let params = this.user_cfg
      this.output = ''

      for (let key in params) {
        if (typeof params[key].value !== 'undefined') {
          this.output += (params[key].command + ' "' + params[key].value + '"\n')
        } else {
          this.output += (params[key].command + '\n')
        }
      }
      setTimeout(this.showModal, 500)
    },
    showModal: function () {
      this.$refs.modal.style.display = 'flex'
    },
    hideModal: function () {
      this.$refs.modal.style.display = 'none'
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .close {
    margin: 10px;
  }

  #modal {
    display: none;
    position: fixed;
    justify-content: center;
    align-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
  }
  #modal .modal__body {
    background: whitesmoke;
    margin: 60px auto auto;
    width: 75vw;
    overflow-x: scroll;
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
  .stick {
    height: 40px;
    position: fixed;
    z-index: 9999;
    top: 0;
    padding: 5px;
    width: 100vw;
    background: #99a3a3;
  }

  li:nth-child(even) {
    background: whitesmoke;
  }
  a {
    color: #42b983;
  }
  button {
    width: 200px;
    padding: 10px;
    background: #525252;
    border: 1px solid black;
    color: aliceblue;
    transition: opacity .5s;
  }
  button:disabled {
    opacity: 0.2;
  }
  pre {
    text-align: left;
    padding: 20px;
    overflow: auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
