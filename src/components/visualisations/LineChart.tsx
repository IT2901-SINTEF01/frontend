import React from 'react';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveBasis } from '@visx/curve';
import { LinearGradient } from '@visx/gradient';
import { GridColumns, GridRows } from '@visx/grid';
import { Group } from '@visx/group';
import { scaleLinear, scaleTime } from '@visx/scale';
import { AreaClosed, LinePath } from '@visx/shape';
import { CartesianChartInput, VisualisationProps } from '../../types/ChartInput';

export type LineChartProps = VisualisationProps & {
    data: CartesianChartInput;
    yLabel?: string;
    strokeColor?: string;
    colorBottom?: string;
};

const LineChart: React.FC<LineChartProps> = ({
    data,
    width,
    height,
    margin = { top: 15, right: 30, bottom: 40, left: 40 },
    background = '#fff',
    yLabel,
    strokeColor = '#111',
    colorBottom = '#000',
}) => {
    // accessors
    const xValue = (d: CartesianChartInput[number]): number => {
        return typeof d.x === 'number' ? d.x : new Date(d.x).valueOf();
    };

    const yValue = (d: CartesianChartInput[number]) => d.y;

    //bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    //scales
    const xScaleValues = {
        domain: [Math.min(...data.map(xValue)), Math.max(...data.map(xValue))],
        range: [0, xMax],
    };

    const xScale = typeof data[0].x === 'number' ? scaleLinear(xScaleValues) : scaleTime(xScaleValues);

    const maxValue = Math.max(...data.map(yValue));
    const minValue = Math.min(...data.map(yValue));

    const yScale = scaleLinear({
        domain: [minValue, maxValue],
        range: [yMax, 0],
        nice: true, //Gives the graph more space, rounds the y axis to closest integer.
    });

    return (
        <svg width={width} height={height}>
            <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
            <Group left={margin.left} top={margin.top}>
                <GridRows scale={yScale} width={xMax} height={yMax} stroke="#e0e0e0" />
                <GridColumns scale={xScale} width={xMax} height={yMax} stroke="#e0e0e0" />
                <AxisBottom top={yMax} scale={xScale} numTicks={width / 100} />
                <AxisLeft scale={yScale} />
                <text x="5" y="2" fontSize={12} fontFamily={'Arial, Helvetica, sans-serif'}>
                    {yLabel}
                </text>
                <LinearGradient id="area-gradient" from={strokeColor} to={colorBottom} toOpacity={0.1} />
                <LinePath
                    data={data}
                    curve={curveBasis}
                    x={(d) => xScale(xValue(d)) ?? 0}
                    y={(d) => yScale(yValue(d)) ?? 0}
                    stroke={strokeColor}
                    strokeWidth={1.5}
                    strokeOpacity={0.8}
                />
                <AreaClosed
                    data={data}
                    x={(d) => xScale(xValue(d)) ?? 0}
                    y={(d) => yScale(yValue(d)) ?? 0}
                    yScale={yScale}
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
