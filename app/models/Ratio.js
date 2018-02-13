import Rational from "./Rational";

export default class Ratio {
  static wrap(value) {
    if (value instanceof this) {
      return value;
    } else if (value instanceof Rational) {
      return new this(value.toArray());
    } else {
      return new this(value);
    }
  }

  constructor([top, bottom]) {
    this.rational = new Rational([top, bottom]);
  }

  get top() {
    return this.rational.top;
  }

  get bottom() {
    return this.rational.bottom;
  }

  goEast() {
    return this.constructor.wrap(this.rational.multiplyBy(3));
  }

  goWest() {
    return this.constructor.wrap(this.rational.divideBy(3));
  }

  goNortheast() {
    return this.constructor.wrap(this.rational.multiplyBy(5));
  }

  goSouthwest() {
    return this.constructor.wrap(this.rational.divideBy(5));
  }

  toArray() {
    return this.rational.toArray();
  }

  toNumber() {
    return this.rational.toNumber();
  }
}
