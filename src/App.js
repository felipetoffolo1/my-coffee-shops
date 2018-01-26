import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul class="menu">
          <li>
            <a href="#">One</a>
          </li>
          <li>
            <a href="#">Two</a>
          </li>
          <li>
            <a href="#">Three</a>
          </li>
          <li>
            <a href="#">Four</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
