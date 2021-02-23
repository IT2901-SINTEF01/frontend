import React from 'react';
import GridLayout from 'react-grid-layout';
import ThresholdGraph from '../atoms/ThresholdChart';
import { MetApiCompactForecast } from '../../mockdata/metApi';
import { MetApiCompactAirTemperature } from '../../dataTypes/metApi/compact';

const formatMetData = (data: MetApiCompactAirTemperature) =>
    data.data.forecast.forecastProperties.timeseries.map((el) => ({
        time: el.time,
        value: el.forecastData.instant.details.airTemperature,
    }));

class GridTest extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        const layout = [
            { i: 'a', x: 0, y: 0, w: 1, h: 1 },
            { i: 'b', x: 1, y: 0, w: 2, h: 1 },
            { i: 'c', x: 4, y: 0, w: 1, h: 1 },
        ];

        const gridStyle = { border: 'solid black 1px' };
        return (
            <GridLayout className="layout" layout={layout} cols={3} rowHeight={200} width={1200}>
                <div key="a" style={gridStyle}>
                    <ThresholdGraph data={formatMetData(MetApiCompactForecast)} width={400} height={200} />
                </div>
                <div key="b" style={gridStyle}>
                    b
                </div>
                <div key="c" style={gridStyle}>
                    c
                </div>
            </GridLayout>
        );
    }
}

export default GridTest;
