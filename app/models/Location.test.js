import Location from "./Location";

describe("Location", () => {
  describe(".wrap", () => {
    describe("given a Location", () => {
      it("returns the same Location", () => {
        const location = new Location([1, 2]);
        const wrappedLocation = Location.wrap(location);

        expect(wrappedLocation).toBe(location);
      });
    });

    describe("given a tuple", () => {
      it("returns the tuple wrapped in a Location", () => {
        const location = Location.wrap([1, 2]);

        expect(location.x).toBe(1);
        expect(location.y).toBe(2);
      });
    });
  });

  describe("#add", () => {
    describe("given a Location", () => {
      it("returns a new Location offset by the given Location", () => {
        const location = new Location([1, 1]);
        const newLocation = location.add(new Location([1, 1]));

        expect(newLocation.x).toBe(2);
        expect(newLocation.y).toBe(2);
      });
    });

    describe("given a tuple", () => {
      it("returns a new Location offset by the given tuple", () => {
        const location = new Location([1, 1]);
        const newLocation = location.add([1, 1]);

        expect(newLocation.x).toBe(2);
        expect(newLocation.y).toBe(2);
      });
    });
  });

  describe("#goEast", () => {
    it("returns a Location with x incremented by 1", () => {
      const location = new Location([1, 2]);
      const newLocation = location.goEast();

      expect(newLocation.x).toBe(2);
      expect(newLocation.y).toBe(2);
    });
  });

  describe("#goWest", () => {
    it("returns a Location with x decremented by 1", () => {
      const location = new Location([1, 2]);
      const newLocation = location.goWest();

      expect(newLocation.x).toBe(0);
      expect(newLocation.y).toBe(2);
    });
  });

  describe("#goNortheast", () => {
    it("returns a Location with y incremented by 1", () => {
      const location = new Location([1, 2]);
      const newLocation = location.goNortheast();

      expect(newLocation.x).toBe(1);
      expect(newLocation.y).toBe(3);
    });
  });

  describe("#goSouthwest", () => {
    it("returns a Location with y decremented by 1", () => {
      const location = new Location([1, 2]);
      const newLocation = location.goSouthwest();

      expect(newLocation.x).toBe(1);
      expect(newLocation.y).toBe(1);
    });
  });

  describe("#equals", () => {
    describe("given a Location", () => {
      describe("with the same X and Y", () => {
        it("returns true", () => {
          const location1 = new Location([1, 2]);
          const location2 = new Location([1, 2]);

          expect(location1.equals(location2)).toBe(true);
        });
      });

      describe("with a different X", () => {
        it("returns false", () => {
          const location1 = new Location([1, 2]);
          const location2 = new Location([2, 2]);

          expect(location1.equals(location2)).toBe(false);
        });
      });

      describe("with a different Y", () => {
        it("returns false", () => {
          const location1 = new Location([1, 2]);
          const location2 = new Location([1, 3]);

          expect(location1.equals(location2)).toBe(false);
        });
      });
    });

    describe("given a location tuple", () => {
      describe("with the same X and Y", () => {
        it("returns true", () => {
          const location = new Location([1, 2]);

          expect(location.equals([1, 2])).toBe(true);
        });
      });

      describe("with a different X", () => {
        it("returns false", () => {
          const location = new Location([1, 2]);

          expect(location.equals([2, 2])).toBe(false);
        });
      });

      describe("with a different Y", () => {
        it("returns false", () => {
          const location = new Location([1, 2]);

          expect(location.equals([1, 3])).toBe(false);
        });
      });
    });

    describe("given something else", () => {
      it("returns false", () => {
        const location = new Location([1, 2]);

        expect(location.equals("whatever")).toBe(false);
      });
    });
  });
});
