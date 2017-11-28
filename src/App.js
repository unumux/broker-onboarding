import React, { Component } from 'react';
import {observer} from "mobx-react";
import { YesNoToggle } from './components/YesNoToggle';
import UiState from './state/UiState';
import { ConditionalContent } from './components/ConditionalContent';
import { question1 } from './constants/index';
import { Question1 } from './questionBlocks/Question1';
import { Question2 } from './questionBlocks/Question2';

@observer
class App extends Component {
  render() {
    return (
        <div>
            <h1>{UiState.active_license}</h1>
            <Question1 />
            <ConditionalContent 
                value={UiState.active_license}
                componentTrue={<Question2 />}
                componentFalse={<h1>{question1.falseText}</h1>}
            />
        </div>
    );
  }
}

export default App;
