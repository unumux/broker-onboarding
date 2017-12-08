import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { answerOptions } from '../constants/answer_options';
import { Select } from '../components/Select';
import { QuestionSet } from '../components/QuestionSet';
import { questions } from '../constants/questions';
@observer
export class Question2 extends Component {
    render() {
        return (
            <QuestionSet
                question={questions['2'].question}
                AnswerComponent={
                    <Select options={answerOptions['2']} selectedValue={UiState.A2} onChange={(event) => {UiState.A2 = event.target.value}}  />
                }           
            />
        );
    }
}