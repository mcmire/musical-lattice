export default class Rational {
  constructor([top, bottom]) {
    this.top = top;
    this.bottom = bottom;
  }

  multiplyBy(number) {
    return new this.constructor([this.top * number, this.bottom]).normalize();
  }

  divideBy(number) {
    return new this.constructor([this.top, this.bottom * number]).normalize();
  }

  normalize() {
    if (this.top === this.bottom) {
      return new this.constructor([1, 1]);
    } else if (this.top % 2 === 0 && this.bottom % 2 === 0) {
      return this._reduceBy(2);
    } else if (this.top % 3 === 0 && this.bottom % 3 === 0) {
      return this._reduceBy(3);
    } else if (this.top % 5 === 0 && this.bottom % 5 === 0) {
      return this._reduceBy(5);
    } else {
      return this;
    }
  }

  toArray() {
    return [this.top, this.bottom];
  }

  toNumber() {
    return this.top / this.bottom;
  }

  _reduceBy(number) {
    return new this.constructor([
      this.top / number,
      this.bottom / number
    ]).normalize();
  }
}
