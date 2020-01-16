import React, { Component } from "react";
// import CreateCharacterForm from './CreateCharacterForm';

class SequenceForm extends Component {

    state = {

        weapon_id: null,
        movement_id: null,
        technique_id: null,
        line_id: null

    }




    handleSubmit = event => {
        event.preventDefault()
        const character_id = this.props.character.id
        const fight_id = this.props.fight.id
        const { weapon_id, technique_id, movement_id, line_id } = this.state
        this.props.createNewSequence({ fight_id, character_id, weapon_id, technique_id, movement_id, line_id })
        
            // return (
            //     <div className="sequenceRender">
            //         <SequenceCard/>
            //         <p>{this.props.character}: {this.weapon}--{this.movement} with {this.technique} to {this.line} </p>

            //     </div>
            // )
        

    }

    setValue = event => {
        this.setState({ [event.target.name]: event.target.value })
    }


    render() {
        console.log("sequenceState", this.props.fight)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                </form>
            </div>

        )
    }
};



export default SequenceForm;