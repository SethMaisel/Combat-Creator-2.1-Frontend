import React, { Component } from "react";
import Login from "./components/Login";
import ServerMessage from "./components/ServerMessage";
import FightPage from "./containers/FightPage";
import Header from "./components/Header";
import "./App.css";

class App extends Component {

  state={
    user: null
  }

  login(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            username: formData.get("username"),
            password: formData.get("password"),
        })
    }).then(response => response.json())
      .then()=> fetch("localhost:3000/login"))
        .then(({ token }) => {
            localStorage.setItem("token", token)
        })
}

logout(event) {
    event.preventDefault()
    localStorage.removeItem("token")
}
  render() {
    return (
      
      <div className="App">
        {this.state.user ?(
        <>
        <Header />
        <FightPage />
        </>)
        : <Login 
            login={this.login}
            logout={this.logout}
            />} 
      </div>
    );
  }
}

export default App;