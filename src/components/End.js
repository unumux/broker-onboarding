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
        const { heading, body } = this.props;
        return (
            <StyledEnd>
                <Heading>{heading}</Heading>
                <Body>{body}</Body>
            </StyledEnd>
        );
    }
}