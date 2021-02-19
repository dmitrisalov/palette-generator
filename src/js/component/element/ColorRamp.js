import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import {hslToHex} from '../../util/ColorUtils.js'

class ColorRamp extends Component {
    constructor(props) {
        super(props);

        this.satShiftMultipliers = [1.2, 1, 1, 1, 1, .5, .25, 0, -.4, -.5, -.75, -.75, -.75, -.75, -.80, -1];
        this.lightShiftMultipliers = [1.2, 1, 1, 1, 1, 1, .7, .6, .6, .5, .3, .3, .3, .3, .3, .3];
        this.satMultipliersLength = this.satShiftMultipliers.length;
        this.lightMultipliersLength = this.lightShiftMultipliers.length;
    }

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

    getColorValues = (numColors, colorVariables) => {
        let baseIndex = Math.floor(numColors / 2) - 1;

        // Calculating how much the lightness is able to spread
        let lowestLightness = colorVariables.baseLightness - colorVariables.lightnessShift;
        lowestLightness = lowestLightness < 0 ? 0 : lowestLightness;
        let highestLightness = colorVariables.baseLightness + colorVariables.lightnessShift;
        highestLightness = highestLightness > 100 ? 100 : highestLightness;
        let possibleLightnessSpread = Math.min(
            Math.abs(lowestLightness - colorVariables.baseLightness), 
            Math.abs(highestLightness - colorVariables.baseLightness)
        );
        let lightnessSpread = possibleLightnessSpread * colorVariables.lightnessShift / 100;
        lowestLightness = colorVariables.baseLightness - lightnessSpread;
        highestLightness = colorVariables.baseLightness + lightnessSpread;
        let lightnessStep = (highestLightness - lowestLightness) / numColors;

        // Calculating how much the saturation is able to spread
        let lowestSaturation = colorVariables.baseSaturation - colorVariables.saturationShift;
        lowestSaturation = lowestSaturation < 0 ? 0 : lowestSaturation;
        let highestSaturation = colorVariables.baseSaturation + colorVariables.saturationShift;
        highestSaturation = highestSaturation > 100 ? 100 : highestSaturation;
        let possibleSaturationSpread = Math.min(
            Math.abs(lowestSaturation - colorVariables.baseSaturation), 
            Math.abs(highestSaturation - colorVariables.baseSaturation)
        );
        let saturationSpread = possibleSaturationSpread * colorVariables.saturationShift / 100;
        lowestSaturation = colorVariables.baseSaturation - saturationSpread;
        highestSaturation = colorVariables.baseSaturation + saturationSpread;
        let saturationStep = (highestSaturation - lowestSaturation) / numColors;

        // Generate the colors from left to right according to all of the color variables
        let colors = [];

        for (let i = 0; i < numColors; i++) {
            let relativeIndex = i - baseIndex;

            let color = {
                hue: colorVariables.baseHue + colorVariables.hueShift * relativeIndex,
                saturation: colorVariables.baseSaturation - saturationStep * relativeIndex + saturationStep / 2,
                lightness: colorVariables.baseLightness + lightnessStep * relativeIndex - lightnessStep / 2
            };

            colors.push(color);
        }
        console.log(colors);
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