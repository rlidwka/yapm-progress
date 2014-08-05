Progress bar extracted from yapm.

## Usage:

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

## API:

### add(name, request)

Track a new request.

### enable(interval)

If argument is `true`/`false` - enable or disable progress bar respectively.

If argument is a number - enable progress bar with specified refresh interval in milliseconds (100 is the default).

### intercept(stream)

Intercept all stream.write calls, and whenever someone is calling it, do an update().

### output(stream)

Set stream where progress bar will be displayed.

### update()

Refresh progress bar.

