import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import { Icon } from "rmwc/Icon";
import Tooltip from "rc-tooltip";

import InfoModal from "../InfoModal";
import styles from "./index.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isModalOpen: false };

    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
  }

  render() {
    return (
      <ul styleName="root">
        <li>
          <Tooltip
            placement="left"
            mouseLeaveDelay={0}
            overlay="What is this?"
            prefixCls="tooltip"
          >
            <a href="#" onClick={this._openModal}>
              <Icon use="help" styleName="help-icon" />
            </a>
          </Tooltip>
        </li>
        <InfoModal isOpen={this.state.isModalOpen} onClose={this._closeModal} />
      </ul>
    );
  }

  _openModal() {
    this.setState({ isModalOpen: true });
  }

  _closeModal() {
    this.setState({ isModalOpen: false });
  }
}

export default CSSModules(Nav, styles);
