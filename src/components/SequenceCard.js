import React from "react";
import SequenceForm from "./SequenceForm"

function SequenceCard(props) {
    const { fight,
        character,
        weapon,
        movement,
        technique,
        line,
        characters,
        weapons,
        movements,
        techniques,
        lines,
        getCharacters
    } = props
    // console.log("sequenceCardFight", fightData)


    

    return (
        <div className="sequenceCard">
            <div className="content">
                <h1>{fight.name}:</h1>
                <p>{character}: {weapon}--{movement} with {technique} to {line} </p>
                <button>Update</button>
                <button>Delete</button>


            </div>

            <div className="sequenceForms">
                <SequenceForm
                    fight_id={fight.id}
                    characters={characters}
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



