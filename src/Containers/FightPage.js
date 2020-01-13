import React, { Component } from "react";
import FightCollection from "./FightCollection";
// import FightCard from './FightCard';
import AddFightForm from "../components/AddFightForm"

// import FightSequences from "./FightSequences";
// import RemoveFightButton from "../components/RemoveFightButton";
// import '../App.css';
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
    this.getFights()
    this.getCharacters()
    // this.getWeapons()
    // this.getMovements()
    // this.getTechniques()
    // this.getLines()

  }

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


  // fetchCall(url, method, body) {
  //   const headers = { "Content-Type": "application/json"};
  //   return fetch( url, { method, headers, body } );
  // }

  getFights = () => {
    return fetch(`${base_url}fights`)
      .then(handleResponse)
      .then(fights => this.setState({ fights }))
  }
  // getWeapons = () => {
  //   return fetch(`${base_url}weapons`)
  //     .then(handleResponse)
  //     .then(weapons => this.setState({ weapons }))
  // }
  // getMovements = () => {
  //   return fetch(`${base_url}movements`)
  //     .then(handleResponse)
  //     .then(movements => this.setState({ movements }))
  // }
  // getTechniques = () => {
  //   return fetch(`${base_url}techniques`)
  //     .then(handleResponse)
  //     .then(techniques => this.setState({ techniques }))
  // }
  // getLines = () => {
  //   return fetch(`${base_url}lines`)
  //     .then(handleResponse)
  //     .then(lines => this.setState({ lines }))
  // }

  getCharacters = () => {
    return fetch(`${base_url}characters`)
      .then(handleResponse)
      .then(characters => this.setState({ characters }))
  }

  // getSequences = () => {
  //   return fetch(`${base_url}sequences`) 
  //       .then(handleResponse)
  //   .then(sequences => this.setState({sequences}))
  // }

  // createSequence = (sequence) => {
  //   const { fights } = this.state;

  //   const updatedFights = findFight(fights, sequence);
  //   const oldFights = filterFights(fights, sequence);
  //   updatedFight.sequence.push(sequence);

  //   this.setState({ fights: [...oldFights, updatedFights] });

  //   const body = JSON.stringify(rating);
  //   fetchCall(`${base_url}`, "POST", body);
  // };

  // createFights = () => {
  //   const { fights } = this.state;
  //   return fights.map(fight => {
  //     return (
  //       <FightCard 
  //         key={ fight.id }
  //         fight={ fight }
  //         createSequence={ this.createSequence }
  // updateSequence={ this.updateSequence }
  // deleteSequence={ this.deleteSequence }
  //       />
  //     );
  //   });
  // };

  createNewFight = name => {

    fetch(`${base_url}fights`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "name": name })
    }).then(handleResponse)

    // .then(name => {
    //   this.setState({
    //     fights: [...this.state.fights, name]
    //   })
    // })
    // .then(fights => {
    // const updatedFights = this.findFight(fights, name);
    // const oldFights = this.filterFights(fights, name);
    // this.updatedFightpush(name);


    // this.setState({ fights: [...oldFights, updatedFights] });

    // }

  }


  // removeFight = selectedFight => {
  //   const id = selectedFight.id

  //   const fights = this.state.fights.filter(fight => {
  //     return fight !== selectedFight
  //   })

  //   this.setState({ fights })
  //   fetch(`${base_url}fights/${id}`, {
  //     method: "DELETE"
  //   })
  //     .then(handleResponse)
  // }


  render() {


    return (

      <div>
        {this.createHeader()}
        <h1>Your Fights</h1>
        <FightCollection
          fights={this.state.fights}

          characters={this.state.characters}
          weapons={this.state.weapons}
          movements={this.state.movements}
          techniques={this.state.techniques}
          lines={this.state.lines}
          // removeFight={this.removeFight}
          getCharacters={this.getCharacters}
          selectedFight={this.state.selectedFight}
          selectFight={this.selectFight}
          backToFights={this.backToFights}
        />

        <AddFightForm
          createNewFight={this.createNewFight}
        />

        {/* <RemoveFightButton
              removeFight={this.removeFight}
              /> */}


        {/* <h2>Fight Sequences</h2> */}
        {/* <FightSequences 
                sequences={this.state.sequences} /> */}
      </div>
    );
  }

  // findFight(fights, name) {
  //   return fights.find(fight => {
  //     return fight.id === sequence.fight_id;
  //   });
  // }

  // filterFights(fights, sequence) {
  //   return fights.filter(fight => {
  //     return fight.id !== sequence.fight_id;
  //   });
  // }
};

export default FightPage;