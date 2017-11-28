import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { question1 } from '../constants/index';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';

@observer
export class Question1 extends Component {
    render() {
        return (
            <YesNoToggle selectedValue={UiState.active_license} onChange={(val) => {UiState.active_license = val}}  />
        );
    }
}