import * as data from './lgbt_hist.json';
// 2015
import * as sexualityData from './lgbo_mental_health.json';
// 2016
import * as transData from './trans_mental_health.json';

export const STATE_DATA: any = data;
export const TRANS_DATA: any = transData;
export const SEXUALITY_DATA: any = sexualityData

// Array of years
export const DATA_YEARS = ["2013", "2015", "2018"];

// Calculate scale using data
let min = 100;
let max = 0;
STATE_DATA['years'].forEach((v: any) => {
    for (let key in v) {
        if (key === 'year') {
            continue;
        }

        if (key === 'DC') {
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

console.log(process.env.PUBLIC_URL)

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
    let percent = (input - min) / range;
    let red = start[0] + (end[0] - start[0]) * percent;
    let green = start[1] + (end[1] - start[1]) * percent;
    let blue = start[2] + (end[2] - start[2]) * percent;
    return `rgb(${red}, ${green}, ${blue})`;
}