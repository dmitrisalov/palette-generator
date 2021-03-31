import React, {Component} from 'react';
import {Segment, Header} from 'semantic-ui-react';
import ColorVariableSelection from './ColorVariableSelection.js';

class PaletteBuilder extends Component {
    constructor(props) {
        super(props);
    }

    ///////////////////////
    /// Render
    ///////////////////////

    render = () => {
        return(
            <Segment basic vertical padded>
                <Header as='h1'>PaletteViewer</Header>
                <ColorVariableSelection />
            </Segment>
        );
    }
}

export default PaletteBuilder;