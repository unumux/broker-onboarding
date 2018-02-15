import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    margin-top: 10px;

    @media screen and (min-width: 768px) {
        flex-direction: row; 
        margin-top: 5px;
        padding-right: 35px;
    }
`;

export class Select extends React.PureComponent {
    render() {
        const {onChange, selectedValue = "Not set", options} = this.props;
        return (
            <StyledSelect onChange={onChange} value={selectedValue}>
                <option disabled value="Not set"> -- select an option -- </option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </StyledSelect>
        );
    }
}