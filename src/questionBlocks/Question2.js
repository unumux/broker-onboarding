import { answerOptions } from '../constants/answer_options';
import { questions } from '../constants/questions';
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { QuestionSet } from '../components/QuestionSet';
import { Select } from '../components/Select';

@observer
export class Question2 extends Component {
    render() {
        return (
            <QuestionSet
                question={questions['2'].question}
                AnswerComponent={
                    <Select options={answerOptions['2']} selectedValue={UiState.answer2} onChange={(event) => {UiState.answer2 = event.target.value}}  />
                }           
            />
        );
    }
}