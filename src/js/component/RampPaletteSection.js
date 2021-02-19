import React, {Component} from 'react';
import {Segment, Button} from 'semantic-ui-react';
import RampBuilder from './RampBuilder.js';
import PaletteBuilder from './PaletteBuilder.js';

class RampPaletteSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rampActive: true
        };
    }

    setRampActive = (value) => {
        this.setState(prevState => {
            return {rampActive: value};
        });
    }

    ///////////////////////
    /// Render
    ///////////////////////

    render = () => {
        let builderComponent = this.state.rampActive ? <RampBuilder /> : <PaletteBuilder />;

        return(
            <Segment basic vertical padded>
                <Button.Group>
                    <Button active={this.state.rampActive} onClick={() => {this.setRampActive(true)}}>Ramp</Button>
                    <Button active={!this.state.rampActive} onClick={() => {this.setRampActive(false)}}>Palette</Button>                    
                </Button.Group>
                <Segment vertical padded>
                    {builderComponent}
                </Segment>
            </Segment>
        );
    }
}

export default RampPaletteSection;