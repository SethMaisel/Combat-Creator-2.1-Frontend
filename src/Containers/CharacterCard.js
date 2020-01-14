import React from "react";
import CreateCharacterForm from "../components/CreateCharacterForm";

const CharacterCard = ({characters, sequence_id, fight_id, weapons, movements, techniques, lines, getCharacters}) => {

    return (
        <div className="characterCard">
            <CreateCharacterForm
                characters={characters}
                sequence_id={sequence_id}
                fight_id={fight_id}
                weapons={weapons}
                movements={movements}
                techniques={techniques}
                lines={lines}
                getCharacters={getCharacters}
            />
            
        </div>
    )
}




export default CharacterCard;