import React from "react";
import SequenceForm from "./SequenceForm"
import CreateCharacterForm from "./CreateCharacterForm"

const SequenceCard = ({ sequence_id, fight, character, weapon, movement, technique, line, characters, weapons, movements, techniques, lines, getCharacters }) => {

    // console.log("sequenceCardFight", sequence_id)




    return (
        <div className="sequenceCard">
            <div className="content">
                <p>{character}: {weapon}--{movement} with {technique} to {line} </p>

            </div>

            <div className="sequenceForms">
            <div>
            <CreateCharacterForm
                
                characters={characters}
                // getCharacters={getCharacters}

            />
            </div>
                <SequenceForm
                    sequence_id={sequence_id}
                    fight_id={fight.id}
                    characters={characters}
                    weapons={weapons}
                    movements={movements}
                    techniques={techniques}
                    lines={lines}
                    getCharacters={getCharacters}
                    // style={{ display: "none" }}

                />
            </div>


        </div>
    )

};


export default SequenceCard;



