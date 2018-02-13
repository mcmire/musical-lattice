import Note from "./Note";

const FUNDAMENTAL = 440;

function buildNotesFrom(sourceNote, numberOfTimes, direction) {
  let notes = [];
  let previousNote = sourceNote;

  for (let i = 0; i < numberOfTimes; i++) {
    const note = previousNote[direction]();
    notes.push(note);
    previousNote = note;
  }

  return notes;
}

const root = new Note({
  location: [0, 0],
  group: 1,
  tone: 1,
  commaOffset: 0,
  semitoneOffset: 0,
  ratio: [1, 1],
  fundamental: FUNDAMENTAL
});

const notes = [];

notes.push(root);
notes.push(...buildNotesFrom(root, 5, "goEast"));
notes.push(...buildNotesFrom(root, 5, "goWest"));

notes.forEach(note => {
  notes.push(...buildNotesFrom(note, 4, "goNortheast"));
  notes.push(...buildNotesFrom(note, 4, "goSouthwest"));
});

const filteredNotes = notes.filter(note => {
  return note.ratio.toArray().join("").length <= 8;
});

export default filteredNotes;
