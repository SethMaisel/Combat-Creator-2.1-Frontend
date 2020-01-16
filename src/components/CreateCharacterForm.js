import React, { Component } from "react";
import SequenceForm from "./SequenceForm"

// const base_url = 'http://localhost:3000/'
// const handleResponse = (response => response.json())

class CreateCharacterForm extends Component {

    state = {
        character_name: "",
        character: null
    }


    handleSubmit = event => {
        event.preventDefault()
        this.checkForCharacter()
    }

    setValue = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    checkForCharacter = () => {
        // console.log("checkCharacterState", this.state.character)
        const character = this.props.characters.find(characterName => characterName.name.toLowerCase() === this.state.character_name.toLowerCase())
        if (character) {
            this.setState({ character })
        }
        else {
            this.props.createNewCharacter(this.state.character_name)
            

        }
    }

    // createNewCharacter = name => {


    //     console.log('createCharacter', name)
    //     fetch(`${base_url}characters`, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ "name": name })
    //     }).then(handleResponse)
    //         .then(character => this.setState({ character }))

    // }

    render() {

        return (
            <div className="characterForm" >

                <form onSubmit={this.handleSubmit}>
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
                {/* {this.state.character === this.props.checkForCharacter && */}
                    {/* <div className="showSequenceForm">
                        <SequenceForm
                            // key={this.props.sequence.id}
                            // sequence_id={this.props.sequence.id}
                            character={this.state.character}
                            fight={this.props.fight}
                            weapons={this.props.weapons}
                            movements={this.props.movements}
                            techniques={this.props.techniques}
                            lines={this.props.lines}
                            createNewSequence={this.props.createNewSequence}
                        />
                    </div> */}
                }


                {/* <SequenceForm
                    sequence_id={this.props.sequence_id}
                    fight_id={this.props.fight_id}
                    characters={this.props.characters}
                    weapons={this.props.weapons}
                    movements={this.props.movements}
                    techniques={this.props.techniques}
                    lines={this.props.lines}
                    getCharacters={this.props.getCharacters}
                
            
                /> */}
            </div>

        )
    }
};

export default CreateCharacterForm;