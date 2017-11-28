import React from 'react';

export const ConditionalContent = ({ value, componentFalse, componentTrue }) => {
    if(value === true) {
        return componentTrue;
    }

    if(value === false) {
        return componentFalse;
    }

    return null;
}