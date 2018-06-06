import React from "react";
import CSSModules from "react-css-modules";

import SpinnableNumber from "../SpinnableNumber";

import styles from "./index.css";
import numberStyles from "./number.css";

const MIN_POWER = -20;
const MAX_POWER = 20;

class Power extends React.Component {
  constructor(props) {
    super(props);

    this.state = { power: 0 };
  }

  render() {
    return (
      <div styleName="root" style={this._determineStyle()}>
        <span styleName="base">{this.props.base}</span>
        <SpinnableNumber
          styles={numberStyles}
          tabindex={this.props.index + 1}
          value={this.props.power}
          min={MIN_POWER}
          max={MAX_POWER}
          onChange={this.props.onChange}
          canBeChangedTo={this.props.canBeChangedTo}
        />
      </div>
    );
  }

  _determineStyle() {
    const length = this.props.power.toString().length;
    const marginRight = 0.9 + (length - 1) * 0.35;
    return { marginRight: `${marginRight}em` };
  }
}

export default CSSModules(Power, styles);
