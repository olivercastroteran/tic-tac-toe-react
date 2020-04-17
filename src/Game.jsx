import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <h1>Tic-Tac-Toe</h1>
        <div className="container">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
