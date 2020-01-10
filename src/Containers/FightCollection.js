import React from "react";
import FightCard from "./FightCard"
// import SequenceCard from "../components/SequenceCard";

const FightCollection = ({ fights, characters, weapons, movements, techniques, lines, removeFight, getCharacters }) => {
    const fightData = fights.map(fight => {
        // console.log(fight.sequences)
        return <FightCard
            key={fight.id}
            fight={fight}
            characters={characters}
            sequences={fight.sequences}
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
