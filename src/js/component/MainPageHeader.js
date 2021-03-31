import React, {Component} from 'react';
import {Segment, Header} from 'semantic-ui-react';

class MainPageHeader extends Component {
    constructor(props) {
        super(props);
    }

    ///////////////////////
    /// Render
    ///////////////////////

    render = () => {
        return(
            <Segment basic vertical padded>
                <Header as='h1'>Palette Generator</Header>
                <Header as='h3'>
                    Welcome to Palette Generator - a simple tool for quickly creating beautiful 
                    color ramps and palettes.
                </Header>
            </Segment>
        );
    }
}

export default MainPageHeader;