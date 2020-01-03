import React from "react";
import SequenceForm from "./SequenceForm"

function SequenceCard(props) {
    const { fight,
        character,
        weapon,
        movement,
        technique,
        line,
        weapons,
        movements,
        techniques,
        lines
    } = props
    // console.log("sequenceCardFight", fightData)




    return (
        <div className="sequenceCard">
            <div className="content">
                <h1>{fight}:</h1>
                <p>{character}: {weapon}--{movement} with {technique} to {line} </p>
                {/* <button>Delete</button> */}

            </div>

            <div className="sequenceForms">
                <SequenceForm
                    weapons={weapons}
                    movements={movements}
                    techniques={techniques}
                    lines={lines}
                />


            </div>
        </div>
    )

};

export default SequenceCard;



