import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledQuestionSet = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0 -20px;

    &:nth-child(2n) {
        background: #F7F7F7;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row; 
        flex-wrap: wrap;   
    }
`;

const Question = styled.div`    
    align-self: center;
    margin-right: auto;
    flex: 1 1 0px;
    padding-right: 20px;
`;

const Answer = styled.div`
    
    @media screen and (min-width: 768px) {
        flex: 0 0 275px; 
        justify-content: flex-end;
        max-width: 275px;
    }
`;

const Note = styled.div`
    font-size: 1.5rem;
    font-style: italic;
    flex-basis: 100%;
    flex-shrink: 0;
    padding: 0;
    width: 100%;
`;

export class QuestionSet extends PureComponent {
    render() {
        const { question, note, AnswerComponent = null } = this.props;
        return (
            <StyledQuestionSet>
                <Question> { question.split('\n').map((item, key) => { return <p key={key}>{item}</p> }) } </Question>
                <Answer>{AnswerComponent}</Answer>
                {!note ? null : <Note>{note}</Note>}
            </StyledQuestionSet>
        );
    }
}