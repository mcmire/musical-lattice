import { times } from "lodash";
import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import Tone from "tone";

import roundToPrecision from "../../../util/roundToPrecision";
import PlayButton from "../PlayButton";
import styles from "./index.css";

const DURATION = 0.4;

class UndertoneSeriesPlayer extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  render() {
    return <PlayButton onClick={this._onClick} />;
  }

  _onClick() {
    this._frequenciesAndTimes.forEach(({ frequency, time }) => {
      this.props.synth.triggerAttackRelease(frequency, DURATION, time);
    });
  }

  get _frequenciesAndTimes() {
    return times(this.props.size, i => {
      return {
        frequency: this.props.fundamental * this.props.size / (i + 1),
        time: `+${i * DURATION}`
      };
    });
  }
}

UndertoneSeriesPlayer.propTypes = {
  synth: PropTypes.instanceOf(Tone.PolySynth),
  fundamental: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
};

export default CSSModules(UndertoneSeriesPlayer, styles);
