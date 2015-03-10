var extend = require('./extend');

// All options (`decode` is `true` by default)
var _defaults = { decode: true };

module.exports = function(query, options) {
  // This function does not accept primitives and functions
  if (typeof query !== 'string') {
    throw new Error('Provided query must be a string');
  }

  // Our resulting object
  var result = {};
  
  // We don't have to `extend` if the consumer did not provide any option.
  // We also don't need the defaults later on so we can just extend options
  // to the defaults objects, and then assign options to the result
  options = options !== undefined ? extend({}, _defaults, options) : _defaults;

  // First, we'll try to remove the prepending `?`,
  // then split each key=value separated by &.
  var splitted = query.replace(/^\?/, '').split('&');

  // Using native loops instead of `map` or `forEach`
  // http://jsperf.com/native-map-versus-array-looping
  // Now we'll iterate through the splitted keyz
  for ( var i = 0; i < splitted.length; i++ ) {
    // Where the result of the split
    // `x=y` would be ['x', 'y'], assigning it
    // like this.x = 'y';
    var kv = splitted[i].split('=');
    var value = kv[1] !== undefined ? kv[1] : '';
    result[kv[0]] = options.decode ? decodeURIComponent(value) : value;
  };

  return result;
}