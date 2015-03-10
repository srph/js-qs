var extend = require('./extend');

// All options (`prepend` and `encode` are `true` by default)
var _defaults = { prepend: true, encode: true };

module.exports = function(query, options) {
  // This function does not accept primitives and functions
  if (query == null || typeof query !== 'object') {
    throw new Error('Provided query must be an object');
  }

  var result = ''; // Our resulting string
  var keys = Object.keys(query);

  // We don't have to `extend` if the consumer did not provide any option.
  // We also don't need the defaults later on so we can just extend options
  // to the defaults objects, and then assign options to the result
  options = options !== undefined ? extend({}, _defaults, options) : _defaults;

  // Using native loops instead of `map` or `forEach`
  // http://jsperf.com/native-map-versus-array-looping
  // Now we'll iterate through the splitted keyz
  for ( var i = 0; i < keys.length; i++ ) {
    var key = keys[i];
    var _value = query[key]; // Just our stringified JSON

    // We'll check first if the value is null or undefined. We'll
    // have to just go to the next key since we do not want or
    // need to add it to the resulting qs.
    if ( _value === undefined || _value === null ) continue;

    var value = options.encode ? encodeURIComponent(_value) : _value;
    
    // Prepends the ampsersand separator `&` for
    // each key except the first key
    var _prepend = (i > 0 && !!result.length ? '&' : '');

    result += _prepend + key + '=' + value;
  }

  return (options.prepend ? '?' : '') + result;
}