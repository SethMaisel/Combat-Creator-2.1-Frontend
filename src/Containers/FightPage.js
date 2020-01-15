import React, { Component } from "react";
import FightCollection from "./FightCollection";
import AddFightForm from "../components/AddFightForm"
import '../styling/FightPage.css'

const base_url = 'http://localhost:3000/'
const handleResponse = (response => response.json())

class FightPage extends Component {

  state = {
    fights: [],
    selectedFight: null,
    characters: [],
    weapons: [],
    movements: [],
    techniques: [],
    lines: []
  }

  componentDidMount() {
    this.getData('fights')
    this.getData('characters')
    
  }

  getData = (path) => {
    return fetch(`${base_url}${path}`)
      .then(handleResponse)
      .then(data => this.setState({ [path]: data}))
  }
  // getFights = () => {
  //   return fetch(`${base_url}fights`)
  //     .then(handleResponse)
  //     .then(fights => this.setState({ fights }))
  // }
  
  // getCharacters = () => {
  //   return fetch(`${base_url}characters`)
  //     .then(handleResponse)
  //     .then(characters => this.setState({ characters }))
  // }

  selectFight = (fight) => {
    this.setState({ selectedFight: fight })
  }

  backToFights = () => {
    this.setState({ selectedFight: null })
  }



  createHeader = () => {
    return (
      <header className="fight-page" >
        <h1 className="fight-page-heading">Combat Creator</h1>
        <h2>Version 2</h2>
        <h3>...point one</h3>
        <img
          src='https://www.fortezafitness.com/wp/wp-content/uploads/2012/06/alfieri37.jpg' alt='Combat Creator: A Fight Choreography Resource'

        />
        <audio

          className='audio'
          ref='audio_tag'
          crossOrigin src='http://cs.slimi.lt/cstrike/sound/yellow/deploy1.wav'
          controls autoPlay
          style={{ display: "none" }}
        />
      </header>
    )
  }


  createNewFight = name => {

    fetch(`${base_url}fights`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "name": name })
    }).then(handleResponse)
      .then(fight => this.setState({ fights: [...this.state.fights, fight] }))
  }


  removeFight = selectedFight => {
    const id = selectedFight.id

    const fights = this.state.fights.filter(fight => {
      return fight !== selectedFight
    })

    this.setState({ fights })
    fetch(`${base_url}fights/${id}`, {
      method: "DELETE"
    })
      .then(handleResponse)
  }


  render() {
    return (

      <div>
        {this.createHeader()}
        <h1>Your Fights</h1>
        <FightCollection
          fights={this.state.fights}
          selectedFight={this.state.selectedFight}
          characters={this.state.characters}
          weapons={this.state.weapons}
          movements={this.state.movements}
          techniques={this.state.techniques}
          lines={this.state.lines}

          removeFight={this.removeFight}
          getCharacters={this.getCharacters}
          selectFight={this.selectFight}
          backToFights={this.backToFights}
        />

        <AddFightForm
          createNewFight={this.createNewFight}
        />
      </div>
    );
  }
};

export default FightPage;