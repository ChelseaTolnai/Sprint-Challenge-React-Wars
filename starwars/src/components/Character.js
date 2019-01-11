import React from 'react';
import CharacterFilms from './Character';
import './StarWars.css';

const Character = (props) => {

    function getSpecies(URL) {

        fetch(URL)
            .then(res => {
            return res.json();
            })
            .then (data => {
                document.getElementById(`${props.char.name}-1`).innerHTML = data.name
            })
            .catch(err => {
            throw new Error(err);
            }); 
    };

    function getLang(URL) {

        fetch(URL)
            .then(res => {
            return res.json();
            })
            .then (data => {
                document.getElementById(`${props.char.name}-2`).innerHTML = data.language
            })
            .catch(err => {
            throw new Error(err);
            }); 
    };

    function getHomeWorld(URL) {

        fetch(URL)
            .then(res => {
            return res.json();
            })
            .then (data => {
                document.getElementById(`${props.char.name}-3`).innerHTML = data.name
            })
            .catch(err => {
            throw new Error(err);
            }); 
    };

    // function getFilm(URL) {

    //     fetch(URL)
    //         .then(res => {
    //         return res.json();
    //         })
    //         .then (data => {
    //             document.querySelectorAll(`#${URL}`).innerHTML = data.title
    //         })
    //         .catch(err => {
    //         throw new Error(err);
    //         }); 
    // };

    return (
        <div className="char-card">
            <div className="char-img"></div>
            <div className="char-head">
                <h3 className="char-name">{props.char.name}</h3>
                <p id={`${props.char.name}-1`}>{getSpecies(`${props.char.species[0]}`)}</p>
            </div>
            <ul className="char-list"> 
                <li>Gender: {props.char.gender}</li>
                <li>Height: {props.char.height}</li>
                <li>Mass: {props.char.mass}</li>
                <li>Home: <span id={`${props.char.name}-3`}>{getHomeWorld(`${props.char.homeworld}`)}</span></li>
                <li>Speaks: <span id={`${props.char.name}-2`}>{getLang(`${props.char.species[0]}`)}</span></li>
            </ul>
            {/* <div className="char-img"></div>
            <div className="char-head">
                <h3 className="char-name">{props.char.name}</h3>
                <p>Movies</p>
            </div>
            <ul className="film-list hide"> 
                {props.char.films.map( film => {
                    return (
                        <li id={film}>{getFilm(`${film}`)}</li>
                    )
                })}
            </ul> */}
        </div>
    )
}

export default Character;