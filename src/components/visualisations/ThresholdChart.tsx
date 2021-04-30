import React from 'react';
import { CartesianChartInput } from '../../types/ChartInput';
import Plot from 'react-plotly.js';
import { plotlyLineMapper } from '../../utils/plotlyLineMapper';

export type ThresholdChartProps = {
    yLabel?: string;
    title?: string;
    data: CartesianChartInput[];
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
    const markerColors = data[0].map((d) => {
        return d.y > thresholdValue ? aboveThresholdColor : belowThresholdColor;
    });

    return (
        <Plot
            useResizeHandler
            data={plotlyLineMapper(data, strokeColor, markerColors)}
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
                    automargin: true,
                    zeroline: false,
                },
                shapes: [
                    {
                        type: 'line',
                        xref: 'paper',
                        x0: 0,
                        y0: thresholdValue,
                        x1: 1,
                        y1: thresholdValue,
                        line: {
                            color: strokeColor,
                            width: 2,
                            dash: 'dot',
                        },
                    },
                ],
            }}
            config={{ staticPlot: isPreview }}
        />
    );
};

export default ThresholdChart;
