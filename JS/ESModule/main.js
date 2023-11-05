import foo from './foo'
import bar from './bar'

import('./foo.js').then((m) => {
  console.log('main', m.default)
})

console.log('main', foo, bar)
