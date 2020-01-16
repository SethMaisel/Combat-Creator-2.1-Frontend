import React from "react";
import FightCard from "./FightCard"

const FightCollection = (props) => {

    const {
        fights, selectedFight, selectFight, backToFights,
        characters, getCharacters, weapons, movements,
        techniques, lines, removeFight, removeSequence,
        createNewCharacter, createNewSequence, sequences, 
        selectSequence, selectedSequence
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
            sequences={sequences}
            selectedSequence={selectedSequence}
            removeSequence={removeSequence}
            getCharacters={getCharacters}
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
