/**
 * A utility method to `extend` obj2 to obj1
 *
 * @param {Object} dest 
 * @param {Object} source
 */
module.exports = function(dest, source) {
  var keys = Object.keys(source);

  keys.forEach(function(key) {
    dest[key] = source[key];
  });

  return dest;
}