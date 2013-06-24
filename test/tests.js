describe('closest-match', function () {
  var assert = require('assert')
    , closest = require('closest-match');

  var matches = ['dog', 'cat', 'fish', 'bird', 'lizard'];

  it('should match matchable strings', function () {
    assert('dog' === closest('dag', matches));
    assert('dog' === closest('dawg', matches));
    assert('cat' === closest('caa', matches));
  });

  it('shouldnt match strings outside of threshold', function () {
    assert(false === closest('dawgg', matches));
    assert(false === closest('fsss', matches));
  });
});