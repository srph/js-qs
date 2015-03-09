var assert = require('assert');
var stringify = require('../src/stringify');

suite('object-to-query implementation', function() {
  test('should throw when a primitive is passed', function() {
    assert.throws(function() { stringify('x') });
    assert.throws(function() { stringify(1) });
    assert.throws(function() { stringify(1.5) });
  });
  
  test('should return a string', function() {
    var stringified = stringify({ x: 'y', y: 'z' });

    assert.equal(typeof stringified, 'string');
    assert.equal(stringified, '?x=y&y=z');
  });

  suite('prepend `?`', function() {
    var obj;
    suiteSetup(function() {
      obj = { x: 'y', y: 'z' };
    });

    test('should return a query without a prepending `?`', function() {
      assert.equal(stringify(obj, { prepend: false }), 'x=y&y=z');
    });
    
    test('should return a query with a prepending `?` by default', function() {
      assert.equal(stringify(obj), '?x=y&y=z');
    });

    test('should return a query with a prepending `?`', function() {
      assert.equal(stringify(obj, { prepend: true }), '?x=y&y=z');
    });
  });

  suite('encode speical URI characters', function() {
    var obj;
    suiteSetup(function() {
      // # = %23
      // @ = %40
      // = = %3D
      obj = { x: '=y', y: '@#z' }
    });

    test('should encode query values by default', function() {
      assert.equal(stringify(obj), '?x=%3Dy&y=%40%23z');
    });

    test('should encode query values when option.encode is assigned true', function() {
      assert.equal(stringify(obj, { encode: true }), '?x=%3Dy&y=%40%23z');
    });

    test('should not encode query values when option.encode is assigned false', function() {
      assert.equal(stringify(obj, { encode: false }), '?x==y&y=@#z');
    });
  });
});
