import { flatMap } from "lodash";
import Note from "./Note";
import CellLabel from "./CellLabel";

const FUNDAMENTAL = 440;
const TOTAL_NUMBER_OF_GROUPS = 10;

export function buildLattice(viewport) {
  const roots = determineRoots();
  const noteGroups = buildNoteGroupsFrom(roots);
  const cellLabelGroups = buildCellLabelGroupsFrom(noteGroups, viewport);
  const filteredCellLabelGroups = filterCellLabelGroups(cellLabelGroups);
  const xRange = calculateXRange(filteredCellLabelGroups);
  const yRange = calculateYRange(filteredCellLabelGroups);
  const repositionedCellLabelGroups = repositionCellLabelGroups(
    filteredCellLabelGroups,
    xRange,
    yRange
  );

  return new Lattice({
    height: yRange.end - yRange.start,
    width: xRange.end - xRange.start,
    cellLabelGroups: repositionedCellLabelGroups
  });
}

function repositionCellLabelGroups(cellLabelGroups, xRange, yRange) {
  return cellLabelGroups.map(cellLabelGroup => {
    const filteredCellLabels = cellLabelGroup.cellLabels.map(cellLabel => {
      return cellLabel.offsetPositionBy({ x: -xRange.start, y: -yRange.start });
    });

    return { number: cellLabelGroup.number, cellLabels: filteredCellLabels };
  });
}

function calculateXRange(cellLabelGroups) {
  const xs = flatMap(cellLabelGroups, cellLabelGroup => {
    return cellLabelGroup.cellLabels.map(cellLabel => {
      return cellLabel.position.x;
    });
  });

  return {
    start: Math.min(...xs),
    end: Math.max(...xs) + CellLabel.WIDTH
  };
}

function calculateYRange(cellLabelGroups) {
  const ys = flatMap(cellLabelGroups, cellLabelGroup => {
    return cellLabelGroup.cellLabels.map(cellLabel => {
      return cellLabel.position.y;
    });
  });

  return {
    start: Math.min(...ys),
    end: Math.max(...ys) + CellLabel.HEIGHT
  };
}

function filterCellLabelGroups(cellLabelGroups) {
  return cellLabelGroups.map(cellLabelGroup => {
    const filteredCellLabels = cellLabelGroup.cellLabels.filter(cellLabel => {
      return cellLabel.ratioSize <= 8;
    });

    return { number: cellLabelGroup.number, cellLabels: filteredCellLabels };
  });
}

function buildCellLabelGroupsFrom(noteGroups, viewport) {
  return noteGroups.map(noteGroup => {
    const cellLabels = noteGroup.notes.map(note => {
      return new CellLabel({ note, viewport });
    });

    return { number: noteGroup.number, cellLabels: cellLabels };
  });
}

function buildNoteGroupsFrom(roots) {
  return roots.map((root, index) => {
    const groupNumber = index % TOTAL_NUMBER_OF_GROUPS + 1;
    return { number: groupNumber, notes: buildNotesAround(root) };
  });
}

function buildNotesAround(root) {
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

function determineRoots() {
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

function flattenCellLabelGroups(cellLabelGroups) {
  return flatMap(cellLabelGroups, "cellLabels");
}

export class Lattice {
  constructor({ height, width, cellLabelGroups }) {
    this.height = height;
    this.width = width;
    this.cellLabelGroups = cellLabelGroups;
    this.cellLabels = flattenCellLabelGroups(cellLabelGroups);
  }

  findCellBy(location) {
    return this.cellLabels.find(cellLabel => {
      return cellLabel.location.equals(location);
    });
  }
}
