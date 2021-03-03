import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ThresholdChart, { ThresholdChartProps } from '../components/atoms/ThresholdChart';
import { Story } from '@storybook/react';
import { MetApiCompactForecast } from '../mockdata/metApi';
import { MetApiCompactAirTemperature } from '../queries/metApi';
import { appleStock } from '@visx/mock-data';

export default {
    title: 'Graphs/ThresholdChart',
    component: ThresholdChart,
} as Meta;

const formatMetData = (data: MetApiCompactAirTemperature) =>
    data.forecast.forecastProperties.timeseries.map((el) => ({
        time: el.time,
        value: el.forecastData.instant.details.airTemperature,
    }));

const data = formatMetData(MetApiCompactForecast);

const Template: Story<ThresholdChartProps> = (args) => <ThresholdChart {...args} />;

export const Primary = Template.bind({});
Primary.args = { data: data, width: 600, height: 400, yLabel: 'Celsius' };

//Change key
export const appleData = appleStock.map(({ date, close }) => ({ time: date, value: close }));
export const AppleData = Template.bind({});
AppleData.args = {
    data: appleData,
    width: 600,
    height: 400,
    thresholdValue: 150,
    aboveThresholdColor: 'green',
    belowThresholdColor: 'red',
    yLabel: 'Price',
};
