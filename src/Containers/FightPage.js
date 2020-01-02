import React, { Component } from "react";
import FightCollection from "./FightCollection";
// import FightSequences from "./FightSequences";
import '../App.css';

const base_url = 'http://localhost:3000/'
const handleResponse = (response => response.json())

class FightPage extends Component {

    state = {
      fights: [],
      weapons: [],
      movements: [],
      techniques: [],
      lines:[]
      
    }
    componentDidMount() {
      this.getFights()
      this.getWeapons()
      this.getMovements()
      this.getTechniques()
      this.getLines()
      
    }
    getFights = () => {
      return fetch(`${base_url}fights`) 
          .then(handleResponse)
      .then(fights => this.setState({fights}))
    }
    getWeapons = () => {
      return fetch(`${base_url}weapons`) 
          .then(handleResponse)
      .then(weapons => this.setState({weapons}))
    }
    getMovements = () => {
      return fetch(`${base_url}movements`) 
          .then(handleResponse)
      .then(movements => this.setState({movements}))
    }
    getTechniques = () => {
      return fetch(`${base_url}techniques`) 
          .then(handleResponse)
      .then(techniques => this.setState({techniques}))
    }
    getLines = () => {
      return fetch(`${base_url}lines`) 
          .then(handleResponse)
      .then(lines => this.setState({lines}))
    }

    render() {
      console.log("FightPageState", this.state)
        return (
            <div>
              <h1>Your Fights</h1>
              <FightCollection 
                fights={this.state.fights}
                characters={this.state.characters}
                weapons={this.state.weapons}
                movements={this.state.movements}
                techniques={this.state.techniques}
                lines={this.state.lines}
                />

              {/* <h2>Fight Sequences</h2> */}
              {/* <FightSequences 
                sequences={this.state.sequences} /> */}
            </div>
        );
    }
}

export default FightPage;