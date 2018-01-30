import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledEnd = styled.section`
    text-align: center;
    padding: 20px;
    margin: 0 -20px;

    &:nth-child(2n) {
        background: #F7F7F7;
    }
`;

const Heading = styled.h3`

`;

const Body = styled.p`

`;

export class End extends PureComponent {
    render() {
        return (
            <StyledEnd>
                <Heading>You must agree to the statement above to continue.</Heading>
                <Body>Please return to the previous question and select the appropriate role. If you have questions, please contact one of our Service Specialists at 1-800-ASK-UNUM (1-800-275-8686) for further assistance.</Body>
            </StyledEnd>
        );
    }
}