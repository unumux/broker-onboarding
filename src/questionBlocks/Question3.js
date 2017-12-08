import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';
import { questions } from '../constants/questions';

@observer
export class Question3 extends Component {
    render() {
        return (
            <QuestionSet 
                question={questions['3']}
                AnswerComponent={<YesNoToggle selectedValue={UiState.A3} onChange={(val) => {UiState.A3 = val}}  />}
            />
        );
    }
}