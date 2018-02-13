import { flatMap } from "lodash";
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
    const cellLabelGroups = this.props.lattice.buildCellLabelGroups();
    const cellLabels = flatMap(cellLabelGroups, cellLabelGroup => {
      return cellLabelGroup.cellLabels;
    });
    const top = -findSmallestYIn(cellLabels);

    return (
      <div styleName="root" style={{ top: `${top}px` }}>
        {this._renderCells(cellLabelGroups)}
      </div>
    );
  }

  _renderCells(cellLabelGroups) {
    return flatMap(cellLabelGroups, cellLabelGroup => {
      return cellLabelGroup.cellLabels.map(cellLabel => {
        return (
          <Cell
            key={cellLabel.name}
            label={cellLabel}
            group={cellLabelGroup.number}
          />
        );
      });
    });
  }
}

Honeycomb.propTypes = {
  lattice: PropTypes.instanceOf(Lattice)
};

export default CSSModules(Honeycomb, styles);
