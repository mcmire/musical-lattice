import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import cellShapesFilePath from "../../svg/cell-shapes.svg";
import CellPresenter from "../../models/CellPresenter";
import styles from "./index.css";

class Cell extends React.Component {
  render() {
    return (
      <div
        className={this.props.className}
        styleName="root"
        style={{
          backgroundImage: `url(${cellShapesFilePath}#shape-${
            this.props.cellPresenter.group
          })`,
          width: `${this.props.cellPresenter.width}px`,
          height: `${this.props.cellPresenter.height}px`,
          left: this.props.cellPresenter.position.x,
          top: this.props.cellPresenter.position.y
        }}
      >
        <div styleName="name">{this.props.cellPresenter.name}</div>
        <div styleName={this._ratioStyleName}>
          <span styleName="numerator">
            {this.props.cellPresenter.ratioNumerator}
          </span>
          <span styleName="slash">|</span>
          <span styleName="denominator">
            {this.props.cellPresenter.ratioDenominator}
          </span>
        </div>
        <div styleName="frequency">
          {this.props.cellPresenter.formattedFrequency}
        </div>
      </div>
    );
  }

  get _ratioStyleName() {
    const styles = ["ratio"];
    const ratioSize = this.props.cellPresenter.ratioSize;

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
  cellPresenter: PropTypes.instanceOf(CellPresenter)
};

export default CSSModules(Cell, styles, { allowMultiple: true });
