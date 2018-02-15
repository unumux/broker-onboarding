import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';
import { questions } from '../constants/questions';
import { notes } from '../constants/notes';

@observer
export class Question8 extends Component {
    render() {
        return (
            <QuestionSet 
                question={UiState.Q8}
                AnswerComponent={<YesNoToggle selectedValue={UiState.answers[7]} onChange={(val) => {UiState.answers[7] = val}}  />}
                note={notes.Note3}
            />
        );
    }
}