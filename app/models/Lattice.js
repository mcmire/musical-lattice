import Note from "./Note";
import CellLabel from "./CellLabel";

const FUNDAMENTAL = 440;
const TOTAL_NUMBER_OF_GROUPS = 10;

export default class Lattice {
  constructor(viewport) {
    this.viewport = viewport;
  }

  buildCellLabelGroups() {
    const roots = this._determineRoots();
    const noteGroups = this._buildNoteGroupsFrom(roots);
    const cellLabelGroups = this._buildCellLabelGroupsFrom(noteGroups);
    const filteredCellLabelGroups = this._filterCellLabelGroups(
      cellLabelGroups
    );

    return filteredCellLabelGroups;
  }

  _filterCellLabelGroups(cellLabelGroups) {
    return cellLabelGroups.map(cellLabelGroup => {
      const filteredCellLabels = cellLabelGroup.cellLabels.filter(cellLabel => {
        return cellLabel.ratioSize <= 8;
      });

      return { number: cellLabelGroup.number, cellLabels: filteredCellLabels };
    });
  }

  _buildCellLabelGroupsFrom(noteGroups) {
    return noteGroups.map(noteGroup => {
      const cellLabels = noteGroup.notes.map(note => {
        return new CellLabel({ note: note, viewport: this.viewport });
      });

      return { number: noteGroup.number, cellLabels: cellLabels };
    });
  }

  _buildNoteGroupsFrom(roots) {
    return roots.map((root, index) => {
      const groupNumber = index % TOTAL_NUMBER_OF_GROUPS + 1;
      return { number: groupNumber, notes: this._buildNotesAround(root) };
    });
  }

  _buildNotesAround(root) {
    const notes = [];

    notes.push(root);
    notes.push(root.goWest());
    notes.push(root.goEast());
    notes.push(root.goEast().goEast());

    notes.forEach(note => {
      notes.push(note.goNortheast());
      notes.push(note.goSouthwest());
    });

    return notes;
  }

  _determineRoots() {
    const centerRoot = new Note({
      location: [0, 0],
      tone: 1,
      commaOffset: 0,
      semitoneOffset: 0,
      ratio: [1, 1],
      fundamental: FUNDAMENTAL
    });
    const northRoot = centerRoot
      .goNortheast()
      .goNortheast()
      .goNortheast();
    const southRoot = centerRoot
      .goSouthwest()
      .goSouthwest()
      .goSouthwest();
    const westRoot = centerRoot
      .goWest()
      .goWest()
      .goWest()
      .goWest()
      .goNortheast();
    const eastRoot = centerRoot
      .goSouthwest()
      .goEast()
      .goEast()
      .goEast()
      .goEast();
    const northwestRoot = northRoot
      .goWest()
      .goWest()
      .goWest()
      .goWest()
      .goNortheast();
    const northeastRoot = northRoot
      .goEast()
      .goEast()
      .goEast()
      .goEast()
      .goSouthwest();
    const southwestRoot = southRoot
      .goWest()
      .goWest()
      .goWest()
      .goWest()
      .goNortheast();
    const southeastRoot = southRoot
      .goEast()
      .goEast()
      .goEast()
      .goEast()
      .goSouthwest();

    return [
      centerRoot,
      northRoot,
      southRoot,
      westRoot,
      eastRoot,
      northwestRoot,
      northeastRoot,
      southwestRoot,
      southeastRoot
    ];
  }
}
