import React from 'react';
import styled from 'styled-components';
import { ToggleButton } from './ToggleButton';

const StyledYesNoToggle = styled.div`
    display: flex;
`;

export class YesNoToggle extends React.PureComponent {
    static instanceCounter = 0;

    componentWillMount() {
        this.name = `YesNoToggle-${++YesNoToggle.instanceCounter}`
    }

    render() {
        const {onChange, selectedValue} = this.props;

        return (
            <StyledYesNoToggle onChange={(event) => { onChange(event.target.value === "true")}}>
                <ToggleButton name={this.name} value={false} checked={selectedValue === false}>No</ToggleButton>
                <ToggleButton name={this.name} value={true} checked={selectedValue === true}>Yes</ToggleButton>
            </StyledYesNoToggle>
        );
    }
}