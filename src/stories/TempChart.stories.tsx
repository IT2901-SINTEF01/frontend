import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import TempChart, { TempChartProps } from '../components/molecules/TempChart';
import { Story } from '@storybook/react';
import { MetApiCompactForecast } from '../mockdata/metApi';
import { MetApiCompact } from '../dataTypes/metApi/compact';
import { appleStock } from '@visx/mock-data';

export default {
    title: 'Component/TempChart',
    component: TempChart,
} as Meta;

const formatMetData = (data: MetApiCompact) => {
    const formatedData: {
        time: string;
        value: number;
    }[] = [];
    data.data.forecast.forecastProperties.timeseries.forEach((el) => {
        formatedData.push({ time: el.time, value: el.forecastData.instant.details.airTemperature });
    });
    return formatedData;
};

const data = formatMetData(MetApiCompactForecast);

const Template: Story<TempChartProps> = (args) => <TempChart {...args} />;

export const Primary = Template.bind({});
Primary.args = { data: data, width: 600, height: 400, yLabel: 'Celsius' };

//Change key
const appleData = appleStock.map(({ date, close }) => ({ time: date, value: close }));
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
