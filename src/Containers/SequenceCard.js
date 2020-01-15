import React from "react";
// import SequenceForm from "./SequenceForm"
import CreateCharacterForm from "../components/CreateCharacterForm"
// import CharacterCard from "./CharacterCard"
// const base_url = 'http://localhost:3000/'
// const handleResponse = (response => response.json())

const SequenceCard = ({ sequence_id, fight, character, weapon, movement, technique, line, characters, weapons, movements, techniques, lines, getCharacters }) => {

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



