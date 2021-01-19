import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledLinkOut = styled.div`
    text-align: center;
    padding: 20px;
    margin: 0 -20px;

    &:nth-child(2n) {
        background: #F7F7F7;
    }
`;

const Text = styled.h3`
    margin-bottom: 2.4rem !important;
`;

const Link = styled.a.attrs({
    className: "button button--inline"
})`

`;

export class LinkOut extends PureComponent {
    render() {
        const { url } = this.props;
        return (
            <StyledLinkOut>
                <Text>You're ready to begin the Broker Appointment Application process.</Text>
                <Link href={url} target="_blank">Continue to Application</Link>
            </StyledLinkOut>
        );
    }
}