import Cell from "./Cell";

const FUNDAMENTAL = 440;

function buildCellsFrom(sourceCell, numberOfTimes, direction) {
  let cells = [];
  let previousCell = sourceCell;

  for (let i = 0; i < numberOfTimes; i++) {
    const cell = previousCell[direction]();
    cells.push(cell);
    previousCell = cell;
  }

  return cells;
}

const root = new Cell({
  location: [0, 0],
  tone: 1,
  commaOffset: 0,
  semitoneOffset: 0,
  ratio: [1, 1],
  fundamental: FUNDAMENTAL
});

const cells = [];

cells.push(root);
cells.push(...buildCellsFrom(root, 5, "goEast"));
cells.push(...buildCellsFrom(root, 5, "goWest"));

cells.forEach(cell => {
  cells.push(...buildCellsFrom(cell, 4, "goNortheast"));
  cells.push(...buildCellsFrom(cell, 4, "goSouthwest"));
});

const filteredCells = cells.filter(cell => {
  return cell.ratio.toArray().join("").length <= 8;
});

export default filteredCells;
