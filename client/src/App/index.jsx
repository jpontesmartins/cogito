import React, { Component, Fragment } from "react";
import BaseMap from "../BaseMap";
import List from "../List";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className="container">
        <List />
        <BaseMap />
      </div>
    );
  }
}

export default App;