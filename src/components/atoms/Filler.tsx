import React from 'react';
import DashboardItem from '../molecules/DashboardItem';
import { AppleData as ThresholdChart } from '../../stories/ThresholdChart.stories';
import { ParentSize } from '@visx/responsive';
import DataWrapper from '../molecules/DataWrapper';
import { WEATHER_MET_API } from '../../queries/weatherMetApi';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

const Filler: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <DataWrapper query={WEATHER_MET_API}>
                {({ data, loading, error }) => (
                    <DashboardItem title="This is a title" width={700} height={300} titleSize={500} paragraph={'emil'}>
                        {loading || error ? (
                            <p>I am loading or error</p>
                        ) : (
                            <ParentSize>
                                {(parent) => (
                                    <ThresholdChart
                                        data={data}
                                        width={parent.width}
                                        height={parent.height}
                                        thresholdValue={0}
                                        aboveThresholdColor="red"
                                        belowThresholdColor="blue"
                                        yLabel="Price"
                                    />
                                )}
                            </ParentSize>
                        )}
                    </DashboardItem>
                )}
            </DataWrapper>
        </ApolloProvider>
    );
};

export default Filler;
