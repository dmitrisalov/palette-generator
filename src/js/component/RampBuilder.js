import React, {Component} from 'react';
import {Segment, Button, Header} from 'semantic-ui-react';
import ColorVariableSelection from './ColorVariableSelection.js';
import ColorRamp from './element/ColorRamp.js';

class RampBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numSwatches: 8,
            colorVariables: {
                initialHue: 10,
                finalHue: 80,
                initialSaturation: 100,
                finalSaturation: 80,
                initialLightness: 35,
                finalLightness: 95
            }
        }
    }

    /**
     * Sets the number of swatches in the state.
     * @param {number} value The number of swatches in the color ramp.
     */
    setNumSwatches = (value) => {
        this.setState(prevState => {
            return {
                numSwatches: value
            };
        });
    }

    /**
     * Sets the color variables in the state.
     * @param {Object} newColorVariables The variables used for generating colors.
     */
    updateColorVariables = (newColorVariables) => {
        this.setState(prevState => {
            return {
                colorVariables: newColorVariables
            };
        });
    }

    ///////////////////////
    /// Render
    ///////////////////////

    render = () => {
        return(
            <Segment basic vertical>
                <Header as='h4'>Number of Swatches:</Header>
                <Button.Group>
                    <Button active={this.state.numSwatches == 4} onClick={() => {this.setNumSwatches(4)}}>4</Button>
                    <Button active={this.state.numSwatches == 6} onClick={() => {this.setNumSwatches(6)}}>6</Button>
                    <Button active={this.state.numSwatches == 8} onClick={() => {this.setNumSwatches(8)}}>8</Button>        
                    <Button active={this.state.numSwatches == 10} onClick={() => {this.setNumSwatches(10)}}>10</Button> 
                    <Button active={this.state.numSwatches == 12} onClick={() => {this.setNumSwatches(12)}}>12</Button>               
                </Button.Group>
                <ColorRamp 
                    numSwatches={this.state.numSwatches}
                    colorVariables={this.state.colorVariables}
                />
                <ColorVariableSelection 
                    colorVariables={this.state.colorVariables}
                    passVariablesFunction={this.updateColorVariables}
                />
            </Segment>
        );
    }
}

export default RampBuilder;