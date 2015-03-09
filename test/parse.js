var assert = require('assert');
var parse = require('../src/parse');

suite('query to object', function() {
  suite('exception', function() {
    test('should throw an error if query is an int', function() {
      assert.throws(parse.bind(null, 1));
    });

    test('should throw an error if query is a float', function() {
      assert.throws(parse.bind(null, 1.5));
    });

    test('should throw an error if query is an object', function() {
      assert.throws(parse.bind(null, {}));
    });

    test('should not throw an error if query is a string', function() {
      assert.doesNotThrow(parse.bind(null, '?y=s&x=y'));
    });
  });

  test('should return an object', function() {
    assert.deepEqual(parse('?y=s&x=y'), { y: 's', x: 'y'});
  });

  test('should just omit `?`', function() {
    assert.deepEqual(parse('?y=s&x=y'), { y: 's', x: 'y'});
    assert.deepEqual(parse('y=s&x=y'), { y: 's', x: 'y'});
  });

  suite('decode special URI characters', function() { 
    test('should by default', function() {
      // # = %23
      // @ = %40
      // = = %3D
      assert.deepEqual(parse('y=%23s&x=%40%3Dy'), { y: '#s', x: '@=y'});
    });

    test('should not when assigned false', function() {
      // # = %23
      // @ = %40
      // = = %3D
      assert.deepEqual(parse('y=%23s&x=%40%3Dy', { decode: false}), { y: '%23s', x: '%40%3Dy'});
    });

    test('should by when assigned true', function() {
      // # = %23
      // @ = %40
      // = = %3D
      assert.deepEqual(parse('y=%23s&x=%40%3dy'), { y: '#s', x: '@=y'});
    });
  });
});