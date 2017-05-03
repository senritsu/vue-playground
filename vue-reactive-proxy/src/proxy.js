import Vue from 'vue'
import store from './store'

let buffer = {}
function bufferFetch (name, property) {
  if (!Object.keys(buffer).length) {
    Vue.nextTick(() => {
      const request = buffer
      buffer = {}
      store.dispatch('fetch', request)
    })
  }
  if (!buffer[name]) {
    buffer[name] = new Set()
  }
  buffer[name].add(property)
  console.log(`buffering '${name}.${property}' => ${JSON.stringify(buffer)}`)
}

function makeProxy (alias, name) {
  store.commit('create', name)
  return new Proxy(store.state[name], {
    get (target, property, proxy) {
      if (property === '_alias') {
        return alias
      }
      if (property === '_name') {
        return name
      }
      const existingValue = target[property]
      console.log(`get '${property}' => ${existingValue}`)
      if (target[property] === undefined) {
        bufferFetch(name, property)
      }
      return existingValue
    }
  })
}

export function makeMixin (proxies) {
  const computed = {}
  for (const alias in proxies) {
    const name = proxies[alias]
    computed[alias] = function () { return makeProxy(alias, name) }
  }
  return {computed}
}
