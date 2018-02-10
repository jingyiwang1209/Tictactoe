import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class StepInfo extends React.Component {
    generateStepInfo(stepTracker) {
        let result = [];
        for (let i = 0; i <= stepTracker; i++) {
            result.push(
                <li className='step' onClick={() => this.props.travelBack(i)}>
                    This is Step {i}. Press me to go back to it.
                </li>
            );
        }
        return result;
    }
    render() {
        const { stepTracker } = this.props;
        return (
            <ul className="stepInfo">{this.generateStepInfo(stepTracker)}</ul>
        );
    }
}

const mapStateToProps = state => {
    return {stepTracker: state.appReducer[state.appReducer.length - 1].stepTracker};
};

export default connect(mapStateToProps, actions)(StepInfo);