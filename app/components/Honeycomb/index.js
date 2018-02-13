import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import Lattice from "../../models/Lattice";
import Cell from "../Cell";
import styles from "./index.css";

function findSmallestYIn(cellLabels) {
  const ys = cellLabels.map(cellLabel => {
    return cellLabel.position.y;
  });

  return Math.min(...ys);
}

class Honeycomb extends React.Component {
  render() {
    const cellLabels = this.props.lattice.buildCellLabels();
    const top = -findSmallestYIn(cellLabels);

    return (
      <div styleName="root" style={{ top: `${top}px` }}>
        {this._renderCells(cellLabels)}
      </div>
    );
  }

  _renderCells(cellLabels) {
    return cellLabels.map(cellLabel => {
      return <Cell key={cellLabel.name} label={cellLabel} />;
    });
  }
}

Honeycomb.propTypes = {
  lattice: PropTypes.instanceOf(Lattice)
};

export default CSSModules(Honeycomb, styles);
