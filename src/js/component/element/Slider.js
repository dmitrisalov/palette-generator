import '../../../style/slider.css';

import React, {Component} from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);

        this.NUM_STEPS = 1000;
        this.stepSize = (this.props.max - this.props.min) / this.NUM_STEPS;
    }

    /**
     * Handles when the slider value changes. 
     * Calls the 'onUpdate' function that was passed to this component.
     * @param {Object} event The onChange event that triggered this function call.
     */
    handleChange = (event) => {
        this.props.onUpdate(this.props.stateField, Number(event.target.value));
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
                    min={this.props.min} 
                    max={this.props.max} 
                    step={this.stepSize} 
                    type='range' 
                    onChange={this.handleChange}
                    value={this.props.value}
                />
            </div>
        );
    }
}

export default Slider;