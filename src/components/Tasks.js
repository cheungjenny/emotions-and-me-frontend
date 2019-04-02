import React, { Component } from 'react';
import '../App.css';
import Link from "react-router-dom/es/Link";
import connect from "react-redux/es/connect/connect";
import {getSingleQuiz} from "../actions";


class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.data.checked,
            type: this.props.data.type,
            data: this.getTaskData(this.props.data),
            isDisabled: true,
            quizData: {},
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.props.user.type === 'TEACHER' || this.props.user.type === 'STUDENT') {
            if (this.state.type === 'quiz') {
                this.props.getSingleQuiz(this.props.user.username, this.props.user.type, this.state.data);
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.user.type !== prevProps.user.type) {
            if (this.props.user.type === 'TEACHER' || this.props.user.type === 'STUDENT') {
                if (this.state.type === 'quiz') {
                    this.props.getSingleQuiz(this.props.user.username, this.props.user.type, this.state.data);
                }
            }
        }

        if (!this.props.isFetching && !this.props.hasFailed && (this.props.quiz !== prevProps.quiz)) {
            this.setState({
                isDisabled: false,
                quizData: this.props.quiz,
            })
        }
    }


    handleClick = (e) => {
        this.setState({
            checked: !this.state.checked
        });

        this.props.onCheck();
    };

    getTaskData = (data) => {
        if (data.type === "webcam") {
            return data.emotion;
        }
        if (data.type === "video") {
            return data.url;
        }
        if (data.type === "audio") {
            return data.emotion;
        }
        if (data.type === "browse") {
            return data.emotion;
        }
        if (data.type === "quiz") {
            return data.quizName;
        }
    };

    task = () => {
        if (this.state.type === "webcam") {
            return (
                <div className="w3-row w3-padding w3-center w3-display-container">
                    <div className="w3-container w3-threequarter">
                        <input type="checkbox" className="w3-check" checked={this.state.checked}
                               onChange={this.handleClick}/> Go to the webcam
                        feature and show a <b>{this.state.data}</b> face!
                    </div>
                    <div className="w3-display-right w3-quarter">
                        <Link to={{pathname: '/webcam',}} style={{textDecoration: 'none'}}>
                            <button className="w3-button w3-green w3-margin-left go-btn-padding"
                                    onClick={this.props.onCheck}>GO!
                            </button>
                        </Link>
                    </div>
                </div>
            )
        }
        if (this.state.type === "video") {
            return (
                <div className="w3-row w3-padding w3-center w3-display-container">
                    <div className="w3-container w3-threequarter">
                        <input type="checkbox" className="w3-check" checked={this.state.checked}
                               onChange={this.handleClick}/> Go to the video
                        streaming feature and watch this video: <b>{this.state.data}</b>
                    </div>
                    <div className="w3-display-right w3-quarter">
                        <button className="w3-button w3-green w3-margin-left go-btn-padding"
                                onClick={this.props.onCheck}>GO!
                        </button>
                    </div>
                </div>
            )
        }
        if (this.state.type === "audio") {
            return (
                <div className="w3-row w3-padding w3-center w3-display-container">
                    <div className="w3-container w3-threequarter">
                        <input type="checkbox" className="w3-check" checked={this.state.checked}
                               onChange={this.handleClick}/> Go to the audio
                        recording feature and use a <b>{this.state.data}</b> voice!
                    </div>
                    <div className="w3-display-right w3-quarter">
                        <Link to={{pathname: '/audio',}} style={{textDecoration: 'none'}}>
                            <button className="w3-button w3-green w3-margin-left go-btn-padding"
                                    onClick={this.props.onCheck}>GO!
                            </button>
                        </Link>
                    </div>
                </div>
            )
        }
        if (this.state.type === "browse") {
            return (
                <div className="w3-row w3-padding w3-center w3-display-container">
                    <div className="w3-container w3-threequarter">
                        <input type="checkbox" className="w3-check" checked={this.state.checked}
                               onChange={this.handleClick}/> Go to the browse photos
                        & audio feature and browse <b>{this.state.data}</b> photos and clips!
                    </div>
                    <div className="w3-display-right w3-quarter">
                        <Link to={{pathname: '/browse',}} style={{textDecoration: 'none'}}>
                            <button className="w3-button w3-green w3-margin-left go-btn-padding"
                                    onClick={this.props.onCheck}>GO!
                            </button>
                        </Link>
                    </div>
                </div>
            )
        }
        if (this.state.type === "quiz") {
            return (
                <div className="w3-row w3-padding w3-center w3-display-container">
                    <div className="w3-container w3-threequarter">
                        <input type="checkbox" className="w3-check" checked={this.state.checked}
                               onChange={this.handleClick}/> Go complete the quiz
                        named <b>{this.state.data}</b>
                    </div>
                    <div className="w3-display-right w3-quarter">
                        <Link to={{
                            pathname: '/takequiz',
                            state: {quizName: this.state.data, quizData: this.state.quizData.quizData}
                        }}
                              style={{textDecoration: 'none'}}>
                            <button className="w3-button w3-green w3-margin-left go-btn-padding"
                                    disabled={this.state.isDisabled} onClick={this.props.onCheck}>GO!
                            </button>
                        </Link>
                    </div>
                </div>
            )
        }
    };

    render() {
        return (this.task());
    }
}


const mapStateToProps = state => {
    return {
        hasFailed: state.assignments.hasFailed,
        quiz: state.assignments.quizData,
        isFetching: state.assignments.isFetching,
        user: state.userInfo.user,
        userRequestStatus: state.userInfo.currentUserRequestStatus,
    }
};

const mapDispatchToProps = {
    getSingleQuiz,
};

export default connect(mapStateToProps, mapDispatchToProps) (Task);