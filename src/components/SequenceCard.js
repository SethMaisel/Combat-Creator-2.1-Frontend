import React from "react";
import SequenceForm from "./SequenceForm"

function SequenceCard(fightData) {
    console.log("sequenceCardFight", fightData)
    



    return (
        <div className="sequenceCard">
            <div className="content">
                {fightData.name}
                {fightData.character}
                {fightData.weapon}
                {fightData.movement}
                {fightData.technique}
                {fightData.line}

            </div>

            <div className="sequenceForms">
                <SequenceForm />


            </div>
        </div>
    )

};

export default SequenceCard;



