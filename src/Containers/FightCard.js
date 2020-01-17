import React from "react";
import SequenceCard from "./SequenceCard"
import CreateCharacterForm from "../components/CreateCharacterForm"

const FightCard = (props) => {

    const { fight, selectFight, selectedFight,
        backToFights, characters, getCharacters,
        weapons, movements, techniques, lines,
        removeFight, createNewCharacter, selectedSequence,
        createNewSequence, removeSequence, getData,
    } = props


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
                    sequence={sequence}
                    selectedSequence={selectedSequence}
                    removeSequence={removeSequence}

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
                    onClick={() => removeFight(fight)}
                >
                    Delete
                </button>
            </div>
            {selectedFight && fight.id === selectedFight.id &&
                <div>
                    <div className="sequencesContainer">
                        {sequenceHandler()}
                    </div>
                    <CreateCharacterForm
                        characters={characters}
                        fight={fight}
                        weapons={weapons}
                        movements={movements}
                        techniques={techniques}
                        lines={lines}
                        createNewCharacter={createNewCharacter}
                        createNewSequence={createNewSequence}
                        // getData={getData}

                    />

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