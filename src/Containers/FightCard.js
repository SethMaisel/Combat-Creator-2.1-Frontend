import React from "react";
import SequenceCard from "../components/SequenceCard"

const FightCard = ({ sequences, fight, weapons, movements, techniques, lines, removeFight}) => {
    const sequenceHandler = () => {
        if(sequences){
           return sequences.map(sequence => {
        
                return <SequenceCard 
                    key={sequence.id}
                    fight={fight.name}
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
        }
    }
    
    const handleClick = () => {
        console.log("handleclick", fight)
        removeFight(fight)
    }

        return (
            <div className="sequenceData">
                {fight.name}
                <button
                onClick={handleClick}>
                Delete
                </button>
                {sequenceHandler()}
            </div>
        )
    
};

export default FightCard;