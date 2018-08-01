import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';
//import { questions } from '../constants/questions';

@observer
export class Question3 extends Component {
    render() {
        return (
            <QuestionSet 
                question={UiState.Q3}
                AnswerComponent={<YesNoToggle selectedValue={UiState.answers[2]} onChange={(val) => {UiState.answers[2] = val}}  />}
            />
        );
    }
}