/* eslint-disable react/display-name */
import React from 'react';
import LineChart, { LineChartProps } from '../../components/charts/LineChart';
import ThresholdChart, { ThresholdChartProps } from '../../components/charts/ThresholdChart';
import dataSourceMappings from '../../utils/dataSourceMappings';
import DataWrapper from '../../components/molecules/DataWrapper';

const MetApiLine: React.FC<Omit<LineChartProps, 'data'>> = ({
    width = 600,
    height = 200,
    yLabel,
    strokeColor,
    colorBottom,
}) => {
    return (
        <DataWrapper mappingFunction={dataSourceMappings.MET_API.mapping} query={dataSourceMappings.MET_API.query}>
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
        </DataWrapper>
    );
};

const MetApiThreshold: React.FC<Omit<ThresholdChartProps, 'data'>> = ({
    width = 600,
    height = 200,
    thresholdValue,
    aboveThresholdColor,
    belowThresholdColor,
    yLabel,
}) => {
    return (
        <DataWrapper mappingFunction={dataSourceMappings.MET_API.mapping} query={dataSourceMappings.MET_API.query}>
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
        </DataWrapper>
    );
};

export const MetApi = {
    Line: MetApiLine,
    Threshold: MetApiThreshold,
};
