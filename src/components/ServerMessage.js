import React, { Component } from "react"

export default class ServerMessage extends Component {

    state = {
        message: ""
    }
    componentDidMount() {
        fetch("http://localhost:3000/secret", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => response.json())
            .then(({ message }) => {
                this.setState({ message })
            })
    }
    render() {
        return (
            <div>
                <h2>The secret is...</h2>
                <p>{this.state.message}</p>
            </div>
        )
    }
}