import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledQuestionSet = styled.div`
    display: flex;
`;

const Question = styled.div`
    min-width: 400px;
    margin-right: auto;
`;

export class QuestionSet extends PureComponent {
    render() {
        const { question, AnswerComponent = null } = this.props;
        return (
            <StyledQuestionSet>
                <Question>{question}</Question>
                {AnswerComponent}
            </StyledQuestionSet>
        );
    }
}