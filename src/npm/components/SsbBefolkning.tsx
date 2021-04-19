/* eslint-disable react/display-name */
import React from 'react';
import LineChart, { LineChartProps } from '../../components/visualisations/LineChart';
import ThresholdChart, { ThresholdChartProps } from '../../components/visualisations/ThresholdChart';
import DataWrapper from '../../components/molecules/DataWrapper';
import visualisationMapping from '../../utils/visualisationMapping';
import { POPULATION_IN_NORWAY } from '../../queries/populationInNorway';

const SsbBefolkningLine: React.FC<Omit<LineChartProps, 'data'>> = ({ yLabel, strokeColor, height, width }) => {
    return (
        <DataWrapper mappingFunction={visualisationMapping[`SSB_POPULATION-linechart`]} query={POPULATION_IN_NORWAY}>
            {(data) => (
                <LineChart data={data} yLabel={yLabel} strokeColor={strokeColor} height={height} width={width} />
            )}
        </DataWrapper>
    );
};

const SsbBefolkningThreshold: React.FC<Omit<ThresholdChartProps, 'data'>> = ({
    strokeColor,
    aboveThresholdColor,
    belowThresholdColor,
    thresholdValue,
    yLabel,
    height,
    width,
}) => {
    return (
        <DataWrapper
            mappingFunction={visualisationMapping[`SSB_POPULATION-thresholdchart`]}
            query={POPULATION_IN_NORWAY}
        >
            {(data) => (
                <ThresholdChart
                    data={data}
                    strokeColor={strokeColor}
                    thresholdValue={thresholdValue}
                    aboveThresholdColor={aboveThresholdColor}
                    belowThresholdColor={belowThresholdColor}
                    yLabel={yLabel}
                    height={height}
                    width={width}
                />
            )}
        </DataWrapper>
    );
};

export const SsbBefolkning = {
    Line: SsbBefolkningLine,
    Threshold: SsbBefolkningThreshold,
};
