import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import '../App.css';
import MultiSelect from "@kenshooui/react-multi-select";

class QuizMakerPage extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            teacher : 'Teacher Name',
            students : [
                {id: 0, label: "Zach Morris"},
                {id: 1, label: "Kelly Kapowski"},
                {id: 2, label: "A.C. Slater"},
                {id: 3, label: "Lisa Turtle"},
                {id: 4, label: "Jessie Spano"},
                {id: 5, label: "Samuel Powers"},
                {id: 6, label: "Tori Scott"},
            ],
            selectedStudents: []
        }
    }

    handleChange(selectedStudents) {
        this.setState({ selectedStudents });
    }

    handleSubmit = async values => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(300);

        alert(JSON.stringify({
            'teacher'       : this.state.teacher,
            'students'      : this.state.selectedStudents,
            'quizName'      : values.quizName,
            'quizData'      : values.questions
        }));

        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'teacher'       : this.state.teacher,
                'students'      : this.state.selectedStudents,
                'quizName'      : values.quizName,
                'quizData'      : values.questions
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    QuizForm = () => {
        const {students, selectedStudents} = this.state;
        return (
            <div className="w3-container w3-margin">
                <Form
                    onSubmit={this.handleSubmit}
                    mutators={{
                        ...arrayMutators
                    }}
                    render={({
                                 handleSubmit,
                                 mutators: {push, pop}, // injected from final-form-arrays above
                                 pristine,
                                 reset,
                                 submitting,
                                 values
                             }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className={"w3-group w3-card w3-padding w3-padding-24"}>
                                    <label htmlFor="quizName">Quiz Name:</label>
                                    <Field
                                        name="quizName"
                                        component="input"
                                        id="quizName"
                                        className="w3-bar"
                                    />
                                </div>
                                <FieldArray name="questions">
                                    {({fields}) =>
                                        fields.map((name, index) => (
                                            <div key={name}
                                                 className="w3-group w3-card w3-display-container w3-padding w3-padding-24">
                                                <div
                                                    onClick={() => fields.remove(index)}
                                                    className="w3-display-topright w3-padding w3-padding-16"
                                                    style={{cursor: 'pointer'}}>✖
                                                </div>
                                                <div className="w3-padding-top">
                                                    <label>Question {index + 1}:</label>
                                                    <div className="w3-container w3-right">
                                                        <button type="button" className="w3-button"
                                                                id={"photoQ" + index}>Add Photo
                                                        </button>
                                                        <button type="button" className="w3-button"
                                                                id={"audioQ" + index}>Add Audio
                                                        </button>
                                                    </div>
                                                </div>
                                                <Field
                                                    name={`${name}.Q${index}`}
                                                    component="input"
                                                    id="text"
                                                    className="w3-bar"
                                                />
                                                <div className="w3-padding-top">
                                                    <label>Answer A:</label>
                                                    <div className="w3-container w3-right">
                                                        <button type="button" className="w3-button"
                                                                id={"photoA" + index}>Add Photo
                                                        </button>
                                                        <button type="button" className="w3-button"
                                                                id={"audioA" + index}>Add Audio
                                                        </button>
                                                    </div>
                                                    <Field
                                                        name={`${name}.A${index}`}
                                                        component="input"
                                                        className="w3-bar"
                                                        id={"answerA" + index}
                                                    />
                                                </div>
                                                <div className="w3-padding-top">
                                                    <label>Answer B:</label>
                                                    <div className="w3-container w3-right">
                                                        <button type="button" className="w3-button"
                                                                id={"photoB" + index}>Add Photo
                                                        </button>
                                                        <button type="button" className="w3-button"
                                                                id={"audioB" + index}>Add Audio
                                                        </button>
                                                    </div>
                                                    <Field
                                                        name={`${name}.B${index}`}
                                                        component="input"
                                                        className="w3-bar"
                                                        id={"answerB" + index}
                                                    />
                                                </div>
                                                <div className="w3-padding-top">
                                                    <label>Answer C:</label>
                                                    <div className="w3-container w3-right">
                                                        <button type="button" className="w3-button"
                                                                id={"photoC" + index}>Add Photo
                                                        </button>
                                                        <button type="button" className="w3-button"
                                                                id={"audioC" + index}>Add Audio
                                                        </button>
                                                    </div>
                                                    <Field
                                                        name={`${name}.C${index}`}
                                                        component="input"
                                                        className="w3-bar"
                                                        id={"answerC" + index}
                                                    />
                                                </div>
                                                <div className="w3-padding-top">
                                                    <label>Answer D:</label>
                                                    <div className="w3-container w3-right">
                                                        <button type="button" className="w3-button"
                                                                id={"photoD" + index}>Add Photo
                                                        </button>
                                                        <button type="button" className="w3-button"
                                                                id={"audioD" + index}>Add Audio
                                                        </button>
                                                    </div>
                                                    <Field
                                                        name={`${name}.D${index}`}
                                                        component="input"
                                                        className="w3-bar"
                                                        id={"answerD" + index}
                                                    />
                                                </div>
                                                <div className="w3-padding-top">
                                                    <label>Correct Answer:</label>
                                                    <div className="radio-inline">
                                                        <label className="w3-padding">
                                                            <Field
                                                                name={`${name}.correct${index}`}
                                                                component="input"
                                                                type="radio"
                                                                className="w3-radio w3-padding"
                                                                id="correctA"
                                                                value="A"
                                                            />{' '}
                                                            A
                                                        </label>
                                                        <label className="w3-padding">
                                                            <Field
                                                                name={`${name}.correct${index}`}
                                                                component="input"
                                                                type="radio"
                                                                className="w3-radio w3-padding"
                                                                id="correctB"
                                                                value="B"
                                                            />{' '}
                                                            B
                                                        </label>
                                                        <label className="w3-padding">
                                                            <Field
                                                                name={`${name}.correct${index}`}
                                                                component="input"
                                                                type="radio"
                                                                className="w3-radio w3-padding"
                                                                id="correctC"
                                                                value="C"
                                                            />{' '}
                                                            C
                                                        </label>
                                                        <label className="w3-padding">
                                                            <Field
                                                                name={`${name}.correct${index}`}
                                                                component="input"
                                                                type="radio"
                                                                className="w3-radio w3-padding"
                                                                id="correctD"
                                                                value="D"
                                                            />{' '}
                                                            D
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </FieldArray>
                                <div className="buttons w3-padding">
                                    <button type="button" className="w3-button w3-theme"
                                            onClick={() => push('questions', undefined)}>
                                        Add Question
                                    </button>
                                    <button type="button" className="w3-button w3-theme"
                                            onClick={() => pop('questions')}>
                                        Remove Question
                                    </button>
                                </div>
                                <div className="w3-container w3-padding-top">
                                    <label htmlFor="student-select" className="w3-padding w3-medium">Select Students to Receive Quiz</label>
                                    <MultiSelect
                                        items={students}
                                        selectedItems={selectedStudents}
                                        onChange={this.handleChange}
                                        id="student-select"
                                    />
                                </div>
                                <div className="buttons">
                                    <button type="submit" className="w3-button w3-theme w3-bar w3-half"
                                            disabled={submitting || pristine}>
                                        Save & Send Quiz
                                    </button>
                                    <button
                                        type="button"
                                        onClick={reset}
                                        className="w3-button w3-theme w3-bar w3-half"
                                        disabled={submitting || pristine}>
                                        Clear
                                    </button>
                                </div>
                            </form>
                        )
                    }}
                />
            </div>
        );
    };

    render() {
        return (this.QuizForm());
    }
}

export default QuizMakerPage;