<template>
  <div class="form">
    <select v-model="selected" v-on:change="$emit('set-cfg-param', selected)">
      <option disabled value="">Выберите один из вариантов</option>
      <option v-for="(variant, key) in item.values" :key="key" :value="variant.value">
        {{ variant.desc ? variant.desc : variant.value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    item: Object
  },
  data () {
    return {
      selected: this.item.default
    }
  }
}
</script>

<style scoped>
</style>
