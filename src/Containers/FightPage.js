import React, { Component } from "react";
import './App.css';

const base_url = 'http://localhost:3000'
const handleResponse = (response => response.json())

class FightPage extends Component {

    state = {
      sequence: []
      
    }
  
    componentDidMount() {
      fetch(base_url)
      .then(handleResponse)
      .then(sequence => this.setState({sequence}))
  
    }

    render() {
        return (
            <div>

            </div>
        )}
}

export default FightPage;