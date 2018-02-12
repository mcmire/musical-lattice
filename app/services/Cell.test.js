import Cell from "./Cell";
import Location from "./Location";
import Tone from "./Tone";
import CommaOffset from "./CommaOffset";
import SemitoneOffset from "./SemitoneOffset";
import Ratio from "./Ratio";

describe("Cell", () => {
  describe("#name", () => {
    describe("with a semitoneOffset and commaOffset", () => {
      it("returns the tone with sharps/flats and -/+'s", () => {
        const cell = new Cell({
          location: [0, 0],
          tone: 3,
          commaOffset: 2,
          semitoneOffset: 2,
          ratio: [1, 1]
        });

        expect(cell.name).toEqual("##3++");
      });
    });

    describe("with no semitoneOffset or commaOffset", () => {
      it("simply returns the tone", () => {
        const cell = new Cell({
          location: [0, 0],
          tone: 3,
          commaOffset: 0,
          semitoneOffset: 0,
          ratio: [1, 1]
        });

        expect(cell.name).toEqual("3");
      });
    });
  });

  describe("#frequency", () => {
    it("returns the fundamental times the ratio", () => {
      const cell = new Cell({
        location: [0, 0],
        tone: 1,
        commaOffset: 0,
        semitoneOffset: 0,
        ratio: [3, 2],
        fundamental: 440
      });

      expect(cell.frequency).toBe(660);
    });
  });

  describe("#goEast", () => {
    it("returns a Cell with all properties adjusted", () => {
      const cell = new Cell({
        location: [1, 2],
        tone: 7,
        commaOffset: 2,
        semitoneOffset: 1,
        ratio: [3, 2]
      });

      const newCell = cell.goEast();

      expect(newCell.location).toEqual(new Location([2, 2]));
      expect(newCell.tone).toEqual(new Tone(4));
      expect(newCell.commaOffset).toEqual(new CommaOffset(3));
      expect(newCell.semitoneOffset).toEqual(new SemitoneOffset(2));
      expect(newCell.ratio).toEqual(new Ratio([9, 8]));
    });
  });

  describe("#goWest", () => {
    it("returns a Cell with all properties adjusted", () => {
      const cell = new Cell({
        location: [1, 2],
        tone: 4,
        commaOffset: 2,
        semitoneOffset: 1,
        ratio: [27, 16]
      });

      const newCell = cell.goWest();

      expect(newCell.location).toEqual(new Location([0, 2]));
      expect(newCell.tone).toEqual(new Tone(7));
      expect(newCell.commaOffset).toEqual(new CommaOffset(1));
      expect(newCell.semitoneOffset).toEqual(new SemitoneOffset(0));
      expect(newCell.ratio).toEqual(new Ratio([9, 8]));
    });
  });

  describe("#goNortheast", () => {
    it("returns a Cell with all properties adjusted", () => {
      const cell = new Cell({
        location: [1, 2],
        tone: 2,
        commaOffset: 2,
        semitoneOffset: 1,
        ratio: [25, 16]
      });

      const newCell = cell.goNortheast();

      expect(newCell.location).toEqual(new Location([1, 3]));
      expect(newCell.tone).toEqual(new Tone(4));
      expect(newCell.commaOffset).toEqual(new CommaOffset(3));
      expect(newCell.semitoneOffset).toEqual(new SemitoneOffset(2));
      expect(newCell.ratio).toEqual(new Ratio([125, 64]));
    });
  });

  describe("#goSouthwest", () => {
    it("returns a Cell with all properties adjusted", () => {
      const cell = new Cell({
        location: [1, 2],
        tone: 4,
        commaOffset: 2,
        semitoneOffset: 1,
        ratio: [10, 9]
      });

      const newCell = cell.goSouthwest();

      expect(newCell.location).toEqual(new Location([1, 1]));
      expect(newCell.tone).toEqual(new Tone(2));
      expect(newCell.commaOffset).toEqual(new CommaOffset(1));
      expect(newCell.semitoneOffset).toEqual(new SemitoneOffset(0));
      expect(newCell.ratio).toEqual(new Ratio([16, 9]));
    });
  });
});
