import Note from "./Note";
import CellLabel from "./CellLabel";

const FUNDAMENTAL = 440;

export default class Lattice {
  constructor(viewport) {
    this.viewport = viewport;
  }

  buildCellLabels() {
    const notes = this._buildAllNotes();
    const cellLabels = notes.map(note => {
      return new CellLabel({ note: note, viewport: this.viewport });
    });

    const filteredCellLabels = cellLabels.filter(cellLabel => {
      return cellLabel.ratioSize <= 8;
    });

    return filteredCellLabels;
  }

  _buildAllNotes() {
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
    notes.push(...this._buildNotesFrom(root, 5, "goEast"));
    notes.push(...this._buildNotesFrom(root, 5, "goWest"));

    notes.forEach(note => {
      notes.push(...this._buildNotesFrom(note, 4, "goNortheast"));
      notes.push(...this._buildNotesFrom(note, 4, "goSouthwest"));
    });

    return notes;
  }

  _buildNotesFrom(sourceNote, numberOfTimes, direction) {
    let notes = [];
    let previousNote = sourceNote;

    for (let i = 0; i < numberOfTimes; i++) {
      const note = previousNote[direction]();
      notes.push(note);
      previousNote = note;
    }

    return notes;
  }
}
