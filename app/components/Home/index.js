import React from "react";
import CSSModules from "react-css-modules";

import styles from "./index.css";
import Lattice from "../Lattice";

class Home extends React.Component {
  render() {
    return (
      <Lattice />
    );
  }
}

export default CSSModules(Home, styles);
