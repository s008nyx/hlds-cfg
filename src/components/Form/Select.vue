<template>
  <div class="form">
    <select v-model="selected">
      <option disabled value="">Выберите один из вариантов</option>
      <option v-for="(variant, key) in item.values" :key="key" :value="variant">
        {{ variant }}
      </option>
    </select>
    <span>Выбрано: {{ selected }}</span>
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
