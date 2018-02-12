import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import styles from "./index.css";
import cellShapesFilePath from "../../svg/cell-shapes.svg";

function roundToPrecision(number, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

class Cell extends React.Component {
  render() {
    return (
      <div
        className={this.props.className}
        styleName="root"
        style={{
          left: 0,
          top: 0,
          backgroundImage: `url(${cellShapesFilePath}#shape-${
            this.props.group
          })`
        }}
      >
        <div styleName="name">{this.props.name}</div>
        <div styleName={this._ratioStyleName}>
          <span styleName="numerator">{this.props.ratio[0]}</span>
          <span styleName="slash">|</span>
          <span styleName="denominator">{this.props.ratio[1]}</span>
        </div>
        <div styleName="frequency">{this._frequency}</div>
      </div>
    );
  }

  get _frequency() {
    return roundToPrecision(this.props.fundamental * this._fraction, 2);
  }

  get _fraction() {
    return this.props.ratio[0] / this.props.ratio[1];
  }

  get _ratioStyleName() {
    const styles = ["ratio"];

    if (this.props.ratio.join("").length >= 6) {
      styles.push("ratio-thin");
    }

    if (this.props.ratio.join("").length >= 7) {
      styles.push("ratio-smaller");
    }

    return styles.join(" ");
  }
}

Cell.propTypes = {
  group: PropTypes.number.isRequired,
  fundamental: PropTypes.number.isRequired,
  ratio: PropTypes.arrayOf(PropTypes.number).isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.arrayOf(PropTypes.number).isRequired,
  className: PropTypes.string
};

export default CSSModules(Cell, styles, { allowMultiple: true });
