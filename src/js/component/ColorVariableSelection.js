import React, {Component} from 'react';
import {Segment, Header} from 'semantic-ui-react';
import Slider from './element/Slider.js';

class ColorVariableSelection extends Component {
    constructor(props) {
        super(props);

        if (!this.props.colorVariables) {
            this.state = {
                colorVariables: {
                    initialHue: 0,
                    finalHue: 0,
                    initialSaturation: 0,
                    finalSaturation: 0,
                    initialLightness: 0,
                    finalLightness: 0
                }
            }
        }
        else {
            this.state = {
                colorVariables: this.props.colorVariables
            };
        }
    }

    /**
     * Handles what happens when the slider changes value.
     * @param {string} stateField The field in this.state.colorVariables that is being updated.
     * @param {number} value The value to update the field to.
     */
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
                <Header as='h4'>Initial Hue ({Math.floor(this.state.colorVariables.initialHue)})</Header>
                <Slider 
                    stateField='initialHue'
                    min={0} 
                    max={720}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.initialHue}
                />
                <Header as='h4'>Final Hue ({Math.floor(this.state.colorVariables.finalHue)})</Header>
                <Slider 
                    stateField='finalHue'
                    min={0} 
                    max={720}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.finalHue}
                />
                <Header as='h4'>Initial Saturation ({Math.floor(this.state.colorVariables.initialSaturation)})</Header>
                <Slider 
                    stateField='initialSaturation'
                    min={0} 
                    max={100}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.initialSaturation}
                />
                <Header as='h4'>Final Saturation ({Math.floor(this.state.colorVariables.finalSaturation)})</Header>
                <Slider 
                    stateField='finalSaturation'
                    min={0} 
                    max={100}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.finalSaturation}
                />
                <Header as='h4'>Initial Lightness ({Math.floor(this.state.colorVariables.initialLightness)})</Header>
                <Slider 
                    stateField='initialLightness'
                    min={0} 
                    max={100}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.initialLightness}
                />
                <Header as='h4'>Final Lightness ({Math.floor(this.state.colorVariables.finalLightness)})</Header>
                <Slider 
                    stateField='finalLightness'
                    min={0} 
                    max={100}
                    onUpdate={this.handleSliderChange}
                    value={this.state.colorVariables.finalLightness}
                />
            </Segment>
        );
    }
}

export default ColorVariableSelection;