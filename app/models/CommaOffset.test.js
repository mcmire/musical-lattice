import CommaOffset from "./CommaOffset";
import Tone from "./Tone";

describe("CommaOffset", () => {
  describe(".wrap", () => {
    describe("given a CommaOffset", () => {
      it("returns the same CommaOffset", () => {
        const commaOffset = new CommaOffset(1);
        const wrappedCommaOffset = CommaOffset.wrap(commaOffset);

        expect(wrappedCommaOffset).toBe(commaOffset);
      });
    });

    describe("given a number", () => {
      it("returns the number wrapped in a CommaOffset", () => {
        const commaOffset = CommaOffset.wrap(1);

        expect(commaOffset.value).toBe(1);
      });
    });
  });

  describe("#goEast", () => {
    describe("when given a Tone of 2", () => {
      it("returns an augmented CommaOffset", () => {
        const commaOffset = new CommaOffset(3);
        const newCommaOffset = commaOffset.goEast(new Tone(2));

        expect(newCommaOffset.value).toBe(4);
      });
    });

    describe("when given a Tone of 7", () => {
      it("returns an augmented CommaOffset", () => {
        const commaOffset = new CommaOffset(3);
        const newCommaOffset = commaOffset.goEast(new Tone(7));

        expect(newCommaOffset.value).toBe(4);
      });
    });

    describe("when given some other Tone", () => {
      it("returns the same CommaOffset", () => {
        const commaOffset = new CommaOffset(3);
        const newCommaOffset = commaOffset.goEast(new Tone(8));

        expect(newCommaOffset).toBe(commaOffset);
      });
    });
  });

  describe("#goWest", () => {
    describe("when given a Tone of 4", () => {
      it("returns a diminished CommaOffset", () => {
        const commaOffset = new CommaOffset(3);
        const newCommaOffset = commaOffset.goWest(new Tone(4));

        expect(newCommaOffset.value).toBe(2);
      });
    });

    describe("when given a Tone of 6", () => {
      it("returns a diminished CommaOffset", () => {
        const commaOffset = new CommaOffset(3);
        const newCommaOffset = commaOffset.goWest(new Tone(6));

        expect(newCommaOffset.value).toBe(2);
      });
    });

    describe("when given some other Tone", () => {
      it("returns the same CommaOffset", () => {
        const commaOffset = new CommaOffset(3);
        const newCommaOffset = commaOffset.goWest(new Tone(2));

        expect(newCommaOffset).toBe(commaOffset);
      });
    });
  });

  describe("#goNortheast", () => {
    describe("when given a Tone of 2", () => {
      it("returns an augmented CommaOffset", () => {
        const commaOffset = new CommaOffset(3);
        const newCommaOffset = commaOffset.goNortheast(new Tone(2));

        expect(newCommaOffset.value).toBe(4);
      });
    });

    describe("when given some other Tone", () => {
      it("returns the same CommaOffset", () => {
        const commaOffset = new CommaOffset(3);
        const newCommaOffset = commaOffset.goNortheast(new Tone(8));

        expect(newCommaOffset).toBe(commaOffset);
      });
    });
  });

  describe("#goSouthwest", () => {
    describe("when given a Tone of 4", () => {
      it("returns a diminished CommaOffset", () => {
        const commaOffset = new CommaOffset(3);
        const newCommaOffset = commaOffset.goSouthwest(new Tone(4));

        expect(newCommaOffset.value).toBe(2);
      });
    });

    describe("when given some other Tone", () => {
      it("returns the same CommaOffset", () => {
        const commaOffset = new CommaOffset(3);
        const newCommaOffset = commaOffset.goSouthwest(new Tone(8));

        expect(newCommaOffset).toBe(commaOffset);
      });
    });
  });

  describe("#toString", () => {
    describe("if the value is greater than 0", () => {
      it("returns as many +'s as the value", () => {
        const commaOffset = new CommaOffset(3);

        expect(commaOffset.toString()).toEqual("+++");
      });
    });

    describe("if the value is less than 0", () => {
      it("returns as many -'s as the value", () => {
        const commaOffset = new CommaOffset(-3);

        expect(commaOffset.toString()).toEqual("---");
      });
    });

    describe("if the value is 0", () => {
      it("returns an empty string", () => {
        const commaOffset = new CommaOffset(0);

        expect(commaOffset.toString()).toEqual("");
      });
    });
  });
});
