import React, { Component } from 'react';
import {observer} from "mobx-react";
import UiState from './state/UiState';
import { ConditionalContent } from './components/ConditionalContent';
import { 
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
    Question6,
    Question7,
    Question8,
    Question9,
    Question10
} from './questionBlocks/Questions';

@observer
class App extends Component {
  render() {
    return (
        <div>
            <Question1 />
            <ConditionalContent 
                value={UiState.Q2Visible}
                componentTrue={<Question2/>}
            />
            <ConditionalContent 
                value={UiState.Q3Visible}
                componentTrue={<Question3/>}
            />
            <ConditionalContent 
                value={UiState.Q4Visible}
                componentTrue={<Question4/>}
            />
            <ConditionalContent 
                value={UiState.Q5Visible}
                componentTrue={<Question5/>}
            />
            <ConditionalContent 
                value={UiState.Q6Visible}
                componentTrue={<Question6/>}
            />
            <ConditionalContent 
                value={UiState.Q7Visible}
                componentTrue={<Question7/>}
            />
            <ConditionalContent 
                value={UiState.Q8Visible}
                componentTrue={<Question8/>}
            />
            <ConditionalContent 
                value={UiState.Q9Visible}
                componentTrue={<Question9/>}
            />
            <ConditionalContent 
                value={UiState.Q10Visible}
                componentTrue={<Question10/>}
            />
        </div>
    );
  }
}

export default App;
