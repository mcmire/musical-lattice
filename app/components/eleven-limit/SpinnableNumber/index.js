import React from "react";
import CSSModules from "react-css-modules";
import { Icon } from "rmwc/Icon";

import styles from "./index.css";
import UpSpinnerIcon from "../../../svg/number-spinner-up.svg";
import DownSpinnerIcon from "../../../svg/number-spinner-down.svg";

class SpinnableNumber extends React.Component {
  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);
    this._onClickIncrementer = this._onClickIncrementer.bind(this);
    this._onClickDecrementer = this._onClickDecrementer.bind(this);
  }

  render() {
    return (
      <div styleName="root" style={this._determineStyle()}>
        <input
          styleName="input"
          type="number"
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}
          tabIndex={this.props.tabindex}
          onChange={this._onChange}
        />
        <a
          href="#"
          styleName={this._incrementerStyleName()}
          onClick={this._onClickIncrementer}
        >
          <UpSpinnerIcon width={null} height={null} styleName="control-icon" />
        </a>
        <a
          href="#"
          styleName={this._decrementerStyleName()}
          onClick={this._onClickDecrementer}
        >
          <DownSpinnerIcon
            width={null}
            height={null}
            styleName="control-icon"
          />
        </a>
      </div>
    );
  }

  _determineStyle() {
    const length = this.props.value.toString().length;
    const width = 1.75 + (length - 1) * 0.5;
    return { width: `${width}em` };
  }

  _incrementerStyleName() {
    if (this._canBeIncremented()) {
      return "incrementer-enabled";
    } else {
      return "incrementer-disabled";
    }
  }

  _decrementerStyleName() {
    if (this._canBeDecremented()) {
      return "decrementer-enabled";
    } else {
      return "decrementer-disabled";
    }
  }

  _onChange(event) {
    event.preventDefault();

    const newValue = parseInt(event.target.value, 10);

    this._handleChange(newValue);
  }

  _onClickIncrementer(event) {
    event.preventDefault();

    this._handleChange(this.props.value + 1);
  }

  _onClickDecrementer(event) {
    event.preventDefault();

    this._handleChange(this.props.value - 1);
  }

  _handleChange(newValue) {
    if (this._canBeChangedTo(newValue)) {
      this.props.onChange(newValue);
    }
  }

  _canBeIncremented() {
    return this._canBeChangedTo(this.props.value + 1);
  }

  _canBeDecremented() {
    return this._canBeChangedTo(this.props.value - 1);
  }

  _canBeChangedTo(newValue) {
    return (
      newValue >= this.props.min &&
      newValue <= this.props.max &&
      this.props.canBeChangedTo(newValue)
    );
  }
}

export default CSSModules(SpinnableNumber, styles);
