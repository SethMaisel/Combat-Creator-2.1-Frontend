import React from "react";
import FightCard from "./FightCard"

const FightCollection = ({ fights, selectedFight, selectFight, backToFights, characters, getCharacters, weapons, movements, techniques, lines, removeFight }) => {
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
