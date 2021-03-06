/* eslint-disable react/display-name */
import React from 'react';
import LineChart, { LineChartProps } from '../../components/visualisations/LineChart';
import ThresholdChart, { ThresholdChartProps } from '../../components/visualisations/ThresholdChart';
import DataWrapper from '../../components/molecules/DataWrapper';
import visualisationMapping from '../../utils/visualisationMapping';
import { MetAPIVariables, WEATHER_MET_API } from '../../queries/metApi';

const MetApiLine: React.FC<Omit<LineChartProps, 'data'> & MetAPIVariables> = ({
    yLabel,
    strokeColor,
    height,
    width,
    lat,
    lon,
}) => {
    return (
        <DataWrapper
            mappingFunction={visualisationMapping[`MET_API-linechart`]}
            query={WEATHER_MET_API}
            variables={{ lat, lon }}
        >
            {(data) => (
                <LineChart data={data} yLabel={yLabel} strokeColor={strokeColor} height={height} width={width} />
            )}
        </DataWrapper>
    );
};

const MetApiThreshold: React.FC<Omit<ThresholdChartProps, 'data'> & MetAPIVariables> = ({
    thresholdValue,
    aboveThresholdColor,
    belowThresholdColor,
    yLabel,
    height,
    width,
    lat,
    lon,
}) => {
    return (
        <DataWrapper
            mappingFunction={visualisationMapping[`MET_API-thresholdchart`]}
            query={WEATHER_MET_API}
            variables={{ lat, lon }}
        >
            {(data) => (
                <ThresholdChart
                    data={data}
                    thresholdValue={thresholdValue}
                    aboveThresholdColor={aboveThresholdColor}
                    belowThresholdColor={belowThresholdColor}
                    height={height}
                    width={width}
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
