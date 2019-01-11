import React from 'react';
import './StarWars.css';
import Character from './Character';

const CharacterCards = (props) => {

    return (
        <div className="char-container">
            {props.characters.map( char => {
                return (
                    <Character char={char} key={char.name}/>
                )
            })}
        </div>
    )
}

export default CharacterCards;