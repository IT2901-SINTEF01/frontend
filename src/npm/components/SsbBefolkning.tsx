/* eslint-disable react/display-name */
import React from 'react';
import LineChart, { LineChartProps } from '../../components/charts/LineChart';
import ThresholdChart, { ThresholdChartProps } from '../../components/charts/ThresholdChart';
import dataSourceMappings from '../../utils/dataSourceMappings';
import DataWrapper from '../../components/molecules/DataWrapper';

const SsbBefolkningLine: React.FC<Omit<LineChartProps, 'data'>> = ({
    width = 600,
    height = 200,
    yLabel,
    strokeColor,
    colorBottom,
}) => {
    return (
        <DataWrapper
            mappingFunction={dataSourceMappings.SSB_POPULATION.mapping}
            query={dataSourceMappings.SSB_POPULATION.query}
        >
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

const SsbBefolkningThreshold: React.FC<Omit<ThresholdChartProps, 'data'>> = ({
    width = 600,
    height = 200,
    thresholdValue,
    aboveThresholdColor,
    belowThresholdColor,
    yLabel,
}) => {
    return (
        <DataWrapper
            mappingFunction={dataSourceMappings.SSB_POPULATION.mapping}
            query={dataSourceMappings.SSB_POPULATION.query}
        >
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

export const SsbBefolkning = {
    Line: SsbBefolkningLine,
    Threshold: SsbBefolkningThreshold,
};
