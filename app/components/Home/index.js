import React from "react";
import CSSModules from "react-css-modules";

import styles from "./index.css";
import latticeNotes from "../../services/latticeNotes";
import Honeycomb from "../Honeycomb";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = this._calculateWindowDimensions();

    this._onWindowResize = this._onWindowResize.bind(this);
  }

  render() {
    return (
      <Honeycomb
        notes={latticeNotes}
        viewportWidth={this.state.viewportWidth}
        viewportHeight={this.state.viewportHeight}
      />
    );
  }

  componentDidMount() {
    window.addEventListener("resize", this._onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._onWindowResize);
  }

  _onWindowResize() {
    const dimensions = this._calculateWindowDimensions();
    this.setState(dimensions);
  }

  _calculateWindowDimensions() {
    return {
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight
    };
  }
}

export default CSSModules(Home, styles);
