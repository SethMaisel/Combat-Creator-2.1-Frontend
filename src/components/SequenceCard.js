import React from "react";
import SequenceForm from "./SequenceForm"

function SequenceCard(props) {
    const {fight, 
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
                {fight}
                {character}
                {weapon}
                {movement}
                {technique}
                {line}

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



