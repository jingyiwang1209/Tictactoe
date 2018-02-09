import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { handleClick } from '../actions/squares';
import Square from "./Square";
import * as actions from "../actions";

class Board extends React.Component {
  state = {
    isNextO: false
  };

  // Prevent from clicking the same space over twice!
  updateSquares(index) {
    if(generateWinner(this.props.squares) || this.props.squares[index]){
      return;
    }

    this.setState({ isNextO: !this.state.isNextO });
    const isNextO = this.state.isNextO;
    this.props.handleClick(index, isNextO);
  }

  renderIndividualSquare(square, index) {
    return <Square square={square} onClick={() => this.updateSquares(index)} />;
  }

  renderSquares(squares) {
    return squares.map((square, index) => {
      return (
        <div className='square'>{this.renderIndividualSquare(square, index)}</div>
      );
    });
  }

  render() {
    let status = "Next player: X";
    const squares = this.props.squares;
    const player = this.state.isNextO ? 'O':'X'
    const winner = generateWinner(squares)
    if(winner) {
      status = "Winner: " + winner
    }else{
      status = "Next player: " + player
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">{this.renderSquares(squares)}</div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ handleClick }, dispatch);
// };
const mapStateToProps = state => {
  return {
    squares: state.appReducer
  };
};
export default connect(mapStateToProps, actions)(Board);

// Helper function
function generateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [p1, p2, p3] = lines[i];
    if (squares[p1] && squares[p1] === squares[p2] && squares[p1] === squares[p3]) {
      return squares[p1];
    }
  }
  return null;
}