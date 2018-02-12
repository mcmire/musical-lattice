import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import cellShapesFilePath from "../../svg/cell-shapes.svg";
import Location from "../../services/Location";
import Ratio from "../../services/Ratio";
import styles from "./index.css";

const WIDTH = 104;
const WIDTH_WITH_BORDER = WIDTH + 2;
const HEIGHT = 120;
const HEIGHT_WITH_BORDER = HEIGHT + 2;

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
          backgroundImage: `url(${cellShapesFilePath}#shape-${
            this.props.group
          })`,
          width: `${WIDTH}px`,
          height: `${HEIGHT}px`,
          left: this._location.x,
          top: this._location.y
        }}
      >
        <div styleName="name">{this.props.name}</div>
        <div styleName={this._ratioStyleName}>
          <span styleName="numerator">{this.props.ratio.top}</span>
          <span styleName="slash">|</span>
          <span styleName="denominator">{this.props.ratio.bottom}</span>
        </div>
        <div styleName="frequency">{this._formattedFrequency}</div>
      </div>
    );
  }

  get _location() {
    const x =
      this._center.x +
      this.props.location.x * WIDTH_WITH_BORDER +
      this.props.location.y * (WIDTH_WITH_BORDER / 2);

    const y =
      this._center.y + -this.props.location.y * 0.75 * HEIGHT_WITH_BORDER;

    return { x, y };
  }

  get _center() {
    const x = this.props.viewportWidth / 2 - WIDTH_WITH_BORDER / 2;
    const y = this.props.viewportHeight / 2 - HEIGHT_WITH_BORDER / 2;

    return { x, y };
  }

  get _formattedFrequency() {
    return roundToPrecision(this.props.frequency, 2);
  }

  get _ratioStyleName() {
    const styles = ["ratio"];
    const joinedRatio = this.props.ratio.toArray().join("");

    if (joinedRatio.length >= 6) {
      styles.push("ratio-thin");
    }

    if (joinedRatio.length >= 7) {
      styles.push("ratio-smaller");
    }

    return styles.join(" ");
  }
}

Cell.propTypes = {
  className: PropTypes.string,
  frequency: PropTypes.number.isRequired,
  group: PropTypes.number.isRequired,
  location: PropTypes.instanceOf(Location),
  name: PropTypes.string.isRequired,
  ratio: PropTypes.instanceOf(Ratio),
  viewportHeight: PropTypes.number.isRequired,
  viewportWidth: PropTypes.number.isRequired
};

export default CSSModules(Cell, styles, { allowMultiple: true });
