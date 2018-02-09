import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class Square extends React.Component {
    render() {
        return (
            <div className='inner' onClick={() => this.props.onClick()}>
                {this.props.square}
            </div>
        );
    }
}

export default Square;