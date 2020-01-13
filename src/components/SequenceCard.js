import React from "react";
// import SequenceForm from "./SequenceForm"
import CreateCharacterForm from "./CreateCharacterForm"

const SequenceCard = ({ sequence_id, fight, character, weapon, movement, technique, line, characters, weapons, movements, techniques, lines, getCharacters }) => {

    // console.log("sequenceCardFight", fightData)




    return (
        <div className="sequenceCard">
            <div className="content">
                <h1>{fight.name}:</h1>
                <p>{character}: {weapon}--{movement} with {technique} to {line} </p>
                <button>Update</button>
                <button>Delete</button>


            </div>

            {/* <div className="sequenceForms"> */}
            <div>
                <CreateCharacterForm

                    characters={characters}
                    sequence_id={sequence_id}
                    fight_id={fight.id}
                    weapons={weapons}
                    movements={movements}
                    techniques={techniques}
                    lines={lines}
                    getCharacters={getCharacters}
                // getCharacters={getCharacters}

                />
            </div>



        </div>
    )

};


export default SequenceCard;



