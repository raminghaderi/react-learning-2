import React from 'react';

import { TemperatureInput } from './TempratureInput';

export class Calculator extends React.Component {

    render() {
        
        return(
            <div>
                <TemperatureInput scale = 'c' />
                <TemperatureInput scale = 'f' />
            </div>
        );
    }
}