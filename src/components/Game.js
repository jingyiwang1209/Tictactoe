import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import Board from './Board';
import StepInfo from './StepInfo';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <StepInfo />
        </div>
      </div>
    );
  }
}



export default Game