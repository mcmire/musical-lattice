import React from "react";
import { Link, Route } from "react-router-dom";
import About from "../About";
import Features from "../Features";
import Home from "../Home";

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Route path="/" exact={true} component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/about" component={About} />
        </div>
      </div>
    );
  }
}
