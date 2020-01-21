import React from "react";
// import SequenceForm from "../components/SequenceForm"
// import CreateCharacterForm from "../components/CreateCharacterForm"


const SequenceCard = (props) => {
    const { character, weapon, movement,
        technique, line, sequence, removeSequence,
    } = props

    return (
        <div className="sequenceCard">
            {sequence ?
        <>
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
            </>
            : null}


        </div>


    )

};


export default SequenceCard;



