import React from 'react';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveBasis } from '@visx/curve';
import { LinearGradient } from '@visx/gradient';
import { GridColumns, GridRows } from '@visx/grid';
import { Group } from '@visx/group';
import { scaleLinear, scaleTime } from '@visx/scale';
import { AreaClosed, LinePath } from '@visx/shape';
import { VisualisationProps, TimeEntry } from '../../types/visualisation';

export type LineChartProps = VisualisationProps & {
    data: TimeEntry[];
    yLabel?: string;
    strokeColor?: string;
    colorBottom?: string;
};

const LineChart: React.FC<LineChartProps> = ({
    data,
    width,
    height,
    margin = { top: 40, right: 30, bottom: 50, left: 40 },
    background = '#fff',
    yLabel,
    strokeColor = '#111',
    colorBottom = '#000',
}) => {
    // accessors
    const date = (d: TimeEntry) => new Date(d.time).valueOf();
    const value = (d: TimeEntry) => d.value;

    //bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    //scales
    const timeScale = scaleTime({
        domain: [Math.min(...data.map(date)), Math.max(...data.map(date))],
        range: [0, xMax],
    });

    const maxValue = Math.max(...data.map(value));
    const minValue = Math.min(...data.map(value));

    const valueScale = scaleLinear({
        domain: [minValue, maxValue],
        range: [yMax, 0],
        nice: true, //Gives the graph more space, rounds the y axis to closest integer.
    });

    return (
        <svg width={width} height={height}>
            <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
            <Group left={margin.left} top={margin.top}>
                <GridRows scale={valueScale} width={xMax} height={yMax} stroke="#e0e0e0" />
                <GridColumns scale={timeScale} width={xMax} height={yMax} stroke="#e0e0e0" />
                <AxisBottom top={yMax} scale={timeScale} />
                <AxisLeft scale={valueScale} />
                <text x="5" y="2" fontSize={12} fontFamily={'Arial, Helvetica, sans-serif'}>
                    {yLabel}
                </text>
                <LinearGradient id="area-gradient" from={strokeColor} to={colorBottom} toOpacity={0.1} />
                <LinePath
                    data={data}
                    curve={curveBasis}
                    x={(d) => timeScale(date(d)) ?? 0}
                    y={(d) => valueScale(value(d)) ?? 0}
                    stroke={strokeColor}
                    strokeWidth={1.5}
                    strokeOpacity={0.8}
                />
                <AreaClosed
                    data={data}
                    x={(d) => timeScale(date(d)) ?? 0}
                    y={(d) => valueScale(value(d)) ?? 0}
                    yScale={valueScale}
                    strokeWidth={1}
                    stroke="url(#area-gradient)"
                    fill="url(#area-gradient)"
                    curve={curveBasis}
                />
            </Group>
        </svg>
    );
};

export default LineChart;
