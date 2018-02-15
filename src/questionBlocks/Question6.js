import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';
import { questions } from '../constants/questions';
import { notes } from '../constants/notes';

@observer
export class Question6 extends Component {
    render() {
        return (
            <QuestionSet 
                question={UiState.Q6}
                AnswerComponent={<YesNoToggle selectedValue={UiState.answers[5]} onChange={(val) => {UiState.answers[5] = val}}  />}
                note={notes.Note2}
            />
        );
    }
}