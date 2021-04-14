import React from 'react';
import { ChartEntry } from '../../types/visualisation';
import Plot from 'react-plotly.js';

type PlotlyLineChartProps = {
    yAxisLabel: string;
    xAxisLabel: string;
    title?: string;
    color: string;
    data: ChartEntry[];
    isPreview?: boolean;
};

const PlotlyLineChart: React.FC<PlotlyLineChartProps> = ({
    title,
    color,
    data,
    isPreview = false,
    yAxisLabel,
    xAxisLabel,
}) => {
    return (
        <Plot
            data={[
                {
                    x: data.map((d) => d.x),
                    y: data.map((d) => d.y),
                    fillcolor: 'rgba(0,0,255,0.10)',
                    type: 'scatter',
                    mode: 'lines+markers',
                    line: { color: color, shape: 'spline', width: 1.337 },
                    marker: { color: 'black', size: 3, symbol: 'celsius' },
                    text: `°C`,
                },
            ]}
            style={{ width: '100%', height: '100%', margin: '0' }}
            layout={{
                autosize: true,
                title: title,
                margin: {
                    l: 45,
                    r: 30,
                    b: 40,
                    t: 40,
                    pad: 4,
                },
                yaxis: {
                    title: yAxisLabel,
                },
                xaxis: {
                    title: xAxisLabel,
                },
            }}
            config={{ staticPlot: isPreview }}
        />
    );
};

export default PlotlyLineChart;
