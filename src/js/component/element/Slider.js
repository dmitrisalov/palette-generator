import '../../../style/slider.css';

import React, {Component} from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);

        this.SLIDER_WIDTH = 1000;
        this.stepSize = (this.props.max - this.props.min) / this.SLIDER_WIDTH;
    }

    handleChange = event => {
        let newValue = event.target.value * this.stepSize + this.props.min;
        this.props.onUpdate(this.props.stateField, newValue);
    }

    ///////////////////////
    /// Render
    ///////////////////////

    render = () => {
        return(
            <div className='slider-container'>
                <input
                    className='slider' 
                    name={this.props.stateParameter}
                    min={0} 
                    max={this.SLIDER_WIDTH} 
                    step={.01} 
                    type='range' 
                    onChange={this.handleChange}
                    value={this.props.value / this.stepSize}
                />
            </div>
        );
    }
}

export default Slider;