var extend = require('./extend');

module.exports = function(query, options) {
  // This function does not accept primitives and functions
  if (typeof query !== 'string') {
    throw new Error('Provided query must be a string');
  }

  // Our resulting object
  var result = {};
  var _defaults = { decode: true };

  // We don't have to `extend`
  // if the consumer did not provide  any option
  if ( options !== undefined ) {
    extend(_defaults, options);
  }
  options = _defaults;

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
    result[kv[0]] = options.decode ? decodeURIComponent(kv[1]) : kv[1];
  };

  return result;
}