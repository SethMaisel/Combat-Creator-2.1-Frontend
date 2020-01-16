import React from "react";
import FightCard from "./FightCard"

const FightCollection = (props) => {

    const { 
        fights, selectedFight, selectFight, backToFights, 
        characters, getCharacters, weapons, movements, 
        techniques, lines, removeFight, 
        createNewCharacter, createNewSequence
    } = props

    const fightData = fights.map(fight => {
        return <FightCard
            key={fight.id}
            fight={fight}
            selectedFight={selectedFight}
            selectFight={selectFight}
            backToFights={backToFights}
            characters={characters}
            weapons={weapons}
            movements={movements}
            techniques={techniques}
            lines={lines}
            removeFight={removeFight}
            getCharacters={getCharacters}
            // checkForCharacter={checkForCharacter}
            createNewCharacter={createNewCharacter}
            createNewSequence={createNewSequence}
        />
    })

    return (

        <div className="fight collection">
            <div className="row">
                {fightData}

            </div>
        </div>

    );
}

export default FightCollection;
