import SemitoneOffset from "./SemitoneOffset";
import Tone from "./Tone";

describe("SemitoneOffset", () => {
  describe(".wrap", () => {
    describe("given a SemitoneOffset", () => {
      it("returns the same SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(1);
        const wrappedSemitoneOffset = SemitoneOffset.wrap(semitoneOffset);

        expect(wrappedSemitoneOffset).toBe(semitoneOffset);
      });
    });

    describe("given a number", () => {
      it("returns the number wrapped in a SemitoneOffset", () => {
        const semitoneOffset = SemitoneOffset.wrap(1);

        expect(semitoneOffset.value).toBe(1);
      });
    });
  });

  describe("#goEast", () => {
    describe("given a Tone of 7", () => {
      it("returns an augmented SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(1);
        const newSemitoneOffset = semitoneOffset.goEast(new Tone(7));

        expect(newSemitoneOffset.value).toBe(2);
      });
    });

    describe("given a different Tone", () => {
      it("returns the same SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(1);
        const newSemitoneOffset = semitoneOffset.goEast(new Tone(2));

        expect(newSemitoneOffset).toBe(semitoneOffset);
      });
    });
  });

  describe("#goWest", () => {
    describe("given a Tone of 4", () => {
      it("returns a diminished SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(2);
        const newSemitoneOffset = semitoneOffset.goWest(new Tone(4));

        expect(newSemitoneOffset.value).toBe(1);
      });
    });

    describe("given a different Tone", () => {
      it("returns the same SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(2);
        const newSemitoneOffset = semitoneOffset.goWest(new Tone(8));

        expect(newSemitoneOffset).toBe(semitoneOffset);
      });
    });
  });

  describe("#goNortheast", () => {
    describe("given a Tone of 2", () => {
      it("returns an augmented SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(1);
        const newSemitoneOffset = semitoneOffset.goNortheast(new Tone(2));

        expect(newSemitoneOffset.value).toBe(2);
      });
    });

    describe("given a Tone of 3", () => {
      it("returns an augmented SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(1);
        const newSemitoneOffset = semitoneOffset.goNortheast(new Tone(3));

        expect(newSemitoneOffset.value).toBe(2);
      });
    });

    describe("given a Tone of 6", () => {
      it("returns an augmented SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(1);
        const newSemitoneOffset = semitoneOffset.goNortheast(new Tone(6));

        expect(newSemitoneOffset.value).toBe(2);
      });
    });

    describe("given a Tone of 7", () => {
      it("returns an augmented SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(1);
        const newSemitoneOffset = semitoneOffset.goNortheast(new Tone(7));

        expect(newSemitoneOffset.value).toBe(2);
      });
    });

    describe("given a different Tone", () => {
      it("returns the same SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(1);
        const newSemitoneOffset = semitoneOffset.goNortheast(new Tone(1));

        expect(newSemitoneOffset).toBe(semitoneOffset);
      });
    });
  });

  describe("#goSouthwest", () => {
    describe("given a Tone of 1", () => {
      it("returns a diminished SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(2);
        const newSemitoneOffset = semitoneOffset.goSouthwest(new Tone(1));

        expect(newSemitoneOffset.value).toBe(1);
      });
    });

    describe("given a Tone of 2", () => {
      it("returns a diminished SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(2);
        const newSemitoneOffset = semitoneOffset.goSouthwest(new Tone(2));

        expect(newSemitoneOffset.value).toBe(1);
      });
    });

    describe("given a Tone of 4", () => {
      it("returns a diminished SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(2);
        const newSemitoneOffset = semitoneOffset.goSouthwest(new Tone(4));

        expect(newSemitoneOffset.value).toBe(1);
      });
    });

    describe("given a Tone of 5", () => {
      it("returns a diminished SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(2);
        const newSemitoneOffset = semitoneOffset.goSouthwest(new Tone(5));

        expect(newSemitoneOffset.value).toBe(1);
      });
    });

    describe("given a different Tone", () => {
      it("returns the same SemitoneOffset", () => {
        const semitoneOffset = new SemitoneOffset(2);
        const newSemitoneOffset = semitoneOffset.goSouthwest(new Tone(8));

        expect(newSemitoneOffset).toBe(semitoneOffset);
      });
    });
  });

  describe("#toString", () => {
    describe("if the value is greater than 0", () => {
      it("returns as many #'s as the value", () => {
        const semitoneOffset = new SemitoneOffset(3);

        expect(semitoneOffset.toString()).toEqual("###");
      });
    });

    describe("if the value is less than 0", () => {
      it("returns as many b's as the value", () => {
        const semitoneOffset = new SemitoneOffset(-3);

        expect(semitoneOffset.toString()).toEqual("bbb");
      });
    });

    describe("if the value is 0", () => {
      it("returns an empty string", () => {
        const semitoneOffset = new SemitoneOffset(0);

        expect(semitoneOffset.toString()).toEqual("");
      });
    });
  });
});
