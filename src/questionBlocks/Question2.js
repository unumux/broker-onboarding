import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { question2 } from '../constants/index';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';
import { Select } from '../components/Select';

@observer
export class Question2 extends Component {
    render() {
        return (
            <QuestionSet
                question={question2.question}
                AnswerComponent={<Select selectedValue={UiState.role_selection} onChange={(val) => {UiState.role_selection = val}}  />}                
            />
        );
    }
}