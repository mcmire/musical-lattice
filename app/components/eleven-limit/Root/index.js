import { difference, reduce, sample } from "lodash";
import React from "react";
import CSSModules from "react-css-modules";
import Tone from "tone";
import StartAudioContext from "startaudiocontext";

import PowerUnit from "../PowerUnit";
import ToggleButton from "../ToggleButton";

import styles from "./index.css";

const FUNDAMENTAL = 440;
const BASES = [2, 3, 5, 13, 17, 19, 23, 29];
// https://www.quora.com/How-many-singers-have-or-have-had-a-five-5-octave-or-greater-voice-range
const MIN_FREQUENCY = 40; // ~E1
const MAX_FREQUENCY = 4435; // ~C#8

function roundToPrecision(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

function calculateFrequency(fundamental, powers) {
  const multiplier = reduce(
    powers,
    (product, power, base) => product * base ** power,
    1
  );
  return fundamental * multiplier;
}

function getBaseLog(base, number) {
  return Math.log(number) / Math.log(base);
}

function calculateDifferenceInCents(newFrequency, oldFrequency) {
  return 1200 * getBaseLog(2, newFrequency / oldFrequency);
}

function calculateState(existingState, base, newPower) {
  const newPowers = { ...existingState.powers, [base]: newPower };
  let newFrequency = calculateFrequency(FUNDAMENTAL, newPowers);

  if (base !== 2) {
    if (newPower === existingState.powers[base] + 1) {
      while (newFrequency > existingState.frequency * 2) {
        newPowers[2] -= 1;
        newFrequency = calculateFrequency(FUNDAMENTAL, newPowers);
      }
    } else if (newPower === existingState.powers[base] - 1) {
      while (newFrequency < existingState.frequency / 2) {
        newPowers[2] += 1;
        newFrequency = calculateFrequency(FUNDAMENTAL, newPowers);
      }
    }
  }

  const newDiffInCents = calculateDifferenceInCents(
    newFrequency,
    existingState.frequency
  );

  return {
    powers: newPowers,
    frequency: newFrequency,
    diffInCents: newDiffInCents
  };
}

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      powers: BASES.reduce((obj, base) => {
        return { ...obj, [base]: 0 };
      }, {}),
      frequency: FUNDAMENTAL,
      cents: 0,
      diffInCents: 0,
      isPlaying: false
    };

    this.synth = new Tone.PolySynth(16, Tone.Synth, {
      oscillator: {
        type: "sine",
        frequency: 440,
        volume: -20
      },
      envelope: {
        attack: 0.05,
        decay: 0,
        sustain: 1,
        release: 1.2
      }
    }).toMaster();

    this._onClickToggle = this._onClickToggle.bind(this);
    this._takeRandomStep = this._takeRandomStep.bind(this);
  }

  componentDidMount() {
    StartAudioContext(Tone.context, this.element);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.frequency !== this.state.frequency) {
      this.synth.triggerAttackRelease(this.state.frequency, 0.4);
    }
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="section">
          <span styleName="component">
            <span styleName="number">{FUNDAMENTAL}</span> hz
          </span>
          {this._renderPowerUnits()}
          <span styleName="component">=</span>
          <span styleName="component">
            <span styleName="number">{this._renderFrequency()}</span> hz{" "}
            <span styleName="diff-in-cents">
              (<span styleName="number">{this._renderDifferenceInCents()}</span>{" "}
              cents)
            </span>
          </span>
        </div>
        <div styleName="section">
          <ToggleButton
            isPlaying={this.state.isPlaying}
            onClick={this._onClickToggle}
            takeRandomStep={this._takeRandomStep}
          />
        </div>
      </div>
    );
  }

  _renderPowerUnits() {
    return BASES.map((base, index) => {
      return (
        <React.Fragment key={base}>
          <span key="operator" styleName="operator">
            *
          </span>
          <PowerUnit
            key="power-unit"
            index={index}
            base={base}
            power={this.state.powers[base]}
            onChange={number => this._onChangePowerUnitFor(base, number)}
            canBeChangedTo={newValue =>
              this._canPowerUnitBeChanged(base, newValue)
            }
          />
        </React.Fragment>
      );
    });
  }

  _renderFrequency() {
    return roundToPrecision(this.state.frequency, 2);
  }

  _renderDifferenceInCents() {
    const roundedValue = roundToPrecision(this.state.diffInCents, 2);

    if (roundedValue > 0) {
      return `+${roundedValue}`;
    } else {
      return roundedValue;
    }
  }

  _onChangePowerUnitFor(base, newPower) {
    this.setState(prevState => {
      const newState = calculateState(prevState, base, newPower);
      return newState;
    });
  }

  _canPowerUnitBeChanged(base, newPower) {
    const { frequency } = calculateState(this.state, base, newPower);
    return frequency >= MIN_FREQUENCY && frequency <= MAX_FREQUENCY;
  }

  _onClickToggle() {
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  _takeRandomStep() {
    this.setState(prevState => {
      const randomBase = sample(difference(BASES, [2]));
      let newState;
      do {
        const randomOffset = sample([-1, 1]);
        newState = calculateState(
          prevState,
          randomBase,
          prevState.powers[randomBase] + randomOffset
        );
      } while (newState.frequency < 100 || newState.frequency > 2000);
      return newState;
    });
  }
}

export default CSSModules(Root, styles);
