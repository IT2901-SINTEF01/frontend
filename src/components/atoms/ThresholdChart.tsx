import React from 'react';

import { scaleLinear, scaleTime } from '@visx/scale';
import { GridRows, GridColumns } from '@visx/grid';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { curveBasis } from '@visx/curve';
import { LinePath } from '@visx/shape';
import { Threshold } from '@visx/threshold';
import { VisualisationProps, ChartEntry } from '../../types/visualisation';

export type ThresholdChartProps = VisualisationProps & {
    data: ChartEntry[];
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
    const xValue = (d: ChartEntry): number => {
        return typeof d.x === 'number' ? d.x : new Date(d.x).valueOf();
    };

    const yValue = (d: ChartEntry) => d.y;

    //bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    //scales
    const xScaleValues = {
        domain: [Math.min(...data.map(xValue)), Math.max(...data.map(xValue))],
        range: [0, xMax],
    };

    const xScale = () => {
        return typeof data[0].x === 'number' ? scaleLinear(xScaleValues) : scaleTime(xScaleValues);
    };

    let maxValue = Math.max(...data.map(yValue));
    let minValue = Math.min(...data.map(yValue));

    //prevents the threshold to be outside the graph.
    if (thresholdValue > maxValue) maxValue = thresholdValue + 1;
    //+1 is needed for the colour to work below the graph when the threshold is bigger than the highest value
    else if (thresholdValue < minValue) minValue = thresholdValue;

    const yScale = scaleLinear({
        domain: [minValue, maxValue],
        range: [yMax, 0],
        nice: true, //Gives the graph more space, rounds the y axis to closest integer.
    });

    const firstX = xValue(data[0]);

    return (
        <svg width={width} height={height}>
            <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
            <Group left={margin.left} top={margin.top}>
                <GridRows scale={yScale} width={xMax} height={yMax} stroke="#e0e0e0" />
                <GridColumns scale={xScale()} width={xMax} height={yMax} stroke="#e0e0e0" />
                <line
                    x1={xScale()(firstX)}
                    x2={xMax}
                    y1={yScale(thresholdValue)}
                    y2={yScale(thresholdValue)}
                    stroke="black"
                />
                <AxisBottom top={yMax} scale={xScale()} />
                <AxisLeft scale={yScale} />
                <text x="5" y="2" fontSize={12}>
                    {yLabel}
                </text>
                <Threshold
                    id={`${Math.random()}`}
                    data={data}
                    x={(d) => xScale()(xValue(d))}
                    y0={(d) => yScale(yValue(d))}
                    y1={yScale(thresholdValue)}
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
                    x={(d) => xScale()(xValue(d)) ?? 0}
                    y={(d) => yScale(yValue(d)) ?? 0}
                    stroke="#222"
                    strokeWidth={1.5}
                    strokeOpacity={0.8}
                />
            </Group>
        </svg>
    );
};

export default ThresholdChart;
