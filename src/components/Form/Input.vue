<template>
  <div class="form">
    <input type="text" v-model="value" v-on:input="$emit('set-cfg-param', value)" :pattern="patterns[item.type] ? patterns[item.type] : ''"/>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      patterns: {
        int: '^[ 0-9]+$',
        float: '\\d+(\\.\\d{2})?'
      },
      value: this.item.default
    }
  },
  props: {
    item: Object
  }
}
</script>

<style scoped>
</style>
