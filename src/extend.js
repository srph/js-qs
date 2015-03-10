/**
 * A utility method to `extend` objN..obj2 to obj1
 *
 * @param {Object} dest 
 * @param {Object} source1...source2...sourceN
 */
module.exports = function(dest) {
  // Using native loops instead of `map` or `forEach`
  // http://jsperf.com/native-map-versus-array-looping
  // Now we'll iterate through the splitted keyz
  for ( var i = 1; i < arguments.length; i++ ) {
    var source = arguments[i];
    var keys = Object.keys(source);

    for ( var _i = 0; _i < keys.length; _i++ ) {
      var key = keys[_i];
      dest[key] = source[key];
    }
  }

  return dest;
}