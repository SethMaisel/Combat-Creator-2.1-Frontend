import React from "react";
import SequenceForm from "../components/SequenceForm"
import CreateCharacterForm from "../components/CreateCharacterForm"


const SequenceCard = (props) => {
    const { character, weapon, movement, selectedSequence,
        technique, line, sequence, removeSequence,
    } = props

    return (
        
        <div className="sequenceCard">
            
                <div className="content">
                    <p>{character}: {weapon}--{movement} with {technique} to {line} </p>

                </div>

            <div className="removeSequence" >
                <button
                    onClick={() => removeSequence(sequence)}
                >
                    Delete Sequence
                </button>
            </div>


        </div>

    )

};


export default SequenceCard;



