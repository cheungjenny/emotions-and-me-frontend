import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Result(props) {
    return (
        <div className="result w3-center w3-padding-64 w3-large">
            Congratulations! You got <strong>{props.numCorrect}</strong> out of {props.numQuestions} questions right!
        </div>
    );
}

Result.propTypes = {
    numCorrect: PropTypes.number.isRequired,
    numQuestions: PropTypes.number.isRequired,
};

export default Result;