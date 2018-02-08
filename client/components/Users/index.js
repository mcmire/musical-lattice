import fetch from "cross-fetch";
import React from "react";

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this._fetchUsers();
  }

  render() {
    return <ul>{this._renderList()}</ul>;
  }

  async _fetchUsers() {
    console.log("Fetching users...");

    const response = await fetch("/users.json");

    if (response.status === 200) {
      const json = await response.json();
      this.setState({ users: json.users });
    } else {
      throw new Error("Bad response");
    }
  }

  _renderList() {
    return this.state.users.map(user => {
      return <li key={user.id}>{`${user.id}: ${user.name}`}</li>;
    });
  }
}
