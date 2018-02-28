import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';
import { questions } from '../constants/questions';

@observer
export class Question10 extends Component {
    render() {
        return (
            <QuestionSet 
                question={UiState.Q10}
                AnswerComponent={<YesNoToggle selectedValue={UiState.answers[9]} onChange={(val) => {UiState.answers[9] = val}}  />}
                note="Note: For questions regarding your Colonial Life agent status, please contact 1-866-531-2022."

            />
        );
    }
}