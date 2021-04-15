/* eslint-disable react/display-name */
import React from 'react';
import LineChart, { LineChartProps } from '../../components/visualisations/LineChart';
import ThresholdChart, { ThresholdChartProps } from '../../components/visualisations/ThresholdChart';
import DataWrapper from '../../components/molecules/DataWrapper';
import visualisationMapping from '../../utils/visualisationMapping';
import { POPULATION_IN_NORWAY } from '../../queries/populationInNorway';

const SsbBefolkningLine: React.FC<Omit<LineChartProps, 'data'>> = ({
    width = 600,
    height = 200,
    yLabel,
    strokeColor,
    colorBottom,
}) => {
    return (
        <DataWrapper mappingFunction={visualisationMapping[`SSB_POPULATION-linechart`]} query={POPULATION_IN_NORWAY}>
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
            mappingFunction={visualisationMapping[`SSB_POPULATION-thresholdchart`]}
            query={POPULATION_IN_NORWAY}
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
