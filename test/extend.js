var assert = require('assert');
var extend = require('../src/extend');

suite('extend', function() {
  test('should return obj1 with keys of obj2', function() {
    assert.deepEqual(extend({}, { hello: 'hi'}), { hello: 'hi' });
  });

  test('should make obj1 have the keys of obj2', function() {
    var x = { hello: 'hi' };
    extend(x, { hi: 'hello' });
    assert.deepEqual(x, { hello: 'hi', hi: 'hello' });
  });
});