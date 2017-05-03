<template>
  <div id="app">
    <img src="./assets/logo.png">
    <pre>foo: {{ proxy.foo }}</pre>
    <pre>bar: {{ proxy.bar }}</pre>
    <pre>baz: {{ proxy.baz }}</pre>
    <child :value="proxy.hello">{{ proxy.goodbye }}</child>
    <child v-if="show" :value="proxy.hello">{{ proxy.again }}</child>
    <br>
    <br>
    <functional-child :proxy="proxy">goodbye</functional-child>
    <functional-child :proxy="proxy">again</functional-child>
    <br>
    <br>
    <fetch-log></fetch-log>
  </div>
</template>

<script>
import {makeMixin} from './proxy'
import FetchLog from './components/FetchLog'
import Child from './components/Child'
import FunctionalChild from './components/FunctionalChild'

const proxies = {
  proxy: 'proxyTarget'
}

export default {
  mixins: [makeMixin(proxies)],
  name: 'app',
  data () {
    return {
      show: false
    }
  },
  created () {
    setTimeout(() => { this.show = true }, 250)
  },
  components: {
    Child,
    FunctionalChild,
    FetchLog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
