<template>
  <div class="form">
    <input type="text" :value="item.default"/>
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
      }
    }
  },
  props: {
    item: Object
  }
}
</script>

<style scoped>
</style>
