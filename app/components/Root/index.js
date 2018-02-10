import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "../Home";
import Users from "../Users";

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
              <Link to="/members">Users</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Route path="/" exact={true} component={Home} />
          <Route path="/members" component={Users} />
        </div>
      </div>
    );
  }
}
