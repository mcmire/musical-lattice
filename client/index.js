import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Root from "./components/Root";

const rootElement = document.querySelector("#root");

function renderRoot() {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </AppContainer>,
    rootElement
  );
}

renderRoot();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/Root", renderRoot);
}
