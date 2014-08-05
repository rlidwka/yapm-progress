Usage:

```js
var request = require('request')

require('yapm-progress')
  .enable(true)
  .intercept(process.stderr)
  .intercept(process.stdout)
  .output(process.stderr)
  .add('npm', request('https://registry.npmjs.org/npm'))
  .add('commander', request('https://registry.npmjs.org/commander'))
```
