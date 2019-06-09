<template>
  <div class="form">
    <ul>
      <li v-for="variant in item.alt_values.values">
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
  }
}
</script>

<style scoped>
</style>
