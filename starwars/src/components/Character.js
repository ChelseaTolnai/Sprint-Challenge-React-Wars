import React from 'react';
import './StarWars.css';

const Character = (props) => {

    function getSpecies(URL) {

        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then (data => {
              console.log(data)
            return data
          })
          .catch(err => {
            throw new Error(err);
          }); 

    };

    return (
        <div className="char-card">
            <div className="char-img">
                {/* <img clasName="img" src={require("../starwars.png")} alt="Star Wars logo"/> */}
            </div>
            <h3>{props.char.name}</h3>
            <p>{getSpecies(`${props.char.species[0]}`)}</p>
            <ul>
                <li>Gender: {props.char.gender}</li>
                <li>Height: {props.char.height}</li>
                <li>Mass: {props.char.mass}</li>
            </ul>
        </div>
    )
}

export default Character;