import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import Tone from "tone";

import PlayButton from "../PlayButton";
import styles from "./index.css";

const DURATION = 0.4;

class IntervalPlayer extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  render() {
    return <PlayButton onClick={this._onClick} />;
  }

  _onClick() {
    this._events.forEach(event => {
      if (event.frequencies != null) {
        this.props.synth.triggerAttackRelease(
          event.frequencies,
          event.duration,
          event.time
        );
      }
    });
  }

  get _events() {
    return this._frequenciesAndDurations.reduce(
      (events, { frequencies, duration }) => {
        let time;
        if (events.length > 0) {
          time = events[events.length - 1].time.clone().add(`+${duration}`);
        } else {
          time = new Tone.Time("+0.05");
        }
        events.push({ frequencies, duration, time });
        return events;
      },
      []
    );
  }

  get _frequenciesAndDurations() {
    return this._frequenciesAndDurationsForBrokenChord.concat([
      { frequencies: null, duration: DURATION / 2 },
      { frequencies: this.props.frequencies, duration: DURATION * 2 }
    ]);
  }

  get _frequenciesAndDurationsForBrokenChord() {
    return this.props.frequencies.reduce((array, frequency) => {
      array.push({ frequencies: [frequency], duration: DURATION });
      array.push({ frequences: null, duration: DURATION });
      return array;
    }, []);
  }
}

IntervalPlayer.propTypes = {
  synth: PropTypes.instanceOf(Tone.PolySynth),
  frequencies: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default CSSModules(IntervalPlayer, styles);
