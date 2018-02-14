const WIDTH = 104;
const WIDTH_WITH_BORDER = WIDTH + 2;
const HEIGHT = 120;
const HEIGHT_WITH_BORDER = HEIGHT + 2;

function roundToPrecision(number, precision) {
  const factor = Math.pow(10, precision);
  return (Math.round(number * factor) / factor).toString();
}

export default class CellLabel {
  constructor({ note, viewport, position = null }) {
    this.note = note;
    this.viewport = viewport;
    this.position = position;

    this.width = WIDTH;
    this.height = HEIGHT;
  }

  get position() {
    if (this._position == null) {
      const x =
        this._center.x +
        this.note.location.x * WIDTH_WITH_BORDER +
        this.note.location.y * (WIDTH_WITH_BORDER / 2);

      const y =
        this._center.y - this.note.location.y * 0.75 * HEIGHT_WITH_BORDER;

      this._position = { x, y };
    }

    return this._position;
  }

  set position(position) {
    this._position = position;
  }

  offsetPositionBy(position) {
    return new this.constructor({
      note: this.note,
      viewport: this.viewport,
      position: {
        x: this.position.x + position.x,
        y: this.position.y + position.y
      }
    });
  }

  get name() {
    return this.note.name;
  }

  get location() {
    return this.note.location;
  }

  get ratioNumerator() {
    return this.note.ratio.top;
  }

  get ratioDenominator() {
    return this.note.ratio.bottom;
  }

  get ratioSize() {
    return this.note.ratio.toArray().join("").length;
  }

  get frequency() {
    return this.note.frequency;
  }

  get formattedFrequency() {
    return roundToPrecision(this.note.frequency, 2);
  }

  equals(other) {
    return (other instanceof CellLabel && other.name === this.name);
  }

  get _center() {
    const x = this.viewport.width / 2 - WIDTH_WITH_BORDER / 2;
    const y = this.viewport.height / 2 - HEIGHT_WITH_BORDER / 2;

    return { x, y };
  }
}

CellLabel.HEIGHT = HEIGHT;
