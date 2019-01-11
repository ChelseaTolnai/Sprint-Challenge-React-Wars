import React, { Component } from 'react';
import CharacterCards from './components/CharacterCards'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pageURL: "https://swapi.co/api/people/?page=",
      page: 1,
    };
  }

  componentDidMount() {
    this.getCharacters(`${this.state.pageURL}` +`${this.state.page}`);
  }

  getCharacters = (URL) => {
    
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // handleClick = (e) => {
  //   e.preventDefault();
  //   if(e.target.value === "next") {
  //     this.getCharacters(`${this.state.pageURL}` +`${this.state.page + 1}`);
  //     this.setState({ page: this.state.page + 1 });
  //   }
  //   if(e.target.value === "previous") {
  //     this.getCharacters(`${this.state.pageURL}` +`${this.state.page - 1}`);
  //     this.setState({ page: this.state.page - 1 });
  //   }
  // }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars Character Cards</h1>
        <CharacterCards characters={this.state.starwarsChars}/>
        {/* <button onClick={this.handleClick} value={"previous"}>Previous</button>
        <button onClick={this.handleClick} value={"next"}>Next</button> */}
      </div>
    );
  }
}

export default App;
