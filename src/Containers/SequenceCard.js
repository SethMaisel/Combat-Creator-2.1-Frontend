import React from "react";
// import SequenceForm from "./SequenceForm"
// import CreateCharacterForm from "../components/CreateCharacterForm"
import CharacterCard from "./CharacterCard"

const SequenceCard = ({ sequence_id, fight, character, weapon, movement, technique, line, characters, weapons, movements, techniques, lines, getCharacters }) => {

    // console.log("sequenceCardFight", sequence_id)




    return (
        <div className="sequenceCard">
            
            <div className="content">
                <p>{character}: {weapon}--{movement} with {technique} to {line} </p>

            </div>

            {/* <div className="sequenceForms"> */}
            <div className="characterCardDisplay">
                <CharacterCard

                    characters={characters}
                    sequence_id={sequence_id}
                    fight_id={fight.id}
                    weapons={weapons}
                    movements={movements}
                    techniques={techniques}
                    lines={lines}
                    getCharacters={getCharacters}

                />
            </div>



        </div>
    )

};


export default SequenceCard;



