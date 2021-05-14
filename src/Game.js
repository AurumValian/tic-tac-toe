import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerIcon: this.props.playerIcon,
      turn: "X",
      board: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    }

    this.takeTurn = this.takeTurn.bind(this);
    this.checkGameOver = this.checkGameOver.bind(this);
    this.computerTurn = this.computerTurn.bind(this);
    this.cycleTurns = this.cycleTurns.bind(this);
  }

  componentDidMount() {
    if (this.state.playerIcon === "O") {
      this.computerTurn()
    }
  }

  computerTurn() {
    if(this.state.turn !== this.state.playerIcon) {
      const randomSpace = Math.floor(Math.random() * 9)
      if (this.state.board[randomSpace] !== " " && this.state.board.includes(" ")) {
        this.computerTurn();
      } else if (this.state.board[randomSpace] === " ") {
        this.state.board[randomSpace] = this.state.turn
        const gameNotOver = this.checkGameOver(this.state.board, this.state.turn)
        if(gameNotOver) {
          this.state.turn === "X" ? this.setState({board: this.state.board, turn: "O"}): this.setState({board: this.state.board, turn: "X"})
        }
      }
    }
  }

  takeTurn(event) {
    if (this.state.turn === this.state.playerIcon) {
      const boardSpace = event.target.classList.value;
      const spaceNumber = Number(boardSpace.split("").pop());
      this.state.board[spaceNumber - 1] = this.state.playerIcon
      this.setState({board: this.state.board})
      const gameNotOver = this.checkGameOver(this.state.board, this.state.turn)
      if (gameNotOver) {
        this.state.playerIcon === "X" ? this.setState({turn: "O"}): this.setState({turn: "X"})
      }
    }
  }

  async cycleTurns(event) {
    await this.takeTurn(event)
    this.computerTurn()
  }

  checkGameOver(board, icon) {
    if (
      (board[0] === board[1] && board[1] === board[2] && board[0] !== " ") ||
      (board[3] === board[4] && board[4] === board[5] && board[3] !== " ") ||
      (board[6] === board[7] && board[7] === board[8] && board[6] !== " ") ||
      (board[0] === board[3] && board[3] === board[6] && board[0] !== " ") ||
      (board[1] === board[4] && board[4] === board[7] && board[1] !== " ") ||
      (board[2] === board[5] && board[5] === board[8] && board[2] !== " ") ||
      (board[0] === board[4] && board[4] === board[8] && board[0] !== " ") ||
      (board[2] === board[4] && board[4] === board[6] && board[2] !== " ")
    ){
      this.props.win(icon)
    } else if (!board.includes(" ")) {
      this.props.tie()
    } else if (board.includes(" ")) {
      return true;
    }
  }



  render() {
    return (
    <div>
      <h2 className="turn-display">
        {this.state.turn}'S TURN!
      </h2>
      <section className="game-grid">
        <button className="space1" onClick={this.cycleTurns}>{this.state.board[0]}</button>
        <button className="space2" onClick={this.cycleTurns}>{this.state.board[1]}</button>
        <button className="space3" onClick={this.cycleTurns}>{this.state.board[2]}</button>
        <button className="space4" onClick={this.cycleTurns}>{this.state.board[3]}</button>
        <button className="space5" onClick={this.cycleTurns}>{this.state.board[4]}</button>
        <button className="space6" onClick={this.cycleTurns}>{this.state.board[5]}</button>
        <button className="space7" onClick={this.cycleTurns}>{this.state.board[6]}</button>
        <button className="space8" onClick={this.cycleTurns}>{this.state.board[7]}</button>
        <button className="space9" onClick={this.cycleTurns}>{this.state.board[8]}</button>
      </section>
    </div>
  )}
}

export default Game;
