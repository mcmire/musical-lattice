import React from "react";
import CSSModules from "react-css-modules";

import styles from "./index.css";
import Cell from "../Cell";

const FUNDAMENTAL = 440;

class Lattice extends React.Component {
  render() {
    return (
      <div styleName="root">
        <Cell
          className={styles.cell}
          group={1}
          fundamental={FUNDAMENTAL}
          ratio={[9, 7]}
          name="##3+"
          location={[0, 0]}
        />
        <Cell
          className={styles.cell}
          group={1}
          fundamental={FUNDAMENTAL}
          ratio={[98, 79]}
          name="##3+"
          location={[0, 0]}
        />
        <Cell
          className={styles.cell}
          group={1}
          fundamental={FUNDAMENTAL}
          ratio={[980, 79]}
          name="##3+"
          location={[0, 0]}
        />
        <Cell
          className={styles.cell}
          group={1}
          fundamental={FUNDAMENTAL}
          ratio={[98, 790]}
          name="##3+"
          location={[0, 0]}
        />
        <Cell
          className={styles.cell}
          group={1}
          fundamental={FUNDAMENTAL}
          ratio={[980, 790]}
          name="##3+"
          location={[0, 0]}
        />
        <Cell
          className={styles.cell}
          group={1}
          fundamental={FUNDAMENTAL}
          ratio={[1800, 999]}
          name="##3+"
          location={[0, 0]}
        />
      </div>
    );
  }
}

export default CSSModules(Lattice, styles);
