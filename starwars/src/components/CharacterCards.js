import React, { Component } from 'react';
import './StarWars.css';

const CharacterCards = (props) => {

    return (
        <div className="chars">
            {props.characters.map( char => {
                return (
                    <div className="char-card">
                    {char.name}
                    </div>
                )
            })}
        </div>
    )
}

export default CharacterCards;