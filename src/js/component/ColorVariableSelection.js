import React, {Component} from 'react';
import {Segment, Header} from 'semantic-ui-react';
import Slider from './element/Slider.js';

class ColorVariableSelection extends Component {
    constructor(props) {
        super(props);

        if (!this.props.colorVariables) {
            this.state = {
                colorVariables: {
                    baseHue: 0,
                    hueShift: 0,
                    baseSaturation: 0,
                    saturationShift: 0,
                    baseLightness: 0,
                    lightnessShift: 0
                }
            }
        }
        else {
            this.state = {
                colorVariables: this.props.colorVariables
            };
        }
    }

    handleSliderChange = (stateField, value) => {
        this.setState(prevState => {
            return {
                colorVariables: {
                    ...prevState.colorVariables,
                    [stateField]: value
                }
            }
        }, () => {
            if (this.props.passVariablesFunction) {
                this.props.passVariablesFunction(this.state.colorVariables);
            }
        });
    }

    ///////////////////////
    /// Render
    ///////////////////////

    render = () => {
        return(
            <Segment basic vertical>
                <Header as='h4'>Base Hue ({Math.floor(this.state.colorVariables.baseHue)})</Header>
                <Slider 
                    stateField='baseHue'
                    min={0} 
                    max={360}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.baseHue}
                />
                <Header as='h4'>Hue Shift ({Math.floor(this.state.colorVariables.hueShift)})</Header>
                <Slider 
                    stateField='hueShift'
                    min={0} 
                    max={50}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.hueShift}
                />
                <Header as='h4'>Base Saturation ({Math.floor(this.state.colorVariables.baseSaturation)})</Header>
                <Slider 
                    stateField='baseSaturation'
                    min={0} 
                    max={100}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.baseSaturation}
                />
                <Header as='h4'>Saturation Shift ({Math.floor(this.state.colorVariables.saturationShift)})</Header>
                <Slider 
                    stateField='saturationShift'
                    min={0} 
                    max={100}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.saturationShift}
                />
                <Header as='h4'>Base Lightness ({Math.floor(this.state.colorVariables.baseLightness)})</Header>
                <Slider 
                    stateField='baseLightness'
                    min={0} 
                    max={100}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.baseLightness}
                />
                <Header as='h4'>Lightness Shift ({Math.floor(this.state.colorVariables.lightnessShift)})</Header>
                <Slider 
                    stateField='lightnessShift'
                    min={0} 
                    max={100}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.lightnessShift}
                />
            </Segment>
        );
    }
}

export default ColorVariableSelection;