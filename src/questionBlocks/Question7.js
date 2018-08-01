import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { Select } from '../components/Select';
import { QuestionSet } from '../components/QuestionSet';
//import { questions } from '../constants/questions';

@observer
export class Question7 extends Component {
    render() {
        return (
            <QuestionSet 
                question={UiState.Q7}
                AnswerComponent={
                    <Select options={UiState.A7Options} selectedValue={UiState.answers[6]} onChange={(event) => {UiState.answers[6] = event.target.value}}  />
                }
            />
        );
    }
}