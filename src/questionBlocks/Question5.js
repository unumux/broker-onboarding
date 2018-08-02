import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { Select } from '../components/Select';
import { QuestionSet } from '../components/QuestionSet';
import { answerOptions } from '../constants/answer_options';

@observer
export class Question5 extends Component {
    render() {
        return (
            <QuestionSet 
                question={UiState.Q5}
                AnswerComponent={
                    <Select options={answerOptions['5']} selectedValue={UiState.answers[4]} onChange={(event) => {UiState.answers[4] = event.target.value}}  />
                }
            />
        );
    }
}