import React from "react";
import SequenceForm from "../components/SequenceForm"
import CreateCharacterForm from "../components/CreateCharacterForm"
// import CharacterCard from "./CharacterCard"
// const base_url = 'http://localhost:3000/'
// const handleResponse = (response => response.json())

const SequenceCard = (props) => {
    const { fight, character, weapon, 
        movement, technique, line,  
        weapons, movements, techniques, lines, 
        getCharacters 
    } = props

    // console.log("sequenceCardFight", sequence_id)

    



    return (
        <div className="sequenceCard">

            <div className="content">
                <p>{character}: {weapon}--{movement} with {technique} to {line} </p>

            </div>

            {/* <div className="sequenceForms"> */}
            <div className="characterFormDisplay">
                
                
            </div>



        </div>
    )

};


export default SequenceCard;



