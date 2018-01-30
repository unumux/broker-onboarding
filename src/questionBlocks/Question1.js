import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';
@observer
export class Question1 extends Component {
    render() {
        return (
            <QuestionSet 
                question={UiState.Q1}
                AnswerComponent={
                    <YesNoToggle selectedValue={UiState.answers[0]} onChange={(val) => {UiState.answers[0] = val}} buttonYesText="Yes" buttonNoText="No"  />
                }
            />
        );
    }
}