<template lang="html">
  <div style="border: 1px solid gray; display: inline-block; width: 600px;">
    Log
    <pre>{{ fetchLog.join('\n') }}</pre>
  </div>
</template>

<script>
import {fetchLog} from '../actions'
export default {
  data () {
    return {fetchLog}
  }
}
</script>

<style lang="css">
</style>
