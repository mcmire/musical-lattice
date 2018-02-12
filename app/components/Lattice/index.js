import React from "react";
import PropTypes from "prop-types";

import CellModel from "../../services/Cell";
import CellComponent from "../Cell";

class Lattice extends React.Component {
  render() {
    return <div>{this._buildCells()}</div>;
  }

  _buildCells() {
    return this.props.cells.map(cell => {
      return (
        <CellComponent
          frequency={cell.frequency}
          group={1}
          key={cell.name}
          location={cell.location}
          name={cell.name}
          ratio={cell.ratio}
          viewportHeight={this.props.viewportHeight}
          viewportWidth={this.props.viewportWidth}
        />
      );
    });
  }
}

Lattice.propTypes = {
  cells: PropTypes.arrayOf((array, index) => {
    if (!(array[index] instanceof CellModel)) {
      return new Error(
        `All values must be Cells, but found a ${array[index].constructor} ` +
        "instead"
      );
    }
  }),
  viewportWidth: PropTypes.number.isRequired,
  viewportHeight: PropTypes.number.isRequired
};

export default Lattice;
