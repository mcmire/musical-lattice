import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import styles from "./index.css";

class Header extends React.Component {
  render() {
    return (
      <header styleName="root">
        <h1 styleName="title">The Lattice</h1>
        <h2 styleName="subtitle">
          a musical playground by&nbsp;
          <a href="http://twitter.com/mcmire" target="_blank">
            @mcmire
          </a>
        </h2>
        <p styleName="source">
          <a href="https://github.com/mcmire/musical-lattice" target="_blank">
            (Source on GitHub)
          </a>
        </p>
      </header>
    );
  }
}

export default CSSModules(Header, styles);
