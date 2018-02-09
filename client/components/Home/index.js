import React from "react";
import CSSModules from "react-css-modules";
import styles from "./index.css";

class Home extends React.Component {
  render() {
    return <p styleName="root">This is the home page</p>;
  }
}

export default CSSModules(Home, styles);
