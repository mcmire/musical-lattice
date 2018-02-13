import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import CellPresenter from "../../models/CellPresenter";
import Cell from "../Cell";
import styles from "./index.css";

function findSmallestYIn(cellPresenters) {
  const ys = cellPresenters.map(cellPresenter => {
    return cellPresenter.position.y;
  });

  return Math.min(...ys);
}

class Honeycomb extends React.Component {
  render() {
    const top = -findSmallestYIn(this.props.cellPresenters);

    return (
      <div styleName="root" style={{ top: `${top}px` }}>
        {this._renderCells()}
      </div>
    );
  }

  _renderCells() {
    return this.props.cellPresenters.map(cellPresenter => {
      return <Cell key={cellPresenter.name} cellPresenter={cellPresenter} />;
    });
  }
}

Honeycomb.propTypes = {
  cellPresenters: PropTypes.arrayOf((array, index) => {
    if (!(array[index] instanceof CellPresenter)) {
      return new Error(
        "All values must be CellPresenters, but found a " +
          `${array[index].constructor} instead`
      );
    }
  })
};

export default CSSModules(Honeycomb, styles);
