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

  // {}, x:5, x:10, x:15
  // x should be 15.
  test('should override keys from first to last (last obj\'s values remain)', function() {
    assert.deepEqual(extend({}, { hello: 'hi' }, { hello: 'hello' }), { hello: 'hello' });
    assert.deepEqual(extend({}, { hello: 'hi' }, { hello: 'hello' }, { hello: 'bae' }), { hello: 'bae' });

    assert.deepEqual(extend({}, { hello: 'hi' }, { hello: 'hello', hi: 'ads', yolo :'swag' }, { hello: 'bae', yolo: 'sweg' }), { hello: 'bae', hi: 'ads', yolo: 'sweg'});
  });
});