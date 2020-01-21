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
        const character = this.props.characters.find(characterName => characterName.name.toLowerCase() === this.state.character_name.toLowerCase())
        if (character) {
            this.setState({ character })
        }
        else {
            this.props.createNewCharacter(this.state.character_name)


        }
    }

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
                {this.state.character &&
                    <div>
                        <div className="characterName" onClick={() =>
                            this.checkForCharacter(this.state.character)}>
                                {this.state.character.name}:
                        </div>
                        <div className="showSequenceForm">
                            <SequenceForm
                                character={this.state.character}
                                fight={this.props.fight}
                                weapons={this.props.weapons}
                                movements={this.props.movements}
                                techniques={this.props.techniques}
                                lines={this.props.lines}
                                createNewSequence={this.props.createNewSequence}

                            />
                        </div>
                    </div>
                }

            </div>

        )
    }
};

export default CreateCharacterForm;