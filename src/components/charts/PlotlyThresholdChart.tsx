import React from 'react';
import { ChartEntry } from '../../types/visualisation';
import Plot from 'react-plotly.js';

type PlotlyThresholdChartProps = {
    title?: string;
    data: ChartEntry[];
    color?: string;
    isPreview?: boolean;
    threshold?: number;
    thresholdColors?: [string, string];
};

const PlotlyThresholdChart: React.FC<PlotlyThresholdChartProps> = ({
    title,
    data,
    color = 'lightblue',
    isPreview = false,
    threshold = 0,
    thresholdColors = ['red', 'blue'],
}) => {
    const markerColors = data.map((d) => {
        return d.y > threshold ? thresholdColors[0] : thresholdColors[1];
    });

    return (
        <Plot
            data={[
                {
                    x: data.map((d) => d.x),
                    y: data.map((d) => d.y),
                    /*fill: 'tozeroy',*/
                    fillcolor: 'rgba(0,0,255,0.10)',
                    type: 'scatter',
                    mode: 'lines+markers',
                    line: { color: color, shape: 'spline', width: 1.337 },
                    marker: { color: markerColors, size: 3 },
                },
            ]}
            style={{ width: '100%', height: '100%', margin: '0' }}
            layout={{
                autosize: true,
                title: title,
                margin: {
                    l: 40,
                    r: 10,
                    b: 40,
                    t: 40,
                    pad: 4,
                },
            }}
            config={{ staticPlot: isPreview }}
        />
    );
};

export default PlotlyThresholdChart;
