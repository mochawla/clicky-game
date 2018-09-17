import React, { Component } from "react";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard/CharacterCard.js"
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header.js"
import Navbar from "./components/Navbar/Navbar.js"
import "./App.css";

class App extends Component { 

  //setting initial state to characters.json array
  state = {
    characters
  };

  render() {
    return (
  
    <Wrapper>
    <Navbar
      title = "Clicky Game"
      rightWrong={this.state.rightWrong}
      score={this.state.currentScore}
      topScore={this.state.topScore}
    />
    <Header>
    Click each Anime Character on the screen once to raise your score. Click one twice and you lose! 
    </Header> 
    {this.state.characters.map(character => (
    <CharacterCard
    image={character.image}
    />
    
    ))};
    </Wrapper>
    );
  };
};

export default App;
