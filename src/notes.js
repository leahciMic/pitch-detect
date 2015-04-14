var noteStrings = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
];

var api = {
  noteNumberFromPitch: function noteFromPitch(frequency) {
    var noteNum = 12 * (Math.log(frequency / 440) / Math.log(2));
    return Math.round(noteNum) + 69;
  },
  frequencyFromNoteNumber: function frequencyFromNoteNumber(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
  },
  centsOffFromPitch: function centsOffFromPitch(frequency, note) {
    return Math.floor(
      1200 * Math.log(
        frequency / this.frequencyFromNoteNumber(note)
      ) / Math.log(2)
    );
  },
  noteFromPitch: function noteFromPitch(frequency) {
    return noteStrings[this.noteNumberFromPitch(frequency) % 12];
  }
};

module.exports = api;