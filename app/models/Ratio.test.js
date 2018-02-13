import Ratio from "./Ratio";
import Rational from "./Rational";

describe("Ratio", () => {
  describe(".wrap", () => {
    describe("given a Ratio", () => {
      it("returns the same Ratio", () => {
        const ratio = new Ratio([1, 2]);
        const wrappedRatio = Ratio.wrap(ratio);

        expect(wrappedRatio).toBe(ratio);
      });
    });

    describe("given a Rational", () => {
      it("uses the Rational to build a Ratio", () => {
        const rational = new Rational([1, 2]);
        const wrappedRatio = Ratio.wrap(rational);

        expect(wrappedRatio.toArray()).toEqual([1, 2]);
      });
    });

    describe("given a tuple", () => {
      it("returns the tuple wrapped in a Ratio", () => {
        const ratio = Ratio.wrap([1, 2]);

        expect(ratio.toArray()).toEqual([1, 2]);
      });
    });
  });

  describe("#goEast", () => {
    it("returns a Ratio multiplied by 3", () => {
      const ratio = new Ratio([8, 5]);

      const newRatio = ratio.goEast();

      expect(newRatio.toArray()).toEqual([6, 5]);
    });
  });

  describe("#goWest", () => {
    it("returns a Ratio divided by 3", () => {
      const ratio = new Ratio([6, 5]);

      const newRatio = ratio.goWest();

      expect(newRatio.toArray()).toEqual([8, 5]);
    });
  });

  describe("#goNortheast", () => {
    it("returns a Ratio multiplied by 5", () => {
      const ratio = new Ratio([27, 20]);

      const newRatio = ratio.goNortheast();

      expect(newRatio.toArray()).toEqual([27, 16]);
    });
  });

  describe("#goSouthwest", () => {
    it("returns a Ratio divided by 5", () => {
      const ratio = new Ratio([50, 27]);

      const newRatio = ratio.goSouthwest();

      expect(newRatio.toArray()).toEqual([40, 27]);
    });
  });

  describe("#toNumber", () => {
    it("returns the Ratio as a number", () => {
      const ratio = new Ratio([1, 2]);

      expect(ratio.toNumber()).toBe(0.5);
    });
  });
});
