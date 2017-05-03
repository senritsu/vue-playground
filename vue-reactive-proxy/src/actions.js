
const delay = t => new Promise(resolve => {
  setTimeout(resolve, t * 1000)
})

let counter = 0
let updateCounter = 0
export const fetchLog = []

export function fetch ({state, commit}, buffer) {
  const i = updateCounter++
  console.log(`fetch ${i}: fetching ${JSON.stringify(buffer)}`)
  fetchLog.push(`fetch ${i}: ${JSON.stringify(buffer)}`)
  delay(3 + 2 * Math.random())
  .then(() => {
    console.log(`fetch ${i}: retrieved ${JSON.stringify(buffer)}, saving to store...`)
    fetchLog.push(`fetch ${i} completed`)
    for (const name in buffer) {
      for (const property of buffer[name]) {
        commit('set', {name, property, value: `[fetch ${i}] ${counter++}`})
      }
    }
    console.log(`fetch ${i}: commits finished`)
  })
}
