import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "endgame",
      humanPlayerID: "X",
      playerGames: 0,
      playerWins: 0
    }

    this.selectPlayerOne = this.selectPlayerOne.bind(this);
    this.selectPlayerTwo = this.selectPlayerTwo.bind(this);
  }

  selectPlayerOne() {
    this.state.humanPlayerID = "X"
  }

  selectPlayerTwo() {
    this.state.humanPlayerID = "O"
  }

  render() {
  return (
    <div className="App">

      {this.state.page === "playerSelect" && (
        <div>
          <h1 className="title">
            WELCOME
          </h1>
          <section class="player-select">
            PICK YOUR PLAYER
            <button class="player-one-select" onClick={this.selectPlayerOne}>X</button>
            <button class="player-two-select" onClick={this.selectPlayerTwo}>O</button>
            <button class="start-match">MATCH ME WITH MY OPPONENT</button>
          </section>
        </div>
      )}
      {this.state.page === "waiting" && (
        <section class="waiting-text">
          Waiting to find your opponent...
          <button class="player-one-select" disabled="true" onClick={this.selectPlayerOne}>X</button>
          <button class="player-two-select" disabled="true" onClick={this.selectPlayerTwo}>O</button>
        </section>
      )}
      {this.state.page === "game" && (
        <div>
          <h2 className="turn-display">
            X'S TURN!
          </h2>
          <section class="game-grid">
            <button className="space1"></button>
            <button className="space2"></button>
            <button className="space3"></button>
            <button className="space4"></button>
            <button className="space5"></button>
            <button className="space6"></button>
            <button className="space7"></button>
            <button className="space8"></button>
            <button className="space9"></button>
          </section>
        </div>
      )}
      {this.state.page === "endgame" && (
        <section class="win-stats">
          You have won {this.state.playerWins} times and lost {this.state.playerGames - this.state.playerWins} times.
        </section>
      )}

    </div>
  );
}
}

export default App;
