import React, { Component } from "react"

export default class Login extends Component {

    
    render() {
        return (
            <div>
                <form onSubmit={this.props.login}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" />
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" />
                    <label>Username</label>
                    <input type="text" name="username" placeholder="UserName" />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" value="Login" />
                </form>
                <form onSubmit={this.props.logout}>
                    <input type="submit" value="Logout" />
                </form>
            </div>
        )
    }
}