/* eslint-disable react/display-name */
import React from 'react';
import LineChart, { LineChartProps } from '../../components/visualisations/LineChart';
import ThresholdChart, { ThresholdChartProps } from '../../components/visualisations/ThresholdChart';
import DataWrapper from '../../components/molecules/DataWrapper';
import visualisationMapping from '../../utils/visualisationMapping';
import { WEATHER_MET_API } from '../../queries/metApi';

const MetApiLine: React.FC<Omit<LineChartProps, 'data'>> = ({
    width = 600,
    height = 200,
    yLabel,
    strokeColor,
    colorBottom,
}) => {
    return (
        <DataWrapper mappingFunction={visualisationMapping[`MET_API-linechart`]} query={WEATHER_MET_API}>
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
        <DataWrapper mappingFunction={visualisationMapping[`MET_API-thresholdchart`]} query={WEATHER_MET_API}>
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
