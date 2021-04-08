/* eslint-disable react/display-name */
import React from 'react';
import LineChart, { LineChartProps } from '../../components/charts/LineChart';
import ThresholdChart, { ThresholdChartProps } from '../../components/charts/ThresholdChart';
import { DataSourceID } from '../../utils/dataSourceMappings';
import VisualiserWrapper from './VisualiserWrapper';

export const MetApi = {
    Line: ({
        width = 600,
        height = 300,
        yLabel,
        strokeColor,
        colorBottom,
    }: Omit<LineChartProps, 'data'>): JSX.Element => (
        <VisualiserWrapper dataSource={DataSourceID.MET_API_FORECAST}>
            {(data) => (
                <LineChart
                    data={data}
                    width={width}
                    height={height}
                    yLabel={yLabel}
                    strokeColor={strokeColor}
                    colorBottom={colorBottom}
                />
            )}
        </VisualiserWrapper>
    ),
    Threshold: ({
        width = 600,
        height = 300,
        thresholdValue,
        aboveThresholdColor,
        belowThresholdColor,
        yLabel,
    }: Omit<ThresholdChartProps, 'data'>): JSX.Element => (
        <VisualiserWrapper dataSource={DataSourceID.MET_API_FORECAST}>
            {(data) => (
                <ThresholdChart
                    data={data}
                    width={width}
                    height={height}
                    thresholdValue={thresholdValue}
                    aboveThresholdColor={aboveThresholdColor}
                    belowThresholdColor={belowThresholdColor}
                    yLabel={yLabel}
                />
            )}
        </VisualiserWrapper>
    ),
};

export default MetApi;
