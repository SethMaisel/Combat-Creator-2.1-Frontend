import React, { Component } from "react";
// import SequenceCard from '../containers/SequenceCard';

class SequenceForm extends Component {

    state = {
        sequence: [],
        weapon_id: null,
        movement_id: null,
        technique_id: null,
        line_id: null

    }




    handleSubmit = event => {
        event.preventDefault()
        let character_id 
        this.props.character.character
            ? character_id=this.props.character.character.id
            : character_id=this.props.character.id


        // const character_id = this.props.character.character.id
        const fight_id = this.props.fight.id
        const { weapon_id, technique_id, movement_id, line_id } = this.state
        this.props.createNewSequence({ fight_id, character_id, weapon_id, technique_id, movement_id, line_id })
    }

    setValue = event => {
        this.setState({ [event.target.name]: event.target.value })
    }


    render() {
        
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
                {/* <SequenceCard
                    sequence={this.state, this.props.character_id, this.props.fight_id}
                /> */}
            </div>

        )
    }
};



export default SequenceForm;