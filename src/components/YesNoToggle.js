import React from 'react';
import styled from 'styled-components';
import { ToggleButton } from './ToggleButton';

const StyledYesNoToggle = styled.div`
    display: flex;

    @media screen and (min-width: 768px) {
        justify-content: flex-end;
    }
`;

export class YesNoToggle extends React.PureComponent {
    static instanceCounter = 0;

    componentWillMount() {
        this.name = `YesNoToggle-${++YesNoToggle.instanceCounter}`
    }

    render() {
        const {onChange, selectedValue, buttonYesText = "Agree", buttonNoText = "Disagree"} = this.props;

        return (
            <StyledYesNoToggle onChange={(event) => { onChange(event.target.value === "true")}}>
                <ToggleButton name={this.name} value={false} checked={selectedValue === false}>{buttonNoText}</ToggleButton>
                <ToggleButton name={this.name} value={true} checked={selectedValue === true}>{buttonYesText}</ToggleButton>
            </StyledYesNoToggle>
        );
    }
}