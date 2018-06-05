import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import Tone from "tone";

import PlayButton from "../PlayButton";
import styles from "./index.css";

class ChordPlayer extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  render() {
    return <PlayButton onClick={this._onClick} />;
  }

  _onClick() {
    this.props.synth.triggerAttackRelease(this.props.frequencies, 1);
  }
}

ChordPlayer.propTypes = {
  synth: PropTypes.instanceOf(Tone.PolySynth),
  frequencies: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default CSSModules(ChordPlayer, styles);
