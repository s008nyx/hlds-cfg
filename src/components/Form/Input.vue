<template>
  <div class="form">
    <input
      type="number"
      :step="item.step ? item.step : 1"
      :min="item.min"
      :max="item.max"
      v-model="value"
      v-on:input="$emit('set-cfg-param', value)"
      v-if="item.type === 'int'"
    />
    <input
      type="number"
      :step="item.step ? item.step : 0.1"
      :min="item.min"
      :max="item.max"
      v-model="value"
      v-on:input="$emit('set-cfg-param', value)"
      v-else-if="item.type === 'float'"
    />
    <input
      type="text"
      v-model="value"
      v-on:input="$emit('set-cfg-param', value)"
      v-else
    />
    <small v-if="error" class="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      patterns: {
        int: /^[-0-9]+$/,
        float: /^[-]?\d+(\.\d+)?$/,
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
      this.$parent.$parent.disable[this.item.command] = false

      if (pattern) {
        if (!pattern.test(this.value)) {
          this.error = 'Неверный формат'
          this.$parent.$parent.disable[this.item.command] = true
        }
      }

      if (typeof this.item.min !== 'undefined' && this.value < this.item.min) {
        this.error = 'Значение меньше допустимого (' + this.item.min + ')'
        this.$parent.$parent.disable[this.item.command] = true
      }
      if (typeof this.item.max !== 'undefined' && this.value > this.item.max) {
        this.error = 'Значение больше допустимого (' + this.item.max + ')'
        this.$parent.$parent.disable[this.item.command] = true
      }

      this.$parent.$parent.checkParam()
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
