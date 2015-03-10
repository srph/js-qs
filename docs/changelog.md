# Changelog

### v0.1.2

**stringify**:
- `undefined` and `null` values ({ key: undefined}) are now omitted to the resulting string.

```js
// Old
qs.stringify({ hey: undefined, x: '1'}); // => '?hey=undefined&x=1'

// New
qs.stringify({ hey: undefined, x: '1'}); // => '?x=1'
```

**parse**:

- Keys with no value (e.g., `x` and `y` have no values in `?x=&y=&z=5`) is now assigned with a blank string.

```js
// Old
qs.parse('?x=&y=') // => { x: undefined, y: undefined };

// New
qs.parse('?x=&y=') // => { x: '', y: '' };
```

### v0.1.1

- Bumped version for release (on **npm** and **bower**)

### v0.1.1

- Basic implementation