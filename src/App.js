import React, { Component } from "react";
import FightPage from "./containers/FightPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="pageHeader">
        <h1>Welcome to Combat Creator</h1>
        <h4>...Version 2</h4>
        <h6>....point one</h6>

        <div className="App">
        <FightPage />
        </div>
      </div>
      
    );
  }
}

export default App;