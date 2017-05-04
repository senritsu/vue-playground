export default {
  functional: true,
  render (h, context) {
    const key = context.slots().default[0].text
    const proxy = context.props.proxy
    const text = proxy[key]
    return !text
      ? h('span', {style: {border: '1px solid red', padding: '1rem'}, attrs: {title: `${proxy._alias} => ${proxy._name}.${key}`}}, 'no slot content')
      : h('span', {style: {border: '1px solid gray', padding: '1rem'}, attrs: {title: `${proxy._alias} => ${proxy._name}.${key}`}}, text)
  }
}
