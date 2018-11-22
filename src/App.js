import React, { Component } from "react";
import "./App.css";
import Creanciers from "./components/creanciers";
import Debiteurs from "./components/debiteurs";

class App extends Component {
  render() {
    return (
      <div>
        <Creanciers />
        <Debiteurs />
      </div>
    );
  }
}

export default App;
