import React from "react";
import ReactDOM from "react-dom";

import "material-design-icons/iconfont/material-icons.css";
import "typeface-roboto";

import "./stylesheets/eleven-limit/index.css";
import Root from "./components/eleven-limit/Root";

const rootElement = document.querySelector("#root");
let renderRoot;

if (process.env.NODE_ENV === "production") {
  renderRoot = () => {
    ReactDOM.render(
      <Root />,
      rootElement
    );
  };
} else {
  const { AppContainer } = require("react-hot-loader");

  renderRoot = () => {
    ReactDOM.render(
      <AppContainer>
        <Root />
      </AppContainer>,
      rootElement
    );
  };
}

renderRoot();

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./components/eleven-limit/Root", renderRoot);
  }
}
