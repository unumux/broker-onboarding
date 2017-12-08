import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';
import { questions } from '../constants/questions';

@observer
export class Question7 extends Component {
    render() {
        return (
            <QuestionSet 
                question={questions['7']}
                AnswerComponent={<YesNoToggle selectedValue={UiState.A7} onChange={(val) => {UiState.A7 = val}}  />}
            />
        );
    }
}