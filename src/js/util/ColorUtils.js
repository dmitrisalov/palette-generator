/**
 * Converts an HSL color to its hex value. Found online.
 * @param {number} h The hue.
 * @param {number} s The saturation.
 * @param {number} l The lightness.
 * @returns {string} The hex value.
 */
const hslToHex = (h, s, l) => {
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0, 
        b = 0; 
  
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } 
    else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } 
    else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } 
    else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } 
    else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } 
    else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }

    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);
  
    // Prepend 0s, if necessary
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
}

/**
 * Limits an HSL color's properties to 0-360, 0-100, and 0-100 respectively.
 * @param {Object} color An HSL color in the form: {hue, saturation, lightness}.
 * @returns {Object} The limited color in the form: {hue, saturation, lightness}.
 */
const limitColorVariables = (color) => {
    let newSaturation = color.saturation;
    if (newSaturation < 0) {
        newSaturation = 0;
    }
    else if (newSaturation > 100) {
        newSaturation = 100;
    }

    let newLightness = color.lightness;
    if (newLightness < 0) {
        newLightness = 0;
    }
    else if (newLightness > 100) {
        newLightness = 100;
    }

    let newColor = {
        hue: color.hue % 360,
        saturation: newSaturation,
        lightness: newLightness
    };

    return newColor;
}

export {hslToHex, limitColorVariables};