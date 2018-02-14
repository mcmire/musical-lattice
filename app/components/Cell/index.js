import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import cellShapesFilePath from "../../svg/cell-shapes.svg";
import CellLabel from "../../models/CellLabel";
import styles from "./index.css";

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onContextMenu = this._onContextMenu.bind(this);
  }

  render() {
    return (
      <button
        className={this.props.className}
        styleName="root"
        style={{
          backgroundImage: `url(${cellShapesFilePath}#shape-${
            this.props.group
          })`,
          width: `${this.props.label.width}px`,
          height: `${this.props.label.height}px`,
          left: this.props.label.position.x,
          top: this.props.label.position.y,
          zIndex: this.props.zIndex
        }}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        onMouseDown={this._onMouseDown}
        onContextMenu={this._onContextMenu}
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
      </button>
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

  _onMouseEnter() {
    this.props.onMouseEnter(this.props.label);
  }

  _onMouseLeave() {
    this.props.onMouseLeave();
  }

  _onMouseDown(event) {
    event.preventDefault();
    this.props.onMouseDown(this.props.label);
  }

  _onContextMenu(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}

Cell.propTypes = {
  className: PropTypes.string,
  label: PropTypes.instanceOf(CellLabel).isRequired,
  group: PropTypes.number.isRequired,
  zIndex: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired
};

export default CSSModules(Cell, styles, { allowMultiple: true });
