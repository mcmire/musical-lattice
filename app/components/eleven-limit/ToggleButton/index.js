import React from "react";
import CSSModules from "react-css-modules";

import styles from "./index.css";

const INTERVAL = 250;

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);

    this.timer = null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isPlaying !== this.props.isPlaying) {
      if (this.props.isPlaying) {
        this._start();
      } else {
        this._stop();
      }
    }
  }

  render() {
    return (
      <button styleName="root" onClick={this.props.onClick}>
        {this._renderButtonText()}
      </button>
    );
  }

  _start() {
    const playNote = () => {
      this.props.takeRandomStep();
      this.timer = setTimeout(playNote, INTERVAL);
    };

    playNote();
  }

  _stop() {
    if (this.timer != null) {
      clearTimeout(this.timer);
    }
  }

  _renderButtonText() {
    if (this.props.isPlaying) {
      return "Stop";
    } else {
      return "Start";
    }
  }
}

export default CSSModules(ToggleButton, styles);
