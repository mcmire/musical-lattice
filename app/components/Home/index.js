import React from "react";
import CSSModules from "react-css-modules";

import Lattice from "../../models/Lattice";
import Honeycomb from "../Honeycomb";
import styles from "./index.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { viewport: this._measureViewport() };

    this._onWindowResize = this._onWindowResize.bind(this);
  }

  render() {
    const lattice = new Lattice(this.state.viewport);

    return <Honeycomb lattice={lattice} />;
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

export default CSSModules(Home, styles);
