import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { answerOptions } from '../constants/answer_options';
import { Select } from '../components/Select';
import { QuestionSet } from '../components/QuestionSet';

@observer
export class Question2 extends Component {
    render() {
        return (
            <QuestionSet
                question={UiState.Q2}
                AnswerComponent={
                    <Select options={answerOptions['2']} selectedValue={UiState.answers[1]} onChange={(event) => {UiState.answers[1] = event.target.value}}  />
                }           
                note="Note: If your role is a Broker and a Benefit Counselor, select Broker."
            />
        );
    }
}