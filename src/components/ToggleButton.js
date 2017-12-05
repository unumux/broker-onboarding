import React from 'react';
import styled from 'styled-components';

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
    margin: 10px;

    input[type='radio']:checked + & {
        background: red;
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
            <div>
                <Radio name={name} checked={checked} value={value} id={this.id} />
                <Label htmlFor={this.id}>
                    {children}
                </Label>
            </div>
        );
    }
}