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
});
