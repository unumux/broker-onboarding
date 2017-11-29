import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';
import { questions } from '../constants/questions';

@observer
export class Question2a extends Component {
    render() {
        return (
            <QuestionSet 
                question={questions['2a'][UiState.answer2]}
                AnswerComponent={<YesNoToggle selectedValue={UiState.answer2a} onChange={(val) => {UiState.answer2a = val}}  />}
            />
        );
    }
}