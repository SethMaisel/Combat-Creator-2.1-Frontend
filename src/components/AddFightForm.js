import React, { Component } from "react";

class AddFightForm extends Component {

    state = {
        name: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        
        this.props.createNewFight(this.state.name)


    }

    setValue = event => {
        this.setState({[event.target.name]: event.target.value})
        
    }
        
    render () {
        return (
            <div>
                <h1>Create a Fight</h1>

                <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Fight Name' 
                    name="name" 
                    required 
                    onChange={this.setValue}
                    value={this.state.fight}
                    />

                <input
                    type='submit' 
                    value='Create Fight' 
                required />  
                    
                
                </form>
            </div>
        )
    }
    
};

export default AddFightForm;