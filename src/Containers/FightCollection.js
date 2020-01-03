import React from "react";
import FightCard from "./FightCard"
// import SequenceCard from "../components/SequenceCard";

const FightCollection = ({fights, weapons, movements, techniques, lines}) => {
    const fightData = fights.map(fight => {
		return <FightCard
					key={fight.id}
                    fight={fight.name}
                    sequences={fight.sequences}
                    
                    weapons={weapons}
                    movements={movements}
                    techniques={techniques}
                    lines={lines}

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
