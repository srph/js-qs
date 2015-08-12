# Installation

- **qs.js** is available via [**bower**]

```bash
$ bower install srph-qs --save
```

 \* *The `--save` argument persists it to `bower.json`* 

- **qs.js** is available via [**npm**]

```bash
$ npm install srph-qs --save
```

\* *The `--save` argument persists it to `package.json`* 

# Usage

```js
var qs = require('srph-qs');

var str = qs.stringify({ first: 'Kier', last: 'Borromeo' }); // => '?first=Kier&last=Borromeo'
var obj = qs.parse(str); // => { first: 'Kier', last: 'Borromeo' }
```

See the [API Documentation]().

## Non-node users

If you are not using CommonJS `require` (or if you've never heard of any of those, you don't have to care), `qs.js` is exported as [UMD](https://github.com/umdjs/umd).

```js
// For AMD (Require.js)
define(['srph-qs'], function(qs) {
  qs.stringify(...);
});

// For browser-globals (Browser-only):
// Make sure to include the script (<script src="/path/to/qs.js"></script>)
qs.stringify(...);
```
