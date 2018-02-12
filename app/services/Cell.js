import Location from "./Location";
import Tone from "./Tone";
import CommaOffset from "./CommaOffset";
import SemitoneOffset from "./SemitoneOffset";
import Ratio from "./Ratio";

export default class Cell {
  constructor({
    location,
    tone,
    commaOffset,
    semitoneOffset,
    ratio,
    fundamental
  }) {
    this.location = Location.wrap(location);
    this.tone = Tone.wrap(tone);
    this.commaOffset = CommaOffset.wrap(commaOffset);
    this.semitoneOffset = SemitoneOffset.wrap(semitoneOffset);
    this.ratio = Ratio.wrap(ratio);
    this.fundamental = fundamental;
  }

  get name() {
    return (
      this.semitoneOffset.toString() +
      this.tone.toString() +
      this.commaOffset.toString()
    );
  }

  get frequency() {
    return this.fundamental * this.ratio.toNumber();
  }

  goEast() {
    return new this.constructor({
      location: this.location.goEast(),
      tone: this.tone.goEast(),
      commaOffset: this.commaOffset.goEast(this.tone),
      semitoneOffset: this.semitoneOffset.goEast(this.tone),
      ratio: this.ratio.goEast(),
      fundamental: this.fundamental
    });
  }

  goWest() {
    return new this.constructor({
      location: this.location.goWest(),
      tone: this.tone.goWest(),
      commaOffset: this.commaOffset.goWest(this.tone),
      semitoneOffset: this.semitoneOffset.goWest(this.tone),
      ratio: this.ratio.goWest(),
      fundamental: this.fundamental
    });
  }

  goNortheast() {
    return new this.constructor({
      location: this.location.goNortheast(),
      tone: this.tone.goNortheast(),
      commaOffset: this.commaOffset.goNortheast(this.tone),
      semitoneOffset: this.semitoneOffset.goNortheast(this.tone),
      ratio: this.ratio.goNortheast(),
      fundamental: this.fundamental
    });
  }

  goSouthwest() {
    return new this.constructor({
      location: this.location.goSouthwest(),
      tone: this.tone.goSouthwest(),
      commaOffset: this.commaOffset.goSouthwest(this.tone),
      semitoneOffset: this.semitoneOffset.goSouthwest(this.tone),
      ratio: this.ratio.goSouthwest(),
      fundamental: this.fundamental
    });
  }
}
