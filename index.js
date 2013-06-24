
var sift = require('sift');


/**
 * Expose `closest`.
 */

exports = module.exports = closest;


/**
 * Return the closest match for a `string` from a set of `matches`.
 *
 * @param {String} string
 * @param {Array} matches
 * @return {String}
 */

function closest (string, matches) {
  if (!string || !matches) return false;

  var distance, match;
  for (var i = 0, candidate; candidate = matches[i]; i++) {
    if (string === candidate) return string;
    var measurement = distancer(string, candidate);
    if (!distance || measurement < distance) {
      distance = measurement;
      match = candidate;
    }
  }

  if (distance >= threshold) return false;
  return match;
}


/**
 * Threshold for string distance.
 */

var threshold = exports.threshold = 3;


/**
 * Distance function.
 */

var distancer = exports.distancer = sift;