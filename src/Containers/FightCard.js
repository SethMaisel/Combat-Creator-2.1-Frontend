import React from "react";
import SequenceCard from "../components/SequenceCard"

const FightCard = ({sequences, fight, weapons, movements, techniques, lines}) => {
    const sequenceData = sequences.map(sequence => {
        console.log("fightCard", weapons)
        return <SequenceCard 
            key={sequence.id}
            fight={fight}
            character={sequence.character.name}
            weapon={sequence.weapon.name}
            movement={sequence.movement.name}
            technique={sequence.technique.name}
            line={sequence.line.line}
            weapons={weapons}
            movements={movements}
            techniques={techniques}
            lines={lines}
            />
    })

        return (
            <div className="sequenceData">
                {fight}
                {sequenceData}
            </div>
        )
    
};

export default FightCard;