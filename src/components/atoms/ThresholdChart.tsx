import React from 'react';

import { scaleLinear, scaleTime } from '@visx/scale';
import { GridRows, GridColumns } from '@visx/grid';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { curveBasis } from '@visx/curve';
import { LinePath } from '@visx/shape';
import { Threshold } from '@visx/threshold';

export type TimeEntry = {
    time: string;
    value: number;
};

export type ThresholdChartProps = {
    data: TimeEntry[];
    width: number;
    height: number;
    margin?: Record<'top' | 'right' | 'bottom' | 'left', number>;
    background?: string;
    thresholdValue?: number;
    aboveThresholdColor?: string;
    belowThresholdColor?: string;
    yLabel?: string;
};

const ThresholdChart: React.FC<ThresholdChartProps> = ({
    data,
    width,
    height,
    margin = { top: 40, right: 30, bottom: 50, left: 40 },
    background = '#fff',
    thresholdValue = 0,
    aboveThresholdColor = 'red',
    belowThresholdColor = 'blue',
    yLabel,
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

    let maxValue = Math.max(...data.map(value));
    let minValue = Math.min(...data.map(value));

    //prevents the threshold to be outside the graph.
    if (thresholdValue > maxValue) maxValue = thresholdValue + 1;
    //+1 is needed for the colour to work below the graph when the threshold is bigger than the highest value
    else if (thresholdValue < minValue) minValue = thresholdValue;

    const valueScale = scaleLinear({
        domain: [minValue, maxValue],
        range: [yMax, 0],
        nice: true, //Gives the graph more space, rounds the y axis to closest integer.
    });

    const firstDate = date(data[0]);

    return (
        <svg width={width} height={height}>
            <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
            <Group left={margin.left} top={margin.top}>
                <GridRows scale={valueScale} width={xMax} height={yMax} stroke="#e0e0e0" />
                <GridColumns scale={timeScale} width={xMax} height={yMax} stroke="#e0e0e0" />
                <line
                    x1={timeScale(firstDate)}
                    x2={xMax}
                    y1={valueScale(thresholdValue)}
                    y2={valueScale(thresholdValue)}
                    stroke="black"
                />
                <AxisBottom top={yMax} scale={timeScale} />
                <AxisLeft scale={valueScale} />
                <text x="5" y="2" fontSize={12}>
                    {yLabel}
                </text>
                <Threshold
                    id={`${Math.random()}`}
                    data={data}
                    x={(d) => timeScale(date(d))}
                    y0={(d) => valueScale(value(d))}
                    y1={valueScale(thresholdValue)}
                    clipAboveTo={0}
                    clipBelowTo={yMax}
                    curve={curveBasis}
                    belowAreaProps={{
                        fill: belowThresholdColor,
                        fillOpacity: 0.4,
                    }}
                    aboveAreaProps={{
                        fill: aboveThresholdColor,
                        fillOpacity: 0.4,
                    }}
                />
                <LinePath
                    data={data}
                    curve={curveBasis}
                    x={(d) => timeScale(date(d)) ?? 0}
                    y={(d) => valueScale(value(d)) ?? 0}
                    stroke="#222"
                    strokeWidth={1.5}
                    strokeOpacity={0.8}
                />
            </Group>
        </svg>
    );
};

export default ThresholdChart;
