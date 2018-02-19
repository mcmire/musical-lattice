import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import { Icon } from "rmwc/Icon";

import styles from "./index.css";

class PlayButton extends React.Component {
  render() {
    return (
      <button styleName="root" onClick={this.props.onClick}>
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
