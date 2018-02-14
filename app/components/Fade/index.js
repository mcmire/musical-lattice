import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import Transition, {
  ENTERING,
  ENTERED,
  EXITING
} from "react-transition-group/Transition";

import styles from "./index.css";

const DURATION = 300;
const STYLES = {
  [ENTERING]: "in",
  [ENTERED]: "in",
  [EXITING]: "out"
};

class Fade extends React.Component {
  render() {
    return (
      <Transition {...this.props} timeout={DURATION}>
        {(state, innerProps) => {
          return React.cloneElement(this.props.children, {
            ...innerProps,
            className: [
              this.props.children.props.className,
              styles.fade,
              styles[STYLES[state]]
            ].join(" ")
          });
        }}
      </Transition>
    );
  }
}

export default CSSModules(Fade, styles);
