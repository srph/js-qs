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
var obj = qs.stringify(str); // => { first: 'Kier', last: 'Borromeo' }
```
