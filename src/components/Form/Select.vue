<template>
  <div class="form">
    <select v-model:default="item.default">
      <option v-for="variant in item.values" v-bind:value="variant">
        {{ variant }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    item: Object
  }
}
</script>

<style scoped>
</style>
