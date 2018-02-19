export default class Location {
  static wrap(value) {
    if (value instanceof this) {
      return value;
    } else {
      return new this(value);
    }
  }

  constructor([x, y]) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    const offsetLocation = this.constructor.wrap(other);
    return new this.constructor([
      this.x + offsetLocation.x,
      this.y + offsetLocation.y
    ]);
  }

  goEast() {
    return new this.constructor([this.x + 1, this.y]);
  }

  goWest() {
    return new this.constructor([this.x - 1, this.y]);
  }

  goNortheast() {
    return new this.constructor([this.x, this.y + 1]);
  }

  goSouthwest() {
    return new this.constructor([this.x, this.y - 1]);
  }

  equals(other) {
    return (
      (other instanceof Location && other.x === this.x && other.y === this.y) ||
      (Array.isArray(other) && other[0] === this.x && other[1] === this.y)
    );
  }
}
