import React from "react";
import CreateCharacterForm from "../components/CreateCharacterForm";
// import SequenceForm from "../components/SequenceForm"

const CharacterCard = ({characters, sequence_id, fight_id, weapons, movements, techniques, lines, getCharacters}) => {

    return (
        <div className="characterForm">
            {/* <CreateCharacterForm
                characters={characters}
                getCharacters={getCharacters}
            /> */}

            {/* <SequenceForm
                sequence_id={sequence_id}
                fight_id={fight_id}
                weapons={weapons}
                movements={movements}
                techniques={techniques}
                lines={lines}
                /> */}
            
        </div>
    )
}




export default CharacterCard;