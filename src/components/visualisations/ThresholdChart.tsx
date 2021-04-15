import React from 'react';
import { CartesianChartInput } from '../../types/ChartInput';
import Plot from 'react-plotly.js';

export type ThresholdChartProps = {
    yLabel: string;
    title?: string;
    data: CartesianChartInput;
    strokeColor?: string;
    isPreview?: boolean;
    thresholdValue?: number;
    aboveThresholdColor?: string;
    belowThresholdColor?: string;
    height: string | number;
    width: string | number;
};

const ThresholdChart: React.FC<ThresholdChartProps> = ({
    title,
    data,
    strokeColor = 'lightblue',
    isPreview = false,
    thresholdValue = 0,
    aboveThresholdColor = 'red',
    belowThresholdColor = 'blue',
    height,
    width,
    yLabel,
}) => {
    const markerColors = data.map((d) => {
        return d.y > thresholdValue ? aboveThresholdColor : belowThresholdColor;
    });

    return (
        <Plot
            useResizeHandler
            data={[
                {
                    x: data.map((d) => d.x),
                    y: data.map((d) => d.y),
                    fillcolor: 'rgba(0,0,255,0.10)',
                    type: 'scatter',
                    mode: 'lines+markers',
                    line: { color: strokeColor, shape: 'spline', width: 1.337 },
                    marker: { color: markerColors, size: 3 },
                },
            ]}
            style={{ width: width, height: height, margin: '0' }}
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
                yaxis: {
                    title: yLabel,
                },
            }}
            config={{ staticPlot: isPreview }}
        />
    );
};

export default ThresholdChart;
