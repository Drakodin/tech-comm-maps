export const scaleBar = (data: number) => {
    if (data < 5.0) {
        return Number((data * 100.0/5.0).toFixed(2));
    }
    return Number((data * 100.0/50.0).toFixed(2));
}

export const getScale = (start: [number, number, number], end: [number, number, number], input: number, min: number, max: number): string => {
    let range = max - min;
    let percent = 0;
    if (max < 5.0) {
        percent = (input * 0.05 - min) / range;
    } else {
        percent = (input * 0.5 - min) / range;
    }
    let red = start[0] + (end[0] - start[0]) * percent;
    let green = start[1] + (end[1] - start[1]) * percent;
    let blue = start[2] + (end[2] - start[2]) * percent;
    return `rgb(${red}, ${green}, ${blue})`;
}

export const yAxis = (max: number): number[] => {
    if (max <= 5) {
        let maxChart = 5.0;
        let chartsBound: number[] = []
        for (let i = maxChart; i >= 0.0; i -= 1.0) {
            chartsBound.unshift(i);
        }
        return chartsBound;
    }
    if (max <= 50) {
        let maxChart = 50.0;
        let chartsBound: number[] = []
        for (let i = maxChart; i >= 0.0; i -= 5.0) {
            chartsBound.unshift(i);
        }
        return chartsBound;
    } else {
        return []
    }
}