<template lang="html">
  <div class="wrapper" style="display: inline-block">
    <div :style="style">prop: <span>{{ value || 'MISSING' }}</span></div>
    <br>
    <div :style="style">slot: <span><slot>MISSING</slot></span></div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    style () {
      if (!this.value) {
        return { border: '1px solid red' }
      }
    }
  }
}
</script>

<style lang="css" scoped>
.wrapper {
  background-color: #EEE;
  border: 1px solid #BBB;
  padding: 1rem;
}
</style>
