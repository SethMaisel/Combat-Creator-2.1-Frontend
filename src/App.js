import React, { Component } from "react";
import Login from "./components/Login";
import ServerMessage from "./components/ServerMessage";
import FightPage from "./containers/FightPage";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FightPage />
      </div>
    );
  }
}

export default App;