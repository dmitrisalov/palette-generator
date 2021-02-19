import React, {Component} from 'react';
import {Segment, Button, Header} from 'semantic-ui-react';
import ColorVariableSelection from './ColorVariableSelection.js';
import ColorRamp from './element/ColorRamp.js';

class RampBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numSwatches: 16,
            colorVariables: {
                baseHue: 100,
                hueShift: 15,
                baseSaturation: 80,
                saturationShift: 0,
                baseLightness: 50,
                lightnessShift: 10
            }
        }
    }

    setNumSwatches = (value) => {
        this.setState(prevState => {
            return {
                numSwatches: value
            };
        });
    }

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
                    <Button active={this.state.numSwatches == 8} onClick={() => {this.setNumSwatches(8)}}>8</Button>         
                    <Button active={this.state.numSwatches == 16} onClick={() => {this.setNumSwatches(16)}}>16</Button>               
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