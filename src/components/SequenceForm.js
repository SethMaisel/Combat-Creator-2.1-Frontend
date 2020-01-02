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
    console.log(this.state)
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
                placeholder='Weapon' 
                name="weapon" 
                required 
                onChange={this.setValue}
                value={this.state.weapon}
             >
                 <option value="weapon">Stabby</option>
            </select>
            <input 
                type='text' 
                placeholder='Movement' 
                name="movement" 
                required 
                onChange={this.setValue}
                value={this.state.movement}
            />  
            <input 
                type='text' 
                placeholder='Technique' 
                name="technique" 
                required 
                onChange={this.setValue}
                value={this.state.technique}
            />
            <input 
                type='text' 
                placeholder='Line' 
                name="line" 
                required 
                onChange={this.setValue}
                value={this.state.line}
            />      
            <input 
            type='submit' 
            placeholder='Create Sequence' 
            required />  
          </form>
        )
    }
};



export default SequenceForm;