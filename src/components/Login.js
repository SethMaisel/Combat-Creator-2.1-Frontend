import React, { Component } from "react"

export default class Login extends Component {

    login(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        fetch("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify({
                
                username: formData.get("username"),
                password: formData.get("password"),
            })
        }).then(response => response.json())
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
            <div>
                <form onSubmit={this.login}>
                    <label>Username</label>
                    <input type="text" name="username" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <input type="submit" value="Login" />
                </form>
                <form onSubmit={this.logout}>
                    <input type="submit" value="Logout" />
                </form>
            </div>
        )
    }
}