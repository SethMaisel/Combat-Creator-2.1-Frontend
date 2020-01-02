import React from "react";
import FightCard from "./FightCard"
// import SequenceCard from "../components/SequenceCard";

const FightCollection = ({fights, characters, weapons, movements, techniques, lines}) => {
    const fightData = fights.map(fight => {
        console.log("fightCollection", fight)
		return <FightCard
					key={fight.id}
                    fight={fight.name}
                    sequences={fight.sequences}
                    characters={this.characters}
                    weapons={this.weapons}
                    movements={this.movements}
                    techniques={this.techniques}
                    lines={this.lines}

				/>
	})

  return (
  	  <div className="fight collection">
    		<div className="row">
    		  {fightData}
              {characters}
              {weapons}
              {movements}
              {techniques}
              {lines}
    		</div>
  	  </div>
  	);
  }



export default FightCollection;
