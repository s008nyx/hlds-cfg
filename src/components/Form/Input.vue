<template>
  <div class="form">
    <input type="text" v-model="value" v-on:input="$emit('set-cfg-param', value)"/>
    <small v-if="error" class="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      patterns: {
        int: /^[0-9]+$/,
        float: /^\d+(\.\d+)?$/,
        string: /^[_\-'\s0-9a-zA-Zа-яА-Я]+$/
      },
      value: this.item.default,
      error: ''
    }
  },
  watch: {
    value: 'validateItem'
  },
  props: {
    item: Object
  },
  methods: {
    validateItem: function () {
      let pattern = this.patterns[this.item.type]
      this.error = ''
      this.$parent.$parent.disabled = false

      if (pattern) {
        if (!pattern.test(this.value)) {
          this.error = 'Неверный формат'
          this.$parent.$parent.disabled = true
        }
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
