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
                    <div className="sequenceContent">
                        <p>{character}: {weapon}--{movement} with {technique} to {line} </p>

                        <div className="removeSequence" >

                            <button className="deleteSequenceButton"
                                onClick={() => removeSequence(sequence)}
                            >
                                Delete Sequence
                            </button>

                        </div>
                    </div>


                </>
                : null}


        </div>


    )

};


export default SequenceCard;



