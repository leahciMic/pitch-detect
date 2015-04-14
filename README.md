# Pitch detection for WebRTC

Allows you to detect pitch on a stream using
[Autocorrelation](http://en.wikipedia.org/wiki/Autocorrelation).

## Installation

`npm install --save pitch-detect`

## Usage

```js
var PitchDetect = require('pitch-detect'),
    pitchDetect = new PitchDetect(mediaStream);

pitchDetect.getPitch();
/**
 * getPitch() Returns a data structure like:
 * {
 *   type: String, vague/confident
 *   pitch: Number,
 *   noteNumber: Number,
 *   note: String,
 *   detune: detune,
 *   flat: detune < 0,
 *   sharp: detune >= 0
 * };
 *
```

## Todo

* Separate notes into it's own module
* Support either `MediaStream` or `AudioContext`
* Consider supporting Frequency-domain approaches
* Improve documentation
* Tests?

## Contributing

Submit an issue, create a feature branch, submit a pull-request.