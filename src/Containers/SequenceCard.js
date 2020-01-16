import React from "react";
import SequenceForm from "../components/SequenceForm"
import CreateCharacterForm from "../components/CreateCharacterForm"


const SequenceCard = (props) => {
    const { character, weapon,
        movement, technique, line,
    } = props

    // console.log("sequenceCardFight", sequence_id)





    return (
        <div className="sequenceCard">

            <div className="content">
                <p>{character}: {weapon}--{movement} with {technique} to {line} </p>

            </div>


        </div>
    )

};


export default SequenceCard;



