import { flatMap } from "lodash";
import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import Tone from "tone";

import Lattice from "../../models/Lattice";
import Cell from "../Cell";
import styles from "./index.css";

class Honeycomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mousedOverCell: null };

    this.synth = new Tone.PolySynth(16, Tone.Synth, {
      oscillator: {
        type: "sine",
        frequency: 440,
        volume: -6
      },
      envelope: {
        attack: 0.05,
        decay: 0,
        sustain: 0.5,
        release: 1.2
      }
    }).toMaster();

    this._onCellMouseEnter = this._onCellMouseEnter.bind(this);
    this._onCellMouseLeave = this._onCellMouseLeave.bind(this);
    this._onCellMouseDown = this._onCellMouseDown.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
  }

  render() {
    const lattice = this.props.lattice.build();

    return (
      <div
        styleName="root"
        onMouseUp={this._onMouseUp}
        style={{ height: `${this.props.lattice.height}px` }}
      >
        {this._renderCells()}
      </div>
    );
  }

  _renderCells() {
    return flatMap(this.props.lattice.cellLabelGroups, cellLabelGroup => {
      return cellLabelGroup.cellLabels.map(cellLabel => {
        return (
          <Cell
            key={cellLabel.name}
            label={cellLabel}
            group={cellLabelGroup.number}
            zIndex={this._determineZIndex(cellLabel)}
            onMouseEnter={this._onCellMouseEnter}
            onMouseLeave={this._onCellMouseLeave}
            onMouseDown={this._onCellMouseDown}
          />
        );
      });
    });
  }

  _onCellMouseEnter(cellLabel) {
    const newState = {};

    if (this.state.activeCell != null) {
      this.synth.triggerRelease(this.state.activeCell.frequency);
      this.synth.triggerAttack(cellLabel.frequency);
      newState.activeCell = cellLabel;
    }

    newState.mousedOverCell = cellLabel;

    this.setState(newState);
  }

  _onCellMouseLeave() {
    this.setState({ mousedOverCell: null });
  }

  _onCellMouseDown(cellLabel) {
    this.setState({ activeCell: cellLabel });
    this.synth.triggerAttack(cellLabel.frequency);
  }

  _onMouseUp(event) {
    event.preventDefault();

    this.setState({ activeCell: null });
    this.synth.releaseAll();
  }

  _determineZIndex(cellLabel) {
    if (
      this.state.mousedOverCell &&
      this.state.mousedOverCell.name === cellLabel.name
    ) {
      return 1;
    } else {
      return 0;
    }
  }
}

Honeycomb.propTypes = {
  lattice: PropTypes.instanceOf(Lattice)
};

export default CSSModules(Honeycomb, styles);
