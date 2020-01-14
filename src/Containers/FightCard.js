import React from "react";
import SequenceCard from "./SequenceCard"
import CreateCharacterForm from "../components/CreateCharacterForm"

const FightCard = ({ fight, selectFight, selectedFight, backToFights, characters, getCharacters, weapons, movements, techniques, lines, removeFight }) => {


    const sequenceHandler = () => {
        if (fight.sequences.length > 0) {
            return fight.sequences.map(sequence => {

                return <SequenceCard
                    key={sequence.id}
                    sequence_id={sequence.id}
                    fight={fight}
                    character={sequence.character.name}
                    weapon={sequence.weapon.name}
                    movement={sequence.movement.name}
                    technique={sequence.technique.name}
                    line={sequence.line.line}
                    characters={characters}
                    weapons={weapons}
                    movements={movements}
                    techniques={techniques}
                    lines={lines}
                    getCharacters={getCharacters}
                />

            })
        }
    }


    return (
        <div>

            <div className="fightName" onClick={() =>
                selectFight(fight)}>
                {fight.name}
                <button
                    onClick={()=> removeFight(fight)}
                >
                    Delete
                </button>
            </div>
            {selectedFight && fight.id === selectedFight.id &&
                <div>
                    <div className="sequencesContainer">
                        {sequenceHandler()}
                    </div>
                    <CreateCharacterForm />
                    <button
                        className="goBackButton"
                        onClick={backToFights}
                    >
                        Go Back
                    </button>
                </div>
            }
        </div>
    )

};

export default FightCard;