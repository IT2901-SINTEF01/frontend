import React from 'react';
import { ChartEntry } from '../../types/visualisation';
import Plot from 'react-plotly.js';

type PlotlyLineChartProps = {
    title?: string;
    lineColor?: string;
    markerColor?: string;
    data: ChartEntry[];
    isPreview?: boolean;
};

const PlotlyLineChart: React.FC<PlotlyLineChartProps> = ({
    title,
    lineColor = 'lightblue',
    markerColor = 'black',
    data,
    isPreview = false,
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
                    line: { color: lineColor, shape: 'spline', width: 1.337 },
                    marker: { color: markerColor, size: 3 },
                },
            ]}
            style={{ width: '100%', height: '100%', margin: '0' }}
            layout={{
                autosize: true,
                title: { text: title, x: 0, y: 0.975 },
                margin: {
                    l: 40,
                    r: 10,
                    b: 20,
                    t: 40,
                    pad: 4,
                },
            }}
            config={{ staticPlot: isPreview }}
        />
    );
};

export default PlotlyLineChart;
