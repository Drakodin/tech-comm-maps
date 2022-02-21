import * as data from './lgbt_hist.json';

export const STATE_DATA: any = data;

// Array of years
export const DATA_YEARS = ["2013", "2015"];

// Calculate scale using data
let min = 100;
let max = 0;
STATE_DATA['years'].forEach((v: any) => {
    for (let key in v) {
        if (key === 'year') {
            continue;
        }
        if (v[key] < min) {
            min = v[key];
        }
        if (v[key] > max) {
            max = v[key];
        }
    }
});

/**
 * Generates an RGB tuple from one color to another with an input based on
 * the scale calculated from the data file
 * @param start An RGB tuple indicating the start/minimum color
 * @param end An RGB tuple indicating the end/maximum color
 * @param input The value in which to compute the color gradient on
 * @returns A string containing an RGB style string
 */
export const getScale = (start: [number, number, number], end: [number, number, number], input: number): string => {
    let range = max - min;
    let percent = (max - input) / range;
    let red = (start[0] + end[0]) * percent;
    let green = (start[1] + end[1]) * percent;
    let blue = (start[2] + end[2]) * percent;
    return `rgb(${red}, ${green}, ${blue})`;
}