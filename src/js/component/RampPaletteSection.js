import React, {Component} from 'react';
import {Segment, Button} from 'semantic-ui-react';
import RampBuilder from './RampBuilder.js';
import PaletteBuilder from './PaletteBuilder.js';

class RampPaletteSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeButton: 'ramp'
        };
    }

    /**
     * Sets the active button to either 'ramp' or 'palette'.
     * @param {string} value The name of the button that is being set as active.
     */
    setActiveButton = (value) => {
        this.setState(prevState => {
            return {
                activeButton: value
            };
        });
    }

    ///////////////////////
    /// Render
    ///////////////////////

    render = () => {
        let builderComponent;
        if (this.state.activeButton == 'ramp') {
            builderComponent = <RampBuilder />;
        }
        else if (this.state.activeButton == 'palette') {
            builderComponent = <PaletteBuilder />;
        }

        return(
            <Segment basic vertical padded>
                <Button.Group>
                    <Button active={this.state.activeButton == 'ramp'} onClick={() => {this.setActiveButton('ramp')}}>Ramp</Button>
                    <Button active={!this.state.activeButton == 'palette'} onClick={() => {this.setActiveButton('palette')}}>Palette</Button>                    
                </Button.Group>
                <Segment vertical padded>
                    {builderComponent}
                </Segment>
            </Segment>
        );
    }
}

export default RampPaletteSection;