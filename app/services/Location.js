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
}
