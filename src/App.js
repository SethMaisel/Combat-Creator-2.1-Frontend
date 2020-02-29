import React, { Component } from "react";
import Login from "./components/Login";
import ServerMessage from "./components/ServerMessage";
import FightPage from "./containers/FightPage";
import Header from "./components/Header";
import "./App.css";

class App extends Component {

  // state = {
  //   user: null,
  //   isLoggedIn: null
  // }

  // componentDidMount() {
  //   this.checkForToken ()
  // }

  // login(event) {
  //   event.preventDefault()
  //   const formData = new FormData(event.target)
  //   const username = formData.get("username")
  //   const password = formData.get("password")
  //   console.log("formData", password)
  //   console.log("formData", username)
  //   fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json"},
  //     body: JSON.stringify({
  //       user: {
  //       username,
  //       password
  //       }
  //     })
  //   }).then(response => response.json())
  //   .then (({ token, user_id }) => {
  //     localStorage.setItem("token", token)
  //     localStorage.setItem("user_id", user_id)
  //   })
  // }
  // signup(event) {
  //   event.preventDefault()
  //   const formData = new FormData(event.target)
  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: formData.get("name"),
  //       email: formData.get("email"),
  //       username: formData.get("username"),
  //       password: formData.get("password"),
  //     })
  //   }).then(response => response.json())
  //     .then(() => fetch("localhost:3000/authentication", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         user_id: formData
  //       })

  //     }
  //     ))
  //     .then(({ token }) => {
  //       localStorage.setItem("token", token)
  //     })
  // }

  // checkForToken= () => {
  //   if(localStorage.getItem("token")) {
  //     this.setState({ isLoggedIn: true})
  //   }
    
  // }
  // logout(event) {
  //   event.preventDefault()
  //   localStorage.removeItem("token")
  //   localStorage.removeItem("user_id")
  // }
  render() {
    return (

      <div className="App">
        {/* {this.state.isLoggedIn ? ( */}
          <>
            <Header />
            <FightPage 
            // logout={this.logout}
            />
          </>)
          {/* : <Login
            signup={this.signup}
            login={this.login} */}
            
          {/* />} */}
      </div>
    );
  }
}

export default App;