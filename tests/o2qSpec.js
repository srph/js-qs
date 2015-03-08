var o2q = require('../src/index');

describe('object-to-query implementation', function() {
  describe('exceptions', function() {
  });
  
  it('should return a query', function() {
    expect(o2q({ x: 'y', y: 'z' }).toBe('?x=y&y=z');
  });
  
  it('should return a query without a prepending `?`', function() {
    expect(o2q({ x: 'y', y: 'z' }, false).toBe('x=y&y=z');
  });
  
  it('should return a query with a prepending `?` by default', function() {
    expect(o2q({ x: 'y', y: 'z' }).toBe('?x=y&y=z');
  });
})
