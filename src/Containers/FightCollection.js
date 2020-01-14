import React from "react";
import FightCard from "./FightCard"
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// import SequenceCard from "../components/SequenceCard";

const FightCollection = ({ fights, selectedFight, selectFight, backToFights, characters, getCharacters, weapons, movements, techniques, lines, removeFight }) => {
    const fightData = fights.map(fight => {
        // console.log(fight.sequences)
        return <FightCard
            key={fight.id}
            fight={fight}
            selectedFight={selectedFight}
            selectFight={selectFight}
            backToFights={backToFights}
            characters={characters}
            // sequences={fight.sequences}
            weapons={weapons}
            movements={movements}
            techniques={techniques}
            lines={lines}
            removeFight={removeFight}
            getCharacters={getCharacters}
        />
    })

    // const removeFight = (fight) => {
        
    // }

    return (

        <div className="fight collection">
            <div className="row">
                {fightData}

                

            </div>
        </div>

    );
}



export default FightCollection;
