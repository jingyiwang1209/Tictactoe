import React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { handleClick } from '../actions/squares';
import Square from "./Square";
import * as actions from "../actions";
import generateWinner from '../utilities/generateWinner';

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
    const stepTracker = this.props.stepTracker;
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
    squares: state.appReducer[state.appReducer.length - 1].squares,
  };
};
export default connect(mapStateToProps, actions)(Board);

