import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import MainPageHeader from './MainPageHeader.js';
import RampPaletteSection from './RampPaletteSection.js';

class MainApp extends Component {
    constructor(props) {
        super(props);
    }

    ///////////////////////
    /// Render
    ///////////////////////

    render = () => {
        return(
            <Container>
                <MainPageHeader />
                <RampPaletteSection />
            </Container>
        );
    }
}

export default MainApp;