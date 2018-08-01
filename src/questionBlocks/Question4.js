import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { Select } from '../components/Select';
import { QuestionSet } from '../components/QuestionSet';
//import { questions } from '../constants/questions';
import { answerOptions } from '../constants/answer_options';

@observer
export class Question4 extends Component {
    render() {
        return (
            <QuestionSet 
                question={UiState.Q4}
                AnswerComponent={
                    <Select options={answerOptions['4']} selectedValue={UiState.answers[3]} onChange={(event) => {UiState.answers[3] = event.target.value}}  />
                }
            />
        );
    }
}