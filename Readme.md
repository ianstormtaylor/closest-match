
# closest-match

  Find the closest match for a string from an array of matches, using string distance.

## Installation

    $ component install segmentio/closest-match

## Example
    
```js
var closest = require('closest-match');
var animals = ['dog', 'cat', 'bird'];

closest('dag', animals); // 'dog'
```

## API

### closest(string, matches)
  Match the given `string` against an array of possible `matches`.

### closest.threshold
  Change the string distance `threshold` used to match. Default is `3`.

### closest.distance
  Change the distancing method. Default is the [`timoxley/sift`](https://github.com/timoxley/sift) component.

## License

  MIT
