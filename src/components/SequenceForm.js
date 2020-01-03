import React, { Component } from "react";

class SequenceForm extends Component {

    state = {
        character: "",
        weapon: "",
        movement: "",
        technique: "",
        line: ""
    }


    
    
    handleSubmit = event => {
        event.preventDefault()
        // const formData = new FormData(event.target)
        //   this.props.submitHandler({
        //       character: formData.get("character"),
        //       weapon: formData.get("weapon"),
        //       movement: formData.get("movement"),
        //       technique: formData.get("technique"),
        //       line: formData.get("line")
        //   })
        //   event.target.reset()
    }
    
    setValue = event => {
        // console.log("setValue", event.target.name)
        this.setState({[event.target.name]: event.target.value})
            
    }
    
    render () {
    
    return (
        
          <form onSubmit={this.handleSubmit}>
            <input 
              type='text' 
              placeholder='Character' 
              name="character" 
              required 
              onChange={this.setValue}
              value={this.state.character}
              />  
             <select
                placeholder='Select Weapon' 
                name="weapons" 
                required 
                onChange={this.setValue}
                value={this.state.weapon}
             >
                 <option>Select Weapon</option>
                    {this.props.weapons.map(weapon => {
                        return <option value="weapon">{weapon.name}</option>})
                    }
                    
            </select>
            <select
                placeholder='Select Movement' 
                name="movements" 
                required 
                onChange={this.setValue}
                value={this.state.movement}
             >
                 <option>Select Movement</option>
                    {this.props.movements.map(movement => {
                        return <option value="movement">{movement.name}</option>})
                    }
                    
            </select>
            <select
                placeholder='Select Technique' 
                name="techniques" 
                required 
                onChange={this.setValue}
                value={this.state.technique}
             >
                 <option>Select Technique</option>
                    {this.props.techniques.map(technique => {
                        return <option value="technique">{technique.name}</option>})
                    }
                    
            </select>
            <select
                placeholder='Select Line' 
                name="Line" 
                required 
                onChange={this.setValue}
                value={this.state.line}
             >
                 <option>Select Line</option>
                    {this.props.lines.map(line => {
                        return <option value="line">{line.line}</option>})
                    }
                    
            </select>
            <input 
            type='submit' 
            placeholder='Create Sequence' 
            required />  
          </form>
        )
    }
};



export default SequenceForm;