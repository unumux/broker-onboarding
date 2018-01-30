import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Link = styled.a`

`;

export class LinkOut extends PureComponent {
    render() {
        const { url } = this.props;
        return (
            <Link href={url}>{url}</Link>
        );
    }
}