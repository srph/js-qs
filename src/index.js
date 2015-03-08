/**
 * @name object-to-query
 * Translates a JavaScript object to a
 * URL string query (?x=&y=)
 *
 * @param {Object} query Object to be translated
 * @param {boolean} prepend If `?` should be prepended for the first key. Defaults to true
 *
 * @example
 * o2q({ x: '1': y: '2'}, true); // => ?x=1&y=2
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.o2q = factory();
  }
})(this, function() {
  return function o2q(query, options) {
    // This function does not accept primitives and functions
    if (typeof query !== 'object') {
      throw new Error('Provided query must be an object');
    }

    var result = ''; // Our resulting string
    var keys = Object.keys(query);
    
    // All options (`prepend` and `encode` are `true` by default)
    var prepend = options.prepend || true;
    var encode = options.encode || true;

    keys.forEach(function(key, i) {
      var value = JSON.stringify(query[key]);
      // We check if should prepend `?` for the first key.
      // The following is prepended by `&`
      var _prepend = (i == 0 && prepend ? '?' : (i > 0 ? '&' : ''));

      result += _prepend + key + '=' + value;
    });

    return encode ? result : encodeURIComponent(result);
  }
});
