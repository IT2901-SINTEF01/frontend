/* eslint-disable react/display-name */
import React from 'react';
import LineChart, { LineChartProps } from '../../components/visualisations/LineChart';
import ThresholdChart, { ThresholdChartProps } from '../../components/visualisations/ThresholdChart';
import DataWrapper from '../../components/molecules/DataWrapper';
import visualisationMapping from '../../utils/visualisationMapping';
import { WEATHER_MET_API } from '../../queries/metApi';

const MetApiLine: React.FC<Omit<LineChartProps, 'data'>> = ({ yLabel, strokeColor }) => {
    return (
        <DataWrapper mappingFunction={visualisationMapping[`MET_API-linechart`]} query={WEATHER_MET_API}>
            {(data) => <LineChart data={data} yLabel={yLabel} strokeColor={strokeColor} />}
        </DataWrapper>
    );
};

const MetApiThreshold: React.FC<Omit<ThresholdChartProps, 'data'>> = ({ thresholdValue, thresholdColors, yLabel }) => {
    return (
        <DataWrapper mappingFunction={visualisationMapping[`MET_API-thresholdchart`]} query={WEATHER_MET_API}>
            {(data) => (
                <ThresholdChart
                    data={data}
                    thresholdValue={thresholdValue}
                    thresholdColors={thresholdColors}
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
