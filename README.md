# qs.js [![npm version](http://img.shields.io/npm/v/srph-qs.svg?style=flat)](https://npmjs.org/package/srph-qs) [![devDependency Status](https://david-dm.org/srph/qs.js/dev-status.svg)](https://david-dm.org/srph/qs.js#info=devDependencies) [![Build Status](https://travis-ci.org/srph/qs.js.svg?branch=master)](https://travis-ci.org/srph/reflux-flash?branch=master) [![SemVer](http://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Translates object to a query string, and vice-versa. `qs.js` is a simple library weighing `~2kb`.

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

# Non-node users

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

See the [API Documentation]().

# Contribution

For features or fixes, I would suggest to submit an issue first before submitting a pull request. This avoids closed pull-requests; useless work. **Feel free** to open an issue for any questions and inquries!

## Building

See the [Building Documentation]() (*This is for contributors or experienced developers only*).

## Changelog

See the [Changelog]() file.

## Acknowledgement

**qs.js** © 2015+, Kier Borromeo (srph). **qs.js** is released under the [MIT](mit-license.org) license.

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)

## Alternatives

This library does not intend to compete with alternative libraries, and also only provide very simple features compared to its alternatives.

- [visionmedia/node-querystring](https://github.com/visionmedia/node-querystring)
- [hapijs/qs](https://github.com/hapijs/qs)