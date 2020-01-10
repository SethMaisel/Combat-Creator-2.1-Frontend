import React, { Component } from "react";

const base_url = 'http://localhost:3000/'
const handleResponse = (response => response.json())

class CharacterForm extends Component {

    state = {
        character: ""
        character_id: null
    }
}

handleSubmit = event => {
    event.preventDefault()
}

doesCharacterExist = characterName => {
    console.log("characterName", characterName)
    console.log("charactersArray", this.props.characters.filter(character => character["name"]==characterName))
    const characterId = this.props.characters.find(character => character["name"].toLowerCase() == characterName.toLowerCase())
    console.log("characterid", characterId)
    return characterId
}



export default CreateCharacterForm;