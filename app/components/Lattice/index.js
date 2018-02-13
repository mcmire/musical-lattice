import React from "react";
import PropTypes from "prop-types";

import Note from "../../services/Note";
import Cell from "../Cell";

class Lattice extends React.Component {
  render() {
    return <div>{this._buildCells()}</div>;
  }

  _buildCells() {
    return this.props.notes.map(note => {
      return (
        <Cell
          frequency={note.frequency}
          group={1}
          key={note.name}
          location={note.location}
          name={note.name}
          ratio={note.ratio}
          viewportHeight={this.props.viewportHeight}
          viewportWidth={this.props.viewportWidth}
        />
      );
    });
  }
}

Lattice.propTypes = {
  cells: PropTypes.arrayOf((array, index) => {
    if (!(array[index] instanceof Note)) {
      return new Error(
        `All values must be Notes, but found a ${array[index].constructor} ` +
          "instead"
      );
    }
  }),
  viewportWidth: PropTypes.number.isRequired,
  viewportHeight: PropTypes.number.isRequired
};

export default Lattice;
