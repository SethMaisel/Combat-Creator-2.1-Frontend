import React from "react";
import FightCard from "./FightCard"
// import SequenceCard from "../components/SequenceCard";

const FightCollection = ({ fights, weapons, movements, techniques, lines, removeFight }) => {
    const fightData = fights.map(fight => {
        console.log(fight.sequences)
        return <FightCard
            key={fight.id}
            fight={fight}
            sequences={fight.sequences}
            weapons={weapons}
            movements={movements}
            techniques={techniques}
            lines={lines}
            removeFight={removeFight}

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
