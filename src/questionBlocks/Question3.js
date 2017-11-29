import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { QuestionSet } from '../components/QuestionSet';
import { questions } from '../constants/questions';
import { answerOptions } from '../constants/answer_options';
import { Select } from '../components/Select';

@observer
export class Question3 extends Component {
    render() {
        return (
            <QuestionSet 
                question={questions['3']}
                AnswerComponent={
                    <Select options={answerOptions['3']} selectedValue={UiState.answer3} onChange={(event) => {UiState.answer3 = event.target.value}}  />
                }
            />
        );
    }
}