import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import { Modal as ReactModal } from "react-overlays";
import { Icon } from "rmwc/Icon";
import Fade from "../Fade";

import styles from "./index.css";

class Modal extends React.Component {
  render() {
    return (
      <ReactModal
        transition={Fade}
        backdropTransition={Fade}
        show={this.props.isOpen}
        onShow={this._onShow}
        backdropClassName={styles.backdrop}
        onEscapeKeyDown={this.props.onClose}
      >
        <div styleName="dialog-wrapper" onClick={this.props.onClose}>
          <div styleName="dialog">
            <div styleName="header-actions">
              <a href="#" onClick={this.props.onClose} styleName="close-link">
                <Icon use="close" />
              </a>
            </div>
            {this._renderHeader()}
            <div styleName="body">{this.props.children}</div>
          </div>
        </div>
      </ReactModal>
    );
  }

  _renderHeader() {
    if (this.props.header) {
      return (
        <header styleName="header">
          <h1>{this.props.header}</h1>
        </header>
      );
    }
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default CSSModules(Modal, styles);
