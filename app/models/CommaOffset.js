export default class CommaOffset {
  static wrap(value) {
    if (value instanceof this) {
      return value;
    } else {
      return new this(value);
    }
  }

  constructor(value) {
    this.value = value;
  }

  goEast(previousTone) {
    if (previousTone.value === 2 || previousTone.value === 7) {
      return new this.constructor(this.value + 1);
    } else {
      return this;
    }
  }

  goWest(previousTone) {
    if (previousTone.value === 4 || previousTone.value === 6) {
      return new this.constructor(this.value - 1);
    } else {
      return this;
    }
  }

  goNortheast(previousTone) {
    if (previousTone.value === 2) {
      return new this.constructor(this.value + 1);
    } else {
      return this;
    }
  }

  goSouthwest(previousTone) {
    if (previousTone.value === 4) {
      return new this.constructor(this.value - 1);
    } else {
      return this;
    }
  }

  toString() {
    if (this.value > 0) {
      return "+".repeat(Math.abs(this.value));
    } else if (this.value < 0) {
      return "-".repeat(Math.abs(this.value));
    } else {
      return "";
    }
  }
}
