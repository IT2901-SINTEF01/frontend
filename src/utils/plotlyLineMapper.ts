import { Data } from 'plotly.js';
import { CartesianChartInput } from '../types/ChartInput';

export function plotlyLineMapper(
    data: CartesianChartInput[],
    strokeColor: string,
    markerColor: string | string[],
): Data[] {
    return data.map((el) => ({
        x: el.map((d) => d.x),
        y: el.map((d) => d.y),
        fillcolor: 'rgba(0,0,255,0.10)',
        type: 'scatter',
        mode: 'lines+markers',
        line: { color: strokeColor, shape: 'spline', width: 1.337 },
        marker: { color: markerColor, size: 3 },
    }));
}
