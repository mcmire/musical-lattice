import Tone from "./Tone";

describe("Tone", () => {
  describe(".wrap", () => {
    describe("given a Tone", () => {
      it("returns the same Tone", () => {
        const tone = new Tone(1);
        const wrappedTone = Tone.wrap(tone);

        expect(wrappedTone).toBe(tone);
      });
    });

    describe("given a number", () => {
      it("returns the number wrapped in a Tone", () => {
        const tone = new Tone(1);

        expect(tone.value).toBe(1);
      });
    });
  });

  describe("#goEast", () => {
    describe("if the value is 4", () => {
      it("returns a Tone of 1", () => {
        const tone = new Tone(4);
        const newTone = tone.goEast();

        expect(newTone.value).toBe(1);
      });
    });

    describe("if the value is not 4", () => {
      it("returns the next Tone in the east-west array", () => {
        const tone = new Tone(2);
        const newTone = tone.goEast();

        expect(newTone.value).toBe(6);
      });
    });
  });

  describe("#goWest", () => {
    describe("if the value is 1", () => {
      it("returns a Tone of 4", () => {
        const tone = new Tone(1);
        const newTone = tone.goWest();

        expect(newTone.value).toBe(4);
      });
    });

    describe("if the value is not 1", () => {
      it("returns the previous Tone in the east-west array", () => {
        const tone = new Tone(6);
        const newTone = tone.goWest();

        expect(newTone.value).toBe(2);
      });
    });
  });

  describe("#goNortheast", () => {
    describe("if the value is 6", () => {
      it("returns a Tone of 1", () => {
        const tone = new Tone(6);
        const newTone = tone.goNortheast();

        expect(newTone.value).toBe(1);
      });
    });

    describe("if the value is not 6", () => {
      it("returns the next Tone in the northeast-southwest array", () => {
        const tone = new Tone(3);
        const newTone = tone.goNortheast();

        expect(newTone.value).toBe(5);
      });
    });
  });

  describe("#goSouthwest", () => {
    describe("if the value is 1", () => {
      it("returns a Tone of 6", () => {
        const tone = new Tone(1);
        const newTone = tone.goSouthwest();

        expect(newTone.value).toBe(6);
      });
    });

    describe("if the value is not 1", () => {
      it("returns the previous Tone in the northeast-southwest array", () => {
        const tone = new Tone(4);
        const newTone = tone.goSouthwest();

        expect(newTone.value).toBe(2);
      });
    });
  });

  describe("#toString", () => {
    it("simply returns the value", () => {
      const tone = new Tone(5);

      expect(tone.toString()).toEqual("5");
    });
  });
});
