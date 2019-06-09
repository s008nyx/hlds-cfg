<template>
  <div class="form">
    <ul>
      <li v-for="(variant, key) in item.alt_values.values" :key="key">
        <input type="checkbox" :id="variant.value" :value="variant.value" v-model="checked" v-if="item.alt_values.multiply">
        <input type="radio" :id="variant.value" :value="variant.value" v-model="checked" v-else>
        <label :for="variant.value">{{ variant.desc }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Alt',
  props: {
    item: Object
  },
  data () {
    return {
      checked: []
    }
  },
  watch: {
    checked: 'check'
  },
  methods: {
    check: function () {
      let flags = this.checked.join('')
      this.$emit('set-cfg-param', flags ? flags : this.item.default)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    font-size: 12px;
  }
  li {
    display: inline-block;
    padding: 10px;
    margin: 0 10px;
    width: 90%;
    max-width: 1200px;
    background: #ececec;
  }
</style>
