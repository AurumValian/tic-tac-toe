import React, { Component } from "react";
import Game from "./Game";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "playerSelect",
      humanPlayerID: "X",
      playerGames: 0,
      playerWins: 0,
      previousWinner: ""
    }

    this.selectPlayerOne = this.selectPlayerOne.bind(this);
    this.selectPlayerTwo = this.selectPlayerTwo.bind(this);
    this.startGame = this.startGame.bind(this);
    this.win = this.win.bind(this);
    this.tie = this.tie.bind(this);
    this.reset = this.reset.bind(this);
  }

  selectPlayerOne() {
    this.setState({humanPlayerID: "X"})
  }

  selectPlayerTwo() {
    this.setState({humanPlayerID: "O"})
  }

  startGame() {
    this.setState({page: "game"})
  }

  win(icon) {
    icon === this.state.humanPlayerID ?
      this.setState({page: "endgame", playerGames: this.state.playerGames + 1, playerWins: this.state.playerWins + 1, previousWinner: icon}) :
      this.setState({page: "endgame", playerGames: this.state.playerGames + 1, previousWinner: icon})
  }

  tie() {
    this.setState({page: "endgame", previousWinner: "Nobody"})
  }

  reset() {
    this.setState({page: "playerSelect"})
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
            <button class="start-match" onClick={this.startGame}>MATCH ME WITH MY OPPONENT</button>
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
          <Game playerIcon={this.state.humanPlayerID} win={this.win} tie={this.tie}/>
      )}

      {this.state.page === "endgame" && (
        <section class="win-stats">
          <h2>
            {this.state.previousWinner} WINS!
          </h2>
          You have won {this.state.playerWins} times and lost {this.state.playerGames - this.state.playerWins} times.
          <button className="play-again" onClick={this.reset}>
            PLAY AGAIN!
          </button>
        </section>
      )}

    </div>
  );
}
}

export default App;
