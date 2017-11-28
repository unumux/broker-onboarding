import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    
`;

export class Select extends React.PureComponent {
    render() {
        const {onChange, selectedValue} = this.props;

        return (
            <StyledSelect></StyledSelect>
        );
    }
}