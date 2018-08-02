import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';

@observer
export class Question6 extends Component {
    render() {
        return (
            <QuestionSet 
                question={UiState.Q6}
                AnswerComponent={<YesNoToggle selectedValue={UiState.answers[5]} onChange={(val) => {UiState.answers[5] = val}}  />}
            />
        );
    }
}