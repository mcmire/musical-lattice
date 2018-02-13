const EAST_WEST_TONES = [1, 5, 2, 6, 3, 7, 4];
const NORTHEAST_SOUTHWEST_TONES = [1, 3, 5, 7, 2, 4, 6];

export default class Tone {
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

  goEast() {
    return this._offset(EAST_WEST_TONES, 1);
  }

  goWest() {
    return this._offset(EAST_WEST_TONES, -1);
  }

  goNortheast() {
    return this._offset(NORTHEAST_SOUTHWEST_TONES, 1);
  }

  goSouthwest() {
    return this._offset(NORTHEAST_SOUTHWEST_TONES, -1);
  }

  toString() {
    return this.value.toString();
  }

  _offset(tones, offset) {
    const toneIndex = tones.indexOf(this.value);
    const newToneIndex = (toneIndex + offset + tones.length) % tones.length;
    return new this.constructor(tones[newToneIndex]);
  }
}
