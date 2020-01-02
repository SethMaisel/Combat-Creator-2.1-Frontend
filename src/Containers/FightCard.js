import React from "react";
import SequenceCard from "../components/SequenceCard"

const FightCard = ({sequences, fight}) => {
    const sequenceData = sequences.map(sequence => {
        console.log("fightCard", sequence)
        return <SequenceCard 
            key={sequence.id}
            character={sequence.character.name}
            weapon={sequence.weapon.name}
            movement={sequence.movement.name}
            technique={sequence.technique.name}
            line={sequence.line.line}
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