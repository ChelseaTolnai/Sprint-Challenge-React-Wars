import React from 'react';
import './StarWars.css';

const Character = (props) => {

    function getSpecies(URL) {

        fetch(URL)
            .then(res => {
            return res.json();
            })
            .then (data => {
                document.getElementById(`${props.char.name}`).innerHTML = data.name
            })
            .catch(err => {
            throw new Error(err);
            }); 
    };

    return (
        <div className="char-card">
            <div className="char-img"></div>
            <div className="char-head">
                <h3 className="char-name">{props.char.name}</h3>
                <p className="char-species" id={props.char.name}>{getSpecies(`${props.char.species[0]}`)}</p>
            </div>
            <ul className="char-list"> 
                <li>Gender: {props.char.gender}</li>
                <li>Height: {props.char.height}</li>
                <li>Mass: {props.char.mass}</li>
            </ul>
        </div>
    )
}

export default Character;