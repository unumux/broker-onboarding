import { Question2a } from './questionBlocks/Question2a';
import React, { Component } from 'react';
import {observer} from "mobx-react";
import { YesNoToggle } from './components/YesNoToggle';
import UiState from './state/UiState';
import { ConditionalContent } from './components/ConditionalContent';
import { Question1 } from './questionBlocks/Question1';
import { Question2 } from './questionBlocks/Question2';
import { Question3 } from './questionBlocks/Question3';

@observer
class App extends Component {
  render() {
    return (
        <div>
            <Question1 />
            <ConditionalContent 
                value={UiState.question2Visible}
                componentTrue={<Question2/>}
            />
            <ConditionalContent 
                value={UiState.question2aVisible}
                componentTrue={<Question2a/>}
            />
            <ConditionalContent 
                value={UiState.question3Visible}
                componentTrue={<Question3/>}
            />
        </div>
    );
  }
}

export default App;
