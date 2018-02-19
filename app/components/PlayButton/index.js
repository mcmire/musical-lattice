import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import StartAudioContext from "startaudiocontext";
import Tone from "tone";
import { Icon } from "rmwc/Icon";

import styles from "./index.css";

class PlayButton extends React.Component {
  componentDidMount() {
    StartAudioContext(Tone.context, this.element);
  }

  render() {
    return (
      <button
        ref={element => (this.element = element)}
        styleName="root"
        onClick={this.props.onClick}
      >
        Play
        <Icon use="play_arrow" styleName="play-icon" />
      </button>
    );
  }
}

PlayButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CSSModules(PlayButton, styles);
