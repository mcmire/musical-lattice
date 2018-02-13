import Rational from "./rational";

describe("Rational", () => {
  describe("#multiplyBy", () => {
    it("returns a normalized ratio multiplied by the number", () => {
      const oldRational = new Rational([5, 4]);
      const newRational = oldRational.multiplyBy(5);

      expect(newRational.toArray()).toEqual([25, 16]);
    });
  });

  describe("#divideBy", () => {
    it("returns a normalized ratio multiplied by the number", () => {
      const oldRational = new Rational([5, 4]);
      const newRational = oldRational.divideBy(3);

      expect(newRational.toArray()).toEqual([5, 3]);
    });
  });

  describe("#normalize", () => {
    describe("given a ratio whose top and bottom are the same", () => {
      it("returns the unit ratio", () => {
        const rational = new Rational([8, 8]);
        const normalizedRational = rational.normalize();

        expect(normalizedRational.toArray()).toEqual([1, 1]);
      });
    });

    describe("given a ratio whose numerator and denominator are divisible by 2", () => {
      it("reduces the ratio", () => {
        const rational = new Rational([8, 6]);
        const normalizedRational = rational.normalize();

        expect(normalizedRational.toArray()).toEqual([4, 3]);
      });
    });

    describe("given a ratio whose numerator and denominator are divisible by 3", () => {
      it("reduces the ratio", () => {
        const rational = new Rational([24, 15]);
        const normalizedRational = rational.normalize();

        expect(normalizedRational.toArray()).toEqual([8, 5]);
      });
    });

    describe("given a ratio whose numerator and denominator are divisible by 5", () => {
      it("reduces the ratio", () => {
        const rational = new Rational([40, 15]);
        const normalizedRational = rational.normalize();

        expect(normalizedRational.toArray()).toEqual([4, 3]);
      });
    });

    describe("given a ratio greater than 2", () => {
      it("upgrades the denominator until the ratio is between 1 and 2", () => {
        const rational = new Rational([35, 5]);
        const normalizedRational = rational.normalize();

        expect(normalizedRational.toArray()).toEqual([7, 4]);
      });
    });

    describe("given a ratio less than 2", () => {
      it("upgrades the numerator until the ratio is between 1 and 2", () => {
        const rational = new Rational([5, 35]);
        const normalizedRational = rational.normalize();

        expect(normalizedRational.toArray()).toEqual([8, 7]);
      });
    });
  });

  describe("#toNumber", () => {
    it("returns the Rational as a number", () => {
      const rational = new Rational([1, 2]);

      expect(rational.toNumber()).toBe(0.5);
    });
  });
});
