import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import {hslToHex} from '../../util/ColorUtils.js'

class ColorRamp extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Generates the cells that display the hex values of colors.
     * @returns {Array} Array of jsx for each cell.
     */
    generateHexValueCells = () => {
        let colors = this.colors;

        let cellsJsx = [];
        for (let i = 0; i < colors.length; i++) {
            let colorString = hslToHex(colors[i].hue, colors[i].saturation, colors[i].lightness);

            let cell = 
                <Table.Cell textAlign='center' style={{border: '1px solid #4b4848'}}>{colorString}</Table.Cell>

            cellsJsx.push(cell);
        }

        return cellsJsx;
    }

    /**
     * Generates the cells that display the actual colors.
     * @returns {Array} Array of jsx for each cell.
     */
    generateColorCells = () => {
        this.colors = this.getColorValues(this.props.numSwatches, this.props.colorVariables);
        let colors = this.colors;

        let cellsJsx = [];
        for (let i = 0; i < colors.length; i++) {
            let colorString = 
                'hsl(' + 
                    colors[i].hue + ' ' +
                    colors[i].saturation + '% ' +
                    colors[i].lightness + 
                '%)';

            let cell = 
                <Table.Cell style={{backgroundColor: colorString, border: '1px solid #4b4848'}} />

            cellsJsx.push(cell);
        }

        return cellsJsx;
    }

    /**
     * Get an array of HSL colors.
     * @param {number} numColors Number of colors.
     * @param {Object} colorVariables The variables used to generate the colors.
     * @return {Array} An array of colors in the form of: {hue, saturation, lightness}.
     */
    getColorValues = (numColors, colorVariables) => {
        let baseColor = {
            hue: colorVariables.initialHue,
            saturation: colorVariables.initialSaturation,
            lightness: colorVariables.initialLightness
        };

        let finalColor = {
            hue: colorVariables.finalHue,
            saturation: colorVariables.finalSaturation,
            lightness: colorVariables.finalLightness
        };

        let colorStep = {
            hue: (finalColor.hue - baseColor.hue) / (numColors - 1),
            saturation: (finalColor.saturation - baseColor.saturation) / (numColors - 1),
            lightness: (finalColor.lightness - baseColor.lightness) / (numColors - 1)
        };

        let colors = [];
        for (let i = 0; i < numColors; i++) {
            let color = {
                hue: baseColor.hue + colorStep.hue * i,
                saturation: baseColor.saturation + colorStep.saturation * i,
                lightness: baseColor.lightness + colorStep.lightness * i
            };

            colors.push(color);
        }

        return colors;
    }

    ///////////////////////
    /// Render
    ///////////////////////

    render = () => {
        return(
            <Table basic fixed style={{borderRadius: '5px', border: '2px solid #4b4848', }}>
                <Table.Body>
                    <Table.Row style={{height: '100px'}}>
                        {this.generateColorCells()}
                    </Table.Row>
                    <Table.Row>
                        {this.generateHexValueCells()}
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}

export default ColorRamp;