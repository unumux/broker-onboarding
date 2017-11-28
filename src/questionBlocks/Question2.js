import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { question1 } from '../constants/index';
import { YesNoToggle } from '../components/YesNoToggle';

@observer
export class Question2 extends Component {
    render() {
        return (
            <div>
                <h5>{question1.question}</h5>
                <YesNoToggle onChange={(val) => UiState.active_license = val}  />
            </div>
        );
    }
}