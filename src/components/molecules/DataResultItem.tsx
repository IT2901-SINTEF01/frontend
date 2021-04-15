import React from 'react';
import { Card, Heading, Pane, Text } from 'evergreen-ui';
import DatasetInfoBox from '../atoms/DatasetInfoBox';
import ThresholdChart from '../visualisations/ThresholdChart';
import LineChart from '../visualisations/LineChart';
import mockTimeEntry from '../../mockdata/mockTimeEntry';
import { VisualisationType } from '../../types/Metadata';

export type DataResultItemProps = {
    visualisationType: VisualisationType;
    title: string;
    description: string;
    tags: string[];
};

const DataResultItem: React.FC<DataResultItemProps> = ({ title, description, tags, visualisationType }) => {
    const timeEntryMockData = mockTimeEntry(100);

    const visualisation = () => {
        switch (visualisationType) {
            case VisualisationType.LINE:
                return (
                    <LineChart
                        data={timeEntryMockData}
                        strokeColor="#66CCCC"
                        yLabel="y"
                        isPreview={true}
                        height="100%"
                        width="100%"
                    />
                );
            case VisualisationType.THRESHOLD:
                return (
                    <ThresholdChart
                        data={timeEntryMockData}
                        strokeColor="#66CCCC"
                        yLabel="y"
                        isPreview={true}
                        height="100%"
                        width="100%"
                    />
                );
            default:
                return <Text>{visualisationType}</Text>;
        }
    };

    return (
        <Card
            width="100%"
            height="20rem"
            elevation={1}
            display="flex"
            padding="1.5rem"
            role="button"
            aria-pressed="false"
            aria-label={`Gå til visualiseringsvelger for ${title}.`}
        >
            <Pane flex="1" marginRight="2rem">
                <DatasetInfoBox title={title} description={description} tags={tags} />
            </Pane>
            <Pane flex="2">
                <Heading marginBottom="1rem">Forslag til visualisering</Heading>
                <Pane height="90%">{visualisation()}</Pane>
            </Pane>
        </Card>
    );
};

export default DataResultItem;
