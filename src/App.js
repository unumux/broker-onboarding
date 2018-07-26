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
import { End } from './components/End';
import { LinkOut } from './components/LinkOut';

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
            <ConditionalContent 
                value={UiState.endProcess && UiState.answers[0] === false}
                componentTrue={<End heading="You must have an active license to sell insurance to continue." body="If you have questions, please contact one of our Service Specialists at 1-800-ASK-UNUM (1-800-275-8686) for further assistance." />}
            />
            <ConditionalContent 
                value={UiState.endProcess && UiState.answers[0] === true}
                componentTrue={<End heading="You must agree to the statement above to continue." body="If you have questions, please contact one of our Service Specialists at 1-800-ASK-UNUM (1-800-275-8686) for further assistance." />}
            />
            <ConditionalContent 
                value={UiState.endProcess && UiState.answers[8] === false}
                componentTrue={<End heading="We appreciate your interest in becoming a Unum Sales Partner." body="Please contact one of our Service Specialists at 1-800-ASK-UNUM (1-800-275-8686) to begin the onboarding process." />}
            />
            <ConditionalContent 
                value={UiState.link && UiState.link.length > 0}
                componentTrue={<LinkOut url={UiState.link} />}
            />
        </div>
    );
  }
}

export default App;
