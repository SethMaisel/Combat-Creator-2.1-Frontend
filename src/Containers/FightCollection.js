import React from "react";
import FightCard from "./FightCard"

const FightCollection = (props) => {

    const {
        fights, selectedFight, selectFight, backToFights,
        characters, getCharacters, weapons, movements,
        techniques, lines, removeFight, removeSequence,
        createNewCharacter, createNewSequence, sequences, 
        selectedSequence, character
    } = props

    const sortByName = (a, b) => {
        if (a.name > b.name){
            return 1
        }
        else if (a.name < b.name){
            return -1
        }
        else {
            return 0
        }

    }

    const fightData = fights.sort(sortByName).map(fight => {
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
            character={character}

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
