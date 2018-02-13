import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import cellShapesFilePath from "../../svg/cell-shapes.svg";
import CellLabel from "../../models/CellLabel";
import styles from "./index.css";

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
          width: `${this.props.label.width}px`,
          height: `${this.props.label.height}px`,
          left: this.props.label.position.x,
          top: this.props.label.position.y
        }}
      >
        <div styleName="name">{this.props.label.name}</div>
        <div styleName={this._ratioStyleName}>
          <span styleName="numerator">{this.props.label.ratioNumerator}</span>
          <span styleName="slash">|</span>
          <span styleName="denominator">
            {this.props.label.ratioDenominator}
          </span>
        </div>
        <div styleName="frequency">{this.props.label.formattedFrequency}</div>
      </div>
    );
  }

  get _ratioStyleName() {
    const styles = ["ratio"];
    const ratioSize = this.props.label.ratioSize;

    if (ratioSize >= 6) {
      styles.push("ratio-thin");
    }

    if (ratioSize >= 7) {
      styles.push("ratio-smaller");
    }

    return styles.join(" ");
  }
}

Cell.propTypes = {
  className: PropTypes.string,
  label: PropTypes.instanceOf(CellLabel).isRequired,
  group: PropTypes.number.isRequired
};

export default CSSModules(Cell, styles, { allowMultiple: true });
