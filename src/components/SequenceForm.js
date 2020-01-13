import React, { Component } from "react";
// import CreateCharacterForm from './CreateCharacterForm';


const base_url = 'http://localhost:3000/'
const handleResponse = (response => response.json())

class SequenceForm extends Component {

    state = {
        character: "",
        character_id: null,
        weapon_id: null,
        movement_id: null,
        technique_id: null,
        line_id: null

    }




    handleSubmit = event => {
        event.preventDefault()
        this.createNewSequence(this.props.fight_id, this.state)

    }

    setValue = event => {
        console.log("characters", this.props.characters)
        this.setState({ [event.target.name]: event.target.value })
        // this.doesCharacterExist(this.state.character)
    }





    createNewSequence = (fight_id, sequence) => {
        // let characterId = this.doesCharacterExist(sequence.character)
        // characterId = characterId ? characterId : this.createNewCharacter(sequence.character)
        const newSequence = { fight_id, ...sequence }
        console.log("newSequence", newSequence)


        fetch(`${base_url}sequences`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSequence)
        }).then(handleResponse)
            .then(console.log)
    }

    render() {
        console.log("sequenceStateCharacter", this.state.character)
        return (
            <div>
                <div characterName="character">
                    {this.chracter}
                </div>

                <select
                    placeholder='Select Weapon'
                    name="weapon_id"
                    required
                    onChange={this.setValue}
                    value={this.state.weapon}
                >
                    <option>Select Weapon</option>
                    {this.props.weapons.map(weapon => {
                        return <option value={weapon.id}>{weapon.name}</option>
                    })
                    }

                </select>
                <select
                    placeholder='Select Movement'
                    name="movement_id"
                    required
                    onChange={this.setValue}
                    value={this.state.movement}
                >
                    <option>Select Movement</option>
                    {this.props.movements.map(movement => {
                        return <option value={movement.id}>{movement.name}</option>
                    })
                    }

                </select>
                <select
                    placeholder='Select Technique'
                    name="technique_id"
                    required
                    onChange={this.setValue}
                    value={this.state.technique}
                >
                    <option>Select Technique</option>
                    {this.props.techniques.map(technique => {
                        return <option value={technique.id}>{technique.name}</option>
                    })
                    }

                </select>
                <select
                    placeholder='Select Line'
                    name="line_id"
                    required
                    onChange={this.setValue}
                    value={this.state.line}
                >
                    <option>Select Line</option>
                    {this.props.lines.map(line => {
                        return <option value={line.id}>{line.line}</option>
                    })
                    }

                </select>
                <input
                    type='submit'
                    placeholder='Create Sequence'
                    required
                />
            </div>

        )
    }
};



export default SequenceForm;