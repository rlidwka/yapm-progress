var request = require('request')

require('./')
  .enable(100)
  .intercept(process.stderr)
  .intercept(process.stdout)
  .output(process.stderr)
  .add('npm', request('https://registry.npmjs.org/npm'))
  .add('commander', request('https://registry.npmjs.org/commander'))
