var extend = require('./extend');

module.exports = function(query, options) {
  // This function does not accept primitives and functions
  if (query == null || typeof query !== 'object') {
    throw new Error('Provided query must be an object');
  }

  var result = ''; // Our resulting string
  var keys = Object.keys(query);
  // All options (`prepend` and `encode` are `true` by default)
  var _defaults = { prepend: true, encode: true };

  // We don't have to `extend` if the consumer did not provide
  // any option, to avoid overhead
  if ( options !== undefined ) {
    extend(_defaults, options);
  }
  options = _defaults;

  keys.forEach(function(key, i) {
    var _value = query[key]; // Just our stringified JSON
    var value = options.encode ? encodeURIComponent(_value) : _value;
    
    // Prepends the ampsersand separator `&` for
    // each key except the first key
    var _prepend = (i > 0 ? '&' : '');

    result += _prepend + key + '=' + value;
  });

  return (options.prepend ? '?' : '') + result;
}