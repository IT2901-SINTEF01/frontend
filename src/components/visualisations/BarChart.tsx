import React from 'react';
import { CartesianChartInput } from '../../types/ChartInput';
import Plot from 'react-plotly.js';

export type BarChartProps = {
    barNames?: string[];
    yLabel?: string;
    title?: string;
    data: CartesianChartInput;
    isPreview?: boolean;
    height: string | number;
    width: string | number;
};

const BarChart: React.FC<BarChartProps> = ({ title, yLabel, data, isPreview = false, height, width }) => {
    /*
    data.map((el, index) => ({
                type: 'bar',
                x: el.map((d) => d.x),
                y: el.map((d) => d.y),
                name: barNames[index],
            }))
    */

    return (
        <Plot
            useResizeHandler
            data={[
                {
                    type: 'bar',
                    x: data.map((d) => d.x),
                    y: data.map((d) => d.y),
                },
            ]}
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

export default BarChart;
