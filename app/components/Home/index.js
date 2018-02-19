import React from "react";

import { buildLattice } from "../../models/Lattice";
import Header from "../Header";
import Nav from "../Nav";
import Honeycomb from "../Honeycomb";
import Cell from "../Cell";
import Tone from "tone";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { viewport: this._measureViewport() };

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

    this._onWindowResize = this._onWindowResize.bind(this);
  }

  render() {
    const lattice = buildLattice(this.state.viewport);

    return (
      <Honeycomb lattice={lattice} synth={this.synth}>
        <Header />
        <Nav synth={this.synth} />
      </Honeycomb>
    );
  }

  componentDidMount() {
    window.addEventListener("resize", this._onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._onWindowResize);
  }

  _onWindowResize() {
    this.setState({ viewport: this._measureViewport() });
  }

  _measureViewport() {
    return { width: window.innerWidth, height: window.innerHeight };
  }
}

export default Home;
