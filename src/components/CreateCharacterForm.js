import React, { Component } from "react";
import SequenceForm from "./SequenceForm"

const base_url = 'http://localhost:3000/'
const handleResponse = (response => response.json())

class CreateCharacterForm extends Component {

    state = {
        character_name: "",
        character: null
    }


    // handleSubmit = event => {
    //     event.preventDefault()
    //     this.createNewCharacter(this.state)
    // }

    // doesCharacterExist = characterName => {
    //     const characterId = this.props.characters.find(character => character["name"].toLowerCase() == characterName.toLowerCase())
    //     console.log("characterid", characterId)
    //     return characterId
    // }

    // setValue = event => {
    //     console.log("characterFormCharacter", event)
    //     let characterId = this.doesCharacterExist(character)
    //     characterId = characterId ? characterId : this.createNewCharacter(character)
    //     this.setState({ [event.target.name]: event.target.value })
    // }
    setValue = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    checkForCharacter = (event) => {
        event.preventDefault()
        const character = this.props.characters.find(character => character["name"].toLowerCase() === this.state.character_name.toLowerCase())
        // this.setState({character})
        console.log("checkForCharacter", character)
        if (character) {
            this.setState({ character })
        }
        else {
            this.createNewCharacter(this.state.character_name)

        }
    }

    createNewCharacter = name => {

        
        console.log('createCharacter', name)
        fetch(`${base_url}characters`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "name": name })
        }).then(handleResponse)
            .then(character => this.setState({ character }))
    }

    render() {

        console.log("CharacterState", this.state.character)
        return (
            <div>
                <h1>{this.character_name}</h1>
                <form onSubmit={this.checkForCharacter}>
                    <input

                        type='text'
                        placeholder='Character'
                        name="character_name"
                        required
                        onChange={this.setValue}
                        value={this.state.character_name}
                    />
                    <input
                        type='submit'
                        placeholder='Create Character'
                        required
                    />
                </form>


                <SequenceForm
                    sequence_id={this.props.sequence_id}
                    fight_id={this.props.fight_id}
                    characters={this.props.characters}
                    weapons={this.props.weapons}
                    movements={this.props.movements}
                    techniques={this.props.techniques}
                    lines={this.props.lines}
                    getCharacters={this.props.getCharacters}
                
            
                />
            </div>
            
        )
    }
};

export default CreateCharacterForm;