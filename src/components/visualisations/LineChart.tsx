import React from 'react';
import { CartesianChartInput } from '../../types/ChartInput';
import Plot from 'react-plotly.js';
import { plotlyLineMapper } from '../../utils/plotlyLineMapper';

export type LineChartProps = {
    yLabel?: string;
    title?: string;
    strokeColor?: string;
    markerColor?: string;
    data: CartesianChartInput[];
    isPreview?: boolean;
    height: string | number;
    width: string | number;
};

const LineChart: React.FC<LineChartProps> = ({
    title,
    yLabel,
    strokeColor = 'lightblue',
    markerColor = 'black',
    data,
    isPreview = false,
    height,
    width,
}) => {
    return (
        <Plot
            useResizeHandler
            data={plotlyLineMapper(data, strokeColor, markerColor)}
            style={{ width: width, height: height, margin: '0' }}
            layout={{
                autosize: true,
                title: { text: title, x: 0, y: 0.975 },
                margin: {
                    l: 40,
                    r: 40,
                    b: 40,
                    t: 40,
                    pad: 4,
                },
                yaxis: {
                    title: yLabel,
                    automargin: true,
                },
            }}
            config={{ staticPlot: isPreview }}
        />
    );
};

export default LineChart;
