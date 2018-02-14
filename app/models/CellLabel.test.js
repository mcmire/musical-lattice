import CellLabel from "./CellLabel";
import Note from "./Note";

describe("CellLabel", () => {
  describe("#position", () => {
    it("returns the pixel coordinates of the cell on the page", () => {
      const note = buildNote({ location: [1, 2] });
      const cellLabel = new CellLabel({
        note: note,
        viewport: {
          width: 1000,
          height: 1000
        }
      });

      expect(cellLabel.position).toEqual({ x: 659, y: 256 });
    });
  });

  describe("#offsetPositionBy", () => {
    it("returns a new CellLabel with its position offset by the given amount", () => {
      const note = buildNote({ location: [1, 2] });
      const cellLabel = new CellLabel({
        note: note,
        viewport: {
          width: 1000,
          height: 1000
        }
      });

      const newCellLabel = cellLabel.offsetPositionBy({ x: 10, y: -5 });

      expect(newCellLabel).not.toBe(cellLabel);
      expect(newCellLabel.position).toEqual({ x: 669, y: 251 });
    });
  });

  describe("#name", () => {
    it("returns the name of the Note", () => {
      const note = buildNote({ tone: 1, semitoneOffset: 0, commaOffset: 0 });
      const cellLabel = new CellLabel({ note: note });

      expect(cellLabel.name).toEqual("1");
    });
  });

  describe("#ratioNumerator", () => {
    it("returns the top part of the Note's ratio", () => {
      const note = buildNote({ ratio: [3, 2] });
      const cellLabel = new CellLabel({ note: note });

      expect(cellLabel.ratioNumerator).toEqual(3);
    });
  });

  describe("#ratioDenominator", () => {
    it("returns the bottom part of the Note's ratio", () => {
      const note = buildNote({ ratio: [3, 2] });
      const cellLabel = new CellLabel({ note: note });

      expect(cellLabel.ratioDenominator).toEqual(2);
    });
  });

  describe("#ratioSize", () => {
    it("returns the number of characters in the string version of the ratio", () => {
      const note = buildNote({ ratio: [3, 2] });
      const cellLabel = new CellLabel({ note: note });

      expect(cellLabel.ratioSize).toEqual(2);
    });
  });

  describe("#frequency", () => {
    it("returns the frequency of the Note", () => {
      const note = buildNote({ fundamental: 440, ratio: [1, 1] });
      const cellLabel = new CellLabel({ note: note });

      expect(cellLabel.frequency).toBe(440);
    });
  });

  describe("#formattedFrequency", () => {
    it("returns the Note's frequency rounded to 2 decimal places", () => {
      const note = buildNote({ fundamental: 440, ratio: [5, 3] });
      const cellLabel = new CellLabel({ note: note });

      expect(cellLabel.formattedFrequency).toEqual("733.33");
    });
  });

  function buildNote({ location = [0, 0], ratio = [1, 1], ...rest }) {
    return new Note({
      location,
      ratio,
      ...rest
    });
  }
});
