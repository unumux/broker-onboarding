import React from 'react';
import styled from 'styled-components';

const StyledToggleButton = styled.div`
    margin: 5px 0 0 10px;
`;

const Radio = styled.input.attrs({
    type: 'radio'
})`
    input[type='radio']& {
        display: none;
    }
`;

const Label = styled.label.attrs({
    className: 'willow-button'
})`

    background: #CDCDCD;

    input[type='radio']:checked + & {
        background: #fac832;
    }
`;

export class ToggleButton extends React.Component {
    static instanceCounter = 0;

    componentWillMount() {
        this.id = `ToggleButton-${++ToggleButton.instanceCounter}`
    }

    render() {
        const {children, name, value, checked} = this.props;

        return (
            <StyledToggleButton>
                <Radio name={name} checked={checked} value={value} id={this.id} />
                <Label htmlFor={this.id}>
                    {children}
                </Label>
            </StyledToggleButton>
        );
    }
}